import React, { useEffect, useReducer } from 'react';
import {useParams} from 'react-router-dom';
import {Col, Row,ListGroup, Badge} from 'react-bootstrap';

const reducer = (state, action) => {
switch(action.type) {
    case'FETCH_REQUEST':
    return {...state, loading:true};
    case'FETCH_SUCCESS':
    return {...state,products:action.payload, loading: false};
    case'FETCH_FAIL':
    return {...state,loading:false,error:action.payload};
}
};
function ProductPage() {
    const params = useParams();
    const {name} = params;
    const [{loading,product,error}, dispatch]= useReducer(reducer, {
        product: [],
        loading:true,
        error:'',
    });

    useEffect(()=>{
        const fetchData = async ()=>{
            dispatch({type: FETCH_REQUEST});
            try {
            const result = await axios.get(`/api/products/name/${name}`);
            dispatch({type: FETCH_SUCCESS, payload:result.data});}
            catch (err){
                dispatch({type:FETCH_FAIL, payload:err.message})

            }

        };
        fetchData();

    },[name]);

    return (
        loading ? (
            <div>Loading</div>
        ): error ? (
            <div>{err.message}</div>
        ) : (
        <div> <Row>
            <Col md={6}>
          <h1>{name}</h1>  
        
        <div>
            <img classsrc={product.image}/>
        </div>
        </Col >
        
        
        <Col md={3} >
            <ListGroup variant ="flush">
                <ListGroup.Item>
                    <h1>{product.title}</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating rating={product.rating} numOfReviews={product.numReviews}/>
                </ListGroup.Item>
                <ListGroup.Item>Price:${product.price}</ListGroup.Item>
                <ListGroup.Item>
                    Description:
                    <p>{product.description}</p>
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col>
        <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        
        </Col>

        </Row>
        </div>
        )
    )
}

export default ProductPage;


