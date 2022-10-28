const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Gel' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Kalive Urban Pomade for Men',
      description:
        'Kalive Pomade will give your hair all the control and flexibility needed to easily create your desired look all while nourishing your hair with natural ingredients. Our premium water-based pomade can be washed out easily, won’t damage your hair and won’t clog your pores.',
      image: 'product-one.68ddf189d137c495abda.jpg',
      category: categories[0]._id,
      price: 13.99,
      quantity: 10000
    },
    {
      name: 'Kalive2style Mens Hair Styling Gel',
      description:
        'Our styling hair gel is made to offer a strong hold to give you the freedom to tame your hair and get it to look just the way you want while adding just a touch of shine',
      image: 'product-two.20ab04f8c73f3e9429b2.jpg',
      category: categories[0]._id,
      price: 13.99,
      quantity: 10000
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
