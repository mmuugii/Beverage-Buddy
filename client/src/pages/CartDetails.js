import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import CartItem from "../components/CartItem";
import Auth from "../utils/auth";
import MapContainer from "../components/Map";
import { useStoreContext } from "../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../utils/actions";
import "../../src/index.css";
import "../components/Cart/style.css";
import Nav from "../components/Nav";
require("dotenv").config();
const stripePromiseKey = process.env.REACT_APP_STRIPE_Publishable_KEY;

// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
console.log(stripePromiseKey);
const stripePromise = loadStripe(stripePromiseKey);
var positionVar = "";

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  // We check to see if there is a data object that exists, if so this means that a checkout session was returned from the backend
  // Then we should redirect to the checkout with a reference to our session id
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
  const [location, setLocation] = useState({});

  // Get Geo Position and store as 'position' var
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (location) => {
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
        localStorage.setItem("lat", JSON.stringify(location.coords.latitude));
        localStorage.setItem("lng", JSON.stringify(location.coords.longitude));
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  // If the cart's length or if the dispatch function is updated, check to see if the cart is empty.
  // If so, invoke the getCart method and populate the cart with the existing from the session
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  // When the submit checkout method is invoked, loop through each item in the cart
  // Add each item id to the productIds array and then invoke the getCheckout query passing an object containing the id for all our products
  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <>
      <Nav />
      <div className="container">
        <div className="backMenu">
          <Link to="/">← Back to Menu</Link>
        </div>
        <div className="checkoutTotal">
          {/* Check to see if the user is logged in. If so render a button to check out */}
          {Auth.loggedIn() ? (
            <button className="buttonCheckout" onClick={submitCheckout}>
              Checkout
            </button>
          ) : (
            <span>(log in to check out)</span>
          )}
          <h5>Total: ${calculateTotal()}</h5>
        </div>

        {state.cart.length ? (
          <div className="checkout-container">
            <h2>Your Cart</h2>
            <div className="product-container">
              {state.cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </div>

            <div className="map">
              <h2>Share your location</h2>
              <MapContainer mapContainer={location} />
            </div>
          </div>
        ) : (
          <h3>
            <span role="img" aria-label="shocked">
              😱
            </span>
            You haven't added anything to your cart yet!
          </h3>
        )}
      </div>
    </>
  );
};

export default Cart;
