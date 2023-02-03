const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Non-Alcoholic Beverages' },
    { name: 'Alcoholic Beverages' },
    { name: 'Golf Supplies' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Chicken Sandwhich Meal',
      description:
        'A fried chicken sandwhich patty topped with lettuce, onions, tomatoes between two grilled buns.',
      image: 'chickensandwhich.jpg',
      category: categories[0]._id,
      price: 12.00,
      quantity: 10
    },
    {
      name: 'Veggie Burger Meal',
      description:
        'A grilled veggie patty topped with lettuce, onions, tomatoes between two grilled buns.',
      image: 'veggieburger.jpg',
      category: categories[0]._id,
      price: 10.99,
      quantity: 12
    },
    {
      name: 'Virgin Bloody Mary',
      category: categories[1]._id,
      description:
        'The original taste of a classic Bloody Mary minus the alcohol!',
      image: 'bloodymaryN.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'No-Mo Mojito',
      category: categories[1]._id,
      description:
        'Is it too hot on the course? Allow the No-Mo Mojito to cool you down the fairway today!.',
      image: 'mojitoN.jpg',
      price: 7.99,
      quantity: 50
    },
    {
      name: 'Ranch Water',
      category: categories[1]._id,
      description:
        'Soda Water + Lime Juice - Tequila.. equals a cool refreshing day on the fairway!',
      image: 'ranchwater.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Bev-Buddy-Beer',
      category: categories[2]._id,
      description:
        'Our signature beer, handcrafted to perfection and cooled just above freezing to keep you agile on the course.',
      image: 'beer.jpg',
      price: 7.99,
      quantity: 30
    },
    {
      name: 'Bloody Mary',
      category: categories[2]._id,
      description:
        'Classic Bloody Mary mix with two shots of vodka, a bacon strip and a celery stick for tasting.',
      image: 'bloodymaryA.jpg',
      price: 11.99,
      quantity: 30
    },
    {
      name: 'Mojito',
      category: categories[2]._id,
      description:
        'Classic mint leaf and rum mix that every island goer loves. Whether you are in a sand bunker or on a sand beach this drink helps relax.',
      image: 'mojitoA.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Golf Balls (25ct)',
      category: categories[3]._id,
      description: 'Forget Something? Dont worry, we got you covered.',
      image: 'golfballs.jpg',
      price: 15.00,
      quantity: 1000
    },
    {
      name: 'Tees (30ct)',
      category: categories[3]._id,
      description:
        'Ready to tee off?',
      image: 'golftees.jpg',
      price: 4.99,
      quantity: 1000
    },
    {
      name: 'Golf Gloves',
      category: categories[3]._id,
      description:
        'Focus on your swing not the blisters. Grab some gloves!',
      image: 'golfgloves.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Range Finder',
      category: categories[3]._id,
      description:
        'Save the guessing games for later. Use our range finder to see exactly which club to use on the course.',
      image: 'rangefinder.jpg',
      price: 59.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Jeremy',
    lastName: 'Fullbright',
    email: 'jeremy@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Jacob',
    lastName: 'Van Dyke',
    email: 'jacob@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

