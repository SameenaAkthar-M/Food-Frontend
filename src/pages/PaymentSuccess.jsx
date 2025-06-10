import React from 'react';
import { Link } from 'react-router-dom';
import { PiCheckCircleFill } from "react-icons/pi";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col 
    items-center justify-center text-center px-5">
      <PiCheckCircleFill className="text-green-500 text-6xl mb-4" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">Payment Successful!</h1>
      <p className="text-gray-700 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
      <Link
        to="/"
        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
