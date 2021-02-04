const moviesMock = [
  {
    id: 'da2ad568-1c0d-49da-92c1-4b097fde2e47',
    title: 'Seven Alone',
    year: 1991,
    cover: 'http://dummyimage.com/244x148.jpg/ff4444/ffffff',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 1937,
    contentRating: 'NC-17',
    tags: [
      'Comedy|Drama|Mystery',
      'Horror',
      'Comedy|Musical|Romance',
      'Comedy|Romance',
    ],
  },
  {
    id: '2ec2e5cd-bfa2-498b-9b73-a84c2d616164',
    title: 'Wankers, The (Les branleuses)',
    year: 2003,
    cover: 'http://dummyimage.com/189x141.bmp/5fa2dd/ffffff',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 1988,
    contentRating: 'PG',
    tags: [
      'Action|Crime|Fantasy',
      'Adventure|Children|Comedy|Drama',
      'Drama',
      'Drama',
    ],
  },
  {
    id: '3349dae4-7f71-4b76-a33c-9e3235e83758',
    title: 'Silent Souls (Ovsyanki)',
    year: 2006,
    cover: 'http://dummyimage.com/199x153.jpg/ff4444/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    duration: 1897,
    contentRating: 'G',
    tags: ['Comedy|Romance'],
  },
  {
    id: '4b11238a-de3a-4a56-bd00-19f5bfcea2b1',
    title: 'And Then Came Lola',
    year: 1992,
    cover: 'http://dummyimage.com/111x246.bmp/ff4444/ffffff',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 2044,
    contentRating: 'G',
    tags: ['Drama|Romance', 'Adventure|Drama', 'Comedy'],
  },
  {
    id: '24dc4a7d-9c52-4f43-adf1-c9e40ecfd438',
    title: 'Chambermaid on the Titanic, The (Femme de chambre du Titanic, La)',
    year: 1994,
    cover: 'http://dummyimage.com/235x143.png/5fa2dd/ffffff',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 1920,
    contentRating: 'PG',
    tags: ['Drama|Romance'],
  },
  {
    id: 'da88c1e0-90a4-4020-ba1b-5a08a8e21da8',
    title: 'On Deadly Ground',
    year: 1998,
    cover: 'http://dummyimage.com/227x178.jpg/ff4444/ffffff',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 1992,
    contentRating: 'PG',
    tags: ['Documentary', 'Children|Comedy'],
  },
  {
    id: '044f4321-158e-4948-bfc1-89c1ac3d70be',
    title: 'Fiorile',
    year: 1987,
    cover: 'http://dummyimage.com/247x156.jpg/dddddd/000000',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 1946,
    contentRating: 'G',
    tags: ['Drama', 'Adventure|Documentary'],
  },
  {
    id: 'e27851fa-4bb4-4568-ae02-feb7f282ffeb',
    title: 'Heavy Metal',
    year: 2004,
    cover: 'http://dummyimage.com/120x109.jpg/dddddd/000000',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    duration: 2063,
    contentRating: 'R',
    tags: ['Crime|Drama|Thriller'],
  },
  {
    id: '46dadcad-4a8f-4b7d-8b57-c8b92f24157d',
    title: 'Fragile',
    year: 1999,
    cover: 'http://dummyimage.com/216x167.bmp/5fa2dd/ffffff',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    duration: 1994,
    contentRating: 'PG-13',
    tags: ['Drama', 'Drama|Film-Noir|Musical|Thriller'],
  },
  {
    id: 'e3e254b8-61f2-4514-bf44-2f9e06b1c600',
    title: 'Orders to Kill',
    year: 2002,
    cover: 'http://dummyimage.com/211x106.bmp/cc0000/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 2049,
    contentRating: 'G',
    tags: [
      'Comedy|Drama|Romance',
      'Drama',
      'Drama|Romance',
      'Comedy|Drama|Romance',
      'Drama',
    ],
  },
];

module.exports = { moviesMock };
