import React, { useEffect } from "react";
import { c_footer, c_nav, routes } from "../Constants";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
//
import img1 from "../IMAGES/MAIN/stock1.jpg";
import { Block4 } from "../COMPONENTS/Blocks";
import { useLocation } from "react-router-dom";

export function Team1() {
  const location = useLocation();
  const teamMembers = [
    {
      Name: "John Doe",
      Position: "IT Specialist in Things",
      Image: img1,
    },
    {
        Name: "John Doe",
        Position: "IT Specialist in Things",
        Image: img1,
      },
      {
        Name: "John Doe",
        Position: "IT Specialist in Things",
        Image: img1,
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
      <div className="padding_v">
        <Row>
          <Group width={"80vw"} classes={"center"}>
            <h1
              className="center_text main_title_font"
              style={{ fontSize: "6em", lineHeight: "1em" }}
            >
              Meet our team.
            </h1>
          </Group>
        </Row>
        {/*  */}
        <Row width={"85%"} classes={"center gap"}>
            {
                teamMembers.map((member, i) =>{
                    return(
                        <Group key={i} height={"50vh"}>
                            <Block4 image={member.Image} heading={member.Name} text={member.Position} classes={"center_text"} />

                        </Group>
                    )
                })
            }
            </Row>
      </div>
      {c_footer()}
    </div>
  );
}
