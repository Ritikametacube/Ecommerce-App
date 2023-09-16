export const COLOURS = {
  white: '#ffffff',             //background
  // white: 'red',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'Dell 14 Laptop, 5 Series 8GB/ 512GB (35.56cm)',
    productPrice: 41900,
    description:
      'Processor: AMD Ryzen5-5500U (up to 4.00 GHz) 8MB L3, 6 Cores | RAM.',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/dell.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/dell.jpg'),
      require('../database/images/products/dell2.jpg'),
      // require('../database/images/products/Mi3.png'),
    ],
  },
  {
    id: 2,
    category: 'product',
    productName: 'JBL Flip 5 Wireless Portable Bluetooth Speaker',
    productPrice: 6999,
    description:
      '12 HOURS PLAYTIME ,IPX7 WATERPROOF, JBL SIGNATURE SOUND.',
    isOff: false,
    productImage: require('../database/images/products/jblSpeakers1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/jblSpeakers1.jpg'),
      require('../database/images/products/jblSpeakers2.jpg'),
      require('../database/images/products/jblSpeakers3.jpg'),
    ],
  },
  {
    id: 3,
    category: 'accessory',
    productName: 'Mammon Women Handbags Combo',
    productPrice: 1999,
    description:
      'Latest handbags combo. It has 1 shoulder, 1 sling, 1 hand clutch and 1 ladies purse.',
    isOff: true,
    offPercentage: 18,
    productImage: require('../database/images/products/handbag1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/handbag1.jpg'),
      require('../database/images/products/handbag2.jpg'),
      require('../database/images/products/handbag3.jpg'),
    ],
  },
  {
    id: 4,
    category: 'product',
    productName: 'Apple iPhone 14 (128 GB) - Blue 15.40 cm (6.1-inch)',
    productPrice: 65999,
    description:
      '15.40 cm Super Retina display.Advanced camera for better photos in any light.',
    isOff: false,
    productImage: require('../database/images/products/iPhone1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/iPhone1.jpg'),
      require('../database/images/products/Iphone2.jpg'),
      require('../database/images/products/iphone3.jpg'),
    ],
  },
  {
    id: 5,
    category: 'product',
    productName: 'OnePlus Nord Buds 2r True Wireless Earbuds with Mic.',
    productPrice: 2199,
    description:
      'It comes with 12.4mm driver unit. It delivers up to 38 hrs of non-stop music.',
    isOff: false,
    productImage: require('../database/images/products/earpods1.jpg'),
    isAvailable: false,
    productImageList: [
      require('../database/images/products/earpods1.jpg'),
      require('../database/images/products/earpods2.jpg'),
      require('../database/images/products/earpods3.jpg'),
    ],
  },
  {
    id: 6,
    category: 'accessory',
    productName: 'OnePlus Y Series Full HD Android LED TV (Black)',
    productPrice: 21999,
    description:
      'Full HD (1920x1080) | Refresh Rate: 60 Hertz | 2 HDMI ports to connect set topbox.',
    isOff: false,
    productImage: require('../database/images/products/onepusTV1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/onepusTV1.jpg'),
      require('../database/images/products/onepusTV2.jpg'),
      require('../database/images/products/onepusTV3.jpg'),
    ],
  },
  {
    id: 7,
    category: 'product',
    productName: 'Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch',
    productPrice: 1799,
    description:
      'The 46.48mm (1.83-inch) HD display makes the display clear and true-to-life. ',
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/fire-boltt1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/fire-boltt1.jpg'),
      require('../database/images/products/fire-boltt2.jpg'),
      require('../database/images/products/fire-boltt3.jpg'),
    ],
  },
  {
    id: 8,
    category: 'product',
    productName: 'Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm',
    productPrice: 81990,
    description:
      'All-Day Battery Life, Powerful Performance ,8GB of unified memory, Stunning Display.',
    isOff: false,
    productImage: require('../database/images/products/macbook1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/macbook1.jpg'),
      require('../database/images/products/macbook2.jpg'),
      require('../database/images/products/macbook3.jpg'),
    ],
  },
  {
    id: 9,
    category: 'product',
    productName: 'OnePlus Bullets Bluetooth Z2 Wireless Earphones',
    productPrice: 1999,
    description:
      'A quick 10-minute charge delivers up to 20 hours of immersive audio playback.',
    isOff: true,
    offPercentage: 18,
    productImage: require('../database/images/products/neckband1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/neckband1.jpg'),
      require('../database/images/products/neckband2.jpg'),
      require('../database/images/products/neckband3.jpg'),
    ],
  },
  {
    id: 10,
    category: 'accessory',
    productName: 'WOMEN MARKS WOMEN HANDBAG',
    productPrice: 399,
    description:
      'Material: PU, Wipe with a clean, dry cloth to remove dust.',
    isOff: false,
    productImage: require('../database/images/products/purse1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/purse1.jpg'),
      require('../database/images/products/purse2.jpg'),
      require('../database/images/products/purse3.jpg'),
    ],
  },
  {
    id: 11,
    category: 'accessory',
    productName: 'Xiaomi Pad 6| Qualcomm Snapdragon 870| 8GB, 256GB',
    productPrice: 28999,
    description:
      'Snapdragon 870 OctaCore Processor| Adreno650| Qualcomm AI engine | 8GB RAM',
    isOff: false,
    productImage: require('../database/images/products/tablet1.jpg'),
    isAvailable: false,
    productImageList: [
      require('../database/images/products/tablet1.jpg'),
      require('../database/images/products/tablet2.jpg'),
      require('../database/images/products/tablet3.jpg'),
    ],
  },
  {
    id: 12,
    category: 'product',
    productName: 'ASIAN Men Sports Gym Shoes with Eva Sole',
    productPrice: 699,
    description:
      'Sole: Ethylene Vinyl Acetate, Closure: Lace-Up, Fit Type: Regular.',
    isOff: false,
    productImage: require('../database/images/products/shoes1.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/shoes1.jpg'),
      require('../database/images/products/shoes2.jpg'),
      require('../database/images/products/shoes3.jpg'),
    ],
  },
];
