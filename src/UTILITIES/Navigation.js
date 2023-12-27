import React, { useEffect, useState } from "react";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import img1 from "../IMAGES/icon.png";
import { Image } from "../COMPONENTS/Image";
import { c_businessName, c_copyright, routes } from "../Constants";
import { Link1 } from "../COMPONENTS/Link";
import { Clickable } from "../COMPONENTS/Clickable";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { screenWidth } from "../Global";
import { Block1 } from "../COMPONENTS/Blocks";
import { HiOutlineXMark } from "react-icons/hi2";

export function Navigation1({}) {
  const navigate = useNavigate();
  const [toggleBurger, setToggleBurger] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  function handleResize() {
    const navlinks = document.querySelector("#navlinks");
    console.log(window.innerWidth);
    if (navlinks) {
      const navlinkWidth = navlinks.clientWidth;
      if (navlinkWidth >= window.innerWidth * 0.4 || window.innerWidth <= 550) {
        setToggleBurger(true);
        console.log("TOO SMALL");
      } else {
        setToggleBurger(false);
        console.log("OKAY");
      }
    } else if (window.innerWidth >= 600) {
      setToggleBurger(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{zIndex: "500"}}>
      <Row classes={""}>
        <Group classes={"separate_horizontal"}>
          <Clickable
            onClick={() => {
              navigate("/");
            }}
          >
            <Image image={img1} height={"60px"} width={"60px"} />
          </Clickable>

          {toggleBurger ? (
            <Clickable
              onClick={() => {
                setToggleNav(true);
              }}
            >
              <FiMenu size={"30px"} />
            </Clickable>
          ) : (
            <div id={"navlinks"} className="padding_small">
              {routes
                .filter((r) => r.path !== "" && r.top_nav)
                .map((route, i) => {
                  return (
                    <Link1
                      key={i}
                      text={route.text}
                      size={"16px"}
                      onClick={() => {
                        navigate(`/${route.path}`);
                      }}
                    />
                  );
                })}
            </div>
          )}
        </Group>
      </Row>
      {toggleNav && (
        <div
          className={`fixed top right left bottom bg_white fade_in separate_vertical`}
          style={{ zIndex: 1000 }}
        >
          {/* TOP */}
          <Block1
            classes={"separate_horizontal"}
            backgroundColor={"white"}
            padding={"1em"}
          >
            <Clickable
              onClick={() => {
                navigate("/");
                setToggleNav(false);
              }}
            >
              <Image image={img1} height={"60px"} width={"60px"} />
            </Clickable>
            <Clickable
              onClick={() => {
                setToggleNav(false);
              }}
            >
              <HiOutlineXMark color="black" size={"2.2em"} />
            </Clickable>
          </Block1>
          {/* LINKS */}
          <Block1 classes={"vertical"}>
            {routes
              .filter((r) => r.path !== "" && r.hidden_nav)
              .map((route, i) => {
                return (
                  <Link1
                    key={i}
                    text={route.text}
                    size={"3vh"}
                    onClick={() => {
                      navigate(`/${route.path}`);
                    }}
                  />
                );
              })}
          </Block1>
          {/* COPYRIGHT */}
          <Block1 classes={"scrollY"}>
            <p className="no_margin padding xsmall_text center_text main_body_font">
              {c_copyright}
            </p>
          </Block1>
        </div>
      )}
    </div>
  );
}
export function Navigation2({}) {
  const navigate = useNavigate();
  const [toggleBurger, setToggleBurger] = useState(false);
  const [toggleNav, setToggleNav] = useState(false)

  function handleResize() {
    const logo = document.querySelector("#logo");
    const navlinks = document.querySelector("#navlinks");
    if (navlinks) {
      const logoWidth = logo.clientWidth;
      const navlinkWidth = navlinks.clientWidth;
      if (logoWidth + navlinkWidth + screenWidth * 0.2 >= window.innerWidth || window.innerWidth <= 550) {
        setToggleBurger(true);
        console.log("TOO SMALL");
      } else {
        setToggleBurger(false);
        console.log("OKAY");
      }
    } else if (window.innerWidth >= 600) {
      setToggleBurger(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{zIndex: "500"}}>
      <Row height={"5vh"} classes={""}>
        <Group classes={"separate_horizontal"}>
          <Clickable
            onClick={() => {
              navigate("/");
            }}
          >
            <h1 id="logo" className="no_margin medium_text lato no_wrap">
              {c_businessName}
            </h1>
          </Clickable>

          {toggleBurger ? (
            <div>
              <FiMenu size={"30px"} />
            </div>
          ) : (
            <div id={"navlinks"} className="padding_small no_wrap">
              {routes
                .filter((r) => r.top_nav)
                .map((route, i) => {
                  return <Link1 text={route.text} size={"16px"} />;
                })}
            </div>
          )}
        </Group>
      </Row>
      {toggleNav && (
        <div
          className={`fixed top right left bottom bg_white fade_in separate_vertical`}
          style={{ zIndex: 1000 }}
        >
          {/* TOP */}
          <Block1
            classes={"separate_horizontal"}
            backgroundColor={"white"}
            padding={"1em"}
          >
            <Clickable
              onClick={() => {
                navigate("/");
                setToggleNav(false);
              }}
            >
              <Image image={img1} height={"60px"} width={"60px"} />
            </Clickable>
            <Clickable
              onClick={() => {
                setToggleNav(false);
              }}
            >
              <HiOutlineXMark color="black" size={"2.2em"} />
            </Clickable>
          </Block1>
          {/* LINKS */}
          <Block1 classes={"vertical"}>
            {routes
              .filter((r) => r.path !== "" && r.hidden_nav)
              .map((route, i) => {
                return (
                  <Link1
                    key={i}
                    text={route.text}
                    size={"4vh"}
                    onClick={() => {
                      navigate(`/${route.path}`);
                    }}
                  />
                );
              })}
          </Block1>
          {/* COPYRIGHT */}
          <Block1>
            <p className="no_margin no_padding xsmall_text center_text">
              {c_copyright}
            </p>
          </Block1>
        </div>
      )}
    </div>
  );
}
