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
        'This board hits both ends of the spectrum. Our Sweet and Sour charcuterie board will have your tastebuds jumping! Starting with  (𝘚𝘦𝘳𝘷𝘦𝘴 6-8)',
      image: 'small-meat-nuts.jpg',
      price: 40
    },
    {
      name: 'Honey Bee - Md',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl. (𝘚𝘦𝘳𝘷𝘦𝘴 8-12)',
      image: 'medium-cracker-grapes.jpg',
      price: 60
    },
    {
      name: 'Taste the Rainbow - Md',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum. (𝘚𝘦𝘳𝘷𝘦𝘴 8-12)',
      image: 'medium-fruits-veggies.jpg',
      price: 60
    },
    {
      name: 'Midnight Snack - Md',
      category: categories[1]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo. (𝘚𝘦𝘳𝘷𝘦𝘴 8-12)',
      image: 'medium-dessert.jpg',
      price: 70
    },
    {
      name: 'Paradise - Lg',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien. (𝘚𝘦𝘳𝘷𝘦𝘴 12-16)',
      image: 'large-fruit-cheese.jpg',
      price: 100
    },
    {
      name: 'Full House - Lg',
      category: categories[2]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna. (𝘚𝘦𝘳𝘷𝘦𝘴 12-16)',
      image: 'large-crackers.jpg',
      price: 120
    },
    {
      name: 'Red, White, and Blue - Lg',
      category: categories[2]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum. (𝘚𝘦𝘳𝘷𝘦𝘴 12-16)',
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
