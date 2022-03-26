const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Small' },
    { name: 'Medium' },
    { name: 'Large' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Simply Southern - Sm',
      description:
        'Southern style charcuterie board with Genoa salami, Smoked sausage, Hickory spread, Prosciutto, Garlic herb-butter, and parmesan with a side of herb roasted bread. (𝘚𝘦𝘳𝘷𝘦𝘴 6-8)',
      image: 'small-meat-cheese.jpg',
      category: categories[0]._id,
      price: 46
    },
    {
      name: 'Lunchables Elevated - Sm',
      description:
        'The Adult Lunchable elevates the lunchable game. This fan favorite consists of assorted crackers, parmesan and pimento cheeses accompanied with pistachios to bring it full circle. That is with a glass of wine, of course! (𝘚𝘦𝘳𝘷𝘦𝘴 6-8)',
      image: 'small-crackers.jpg',
      category: categories[0]._id,
      price: 40
    },
    {
      name: 'Sweet and Sour - Sm',
      category: categories[0]._id,
      description:
        'This board hits both ends of the spectrum. Our Sweet and Sour charcuterie board will have your tastebuds jumping! This board contains Prosciutto, Pineapple, Honey to drizzle, lime for some zing. Along with assorted nuts, crackers and jams.  (𝘚𝘦𝘳𝘷𝘦𝘴 6-8)',
      image: 'small-meat-nuts.jpg',
      price: 40
    },
    {
      name: 'Honey Bee - Md',
      category: categories[1]._id,
      description:
        'The Honey Bee is a classic style board that comes with Crackers, Pepperjack cheese, Salami, assorted fruits, all accompanied with apple and cherry spreads. (𝘚𝘦𝘳𝘷𝘦𝘴 8-12)',
      image: 'medium-cracker-grapes.jpg',
      price: 60
    },
    {
      name: 'Taste the Rainbow - Md',
      category: categories[1]._id,
      description:
        'This board is plated with Crackers, Hummus, Baby Carrots, Cherry Tomatoes, brie cheese, Smoked gouda, and a mix of berries. (𝘚𝘦𝘳𝘷𝘦𝘴 8-12)',
      image: 'medium-fruits-veggies.jpg',
      price: 60
    },
    {
      name: 'Midnight Snack - Md',
      category: categories[1]._id,
      description:
        'This board doesnt even need a description! All things sweet - The Midnight Snack is plated with Chocoalte, Mixed Berries, Apples, and salted pretzels. Oh, and more chocolate! (𝘚𝘦𝘳𝘷𝘦𝘴 8-12)',
      image: 'medium-dessert.jpg',
      price: 70
    },
    {
      name: 'Paradise - Lg',
      category: categories[2]._id,
      description:
        'Calling all vegetarians! - This board comes comes with all of our fruits, crackers, and cheeses accompanied with 2 bowls of our chickpea hummus. (𝘚𝘦𝘳𝘷𝘦𝘴 12-16)',
      image: 'large-fruit-cheese.jpg',
      price: 100
    },
    {
      name: 'Full House - Lg',
      category: categories[2]._id,
      description:
        '(𝘖𝘶𝘳 𝘣𝘦𝘴𝘵 𝘴𝘦𝘭𝘭𝘦𝘳) This board comes with all of our crackers, fruits, and meats to satisfy the masses. The Full House is also accompanied with our 2 in-house apple and cherry fruit spreads along with 3 bowls of our chickpea hummus.(𝘚𝘦𝘳𝘷𝘦𝘴 12-16)',
      image: 'large-crackers.jpg',
      price: 120
    },
    {
      name: 'Red, White, and Blue - Lg',
      category: categories[2]._id,
      description: 'This board comes with all of our meats, crackers and cheeses accompanied by a colorful mixture of berries. This board also comes with 3 bowls of our hummus. (𝘚𝘦𝘳𝘷𝘦𝘴 12-16)',
      image: 'large-pita-hummus.jpg',
      price: 120
    },
    {
      name: 'Custom Board - Sm',
      category: categories[0]._id,
      description: 'Let us know exactly what you want on your board! (𝘚𝘦𝘳𝘷𝘦𝘴 6-8)',
      image: 'custom-order.png',
      price: 0
    }
    ,
    {
      name: 'Custom Board - Md',
      category: categories[1]._id,
      description: 'Let us know exactly what you want on your board! (𝘚𝘦𝘳𝘷𝘦𝘴 8-12)',
      image: 'custom-order.png',
      price: 0
    }
    ,
    {
      name: 'Custom Board - Lg',
      category: categories[2]._id,
      description: 'Let us know exactly what you want on your board! (𝘚𝘦𝘳𝘷𝘦𝘴 12-16)',
      image: 'custom-order.png',
      price: 0
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
