import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='container-fluid bg-primary text-light p-3'>
        <Row>
            <Col>
            <h4>Redux Cart</h4>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae minus corrupti quaerat laboriosam. Magnam officia deserunt quis nisi veniam, perferendis sed ullam voluptatem hic dolore reiciendis aliquid perspiciatis impedit possimus?</p>
            </Col>
            <Col >
            <h4>Links</h4>
            <div className='d-flex flex-column justify-content-between'>
                <Link>Home</Link>
                <Link>Wishlist</Link>
                <Link>Cart</Link>
            </div>
            </Col>
            <Col>
            <h4>Feedbacks</h4>
            <textarea name="" id="" className='form-control'></textarea>
            <button className='btn btn-success mt-3'>Submit</button>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Footer