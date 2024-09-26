import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { removeFromCart , increaseQuantity  , decreaseQuantity , checkout} from '../redux/slices/cartslice'



function Cart() {

  const {cart}=useSelector((state)=>state.cartReducer)
  console.log(cart);

  const dispatch= useDispatch()

  return (
    <>
    <div className='container-fluid p-5'>
      <h3>Cart Summery</h3>
    <Row>
      <Col sm={12} md={8}>

      {
        cart.length>0 ?
        (
        <table className="table table-bordered border shadow border-3 border-dark">
        <thead>
          <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Image</th>
          <th>Unit Price</th>
          <th>Quatity</th>
          <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cart?.map(item=>(
              <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <img src={item.thumbnail} width={"250px"} height={"200px"} alt="" />
              </td>
              <td>{item.price}</td>
              <td>
                <button className="btn" onClick={()=>{dispatch(increaseQuantity(item.id))}} >+</button>
                <input type="text" className='form-control' value={item.quantity}/>
                <button className="btn" onClick={()=>{dispatch(decreaseQuantity(item.id))}}>-</button>
              </td>
              <td >
                <button className='btn' onClick={()=>{dispatch(removeFromCart(item.id))}}>
              <i className=" fa-solid fa-trash" style={{color: "#db0f38",}} />
              </button>
               </td>
            </tr>
            ))
          }
          
        </tbody>
      </table>
  )

      :
      <h3>Cart Is Empty</h3>


      }
   
      </Col>
      <Col sm={12} md={4}>
      <div className='p-5 border shadow border-3'>
        <h4>Total Item : {cart?.length}</h4>
        <h4>Total Amount : {cart ?.reduce((prev , item )=>prev + (item.price * item . quantity),0 )}</h4>
        <div className='mt-2 d-grid'>
          <button className='btn btn-success' onClick={()=>{dispatch(checkout())}}>Checkout</button>
        </div>
      </div>
    <Link to={'/'} className='btn btn-outline-info mt-3'>Shop More</Link>
      </Col>
    </Row>
    </div>
    </>
  )
}

export default Cart