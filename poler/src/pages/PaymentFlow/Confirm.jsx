import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Confirm = () => {
  return (
    <div>
        <div className="confirmContainer">
            <div className="heading">
                <span>Item Name</span>
                <span><img src="/images/price.svg" alt="" /> Price</span>
            </div>
            <div className="content">
                <div className="data">
                    <span>Data science and usability</span>
                    <strong>50,000.00</strong>
                </div>
                <div className="data">
                    <span>Shipping</span>
                    <span>0.00</span>
                </div>
                <hr />

                <div className="total">
                    <span>Total</span>
                    <span>50,000.00</span>
                </div>
            </div>
        </div>
        <div className="button__row">
        <Button type="primary">
            <Link to ="/pay">Pay</Link>
        </Button>
          
          <Button>Cancel Payment</Button>
        </div>
    </div>
  )
}

export default Confirm