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
      name: 'Simply Southern - Md',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'small-meat-cheese.jpg',
      category: categories[1]._id,
      price: 35
    },
    {
      name: 'Lunchables Elevated - Md',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'small-crackers.jpg',
      category: categories[1]._id,
      price: 32
    },
    {
      name: 'Sweet and Sour - Md',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'small-meat-nuts.jpg',
      price: 38
    },
    {
      name: 'Simply Southern - Lg',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'small-meat-cheese.jpg',
      category: categories[2]._id,
      price: 45
    },
    {
      name: 'Lunchables Elevated - Lg',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'small-crackers.jpg',
      category: categories[2]._id,
      price: 42
    },
    {
      name: 'Sweet and Sour - Lg',
      category: categories[2]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'small-meat-nuts.jpg',
      price: 48
    },
    {
      name: 'Honey Bee - Sm',
      category: categories[0]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'medium-cracker-grapes.jpg',
      price: 40
    },
    {
      name: 'Taste the Rainbow - Sm',
      category: categories[0]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'medium-fruits-veggies.jpg',
      price: 46
    },
    {
      name: 'Midnight Snack - Sm',
      category: categories[0]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'medium-dessert.jpg',
      price: 50
    },
    {
      name: 'Honey Bee - Md',
      category: categories[1]._id,
      description:
        'The Honey Bee is a classic style board that comes with Crackers, Pepperjack cheese, Salami, assorted fruits, all accompanied with apple and cherry spreads. (𝘚𝘦𝘳𝘷𝘦𝘴 8-12)',
      image: 'medium-cracker-grapes.jpg',
      price: 50
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
      price: 60
    },
    {
      name: 'Honey Bee - Lg',
      category: categories[2]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'medium-cracker-grapes.jpg',
      price: 60
    },
    {
      name: 'Taste the Rainbow - Lg',
      category: categories[2]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'medium-fruits-veggies.jpg',
      price: 66
    },
    {
      name: 'Midnight Snack - Lg',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'medium-dessert.jpg',
      price: 60
    },
    {
      name: 'Paradise - Sm',
      category: categories[0]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'large-fruit-cheese.jpg',
      price: 64
    },
    {
      name: 'Full House - Sm',
      category: categories[0]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'large-crackers.jpg',
      price: 55
    },
    {
      name: 'Red, White, and Blue - Sm',
      category: categories[0]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'large-pita-hummus.jpg',
      price: 60
    },
    {
      name: 'Paradise - Md',
      category: categories[1]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'large-fruit-cheese.jpg',
      price: 74
    },
    {
      name: 'Full House - Md',
      category: categories[1]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'large-crackers.jpg',
      price: 65
    },
    {
      name: 'Red, White, and Blue - Md',
      category: categories[1]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'large-pita-hummus.jpg',
      price: 70
    },
    {
      name: 'Paradise - Lg',
      category: categories[2]._id,
      description:
        'Calling all vegetarians! - This board comes comes with all of our fruits, crackers, and cheeses accompanied with 2 bowls of our chickpea hummus. (𝘚𝘦𝘳𝘷𝘦𝘴 12-16)',
      image: 'large-fruit-cheese.jpg',
      price: 84
    },
    {
      name: 'Full House - Lg',
      category: categories[2]._id,
      description:
        '(𝘖𝘶𝘳 𝘣𝘦𝘴𝘵 𝘴𝘦𝘭𝘭𝘦𝘳) This board comes with all of our crackers, fruits, and meats to satisfy the masses. The Full House is also accompanied with our 2 in-house apple and cherry fruit spreads along with 3 bowls of our chickpea hummus.(𝘚𝘦𝘳𝘷𝘦𝘴 12-16)',
      image: 'large-crackers.jpg',
      price: 75
    },
    {
      name: 'Red, White, and Blue - Lg',
      category: categories[2]._id,
      description: 'This board comes with all of our meats, crackers and cheeses accompanied by a colorful mixture of berries. This board also comes with 3 bowls of our hummus. (𝘚𝘦𝘳𝘷𝘦𝘴 12-16)',
      image: 'large-pita-hummus.jpg',
      price: 80
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
