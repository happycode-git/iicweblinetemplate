import React, { useEffect } from "react";
import { Navigation1 } from "../UTILITIES/Navigation";
import { useLocation } from "react-router-dom";
import { Row } from "../COMPONENTS/Row";
import { Image } from "../COMPONENTS/Image";
//
import img1 from "../IMAGES/MAIN/stock2.jpg";
import { c_footer, c_nav, routes } from "../Constants";
import { Group } from "../COMPONENTS/Group";
import { Spacer } from "../COMPONENTS/Spacer";

export function About1() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;
  }, []);

  return (
    <div className="fade_in roboto">
      {c_nav()}
      <Spacer height={"1vh"} />
      <Row>
        <Group height={"60vh"}>
          <Image image={img1} classes={"cover"} />
        </Group>
      </Row>
      <Row classes={"padding"}>
        <h1 className="xlarge_text no_margin">About Everything Bagel</h1>
      </Row>
      <Row classes={"padding_h gap"}>
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
