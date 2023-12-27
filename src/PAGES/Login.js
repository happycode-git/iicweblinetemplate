import React, { useEffect, useState } from "react";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Textfield } from "../COMPONENTS/Textfield";
import { useNavigate } from "react-router-dom";
import { Navigation1 } from "../UTILITIES/Navigation";
import { Footer1 } from "../UTILITIES/Footer";
import img1 from "../IMAGES/MAIN/stock1.jpg";
import { Image } from "../COMPONENTS/Image";
import { Spacer } from "../COMPONENTS/Spacer";
import { Clickable } from "../COMPONENTS/Clickable";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button1 } from "../COMPONENTS/Button";
import { auth_ResetPassword, auth_SignIn, screenWidth } from "../Global";
import { Link1 } from "../COMPONENTS/Link";
import Loading from "../UTILITIES/Loading";

export function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onTypeEmail(text) {
    setEmail(text);
  }
  function onTypePass(text) {
    setPassword(text);
  }
  function onSignIn() {
    setLoading(true);
    auth_SignIn(setLoading, email, password, navigate, "/")
  }

  useEffect(() => {}, []);

  return (
    <div className="fade_in">
      {loading && <Loading classes={""} />}
      <Navigation1 />
      <Spacer height={20} />
      <Row>
        <Group>
          <Image image={img1} height={"100%"} width={"100%"} />
        </Group>
        <Group padding={"2em"}>
          <div className="padding">
            <div className="separate_horizontal align_center">
              <h1 className="main_title_font xlarge_text">Login</h1>
              <Clickable>
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    padding: "0.5em 1em",
                  }}
                  className={"horizontal align_center full_radius"}
                >
                  <p className="no_margin main_body_font">Sign up</p>
                  <FaArrowRightLong size={20} />
                </div>
              </Clickable>
            </div>
            <div className="vertical main_body_font">
              <Textfield
              id="tbEmail"
                placeholder={"Email"}
                setter={setEmail}
                onTyping={onTypeEmail}
              />
              <Textfield
              id="tbPass"
                placeholder={"********"}
                isPassword={true}
                setter={setPassword}
                onTyping={onTypePass}
              />
              <Spacer height={20} />
              <Button1
                width={"40%"}
                paddingV={"10px"}
                text={"Log In"}
                classes={"center main_title_font"}
                textSize={"18px"}
                backgroundColor={"black"}
                textColor={"white"}
                onClick={onSignIn}
              />
              <Link1
                text={"Forgot your password?"}
                classes={"underline main_body_font"}
                onClick={() => {
                  auth_ResetPassword(email);
                }}
              />
            </div>
          </div>
        </Group>
      </Row>
      <Spacer height={20} />
      <Footer1 />
    </div>
  );
}
export function OrderLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onTypeEmail(text) {
    setEmail(text);
  }
  function onTypePass(text) {
    setPassword(text);
  }
  function onSignIn() {
    setLoading(true);
    auth_SignIn(setLoading, email, password, navigate, "/orderonline")
  }

  useEffect(() => {}, []);

  return (
    <div className="fade_in">
      {loading && <Loading classes={""} />}
      <Navigation1 />
      <Spacer height={20} />
      <Row>
        <Group>
          <Image image={img1} height={"100%"} width={"100%"} />
        </Group>
        <Group padding={"2em"}>
          <div className="padding">
            <div className="separate_horizontal align_center">
              <h1 className="xlarge_text main_title_font">Login</h1>
              <Clickable>
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    padding: "0.5em 1em",
                  }}
                  className={"horizontal align_center full_radius"}
                >
                  <p className="no_margin main_body_font">Sign up</p>
                  <FaArrowRightLong size={20} />
                </div>
              </Clickable>
            </div>
            <div className="vertical main_body_font">
              <Textfield
              id="tbEmail"
                placeholder={"Email"}
                setter={setEmail}
                onTyping={onTypeEmail}
              />
              <Textfield
              id="tbPass"
                placeholder={"********"}
                isPassword={true}
                setter={setPassword}
                onTyping={onTypePass}
              />
              <Spacer height={20} />
              <Button1
                width={"40%"}
                paddingV={"10px"}
                text={"Log In"}
                classes={"center main_title_font"}
                textSize={"18px"}
                backgroundColor={"black"}
                textColor={"white"}
                onClick={onSignIn}
              />
              <Link1
                text={"Forgot your password?"}
                classes={"underline main_body_font"}
                onClick={() => {
                  auth_ResetPassword(email);
                }}
              />
            </div>
          </div>
        </Group>
      </Row>
      <Spacer height={20} />
      <Footer1 />
    </div>
  );
}
