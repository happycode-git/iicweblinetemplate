import React, { useEffect } from "react";
import { Navigation1 } from "../UTILITIES/Navigation";
import { Footer1 } from "../UTILITIES/Footer";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Block1 } from "../COMPONENTS/Blocks";
import Map from "../COMPONENTS/Map";
import { Spacer } from "../COMPONENTS/Spacer";
import { c_footer, c_nav, routes } from "../Constants";
import { useLocation } from "react-router-dom";

export function Locations1() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;
  }, [])
  
  return (
    <div className="fade_in">
      {routes.find((route) => `/${route.path}` === location.pathname).Helmet}{c_nav()}
      <Row classes={"padding_v"}>
        <Group>
          <Block1 classes={"margin"}>
            <h1 className="no_margin main_title_font">Bagel Location One</h1>
            <h3 className="no_margin main_title_font">1234 Bagel Ave. San Diego, CA 92101</h3>
            <Spacer height={"1vh"} />
            <p className="no_margin main_body_font">Mon: 8:00 AM - 6:00 PM</p>
            <p className="no_margin main_body_font">Tue: 8:00 AM - 6:00 PM</p>
            <p className="no_margin main_body_font">Wed: 8:00 AM - 6:00 PM</p>
            <p className="no_margin main_body_font">Thu: 8:00 AM - 6:00 PM</p>
            <p className="no_margin main_body_font">Fri: 8:00 AM - 6:00 PM</p>
            <p className="no_margin main_body_font">Sat: 9:00 AM - 5:00 PM</p>
            <p className="no_margin main_body_font">Sun: Closed</p>
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
            <h1 className="no_margin main_title_font">Bagel Location One</h1>
            <h3 className="no_margin main_title_font">1234 Bagel Ave. San Diego, CA 92101</h3>
            <Spacer height={"1vh"} />
            <p className="no_margin main_body_font">Mon: 8:00 AM - 6:00 PM</p>
            <p className="no_margin main_body_font">Tue: 8:00 AM - 6:00 PM</p>
            <p className="no_margin main_body_font">Wed: 8:00 AM - 6:00 PM</p>
            <p className="no_margin main_body_font">Thu: 8:00 AM - 6:00 PM</p>
            <p className="no_margin main_body_font">Fri: 8:00 AM - 6:00 PM</p>
            <p className="no_margin main_body_font">Sat: 9:00 AM - 5:00 PM</p>
            <p className="no_margin main_body_font">Sun: Closed</p>
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
