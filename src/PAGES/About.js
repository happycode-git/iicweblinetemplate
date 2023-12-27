import React, { useEffect, useState } from "react";
import { Navigation1 } from "../UTILITIES/Navigation";
import { useLocation } from "react-router-dom";
import { Row } from "../COMPONENTS/Row";
import { Image } from "../COMPONENTS/Image";
//
import img1 from "../IMAGES/MAIN/stock2.jpg";
import { c_footer, c_nav, routes } from "../Constants";
import { Group } from "../COMPONENTS/Group";
import { Spacer } from "../COMPONENTS/Spacer";
import { screenHeight } from "../Global";

export function About1() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;
  }, []);

  return (
    <div className="fade_in">
      {routes.find((route) => `/${route.path}` === location.pathname).Helmet}
      {c_nav()}
      <Spacer height={"1vh"} />
      <Row>
        <Group height={"60vh"}>
          <Image image={img1} classes={"cover"} />
        </Group>
      </Row>
      <Row classes={"padding"}>
        <h1 className="xlarge_text no_margin main_title_font">
          About Everything Bagel
        </h1>
      </Row>
      <Row classes={"padding_h gap main_body_font"}>
        <Group>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            augue et tellus varius accumsan. Integer auctor nunc dui, ut
            vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel
            aliquam nisi suscipit a. Aenean est enim, porttitor quis felis
            ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi
            tempor ligula at mi fermentum rhoncus. Phasellus euismod
            sollicitudin euismod. Morbi porttitor rutrum risus non pharetra.
            Praesent tincidunt finibus lorem ut euismod.
          </p>
        </Group>
        <Group>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            augue et tellus varius accumsan. Integer auctor nunc dui, ut
            vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel
            aliquam nisi suscipit a. Aenean est enim, porttitor quis felis
            ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi
            tempor ligula at mi fermentum rhoncus. Phasellus euismod
            sollicitudin euismod. Morbi porttitor rutrum risus non pharetra.
            Praesent tincidunt finibus lorem ut euismod.
          </p>
        </Group>
        <Group>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            augue et tellus varius accumsan. Integer auctor nunc dui, ut
            vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel
            aliquam nisi suscipit a. Aenean est enim, porttitor quis felis
            ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi
            tempor ligula at mi fermentum rhoncus. Phasellus euismod
            sollicitudin euismod. Morbi porttitor rutrum risus non pharetra.
            Praesent tincidunt finibus lorem ut euismod.
          </p>
        </Group>
      </Row>
      {c_footer()}
    </div>
  );
}
export function About2() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;
  }, []);

  return (
    <div className="fade_in">
      {routes.find((route) => `/${route.path}` === location.pathname).Helmet}
      {c_nav()}
      <Row>
        <div style={{ padding: "2em" }}>
          <h1
            className="all_caps center_text no_margin main_title_font"
            style={{ fontSize: "4em", letterSpacing: "-1px" }}
          >
            About Us
          </h1>
        </div>
      </Row>
      <Row>
        <Group classes={"center_text"}>
          <div>
            <h1 className="main_title_font large_text">A road to victory</h1>
            <Image
              image={img1}
              width={"76%"}
              height={screenHeight * 0.6}
              classes={"cover"}
            />
          </div>
        </Group>
        <Group classes={"main_body_font"}>
          <div style={{ width: "75%" }}>
            <p className="medsmall_text thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              augue et tellus varius accumsan. Integer auctor nunc dui, ut
              vehicula turpis pretium accumsan. Sed ullamcorper tortor justo,
              vel aliquam nisi suscipit a.{" "}
            </p>
            <p className="medsmall_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              augue et tellus varius accumsan. Integer auctor nunc dui, ut
              vehicula turpis pretium accumsan. Sed ullamcorper tortor justo,
              vel aliquam nisi suscipit a.{" "}
            </p>
            <p className="medsmall_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              augue et tellus varius accumsan. Integer auctor nunc dui, ut
              vehicula turpis pretium accumsan. Sed ullamcorper tortor justo,
              vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis
              ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi
              tempor ligula at mi fermentum rhoncus. Phasellus euismod
              sollicitudin euismod. Morbi porttitor rutrum risus non pharetra.
              Praesent tincidunt finibus lorem ut euismod.
            </p>
            <p className="medsmall_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              augue et tellus varius accumsan. Integer auctor nunc dui, ut
              vehicula turpis pretium accumsan. Sed ullamcorper tortor justo,
              vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis
              ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi
              tempor ligula at mi fermentum rhoncus. Phasellus euismod
              sollicitudin euismod. Morbi porttitor rutrum risus non pharetra.
              Praesent tincidunt finibus lorem ut euismod.
            </p>
          </div>
        </Group>
      </Row>

      <Spacer height={20} />
      {c_footer()}
    </div>
  );
}
