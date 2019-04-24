const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

const productSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: [true, 'Product already exists.']
  },
  description: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  image: {
    type: String,
    required: REQUIRED_VALIDATION_MESSAGE
  },
  quantity: {
    type: Number,
    min: 0,
    max: 1000
  },
  price: {
    type: Number,
    required: REQUIRED_VALIDATION_MESSAGE,
    min: 1,
    max: 500000
  },
  likes: [{
    type: mongoose.Schema.Types.String
  }],
  reviews: [],

});


let Product = mongoose.model('Product', productSchema);
module.exports=Product;
module.exports.seedProduct = () => {
  Product.find({}).then(products => {
    if (products.length > 0) return

    const productsSeed = [
      {
      
        name: 'Chesapeake Cherry',
        description: 'Bursting with delicious fruit flavor with every bite',
        image: 'https://www.candy.com/media/catalog/product/cache/1/image/1200x/631230930f9b0c91382fab8598fe0100/2/8/289-00162.jpg',
        price: 9.90,
        likes: [],
        reviews: []
      },
      {
      
        name: 'Sour Jelly Beans Assortment',
        description: 'It’s hard to smile when you’re puckering. Somehow these sour gourmet jelly beans make you want to do both. They come in an assortment of sour fruit flavors that’ll make your face scrunch up. But they’re also made with real fruit juice that provides a boost of Vitamin C for your immune system, and that should make you smile -- even if you’re still puckering.',
        image: 'https://www.candywarehouse.com/assets/item/regular/sour-jelly-beans-assortment-125420-ff.jpg',
        price: 7.90,
        likes: [],
        reviews: []
      },
      {
        
        name: 'Jelly Belly Color Combo - Pink and Purple Blend',
        description: 'There are approximately 400 pieces per pound. Box contains 4 pounds of Pink and Purple Blend Jelly Belly Color Combo Jelly Beans packed in two bags, each with a net weight of 2 pounds.',
        image: 'https://www.candywarehouse.com/assets/item/regular/jelly-belly-bubblegum-island-punch-129645-ff.jpg',
        price: 8.90,
        likes: [],
        reviews: []
      },
      {
        
        name: 'CalJelly Belly Color Combo - Purple and Green Blendzone',
        description: 'Match the logo colors of your corporation, sports team, or school to add a nice design flair to the festivities while the stunning flavor combo of Island Punch and Green Apple delivers sweet satisfaction!',
        image: 'https://www.candywarehouse.com/assets/item/regular/jelly-belly-island-punch-green-apple-129646-ff.jpg',
        price: 11.90,
        likes: [],
        reviews: []
      },
      {
        
        name: 'Jelly Belly 20 Flavors Jelly Beans Sampler: 8.5-Ounce Gift Box',
        description: 'Sample 20 gourmet jelly bean flavors in a perfectly packaged treat box.',
        image: 'https://www.candywarehouse.com/assets/item/regular/jelly-Belly-20-Flavors-128071-box.jpg',
        price: 10.90,
        likes: [],
        reviews: []
      },
      {
      
        name: 'Brach Fiesta Malted Milk Chocolate Easter Eggs',
        description: 'Classic malted milk Easter eggs in bright white or pastel colors. Crispy malt balls are surrounded by a layer of rich milk chocolate and then covered in a candy shell. Finally, the candy shell is speckled with color to make them look like real bird eggs!',
        image: 'https://www.candywarehouse.com/assets/item/regular/brachs-easter-fiesta-malted-milk-choc-eggs-im-12525112.jpg',
        price: 5.90,
        likes: [],
        reviews: []
      },
      {
        
        name: 'Jelly Belly Smoothie',
        description: 'Five assorted flavors, including Strawberry/Banana, Pineapple/Pear, Cherry/Passion Fruit, Mandarin Orange/Mango, and Mixed Berry.',
        image: 'https://www.candy.com/media/catalog/product/cache/1/image/1200x/631230930f9b0c91382fab8598fe0100/1/0/10-01619-jelly-belly-smoothie-blend-beans-12ct_1.jpg',
        price: 10.90,
        likes: [],
        reviews: []
      },
      {
      
        name: 'Jelly Belly Smoothie Blend Beans',
        description: 'the world s first gourmet jelly bean',
        image: 'https://www.candy.com/media/catalog/product/cache/1/image/1200x/631230930f9b0c91382fab8598fe0100/6/8/681b1c690cf6531fd568932af1fb7431_12469-2.jpg',
        price: 5.90,
        likes: [],
        reviews: []
      },
      {
      
        name: 'Sour Beananza Bag',
        description: 'Sour Beananza Bag: 12 Count. Jelly Belly. 10 assorted flavors',
        image: 'https://www.candy.com/media/catalog/product/cache/1/image/1200x/631230930f9b0c91382fab8598fe0100/1/0/100-00066-jelly-belly-sours-bag-12ct.jpg',
        price: 5.90,
        likes: [],
        reviews: []
      },
        
    ]

    Product
      .create(productsSeed)
      .then(() => console.log('Seeded candies successfully.'))
      .catch((error) => console.log(error))
  })
}