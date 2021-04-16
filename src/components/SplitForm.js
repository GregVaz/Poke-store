import React, { useState } from "react";
import {
  CardElement,
} from "@stripe/react-stripe-js";
import './SplitForm.css';

export default function SplitForm({cart, cleanCart}) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [complete, setComplete] = useState(false);
  const [purchase, setPurchase] = useState([]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
    setComplete(event.complete);
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    if (!complete) {
      setProcessing(false)
    } else if (cart.length === 0) {
      setError('You do not have items on your cart')
      setProcessing(false);
    } else {
      setPurchase(cart);
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      cleanCart();
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        className="btn btn-success btn-block"
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <div className={succeeded ? "result-message" : "result-message hidden"}>
        <p>Payment succeeded, see the result for your purchase</p>
        <p>Congratulations, these are your pokemons: {purchase.map(p => p.name).join(', ')}</p>
        <p>Total: ${purchase.reduce((total, pokemon) => total + pokemon.price, 0)}</p>
        <p>Refresh the page to pay again.</p>
      </div>
    </form>
  );
}