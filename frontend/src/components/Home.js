import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

function Home() {
    const Wrap = styled.div`
    z-index: 10;
    top:0;
   width: 100vw;
   height: 100vh;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   background-image: url("./images/img1.jpg");
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   `
   const [products,setProducts] = useState('');
   useEffect(()=> {
       const fetchData = async () => {
       const result= await axios.get('api/products');
   setProducts(result.data);
}
    return (
        
        <Wrap>
          <div>
              <h1>Featured Products</h1>
              <div className="products">
                  {products.map((product)=>{
                      <div className="products" key={product.name}>
                          <a href={`/product/{product.name}`}>
                              <img src={product.image} alt={product.title}>
                              </img>
                          </a>
                          <div className="product-info">
                              <a href={`/product/{product.name}`}/>
                          </div>
                          <p><strong>{product.price}</strong></p>
                          <button>Add to cart</button>
                      </div>
                  }
                  )};
              </div>
          </div>

            
        </Wrap>



export default Home;
