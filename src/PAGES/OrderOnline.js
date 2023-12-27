import { useEffect, useState } from "react";
import { Footer1 } from "../UTILITIES/Footer";
import { Navigation1 } from "../UTILITIES/Navigation";
import {
  auth_IsUserSignedIn,
  auth_SignOut,
  firebase_CreateDocument,
  firebase_GetAllDocumentsListener,
  me,
  myID,
  randomString,
  screenHeight,
} from "../Global";
import { useLocation, useNavigate } from "react-router-dom";
import { c_footer, c_nav, routes } from "../Constants";
import { FaCartShopping, FaXmark } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";

import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { AsyncImage } from "../COMPONENTS/AsyncImage";
import { Spacer } from "../COMPONENTS/Spacer";
import { Clickable } from "../COMPONENTS/Clickable";
import { Grid } from "../COMPONENTS/Grid";
import { Button1, Button2 } from "../COMPONENTS/Button";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Loading from "../UTILITIES/Loading";
import { Textfield } from "../COMPONENTS/Textfield";
import { IoDocumentText } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";

export function OrderOnline1() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [chosenCat, setChosenCat] = useState("All");
  const [chosenItem, setChosenItem] = useState({});
  const [showItem, setShowItem] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [details, setDetails] = useState("");
  const [userID, setUserID] = useState("");

  function onChooseCategory(category) {
    setChosenCat(category)
    const newArr = allItems.filter((item) => item.Category === category);
    if (category === "All") {
      setItems(allItems);
    } else {
      setItems(newArr);
    }
  }
  function onTypeDetails(text) {
    setDetails(text);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;
    auth_IsUserSignedIn(
      setLoading,
      navigate,
      "/orderonline",
      "/orderonline",
      setUserID
    );
    firebase_GetAllDocumentsListener(
      setLoading,
      "Items",
      setItems,
      0,
      "asc",
      "Category",
      "",
      "",
      ""
    );
    firebase_GetAllDocumentsListener(
      setLoading,
      "Items",
      setAllItems,
      0,
      "asc",
      "Category",
      "",
      "",
      ""
    );
  }, []);

  return (
    <div className="fade_in">
      {loading && <Loading />}
      {c_nav()}
      <Spacer height={20} />
      <Row>
        <Group>
          <div className="separate_horizontal">
            <h1 className="no_margin main_title_font xlarge_text">Order Menu</h1>
            {userID !== "" && (
              <div className="horizontal no_gap full_radius" style={{backgroundColor: "rgba(0,0,0,0.1)", padding: "10px 15px"}}>
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
                  <FaCartShopping size={"2em"} />
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
          <div
            style={{
              overflowX: "scroll",
              gap: 0,
              width: "fit-content",
              backgroundColor: "rgba(0,0,0,0.05)"
            }}
            className="horizontal margin_v_small full_radius main_body_font"
          >
            {["All", ...new Set(items.map((item) => item.Category))].map(
              (cat, i) => {
                return (
                  <Clickable
                    key={i}
                    onClick={() => {
                      onChooseCategory(cat);
                    }}
                  >
                    <div
                      style={{
                        backgroundColor:
                          cat === chosenCat ? "black" : "rgba(0,0,0,0)",
                        padding: "1em 1.5em",
                      }}
                    >
                      <p
                        className="bold no_margin all_caps"
                        style={{ color: cat === chosenCat ? "white" : "black" }}
                      >
                        {cat}
                      </p>
                    </div>
                  </Clickable>
                );
              }
            )}
          </div>
        </Group>
      </Row>
      <Grid>
        {items.map((item, i) => {
          return (
            <Group key={i} width={250}>
              <Clickable
                onClick={() => {
                  setChosenItem(item);
                  setShowItem(true);
                }}
              >
                <AsyncImage path={item.ImagePath} height={200} width={"auto"} />
                <Spacer height={6} />
                <h1 className="no_margin medium_text main_title_font">{item.Name}</h1>
                <p className="no_margin main_body_font">${item.Price.toFixed(2)}</p>
              </Clickable>
            </Group>
          );
        })}
      </Grid>

      {showItem && chosenItem.Name !== undefined && (
        <div
          className="fixed fade_in"
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div
            className="bg_white radius center padding scrollY"
            style={{ marginTop: 20, maxWidth: 400 }}
          >
            <div className="separate_horizontal padding_v_small">
              <div></div>
              <Clickable
                classes={"align_center horizontal no_gap"}
                onClick={() => {
                  setShowItem(false);
                  setChosenItem({});
                  setQuantity(1);
                  setDetails("");
                }}
              >
                <HiMiniXMark size={25} />
                <p className="main_body_font no_margin">Close</p>
              </Clickable>
            </div>
            <AsyncImage
              path={chosenItem.ImagePath}
              width={"auto"}
              height={"auto"}
            />
            <h1 className="no_margin main_title_font">{chosenItem.Name}</h1>
            <p className="no_margin main_body_font">${chosenItem.Price.toFixed(2)}</p>
            <p className="main_body_font" style={{ fontSize: 14 }}>
              {chosenItem.Description}
            </p>
            <div>
              <Textfield
                placeholder={"Additional Information.."}
                setter={setDetails}
                onTyping={onTypeDetails}
              />
            </div>
            <div className="separate_horizontal fit_width align_center center">
              <Button2
                onClick={() => {
                  if (quantity > 1) {
                    const newQty = quantity - 1;
                    setQuantity(newQty);
                  }
                }}
                borderWidth={0}
                paddingV={"10px"}
              >
                <FaMinus />
              </Button2>
              <p>{quantity}</p>
              <Button2
                onClick={() => {
                  const newQty = quantity + 1;
                  setQuantity(newQty);
                }}
                borderWidth={0}
                paddingV={"10px"}
              >
                <FaPlus />
              </Button2>
            </div>
            <Button1
              paddingV={"10px"}
              text={"Add To Cart"}
              backgroundColor={"black"}
              textColor={"white"}
              width={"100%"}
              onClick={() => {
                if (myID === "") {
                  auth_IsUserSignedIn(
                    setLoading,
                    navigate,
                    "/orderonline",
                    "/orderlogin"
                  );
                } else {
                  setLoading(true);
                  const args = {
                    Quantity: parseInt(quantity),
                    Price: chosenItem.Price,
                    Name: chosenItem.Name,
                    ImagePath: chosenItem.ImagePath,
                    Details: details,
                    UserID: me.id,
                  };
                  firebase_CreateDocument(
                    args,
                    "OrderCartItems",
                    randomString(25)
                  ).then(() => {
                    setLoading(false);
                    setShowItem(false);
                    setChosenItem({});
                    setDetails("");
                    setQuantity(1);
                    alert("Item has been added to your cart.");
                  });
                }
              }}
              classes={"main_title_font"}
            />
          </div>
        </div>
      )}

      <Spacer height={20} />
      {c_footer()}
    </div>
  );
}
