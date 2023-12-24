import React from "react";
import { c_footer, c_nav } from "../Constants";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Spacer } from "../COMPONENTS/Spacer";
import { Image } from "../COMPONENTS/Image";
// 
import img1 from '../IMAGES/MAIN/stock1.jpg'
import img2 from '../IMAGES/MAIN/stock2.jpg'

export function Reviews1() {
  const reviews = [
    {
      Review:
        "There are many things that are going well. One of them is that you are a bagel.",
      Reviewer: "Jane Doe",
      Rating: "4.5",
      Date: "11/12/23",
    },
    {
      Review:
        "There are many things that are going well. One of them is that you are a bagel.",
      Reviewer: "Jane Doe",
      Rating: "4.5",
      Date: "11/12/23",
    },
    {
      Review:
        "There are many things that are going well. One of them is that you are a bagel.",
      Reviewer: "Jane Doe",
      Rating: "4.5",
      Date: "11/12/23",
    },
    {
      Review:
        "There are many things that are going well. One of them is that you are a bagel.",
      Reviewer: "Jane Doe",
      Rating: "4.5",
      Date: "11/12/23",
    },
    {
      Review:
        "There are many things that are going well. One of them is that you are a bagel.",
      Reviewer: "Jane Doe",
      Rating: "4.5",
      Date: "11/12/23",
    },
    {
      Review:
        "There are many things that are going well. One of them is that you are a bagel.",
      Reviewer: "Jane Doe",
      Rating: "4.5",
      Date: "11/12/23",
    },
  ];

  return (
    <div className="roboto fade_in">
      {c_nav()}
      <div style={{width: "90%"}} className="center">
      <Row>
        <Group classes={"padding"}>
          <h1 style={{ fontSize: "6vh" }}>See what they are saying..</h1>
        </Group>
      </Row>
      
      <Row classes={"padding_h gap"}>
        {reviews.map((review, i) => {
          return (
            <div key={i} className="padding" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>
              <h1 className="no_margin" style={{ fontSize: "6em" }}>
                {review.Rating}
              </h1>
              <p>{review.Review}</p>
              <div className="separate_horizontal">
                <p className="no_margin bold">{review.Reviewer}</p>
                <p className="no_margin">{review.Date}</p>
              </div>
            </div>
          );
        })}
      </Row>
      <Spacer height={"2vh"} />
      </div>
      <Row classes={"padding_v gap"}>
        <Group height={"60vh"}>
            <Image image={img1} classes={"cover"} />
        </Group>
        <Group height={"60vh"}>
            <Image image={img2} classes={"cover"} />
        </Group>
      </Row>
      <Spacer height={"2vh"} />
      {c_footer()}
    </div>
  );
}
