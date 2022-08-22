import React from 'react'

const Pay = () => {
  return (
    <div id="paymentFlow">
    <div className="bgImg">
      <img src="/images/background.svg" alt="" />
    </div>
     <div className="payContainer">
     <div className='pay'>
        <img src="/images/tick.svg" alt="" />
      </div>
      <h1>Purchase Completed</h1>
      <p>Please check your email for details concerning this transaction</p>
      <a href="/paymentflow">Return Home</a>
     </div>
  </div>
  )
}

export default Pay