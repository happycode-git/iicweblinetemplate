import React from "react";
import { Navigation1 } from "../UTILITIES/Navigation";
import { Footer1 } from "../UTILITIES/Footer";
import { c_footer, c_nav } from "../Constants";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";

import img1 from "../IMAGES/MAIN/stock1.jpg";
import { Image } from "../COMPONENTS/Image";

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

export function Events1() {
  return (
    <div className="roboto fade_in">
      {c_nav()}
      <Row>
        <Group classes={"margin_v"}>
          <h1 className="no_margin center_text" style={{ fontSize: "6vh" }}>
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
              <h1>{eve.Name}</h1>
              <p>{eve.Details}</p>
              <p className="right_text" style={{ color: "gray" }}>
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
