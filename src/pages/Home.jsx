import React , {useEffect , useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { fetchProductThunk } from '../redux/slices/productslice';
import Spinner from 'react-bootstrap/Spinner';
import { nextPage , prevPage  } from '../redux/slices/productslice';


function Home() {

  const [data , setData] = useState([])

  const {products , error , loading ,productsPerPage ,  currentPage } = useSelector((state)=>state.productReducer)

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProductThunk())
    console.log(products);
    if(products){
      setData(products)
    }
  },[])
  
  const totalPage=Math.ceil(products?.length/productsPerPage)
  const lastProductIndex=currentPage * productsPerPage //10 , 20 ,30
  const firstProductIndex=lastProductIndex - productsPerPage //0 , 10 , 20
  const  visibleProduct= products?.slice(firstProductIndex , lastProductIndex)
  console.log(visibleProduct);
  

  const handleNext=()=>{
    if(currentPage < totalPage){
      dispatch( nextPage())
    }
  }

  const handlePrev=()=>{
    if(currentPage>1){
      dispatch( prevPage())
    }
  }
  
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">

            <Carousel>
              <Carousel.Item>
                <img
                  src="https://media.licdn.com/dms/image/D4D12AQHolEDBl9zVpw/article-cover_image-shrink_600_2000/0/1680491082579?e=2147483647&v=beta&t=42YPQA4r7PjInIjqlfO33V-3CMJaYUAPRQibXsddeGM"
                  width={'80%'}
                  height={'500px'}
                  alt=""
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="https://5.imimg.com/data5/SJ/GN/MI/SELLER-10114237/ecommerce-app-development-500x500.png"

                  width={'80%'}
                  height={'500px'}
                  alt=""
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPn5x5FopgINtU9MYc8iIg259BTBtSF3bY_HzILEJMM04trFxJyyw_2LaOfeTSMouy_Hs&usqp=CAU"
                  width={'80%'}
                  height={'500px'}
                  alt=""
                />
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>


          </div>
        </div>
      </header>


      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">


          {
            loading ?
            <h3>
              <Spinner animation="border" role="status">
    </Spinner>
     <span >Loading...</span>
            </h3>

            :
            
          (
            error ?
            <h3>{error}</h3>

            :
            <>
            {
              visibleProduct.map(
                item=>(
              
                  <div className="col mb-5">
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
                        <Link to={`/view/  ${item?.id}`} className='btn btn-primary'>View More</Link>
                      </div>
                    </div>
                  </div>
                </div>
                )
              )
            }
            </>
          
          )

          }

          </div>
        </div>
      </section>

      <div className='mt-4 d-flex justify-content-center'>
        <div>
          <button className='btn' onClick={handlePrev}>
          <i className="fa-solid fa-angles-left" />
          </button>
          { ' '}
          1/3
          {' '}
          <button className='btn ' onClick={handleNext}>
          <i className="fa-solid fa-angles-right" />
          </button>
        </div>
      </div>


    </>
  )
}

export default Home