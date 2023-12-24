import React, { useState } from "react";
import { Navigation1 } from "../UTILITIES/Navigation";
import { Footer1 } from "../UTILITIES/Footer";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Block2 } from "../COMPONENTS/Blocks";
import Map from "../COMPONENTS/Map";
import { Spacer } from "../COMPONENTS/Spacer";
import { Textfield } from "../COMPONENTS/Textfield";
import Dropdown from "../COMPONENTS/Dropdown";
import { Textarea } from "../COMPONENTS/Textarea";
import { Button1 } from "../COMPONENTS/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import {
  c_address,
  c_businessName,
  c_email,
  c_footer,
  c_nav,
  c_phone,
  contactTemplateID,
} from "../Constants";
import Loading from "../UTILITIES/Loading";
import {
  firebase_CreateDocument,
  function_sendBusinessEmail,
  function_sendEmail,
  randomString,
} from "../Global";

export function Contact1() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit() {
    setLoading(true);
    if (
      name !== "" &&
      email !== "" &&
      subject !== "" &&
      subject !== "Select One" &&
      message !== ""
    ) {
      console.log(message);
      const args = {
        Name: name,
        Email: email,
        Subject: subject,
        Message: message,
      };
      // console.log(args)
      function_sendEmail(
        email,
        `Contact Confirmation - ${c_businessName}`,
        <div>
          <h2>Thank you for submitting.</h2>
          <p>We will get back to you soon.</p>

          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.1)",
              padding: "1em",
              borderRadius: "6px",
            }}
          >
            <p style={{fontSize: "18px"}}>{subject}</p>
            <p style={{fontSize: "14px"}}>{message}</p>
          </div>
        </div>,
        contactTemplateID
      );
      function_sendBusinessEmail(email,subject, <div>
        <h1>Contact Entry from: {name}</h1>
        <div style={{backgroundColor: "rgba(0,0,0,0.1)", padding: "1em", borderRadius: "8px"}}>
        <p>Email: {email}</p>
        <p>Subject: {subject}</p>
        <p>Message: {message}</p>
        </div>
      </div> , contactTemplateID)
      firebase_CreateDocument(args, "Contacts", randomString(25))
        .then(() => {
          document.querySelector("#tbName").value = "";
          document.querySelector("#tbEmail").value = "";
          document.querySelector("#ddSubject").value = "Select One";
          document.querySelector("#taMessage").value = "";
          setName("");
          setEmail("");
          setMessage("");
          setSubject("Select One");
          setLoading(false);
          alert("Success! Check your email for confirmation and for our response.");
        })
        .catch((error) => {
          setLoading(false);
          alert(error.message);
        });
    } else {
      setLoading(false);
      alert("Please fill out the entire form.");
    }
  }

  function onTypeName(text) {
    setName(text);
  }
  function onTypeEmail(text) {
    setEmail(text);
  }
  function onTypeMessage(text) {
    setMessage(text);
    console.log(message);
  }

  return (
    <div className="roboto fade_in">
      {loading && <Loading />}
      {c_nav()}
      <Row>
        <Group>
          <Block2 heading={"Keep in touch!"} classes={"margin_h"} />
        </Group>
      </Row>
      <Row classes={"padding gap"}>
        <Group classes={"padding_h"}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            augue et tellus varius accumsan. Integer auctor nunc dui, ut
            vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel
            aliquam nisi suscipit a.{" "}
          </p>
        </Group>
        <Group>
          <div className="horizontal align_center">
            <FaPhoneAlt size={20} />
            <p>{c_phone}</p>
          </div>
          <div className="horizontal align_center">
            <MdEmail size={20} />
            <p>{c_email}</p>
          </div>
          <div className="horizontal align_center">
            <FaLocationDot size={20} />
            <p>{c_address}</p>
          </div>
        </Group>
      </Row>
      <Row>
        <Group>
          <Map address={c_address} height={"100%"} classes={"radius"} />
        </Group>
        <Group classes={"padding_h vertical"}>
          <h2>Contact Form</h2>
          <Textfield
            id="tbName"
            placeholder={"Full Name"}
            setter={setName}
            onTyping={onTypeName}
          />
          <Textfield
            id="tbEmail"
            placeholder={"Email"}
            setter={setEmail}
            onTyping={onTypeEmail}
          />
          <Dropdown
            id="ddSubject"
            options={["Question", "Comment", "Concern"]}
            setter={setSubject}
          />
          <Textarea
            id="taMessage"
            placeholder={"Type your message here..."}
            setter={setMessage}
            classes={"roboto"}
            onTyping={onTypeMessage}
          />
          <Button1
            width={"100%"}
            text={"Submit"}
            paddingV={"0.8em"}
            backgroundColor={"black"}
            classes={"white thin"}
            radius={"6px"}
            onClick={onSubmit}
            textColor={"white"}
          />
        </Group>
      </Row>
      <Spacer height={"2vh"} />
      {c_footer()}
    </div>
  );
}
