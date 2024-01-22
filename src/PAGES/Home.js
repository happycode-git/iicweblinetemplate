import React, { useEffect, useState } from "react";
import { Navigation1, Navigation2 } from "../UTILITIES/Navigation";
import { useLocation, useNavigate } from "react-router-dom";
import { c_footer, c_nav, routes } from "../Constants";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Image } from "../COMPONENTS/Image";
//
import img1 from "../IMAGES/MAIN/stock1.jpg";
import img2 from "../IMAGES/MAIN/stock2.jpg";
import img3 from "../IMAGES/MAIN/stock3.jpg";
import img4 from "../IMAGES/MAIN/stock4.jpg";

import { Button1 } from "../COMPONENTS/Button";
import { Block2, Block3, Block4 } from "../COMPONENTS/Blocks";
import { Spacer } from "../COMPONENTS/Spacer";
import MailingList from "./MailingList";

export function Home1() {
  const navigate = useNavigate()
  const location = useLocation();
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;
  }, []);

  return (
    <div className="fade_in">
      {routes.find((route) => `/${route.path}` === location.pathname).Helmet}{c_nav()}
      {toggle && <MailingList setToggle={setToggle} />}
      <Spacer height={"2vh"} />
      <Row classes={"gap"}>
        <Group classes={"radius"} backgroundColor={"rgba(0,0,0,0)"}>
          <Block3
            heading={
              "Everything in the bagel comes around to see you on the other side."
            }
            headingSize={"6vh"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
            }
            classes={"center"}
            width={"75%"}
          >
            <Button1
              onClick={() => {navigate("/")}}
              borderWidth={"2"}
              text={"Learn More"}
              textSize={"20px"}
              classes={"fit_width center main_title_font"}
              paddingH={"2em"}
              paddingV={"0.6em"}
            />
          </Block3>
        </Group>
        <Group>
          <Image image={img1} classes={"cover"} />
        </Group>
      </Row>
      <Row>
        <Group>
          <Block2
            heading={"Everything can be found in the bagels"}
            headingSize={"8vh"}
            classes={"center_text center"}
            width={"60vw"}
          />
        </Group>
      </Row>
      <Row>
        <div className="padding">
          <Block4
            image={img2}
            heading={"Everything Bagel One"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
            }
          />
        </div>
        <div className="padding">
          <Block4
            image={img3}
            heading={"Everything Bagel One"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
            }
          />
        </div>
        <div className="padding">
          <Block4
            image={img4}
            heading={"Everything Bagel One"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
            }
          />
        </div>
      </Row>
      {c_footer()}
    </div>
  );
}
export function Home2() {
  const navigate = useNavigate()
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
      <Spacer height={"1vh"} />
      <Row>
        <Group height={"90vh"} classes={"relative"}>
          <Image image={img1} classes={"cover"} />
          <Group classes={"absolute top padding_v separate_vertical"}>
            <div></div>
            <Block3
              width={"60%"}
              classes={"white center_text padding center"}
              heading={
                "Everything and everywhere is provided by the bagel for the bagel."
              }
              headingSize={"6vh"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan."
              }
              textSize={"1.4em"}
            >
              <Button1
                text={"Learn More"}
                borderColor={"white"}
                classes={"white center main_title_font"}
                textColor={"white"}
                onClick={() => {navigate("/")}}
              />
            </Block3>
            <div></div>
          </Group>
        </Group>
      </Row>
      <Row>
        <Block2
          classes={"center"}
          width={"75%"}
          heading={"Experience One, or Experience Two"}
          headingSize={"8vh"}
        />
      </Row>
      <Row classes={"gap padding_v margin_v"}>
        <Group classes={"radius"}>
          <Block3
            classes={"center padding_v"}
            heading={"Thing One by the bagel in law."}
            headingSize={"1.6em"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
            }
            textSize={"1em"}
            width="75%"
          />
        </Group>
        <Group classes={"radius"}>
          <Block3
            classes={"center padding_v"}
            heading={"Thing One by the bagel in law."}
            headingSize={"1.6em"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
            }
            textSize={"1em"}
            width="75%"
          />
        </Group>
        <Group classes={"radius"}>
          <Block3
            classes={"center padding_v"}
            heading={"Thing One by the bagel in law."}
            headingSize={"1.6em"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. "
            }
            textSize={"1em"}
            width="75%"
          />
        </Group>
      </Row>
      <Row classes={"padding_v gap"}>
        <Group height={"60vh"} classes={"radius"}>
          <Image image={img2} classes={"cover"} />
        </Group>
        <Group height={"60vh"} classes={"radius"}>
          <Image image={img3} classes={"cover"} />
        </Group>
      </Row>
     {c_footer()}
    </div>
  );
}
