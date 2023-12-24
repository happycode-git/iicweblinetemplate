import React, { useState } from "react";
import { Textfield1 } from "../COMPONENTS/Textfield";
import { Button1 } from "../COMPONENTS/Button";
import Dropdown from "../COMPONENTS/Dropdown";
import { Spacer } from "../COMPONENTS/Spacer";
import { Checkbox } from "../COMPONENTS/Checkbox";
import { CheckboxList } from "../COMPONENTS/CheckboxList";
import {RadiobuttonList} from '../COMPONENTS/RadiobuttonList'

export default function Test() {
  const [email, setEmail] = useState("");
  const [thing, setThing] = useState("");
  function onThing() {
    console.log(thing)
  }
  return (
    <div className="roboto">
      
      <Spacer height={"5vh"} />
      <Button1 onClick={onThing} text={"Press Now"} />
    </div>
  );
}
