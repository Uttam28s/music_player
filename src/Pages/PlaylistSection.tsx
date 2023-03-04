import React from 'react'
import { Card } from 'react-bootstrap';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../Component/Stripe/PaymentForm';

const stripePromise = loadStripe('pk_test_51MhYAvSJ6VoHFKLlAEq1DfsPbKLamOJu0aLMnLGN1O5vqFAS9iCJxY5JDRzdCeuYmCioOMbVyvKT4AaFwaNeJWFl002D5mTg1q');

const PlaylistSection = () => {

  const handlePaymentSuccess = () => {
    // Handle successful payment
  };

  const handlePaymentFailure = (error: Error) => {
    // Handle payment failure
  };

  return (
<section id="playlistSection" className="mainBody mx-5 my-3">
  <div className='d-flex justify-content-between'>
    <div className="title">Play lists </div>
    {/* <h6 onClick={{}} className=''>Create New Playlist</h6> */}
    <button type="button" className="btn btn-outline-dark">Create New Playlist</button>
  </div>
    {/* <div className="d-flex" style={{ marginLeft: "30px" }}>
        {[1, 2, 3, 4, 5].map((ele) => {
          return <Card />;
        })}
      </div> */}
      <Elements stripe={stripePromise}>
      <PaymentForm amount={19.99} onSuccess={handlePaymentSuccess} onFailure={handlePaymentFailure} />
    </Elements>
  </section>
  )
}

export default PlaylistSection