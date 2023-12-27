import React, { useEffect } from "react";
import { c_footer, c_nav, routes } from "../Constants";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";

import img1 from "../IMAGES/MAIN/stock1.jpg";
import { Image } from "../COMPONENTS/Image";
import { useLocation } from "react-router-dom";


export function Events1() {
  const location = useLocation();
  const events = [
    {
      Name: "Bagel Event for Everyone",
      Details:
        "Everywhere there are bagels for sale. If you want to go to the event, make sure you bring everything. We are all about the bagel and the bagel is all in you.",
      Date: "Wednesday, January 12, 2024",
      Image: img1,
    },
    {
      Name: "Bagel Event for Everyone",
      Details:
        "Everywhere there are bagels for sale. If you want to go to the event, make sure you bring everything. We are all about the bagel and the bagel is all in you.",
      Date: "Wednesday, January 12, 2024",
      Image: img1,
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
      <Row>
        <Group classes={"margin_v"}>
          <h1 className="no_margin center_text main_title_font" style={{ fontSize: "6vh" }}>
            Upcoming Events
          </h1>
        </Group>
      </Row>
      {events.map((eve, i) => {
        return (
          <Row key={i} classes={"padding_v"}>
            <Group classes={"padding_h"}>
              <Image image={eve.Image} />
            </Group>
            <Group classes={"padding_h"} width={"80%"}>
              <h1 className="main_title_font">{eve.Name}</h1>
              <p className="main_body_font">{eve.Details}</p>
              <p className="right_text main_body_font" style={{ color: "gray" }}>
                {eve.Date}
              </p>
            </Group>
          </Row>
        );
      })}
      {c_footer()}
    </div>
  );
}
