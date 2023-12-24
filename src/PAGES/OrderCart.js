import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes, serverURL } from "../Constants";
import { Navigation1 } from "../UTILITIES/Navigation";
import { Footer1 } from "../UTILITIES/Footer";
import { Button1, Button2 } from "../COMPONENTS/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../COMPONENTS/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Spacer } from "../COMPONENTS/Spacer";
import { HiOutlineXMark } from "react-icons/hi2";
import {
  auth_IsUserSignedIn,
  auth_SignOut,
  firebase_GetAllDocumentsListener,
  me,
  myID,
} from "../Global";
import { Grid } from "../COMPONENTS/Grid";
import { AsyncImage } from "../COMPONENTS/AsyncImage";
import Loading from "../UTILITIES/Loading";

export default function OrderCart1() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPaymentSheet, setShowPaymentSheet] = useState(true);
  const stripePromise = loadStripe(
    "pk_test_51NuJfZIDyFPNiK5CPKgovhg5fen3VM4SzxvBqdYAfwriYKzoqacsfIOiNAt5ErXss3eHYF45ak5PPFHeAD0AXit900imYxFTry"
  );
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  const [userID, setUserID] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const taxes = 0.0875;

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  function initializePayment() {
    // Create PaymentIntent as soon as the page loads
    const amount = (
      cartItems.reduce((total, item) => total + item.Price * item.Quantity, 0) *
      (1 + taxes) *
      100
    ).toFixed(0);
    fetch(`${serverURL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json()) // Return the promise
      .then((data) => {
        setClientSecret(data.clientSecret);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error initializing payment:", error);
        // Handle error if needed
        setLoading(false)
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;

    auth_IsUserSignedIn(
      setLoading,
      navigate,
      "/ordercart",
      "/orderlogin",
      setUserID
    );
    if (userID !== "") {
      firebase_GetAllDocumentsListener(
        setLoading,
        "OrderCartItems",
        setCartItems,
        0,
        "asc",
        "Name",
        "UserID",
        "==",
        userID
      );
    }
  }, [userID]);

  return (
    <div className="fade_in roboto">
      {loading && <Loading />}
      <Navigation1 />
      <div>
        <Button2
          borderWidth={0}
          classes={"horizontal align_center roboto"}
          paddingV={2}
          onClick={() => {
            navigate("/orderonline");
          }}
        >
          <FaArrowLeft size={20} />
          <p className="small_text bold">Back To Order</p>
        </Button2>
      </div>
      <h1 className="no_margin medium_text">Your Cart ({cartItems.length})</h1>
      <Row>
        <Group padding={20} classes={"scrollY"}>
          {cartItems.map((item, i) => {
            return (
              <div
                key={i}
                className="horizontal padding radius margin_v_small"
                style={{ backgroundColor: "#F4F5F7" }}
              >
                <AsyncImage
                  path={item.ImagePath}
                  width={"100px"}
                  height={"100px"}
                />
                <div style={{ flex: 1 }}>
                  <div className="separate_horizontal">
                    <h1 className="medium_text bold no_margin">{item.Name}</h1>
                    <div
                      className="bg_black full_radius"
                      style={{ padding: "8px 14px" }}
                    >
                      <h1 className="no_margin small_text bold white">
                        ${item.Price.toFixed(2)}
                      </h1>
                    </div>
                  </div>
                  <p className="no_margin">{item.Quantity}x</p>
                  <p className="no_margin">{item.Details}</p>
                </div>
              </div>
            );
          })}
        </Group>
        <Group>
          {clientSecret && showPaymentSheet && (
            <div className="padding_h fade_in">
              <Spacer height={20} />
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
              <Spacer height={20} />
            </div>
          )}
        </Group>
      </Row>
      <Row>
        <div className="bg_black padding radius margin_v_small separate_horizontal align_center">
          <div>
            <Button1
              text={"Checkout"}
              textSize={"18px"}
              backgroundColor={"white"}
              textColor={"black"}
              radius={"8px"}
              paddingV={"8px"}
              paddingH={"12px"}
              onClick={() => {
                setLoading(true)
                initializePayment();
                setShowPaymentSheet(true);
              }}
            />
          </div>
          <div>
            <p className="white no_margin right_text">
              Sub Total:{" "}
              {cartItems
                .reduce((total, item) => total + item.Price * item.Quantity, 0)
                .toFixed(2)}
            </p>
            <p className="no_margin right_text white">
              Taxes: ${taxes.toFixed(2)}
            </p>
            <h2 className="right_text white no_margin">
              Total:{" "}
              {(
                cartItems.reduce(
                  (total, item) => total + item.Price * item.Quantity,
                  0
                ) *
                (1 + taxes)
              ).toFixed(2)}
            </h2>
          </div>
        </div>
      </Row>
      <Footer1 />
    </div>
  );
}
