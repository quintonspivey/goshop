import React from 'react';
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
    return (
        
        <Wrap/>
            
        
    )
}

export default Home;
