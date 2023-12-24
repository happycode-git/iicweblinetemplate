import React, { useEffect, useState } from "react";
import { Navigation1 } from "../UTILITIES/Navigation";
import { Footer1 } from "../UTILITIES/Footer";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Textfield } from "../COMPONENTS/Textfield";
import { Spacer } from "../COMPONENTS/Spacer";
import { c_footer, c_nav } from "../Constants";

export function FAQ1() {
  const [faqs, setFaqs] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  const things = [
    {
      Question: "Is there a pizza in this place?",
      Answer:
        "Of course, if there werent any pizzas, then what would we eat? Right?",
    },
    {
      Question: "Is there a pizza in this place?",
      Answer:
        "Of course, if there werent any pizzas, then what would we eat? Right?",
    },
    {
      Question: "Is there a pizza in this place?",
      Answer:
        "Of course, if there werent any pizzas, then what would we eat? Right?",
    },
    {
      Question: "Is there a pizza in this place?",
      Answer:
        "Of course, if there werent any pizzas, then what would we eat? Right?",
    },
    {
      Question: "Is there a pizza in this place?",
      Answer:
        "Of course, if there werent any pizzas, then what would we eat? Right?",
    },
    {
      Question: "Is there a pizza in this place?",
      Answer:
        "Of course, if there werent any pizzas, then what would we eat? Right?",
    },
    {
      Question: "Is there a pizza in this place?",
      Answer:
        "Of course, if there werent any pizzas, then what would we eat? Right? nugget",
    },
    {
      Question: "Is there a pizza in this place?",
      Answer:
        "Of course, if there werent any pizzas, then what would we eat? Right?",
    },
  ];

  function onSearch() {
    if (searchStr !== "") {
      const filtered = things.filter(
        (it) =>
          it.Question.toLowerCase().includes(searchStr.toLowerCase()) ||
          it.Answer.toLowerCase().includes(searchStr.toLowerCase())
      );
      setFaqs(filtered);
    } else {
      setFaqs(things);
    }
  }

  useEffect(() => {
    setFaqs(things);
  }, []);

  return (
    <div className="roboto fade_in">
      {c_nav()}
      <Row>
        <Group width={"80vw"} classes={"center padding_v"}>
          <h1 className="xlarge_text">
            Need some help getting information?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            augue et tellus varius accumsan. Integer auctor nunc dui, ut
            vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel
            aliquam nisi suscipit a. Aenean est enim, porttitor quis felis
            ultrices, volutpat commodo nibh. Maecenas sed semper massa.
          </p>
        </Group>
      </Row>

      <Row>
        <Group width={"fit-content"} classes={"center"}>
          <Textfield
            placeholder={"Enter keyword here..."}
            width={"350px"}
            className={"center"}
            setter={setSearchStr}
            onTyping={onSearch}
          />
        </Group>
      </Row>
      <Row classes={"padding gap"}>
        {faqs.map((thing, i) => {
          return (
            <Group
              key={i}
              classes={"radius"}
              backgroundColor={"rgba(0,0,0,0.05)"}
              padding={"2em"}
            >
              <p style={{ fontSize: "20px" }} className="no_margin">Q: {thing.Question}</p>
              <Spacer height={"12px"} />
              <p className="bold no_margin">A: {thing.Answer}</p>
            </Group>
          );
        })}
      </Row>
      <Spacer height={"2vh"} />
     {c_footer()}
    </div>
  );
}
