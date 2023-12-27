import React, { useEffect, useState } from "react";
import { c_footer, c_nav, routes } from "../Constants";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Block1, Block4 } from "../COMPONENTS/Blocks";
//
import img1 from "../IMAGES/MAIN/stock1.jpg";
import { Image } from "../COMPONENTS/Image";
import { Box1 } from "../COMPONENTS/Box";
import { useLocation, useNavigate } from "react-router-dom";

export function Blog1() {
  const location = useLocation();
  const navigate = useNavigate();
  //
  const blogs = [
    {
      id: 0,
      Title: "How many things can you fit in a thing.",
      Desc: "As much as you can talk about the inconsistencies, you can never escape the bagel within you.",
      Date: "Friday, December 8, 2023",
      Thumbnail: img1,
      Author: "Happy Code Bagel",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;
  }, [])
  
  return (
    <div className="">
      {routes.find((route) => `/${route.path}` === location.pathname).Helmet}{c_nav()}
      <div className="padding_v">
        {blogs.map((post, i) => {
          return (
            <div key={i}
              onClick={() => {
                navigate("/blogpost", { state: post });
              }}
            >
              <Row
                backgroundColor={"#F6F5FF"}
                classes={"padding pointer hover radius"}
              >
                <Group height={"60vh"} classes={"separate_vertical"}>
                  <div></div>
                  <Block1 width={"80%"} classes={"center"}>
                    <h1
                      style={{ fontSize: "2.6em", lineHeight: "1em" }}
                      className="main_title_font"
                    >
                      {post.Title}
                    </h1>
                    <p className="main_body_font">{post.Desc}</p>
                    <Box1
                      backgroundColor={"#60D0FF"}
                      width={"200px"}
                      height={"6px"}
                    />
                    <div className="separate_horizontal main_body_font">
                      <p className="main_body_font">{post.Date}</p>
                      <p className="bold main_title_font medium_text">Written By {post.Author}</p>
                    </div>
                  </Block1>
                  <div></div>
                </Group>
                <Group>
                  <Image image={post.Thumbnail} classes={"cover"} />
                </Group>
              </Row>
            </div>
          );
        })}
      </div>

      {c_footer()}
    </div>
  );
}
