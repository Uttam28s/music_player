import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onFailure: (error: Error) => void;
}




const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onFailure }) => {
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      onFailure(new Error('Stripe.js has not yet loaded.'));
      return;
    }

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      onFailure(new Error('Unable to find CardElement.'));
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        onFailure(new Error(error.message));
        setProcessing(false);
      } else {
        // Send paymentMethod.id to your server to complete the payment
        // This is where you would use your server-side code to create a charge or subscription
        setProcessing(false);
        onSuccess();
      }
    } catch (error:any) {
      console.log("🚀 ~ file: PaymentForm.tsx:50 ~ handleSubmit ~ error:", error)
      setProcessing(false);
      onFailure(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="card-element">Credit or debit card</label>
      <div className='d-flex my-4'>
        <div className='border border-dark rounded w-50 p-2'>
          <CardElement id="card-element" />
        </div>
      <button type="submit"  disabled={processing} className="btn btn-dark mx-4">{processing ? 'Processing...' : `Pay $${amount.toFixed(2)}`}</button>
      </div>
    </form>
  );
};

export default PaymentForm;