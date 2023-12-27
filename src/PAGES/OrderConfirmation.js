import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../Constants";
import { FaCircleCheck } from "react-icons/fa6";
import {
  auth_IsUserSignedIn,
  firebase_CreateDocument,
  firebase_DeleteDocuments,
  firebase_GetAllDocumentsListener,
  me,
  randomString,
  screenHeight,
  screenWidth,
} from "../Global";
import { Button1 } from "../COMPONENTS/Button";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Spacer } from "../COMPONENTS/Spacer";

export default function OrderConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [userID, setUserID] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function removeCartItems() {
    const orderID = randomString(25);
    const args = {
      Date: new Date(),
      UserID: userID,
      FullName: `${me.FirstName} ${me.LastName}`,
      Status: "Preparing",
    };
    firebase_CreateDocument(args, "Orders", orderID).then(() => {
      setLoading(true);
      for (var i = 0; i < cartItems.length; i += 1) {
        const item = cartItems[i];
        firebase_CreateDocument(
          {
            Name: item.Name,
            OrderID: orderID,
            Price: item.Price,
            Quantity: item.Quantity,
            ImagePath: item.ImagePath,
            Details: item.Details,
          },
          "OrderItems",
          randomString(25)
        );

        if (i === cartItems.length - 1) {
          setLoading(true)
          firebase_DeleteDocuments(
            setLoading,
            "OrderCartItems",
            "UserID",
            userID
          ).then(() => {
            navigate("/orders");
          });
        }
      }
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
      "/orderconfirmation",
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

    setTimeout(() => {
      setShowButton(true);
    }, 4000);
  }, [userID]);

  return (
    <div className="fade_in roboto full_width">
      <Row>
        <Group></Group>
        <Group classes={"center_text"}>
          <Spacer height={screenHeight * 0.2} />
          <FaCircleCheck size={screenWidth * 0.06} color="#50B191" />
          <h1>Order Confirmed</h1>
          <p>
            Thank you for your order
            <br />
            We will begin preparing and update you on the status.
          </p>
          {showButton && (
            <Button1
              text={"Go to Orders"}
              paddingV={"10px"}
              paddingH={"15px"}
              classes={"center"}
              onClick={removeCartItems}
            />
          )}
        </Group>
        <Group></Group>
      </Row>
    </div>
  );
}
