import React, { useEffect, useState } from "react";
import {
  auth_IsUserSignedIn,
  auth_SignOut,
  firebase_GetAllDocumentsListener,
  myID,
  screenHeight,
} from "../Global";
import { c_footer, c_nav, routes } from "../Constants";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigation1 } from "../UTILITIES/Navigation";
import { Footer1 } from "../UTILITIES/Footer";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { IoDocumentText } from "react-icons/io5";
import { Clickable } from "../COMPONENTS/Clickable";
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { Spacer } from "../COMPONENTS/Spacer";
import { Image } from "../COMPONENTS/Image";
import img1 from "../IMAGES/MAIN/stock2.jpg";
import Loading from "../UTILITIES/Loading";
import { AsyncImage } from "../COMPONENTS/AsyncImage";

export default function OrderOrders() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [userID, setUserID] = useState("");
  const [chosenOrderID, setChosenOrderID] = useState("");
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;
    auth_IsUserSignedIn(
      setLoading,
      navigate,
      "/orders",
      "/orderlogin",
      setUserID
    );
    if (userID !== "") {
      setLoading(true);
      firebase_GetAllDocumentsListener(
        setLoading,
        "Orders",
        setOrders,
        0,
        "asc",
        "Date",
        "UserID",
        "==",
        userID
      );
    }
  }, [userID]);

  return (
    <div className="fade_in">
      {loading && <Loading />}
      {c_nav()}
      <Spacer height={20} />
      <Row>
        <Group>
          <div className="separate_horizontal">
            <h1 className="no_margin main_title_font xlarge_text">My Orders</h1>
            {userID !== "" && (
              <div
                className="horizontal no_gap full_radius"
                style={{
                  backgroundColor: "rgba(0,0,0,0.1)",
                  padding: "10px 15px",
                }}
              >
                <Clickable
                  onClick={() => {
                    navigate("/orders");
                  }}
                >
                  <IoDocumentText size={"2em"} />
                </Clickable>
                <Clickable
                  classes={"padding_h"}
                  onClick={() => {
                    navigate("/ordercart");
                  }}
                >
                  <FaShoppingCart size={"2em"} />
                </Clickable>
                <Clickable
                  onClick={() => {
                    auth_SignOut(setLoading, navigate, "/orderlogin");
                  }}
                >
                  <FaSignOutAlt size={"2em"} color="red" />
                </Clickable>
              </div>
            )}
          </div>
        </Group>
      </Row>
      <Spacer height={20} />
      <Row>
        <Group>
          {orders.map((order, i) => {
            return (
              <div
                key={i}
                className="margin_v_small radius"
                style={{ backgroundColor: "#F7F9FE" }}
              >
                <Clickable
                  onClick={() => {
                    if (chosenOrderID === order.id) {
                      setChosenOrderID("");
                    } else {
                      setLoading(true);
                      firebase_GetAllDocumentsListener(
                        setLoading,
                        "OrderItems",
                        setOrderItems,
                        0,
                        "asc",
                        "Name",
                        "OrderID",
                        "==",
                        order.id
                      );
                      setChosenOrderID(order.id);
                    }
                  }}
                  classes={"padding"}
                >
                  <div
                    className="separate_horizontal align_center gap"
                    style={{ width: "100%" }}
                  >
                    <div className="horizontal">
                      <IoDocumentText size={26} color="#117DFA" />
                      <h1 className="no_margin medium_text all_caps main_title_font">
                        Order #{order.id.slice(-8)}
                      </h1>
                    </div>
                    <p className="no_margin main_body_font">
                      {new Date(order.Date.seconds * 1000).toLocaleString(
                        "en-US",
                        {
                          month: "2-digit",
                          day: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        }
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="no_margin main_body_font" style={{color: "#117DFA"}}>{order.Status}</p>
                  </div>
                  
                  {chosenOrderID === order.id && (
                    <div className="vertical">
                      <Spacer height={15} />
                      {orderItems.map((item, j) => {
                        return (
                          <div key={j} className="horizontal align_top">
                            <div style={{ width: 80, height: 80 }}>
                              <AsyncImage
                                path={item.ImagePath}
                                width={80}
                                height={80}
                              />
                            </div>
                            <div>
                              <h3 className="no_margin main_title_font large_text">{item.Name}</h3>
                              <div className="horizontal align_center main_body_font">
                                <p className="no_margin">{item.Quantity}x</p>
                                <p className="no_margin">
                                  - ${item.Price.toFixed(2)} ea
                                </p>
                              </div>
                              <div
                                style={{
                                  borderLeft: "2px solid #117DFA",
                                  paddingLeft: "8px"
                                }}
                              >
                                <p className="no_margin xsmall_text main_body_font">
                                  {item.Details}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </Clickable>
              </div>
            );
          })}
        </Group>
        <Group>
          <Image
            image={img1}
            width={"100%"}
            height={screenHeight * 0.8}
            classes={"cover"}
          />
        </Group>
      </Row>
      <Spacer height={20} />
      {c_footer()}
    </div>
  );
}
