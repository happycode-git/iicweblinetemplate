import React from "react";
import { Navigation1 } from "../UTILITIES/Navigation";
import { Footer1 } from "../UTILITIES/Footer";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Block1 } from "../COMPONENTS/Blocks";
import Map from "../COMPONENTS/Map";
import { Spacer } from "../COMPONENTS/Spacer";
import { c_footer, c_nav } from "../Constants";

export function Locations1() {
  return (
    <div className="roboto fade_in">
      {c_nav()}
      <Row classes={"padding_v"}>
        <Group>
          <Block1 classes={"margin"}>
            <h1 className="no_margin">Bagel Location One</h1>
            <h3 className="no_margin">1234 Bagel Ave. San Diego, CA 92101</h3>
            <Spacer height={"1vh"} />
            <p className="no_margin">Mon: 8:00 AM - 6:00 PM</p>
            <p className="no_margin">Tue: 8:00 AM - 6:00 PM</p>
            <p className="no_margin">Wed: 8:00 AM - 6:00 PM</p>
            <p className="no_margin">Thu: 8:00 AM - 6:00 PM</p>
            <p className="no_margin">Fri: 8:00 AM - 6:00 PM</p>
            <p className="no_margin">Sat: 9:00 AM - 5:00 PM</p>
            <p className="no_margin">Sun: Closed</p>
          </Block1>
        </Group>
        <Group>
          <Map
            address={"Tokyo Imperial Palace"}
            minHeight={"40vh"}
            classes={"radius"}
          />
        </Group>
      </Row>
      <Row classes={"padding_v"}>
        <Group>
          <Block1 classes={"margin"}>
            <h1 className="no_margin">Bagel Location One</h1>
            <h3 className="no_margin">1234 Bagel Ave. San Diego, CA 92101</h3>
            <Spacer height={"1vh"} />
            <p className="no_margin">Mon: 8:00 AM - 6:00 PM</p>
            <p className="no_margin">Tue: 8:00 AM - 6:00 PM</p>
            <p className="no_margin">Wed: 8:00 AM - 6:00 PM</p>
            <p className="no_margin">Thu: 8:00 AM - 6:00 PM</p>
            <p className="no_margin">Fri: 8:00 AM - 6:00 PM</p>
            <p className="no_margin">Sat: 9:00 AM - 5:00 PM</p>
            <p className="no_margin">Sun: Closed</p>
          </Block1>
        </Group>
        <Group>
          <Map
            address={"Tokyo Imperial Palace"}
            minHeight={"40vh"}
            classes={"radius"}
          />
        </Group>
      </Row>
      {c_footer()}
    </div>
  );
}
