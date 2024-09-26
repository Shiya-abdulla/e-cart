import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { removeFromWishList } from '../redux/slices/wishslice'
import { addToCart } from '../redux/slices/cartslice'


function Wish() {

  const {items}=useSelector((state)=>state.wishReducer)
  console.log(items);

  const dispatch=useDispatch()

  const handleaddToCart=(data)=>{
    dispatch(addToCart({...data}))
    dispatch(removeFromWishList(data.id))
  }
  

  return (
    <>
    
    <h3 className='my-3 text-center'>Your Wishlist</h3>
    
    <div className='row container-fluid p-3'>

      {
        items?.length>0 ?
       items?.map(item=>(
        <div className='col-3 '>
        <div className="card h-100">
                  <img className="card-img-top" src={item?.thumbnail} alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{item?.title}</h5>
                     {item?.price}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <button className='btn' onClick={()=>dispatch(removeFromWishList(item.id))}>
                      <i className="fa-solid fa-heart-circle-xmark" style={{color: "#d7042e",}} />
                      </button>
                      <button className='btn' onClick={()=>{handleaddToCart(item)}}>
                      <i className="fa-solid fa-cart-shopping" />
                      </button>
                    </div>
                  </div>
                </div>
        </div>
       ))
       :
       <h3 className='text-warning text-center'>No items</h3>
      }

     

    </div>

    </>
  )
}

export default Wish