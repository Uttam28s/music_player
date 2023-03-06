import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../Component/Stripe/PaymentForm";
import HomeLayout from "../Component/HomeLayout";

const stripePromise = loadStripe(
  "pk_test_51MhYAvSJ6VoHFKLlAEq1DfsPbKLamOJu0aLMnLGN1O5vqFAS9iCJxY5JDRzdCeuYmCioOMbVyvKT4AaFwaNeJWFl002D5mTg1q"
);

const PlaylistSection = () => {
  const handlePaymentSuccess = () => {
    window.alert("Payment Successfull")
    // Handle successful payment
  };

  const handlePaymentFailure = (error: Error) => {
    console.log("🚀 ~ file: PlaylistSection.tsx:17 ~ handlePaymentFailure ~ handlePaymentFailure:")
    window.alert("Payment UnSuccessfull")

    // Handle payment failure
  };

  return (
    <HomeLayout>
      <section id="playlistSection" className="mainBody mx-5 py-3">
        <div className="d-flex justify-content-between">
          <div className="title">Play lists </div>
          {/* <h6 onClick={{}} className=''>Create New Playlist</h6> */}
          <button type="button" className="btn btn-outline-dark">
            Create New Playlist
          </button>
        </div>
        {/* <div className="d-flex" style={{ marginLeft: "30px" }}>
        {[1, 2, 3, 4, 5].map((ele) => {
          return <Card />;
        })}
      </div> */}
      <Elements stripe={stripePromise}>
      <PaymentForm amount={1} onSuccess={handlePaymentSuccess} onFailure={handlePaymentFailure} />
    </Elements>
  </section>
  </HomeLayout>

  )
}

export default PlaylistSection;
