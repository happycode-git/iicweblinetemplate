import React from "react";
import { c_footer, c_nav } from "../Constants";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
//
import img1 from "../IMAGES/MAIN/stock1.jpg";
import { Block4 } from "../COMPONENTS/Blocks";

export function Team1() {
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

  return (
    <div className="fade_in">
      {c_nav()}
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
