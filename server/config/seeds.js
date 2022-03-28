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
      name: 'Simply Southern (small)',
      description:
        'Southern style charcuterie board with Genoa salami, Smoked sausage, Hickory spread, Prosciutto, Garlic herb-butter, and parmesan with a side of herb roasted bread. (𝘚𝘦𝘳𝘷𝘦𝘴 1-2)',
      image: 'small-meat-cheese.jpg',
      category: categories[0]._id,
      price: 32
    },
    {
      name: 'Simply Southern (medium)',
      description:
        'Southern style charcuterie board with Genoa salami, Smoked sausage, Hickory spread, Prosciutto, Garlic herb-butter, and parmesan with a side of herb roasted bread. (𝘚𝘦𝘳𝘷𝘦𝘴 2-4)',
      image: 'small-meat-cheese.jpg',
      category: categories[1]._id,
      price: 52
    },
    {
      name: 'Simply Southern (large)',
      description:
        'Southern style charcuterie board with Genoa salami, Smoked sausage, Hickory spread, Prosciutto, Garlic herb-butter, and parmesan with a side of herb roasted bread. (𝘚𝘦𝘳𝘷𝘦𝘴 4-6)',
      image: 'small-meat-cheese.jpg',
      category: categories[2]._id,
      price: 72
    },
    {
      name: 'Full House (small)',
      category: categories[0]._id,
      description:
        '(𝘖𝘶𝘳 𝘣𝘦𝘴𝘵 𝘴𝘦𝘭𝘭𝘦𝘳) This board comes with all of our crackers, fruits, and meats to satisfy the masses. The Full House is also accompanied with our 2 in-house apple and cherry fruit spreads along with 3 bowls of our chickpea hummus.(𝘚𝘦𝘳𝘷𝘦𝘴 1-2)',
      image: 'large-crackers.jpg',
      price: 37
    },
    {
      name: 'Full House (medium)',
      category: categories[1]._id,
      description:
        '(𝘖𝘶𝘳 𝘣𝘦𝘴𝘵 𝘴𝘦𝘭𝘭𝘦𝘳) This board comes with all of our crackers, fruits, and meats to satisfy the masses. The Full House is also accompanied with our 2 in-house apple and cherry fruit spreads along with 3 bowls of our chickpea hummus.(𝘚𝘦𝘳𝘷𝘦𝘴 2-4)',
      image: 'large-crackers.jpg',
      price: 57
    },
    {
      name: 'Full House (large)',
      category: categories[2]._id,
      description:
        '(𝘖𝘶𝘳 𝘣𝘦𝘴𝘵 𝘴𝘦𝘭𝘭𝘦𝘳) This board comes with all of our crackers, fruits, and meats to satisfy the masses. The Full House is also accompanied with our 2 in-house apple and cherry fruit spreads along with 3 bowls of our chickpea hummus.(𝘚𝘦𝘳𝘷𝘦𝘴 4-6)',
      image: 'large-crackers.jpg',
      price: 77
    },
    {
      name: 'Taste the Rainbow (small)',
      category: categories[0]._id,
      description:
        'This board is plated with Crackers, Hummus, Baby Carrots, Cherry Tomatoes, brie cheese, Smoked gouda, and a mix of berries. (𝘚𝘦𝘳𝘷𝘦𝘴 1-2)',
      image: 'medium-fruits-veggies.jpg',
      price: 36
    },
    {
      name: 'Taste the Rainbow (medium)',
      category: categories[1]._id,
      description:
        'This board is plated with Crackers, Hummus, Baby Carrots, Cherry Tomatoes, brie cheese, Smoked gouda, and a mix of berries. (𝘚𝘦𝘳𝘷𝘦𝘴 2-4)',
      image: 'medium-fruits-veggies.jpg',
      price: 56
    },
    {
      name: 'Taste the Rainbow (large)',
      category: categories[2]._id,
      description:
        'This board is plated with Crackers, Hummus, Baby Carrots, Cherry Tomatoes, brie cheese, Smoked gouda, and a mix of berries. (𝘚𝘦𝘳𝘷𝘦𝘴 4-6)',
      image: 'medium-fruits-veggies.jpg',
      price: 76
    },
    {
      name: 'Lunchables Elevated (small)',
      description:
        'The Adult Lunchable elevates the lunchable game. This fan favorite consists of assorted crackers, parmesan and pimento cheeses accompanied with pistachios to bring it full circle. That is with a glass of wine, of course! (𝘚𝘦𝘳𝘷𝘦𝘴 1-2)',
      image: 'small-crackers.jpg',
      category: categories[0]._id,
      price: 30
    },
    {
      name: 'Lunchables Elevated (medium)',
      description:
        'The Adult Lunchable elevates the lunchable game. This fan favorite consists of assorted crackers, parmesan and pimento cheeses accompanied with pistachios to bring it full circle. That is with a glass of wine, of course! (𝘚𝘦𝘳𝘷𝘦𝘴 2-4)',
      image: 'small-crackers.jpg',
      category: categories[1]._id,
      price: 50
    },
    {
      name: 'Lunchables Elevated (large)',
      description:
        'The Adult Lunchable elevates the lunchable game. This fan favorite consists of assorted crackers, parmesan and pimento cheeses accompanied with pistachios to bring it full circle. That is with a glass of wine, of course! (𝘚𝘦𝘳𝘷𝘦𝘴 4-6)',
      image: 'small-crackers.jpg',
      category: categories[2]._id,
      price: 70
    },
    {
      name: 'Midnight Snack (small)',
      category: categories[0]._id,
      description:
        'This board doesnt even need a description! All things sweet - The Midnight Snack is plated with Chocoalte, Mixed Berries, Apples, and salted pretzels. Oh, and more chocolate! (𝘚𝘦𝘳𝘷𝘦𝘴 1-2)',
      image: 'medium-dessert.jpg',
      price: 40
    },
    {
      name: 'Midnight Snack (medium)',
      category: categories[1]._id,
      description:
        'This board doesnt even need a description! All things sweet - The Midnight Snack is plated with Chocoalte, Mixed Berries, Apples, and salted pretzels. Oh, and more chocolate! (𝘚𝘦𝘳𝘷𝘦𝘴 2-4)',
      image: 'medium-dessert.jpg',
      price: 60
    },
    {
      name: 'Midnight Snack (large)',
      category: categories[2]._id,
      description:
        'This board doesnt even need a description! All things sweet - The Midnight Snack is plated with Chocoalte, Mixed Berries, Apples, and salted pretzels. Oh, and more chocolate! (𝘚𝘦𝘳𝘷𝘦𝘴 4-6)',
      image: 'medium-dessert.jpg',
      price: 80
    },
    {
      name: 'Sweet and Sour (small)',
      category: categories[0]._id,
      description:
        'This board hits both ends of the spectrum. Our Sweet and Sour charcuterie board will have your tastebuds jumping! This board contains Prosciutto, Pineapple, Honey to drizzle, lime for some zing. Along with assorted nuts, crackers and jams.  (𝘚𝘦𝘳𝘷𝘦𝘴 1-2)',
      image: 'small-meat-nuts.jpg',
      price: 35
    },
    {
      name: 'Sweet and Sour (medium)',
      category: categories[1]._id,
      description:
        'This board hits both ends of the spectrum. Our Sweet and Sour charcuterie board will have your tastebuds jumping! This board contains Prosciutto, Pineapple, Honey to drizzle, lime for some zing. Along with assorted nuts, crackers and jams.  (𝘚𝘦𝘳𝘷𝘦𝘴 2-4)',
      image: 'small-meat-nuts.jpg',
      price: 55
    },
    {
      name: 'Sweet and Sour (large)',
      category: categories[2]._id,
      description:
        'This board hits both ends of the spectrum. Our Sweet and Sour charcuterie board will have your tastebuds jumping! This board contains Prosciutto, Pineapple, Honey to drizzle, lime for some zing. Along with assorted nuts, crackers and jams.  (𝘚𝘦𝘳𝘷𝘦𝘴 4-6)',
      image: 'small-meat-nuts.jpg',
      price: 75
    },
    {
      name: 'Honey Bee (small)',
      category: categories[0]._id,
      description:
        'The Honey Bee is a classic style board that comes with Crackers, Pepperjack cheese, Salami, assorted fruits, all accompanied with apple and cherry spreads. (𝘚𝘦𝘳𝘷𝘦𝘴 1-2)',
      image: 'medium-cracker-grapes.jpg',
      price: 30
    },
    {
      name: 'Honey Bee (medium)',
      category: categories[1]._id,
      description:
        'The Honey Bee is a classic style board that comes with Crackers, Pepperjack cheese, Salami, assorted fruits, all accompanied with apple and cherry spreads. (𝘚𝘦𝘳𝘷𝘦𝘴 2-4)',
      image: 'medium-cracker-grapes.jpg',
      price: 50
    },
    {
      name: 'Honey Bee (large)',
      category: categories[2]._id,
      description:
        'The Honey Bee is a classic style board that comes with Crackers, Pepperjack cheese, Salami, assorted fruits, all accompanied with apple and cherry spreads. (𝘚𝘦𝘳𝘷𝘦𝘴 4-6)',
      image: 'medium-cracker-grapes.jpg',
      price: 70
    },
    {
      name: 'Paradise (small)',
      category: categories[0]._id,
      description:
        'Calling all vegetarians! - This board comes comes with all of our fruits, crackers, and cheeses accompanied with 2 bowls of our chickpea hummus. (𝘚𝘦𝘳𝘷𝘦𝘴 1-2)',
      image: 'large-fruit-cheese.jpg',
      price: 40
    },
    {
      name: 'Paradise (medium)',
      category: categories[1]._id,
      description:
        'Calling all vegetarians! - This board comes comes with all of our fruits, crackers, and cheeses accompanied with 2 bowls of our chickpea hummus. (𝘚𝘦𝘳𝘷𝘦𝘴 2-4)',
      image: 'large-fruit-cheese.jpg',
      price: 60
    },
    {
      name: 'Paradise (large)',
      category: categories[2]._id,
      description:
        'Calling all vegetarians! - This board comes comes with all of our fruits, crackers, and cheeses accompanied with 2 bowls of our chickpea hummus. (𝘚𝘦𝘳𝘷𝘦𝘴 4-6)',
      image: 'large-fruit-cheese.jpg',
      price: 80
    },
    {
      name: 'Red, White, and Blue (small)',
      category: categories[0]._id,
      description: 'This board comes with all of our meats, crackers and cheeses accompanied by a colorful mixture of berries. This board also comes with 3 bowls of our hummus. (𝘚𝘦𝘳𝘷𝘦𝘴 1-2)',
      image: 'large-pita-hummus.jpg',
      price: 42
    },
    {
      name: 'Red, White, and Blue (medium)',
      category: categories[1]._id,
      description: 'This board comes with all of our meats, crackers and cheeses accompanied by a colorful mixture of berries. This board also comes with 3 bowls of our hummus. (𝘚𝘦𝘳𝘷𝘦𝘴 2-4)',
      image: 'large-pita-hummus.jpg',
      price: 62
    },
    {
      name: 'Red, White, and Blue (large)',
      category: categories[2]._id,
      description: 'This board comes with all of our meats, crackers and cheeses accompanied by a colorful mixture of berries. This board also comes with 3 bowls of our hummus. (𝘚𝘦𝘳𝘷𝘦𝘴 4-6)',
      image: 'large-pita-hummus.jpg',
      price: 82
    },
    {
      name: 'Custom Board (small)',
      category: categories[0]._id,
      description: 'Let us know exactly what you want on your board! (𝘚𝘦𝘳𝘷𝘦𝘴 1-2)',
      image: 'custom-order.png',
      price: 0
    }
    ,
    {
      name: 'Custom Board (medium)',
      category: categories[1]._id,
      description: 'Let us know exactly what you want on your board! (𝘚𝘦𝘳𝘷𝘦𝘴 2-4)',
      image: 'custom-order.png',
      price: 0
    }
    ,
    {
      name: 'Custom Board (large)',
      category: categories[2]._id,
      description: 'Let us know exactly what you want on your board! (𝘚𝘦𝘳𝘷𝘦𝘴 4-6)',
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
