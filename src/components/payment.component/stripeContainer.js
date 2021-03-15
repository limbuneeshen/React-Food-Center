import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import React from 'react';
import PaymentForm from './payment';


const PUBLIC_KEY = "pk_test_51IVFq7CqOj7EHoVXf7pwoP66ZQMHiQulWS9HrWuQFs45KX3f0qGLd3g6dptqwbmutUGcViSNR2IdDcngXCiahYM500toL0JL0X"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(){
    return (
        <Elements stripe={stripeTestPromise}> 
          <PaymentForm/>
        </Elements>
    )
}