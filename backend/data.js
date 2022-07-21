const data ={
  users: [
    {
      name: 'Quinton',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jazz',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    }],
    products:[
        {
           
            title: 'Brown Nike',
            name:'brown_nikes',
            category: 'Sneakers',
            size:'9',
            image: '/images/brownnike.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          }, {
           
            title: 'Brown Vans',
            name:'brown_vans',
            category: 'Sneakers',
            size: '8',
            image: '/images/brownvans.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          }, {
            
            title: 'Red Nikes',
            name:'red_nikes',
            category: 'Sneakers',
            size:'9',
            image: '/images/rednikes.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          }, {
            
            title: 'Uptowns',
            name:'uptowns',
            category: 'Sneakers',
            size: '11',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          }, 
            
          {
            title: 'White and Blue air force One',

            name: 'white-and-blue-air-force-one',
            category: 'Sneakers',
            size:'9.5',
            image: '/images/whaitandblueips.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          },
          {
           
            title: 'Yellow Nikes',
            name:'yellow_nikes',
            category: 'Sneakers',
            size:'10.5',
            image: '/images/yellownike.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
          }
        

]}

export default data;