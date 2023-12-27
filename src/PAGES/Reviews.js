import React, { useEffect } from "react";
import { c_footer, c_nav, routes } from "../Constants";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Spacer } from "../COMPONENTS/Spacer";
import { Image } from "../COMPONENTS/Image";
// 
import img1 from '../IMAGES/MAIN/stock1.jpg'
import img2 from '../IMAGES/MAIN/stock2.jpg'
import { useLocation } from "react-router-dom";

export function Reviews1() {
  const location = useLocation();
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

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;
  }, [])
  

  return (
    <div className="fade_in">
      {routes.find((route) => `/${route.path}` === location.pathname).Helmet}{c_nav()}
      <div style={{width: "90%"}} className="center">
      <Row>
        <Group classes={"padding"}>
          <h1 className="xxlarge_text main_title_font">See what they are saying..</h1>
        </Group>
      </Row>
      
      <Row classes={"padding_h gap"}>
        {reviews.map((review, i) => {
          return (
            <div key={i} className="padding" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>
              <h1 className="no_margin main_title_font" style={{ fontSize: "6em" }}>
                {review.Rating}
              </h1>
              <p className="main_body_font">{review.Review}</p>
              <div className="separate_horizontal main_body_font">
                <p className="no_margin bold main_title_font medium_text">{review.Reviewer}</p>
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
