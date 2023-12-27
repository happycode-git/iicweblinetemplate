import React, { useState } from "react";
import { Image } from "../COMPONENTS/Image";
import img1 from "../IMAGES/icon.png";
import {
  firebase_CreateDocument,
  randomString,
  screenHeight,
  screenWidth,
} from "../Global";
import { Spacer } from "../COMPONENTS/Spacer";
import { FaXmark } from "react-icons/fa6";
import { Textfield } from "../COMPONENTS/Textfield";
import { Clickable } from "../COMPONENTS/Clickable";
import { Button1 } from "../COMPONENTS/Button";

export default function MailingList({ setToggle }) {
  const [email, setEmail] = useState("");
  function onTypeEmail(text) {
    setEmail(text);
  }
  function onJoin() {
    firebase_CreateDocument(
      { Email: email, Date: new Date() },
      "MailingList",
      randomString(25)
    ).then(() => {
      alert("Thank you for joining :)");
      setToggle(false);
    });
  }
  return (
    <div
      className="fixed top bottom left right"
      style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
    >
      <Spacer height={screenHeight * 0.2} />
      <div
        className="center padding center_text"
        style={{ backgroundColor: "white", maxWidth: 400 }}
      >
        <Clickable
          onClick={() => {
            setToggle(false);
          }}
        >
          <FaXmark size={40} color="white" className="fixed top right margin" />
        </Clickable>
        <Image image={img1} width={"100px"} height={"100px"} />
        <Spacer height={"20px"} />
        <h1 className="no_margin main_title_font">Join our mailing list!</h1>
        <p className="no_margin center main_body_font" style={{ width: "80%" }}>
          {" "}
          Stay updated with the latest events, menu changes, and specials!
        </p>
        <Spacer height={15} />
        <Textfield
          id={"tbEmail"}
          placeholder={"Enter email address..."}
          onTyping={onTypeEmail}
          setter={setEmail}
        />
        <Spacer height={15} />
        <Button1
          text={"Join"}
          borderWidth={0}
          backgroundColor={"black"}
          textColor={"white"}
          textSize={"18px"}
          width={"100%"}
          radius={"10px"}
          onClick={onJoin}
          classes={"main_title_font"}
          paddingV={"8px"}
        />
      </div>
    </div>
  );
}
