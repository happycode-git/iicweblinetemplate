import React, { useEffect } from "react";
import { Navigation1 } from "../UTILITIES/Navigation";
import { Footer1 } from "../UTILITIES/Footer";
import { Spacer } from "../COMPONENTS/Spacer";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Block2, Block4 } from "../COMPONENTS/Blocks";
//
import img1 from "../IMAGES/MAIN/stock5.jpg";
import img2 from "../IMAGES/MAIN/stock6.jpg";
import img3 from "../IMAGES/MAIN/stock7.jpg";
import img4 from "../IMAGES/MAIN/stock8.jpg";
import img5 from "../IMAGES/MAIN/stock9.jpg";
import img6 from "../IMAGES/MAIN/stock10.jpg";
import { c_footer, c_nav, routes } from "../Constants";
import { useLocation } from "react-router-dom";

export default function Services1() {
  const location = useLocation();
  const services = [
    {
      Service: "Service One Bagel",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan.",
      Image: img1,
    },
    {
      Service: "Service Two Bagel",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan.",
      Image: img2,
    },
    {
      Service: "Service Three Bagel",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan.",
      Image: img3,
    },
    {
      Service: "Service Four Bagel",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan.",
      Image: img4,
    },
    {
      Service: "Service Five Bagel",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan.",
      Image: img5,
    },
    {
      Service: "Service Six Bagel",
      Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan.",
      Image: img6,
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
      <Spacer height={"1vh"} />
      <Row>
        <Group>
          <Block2
            classes={"thin all_caps"}
            heading={"Everything that comes to the center will be in the bagel"}
            headingSize={"4em"}
          />
        </Group>
      </Row>
      <Row classes={"gap padding margin"} >
        {services.map((service, i) => {
          return (
            <Block4
              heading={service.Service}
              text={service.Desc}
              image={service.Image}
            />
          );
        })}
      </Row>
      <Spacer height={"4vh"} />
      {c_footer()}
    </div>
  );
}
