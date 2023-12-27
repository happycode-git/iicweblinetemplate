import React from "react";
import { Image } from "../COMPONENTS/Image";
//
import img1 from "../IMAGES/icon.png";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { c_copyright, c_desc, c_facebook, c_instagram, c_yelp, routes } from "../Constants";
import { Link1 } from "../COMPONENTS/Link";
import { useNavigate } from "react-router-dom";
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoYelp } from "react-icons/bi";
import { Clickable } from "../COMPONENTS/Clickable";
import { Spacer } from "../COMPONENTS/Spacer";

export function Footer1() {
  const navigate = useNavigate();
  return (
    <div className="">
      <Row classes={"gap padding radius white"} backgroundColor={"#202020"}>
        <Group height={"40vh"}>
            <Spacer height={"5vh"} />
          <Image image={img1} classes={"contain"} height={"55%"} />
          <div className="separate_evenly padding_v center" style={{width: "70%"}}>
            <Clickable onClick={() => {
                window.open(c_instagram, "_blank");
            }}>
              <BiLogoInstagramAlt color="white" size={"35px"} />
            </Clickable>
            <Clickable onClick={() => {
                window.open(c_facebook, "_blank");
            }}>
              <BiLogoFacebookCircle color="white" size={"35px"} />
            </Clickable>
            <Clickable onClick={() => {
                window.open(c_yelp, "_blank");
            }}>
              <BiLogoYelp color="white" size={"35px"} />
            </Clickable>
          </div>
        </Group>
        <Group>
          <p className="main_body_font medsmall_text">{c_desc}</p>
        </Group>
        <Group classes={"padding center_text separate_vertical"}>
          <div className="vertical" style={{gap: "0.5em"}}>
            {routes
              .filter((r) => r.path !== "" && r.footer_nav)
              .map((route, i) => {
                return (
                  <Link1
                    classes={"white underline"}
                    key={i}
                    text={route.text}
                    size={"20px"}
                    onClick={() => {
                      navigate(`/${route.path}`);
                    }}
                  />
                );
              })}
          </div>
         
        </Group>
      </Row>
      <p className="xsmall_text center_text main_body_font">{c_copyright}</p>
    </div>
  );
}
