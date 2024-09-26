import React , {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Header() {

 const {items}= useSelector((state)=>state.wishReducer)
 console.log(items);

 const {cart} = useSelector((state)=>state.cartReducer)
 console.log(cart); 


 

  return (
   <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
        <Link to={'/'} style={{textDecoration:"none" , color:"black" , fontSize:"30px"}}>
          <i className="fa-solid fa-cart-shopping " style={{color: "#125fe2",}} />
          {' '}
            E-Cart
            </Link>
          </Navbar.Brand>


          <div className='d-flex' >

          <div className='d-flex'>
            <input type="text" placeholder='Enter a keyword to search ' className='form-control mr-2' />
            <button className='btn btn-success me-3'>Search</button>

          </div>

            <Link className='btn border border-1 border-dark me-3' to={'/wish'}>
            <i className="fa-solid fa-heart" style={{color: "#dc1818",}} />
            Wishlist
          
          <span className='badge bg-dark ms-1'>
            {items.length}
          </span>

            </Link>
            <Link className='btn border border-1 border-dark me-3' to={'/cart'}>
            <i className="fa-solid fa-cart-shopping " style={{color: "#125fe2",}} />

            Cart

            <span className='badge bg-dark ms-1'>
            {cart.length}
          </span>

            </Link>
        </div>

        </Container>
        
      </Navbar>
   </>
  )
}

export default Header