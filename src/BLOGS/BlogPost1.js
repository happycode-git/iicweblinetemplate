import React from "react";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Image } from "../COMPONENTS/Image";
//
import img1 from "../IMAGES/MAIN/stock2.jpg";
import img2 from "../IMAGES/MAIN/stock3.jpg";

export function BlogPost1({ args }) {
  return (
    <div className="roboto" style={{ overflowY: "scroll" }}>
      <Row>
        <Group height={"60vh"}>
          <Image image={args.Thumbnail} classes={"cover"} radius={"0"} />
        </Group>
      </Row>
      <h1
        style={{ fontSize: "3em", lineHeight: "1em" }}
        className="center_text"
      >
        {args.Title}
      </h1>
      <Row classes={"center"} width={"90%"}>
        <Group>
          <p>{args.Date}</p>
        </Group>
        <Group>
          <p className="right_text bold">Written by {args.Author}</p>
        </Group>
      </Row>
      <Row width={"90%"} classes={"center padding_v"}>
        <Group>
          <p
            className="no_margin"
            style={{ fontSize: "20px", fontWeight: "300" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            augue et tellus varius accumsan. Integer auctor nunc dui, ut
            vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel
            aliquam nisi suscipit a. Aenean est enim, porttitor quis felis
            ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi
            tempor ligula at mi fermentum rhoncus. Phasellus euismod
            sollicitudin euismod. Morbi porttitor rutrum risus non pharetra.
            Praesent tincidunt finibus lorem ut euismod. Etiam ut ornare mauris,
            ut luctus nisl.
          </p>
        </Group>
      </Row>
      <Row width={"90%"} classes={"center padding_v"}>
        <Group>
          <p
            className="no_margin"
            style={{ fontSize: "20px", fontWeight: "300" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            augue et tellus varius accumsan. Integer auctor nunc dui, ut
            vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel
            aliquam nisi suscipit a. Aenean est enim, porttitor quis felis
            ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi
            tempor ligula at mi fermentum rhoncus. Phasellus euismod
            sollicitudin euismod. Morbi porttitor rutrum risus non pharetra.
            Praesent tincidunt finibus lorem ut euismod. Etiam ut ornare mauris,
            ut luctus nisl.
          </p>
        </Group>
      </Row>
      <Row width={"90%"} classes={"center padding_v"}>
        <Group>
          <p
            className="no_margin"
            style={{ fontSize: "26px", fontWeight: "300" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            augue et tellus varius accumsan. Integer auctor nunc dui, ut
            vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel
            aliquam nisi suscipit a. Aenean est enim, porttitor quis felis
            ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi
            tempor ligula at mi fermentum rhoncus. Phasellus euismod
            sollicitudin euismod. Morbi porttitor rutrum risus non pharetra.
            Praesent tincidunt finibus lorem ut euismod. Etiam ut ornare mauris,
            ut luctus nisl.
          </p>
        </Group>
      </Row>
      <Row width={"90%"} classes={"center padding_v"}>
        <Group>
          <p
            className="no_margin"
            style={{ fontSize: "20px", fontWeight: "300" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            augue et tellus varius accumsan. Integer auctor nunc dui, ut
            vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel
            aliquam nisi suscipit a. Aenean est enim, porttitor quis felis
            ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi
            tempor ligula at mi fermentum rhoncus. Phasellus euismod
            sollicitudin euismod. Morbi porttitor rutrum risus non pharetra.
            Praesent tincidunt finibus lorem ut euismod. Etiam ut ornare mauris,
            ut luctus nisl.
          </p>
        </Group>
      </Row>
      <Row classes={"gap padding_v"}>
        <Group height="50vh">
          <Image image={img1} />
        </Group>
        <Group height="50vh">
          <Image image={img2} />
        </Group>
      </Row>
      <Row width={"90%"} classes={"center padding_v"}>
        <Group>
          <p
            className="no_margin"
            style={{ fontSize: "20px", fontWeight: "300" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            augue et tellus varius accumsan. Integer auctor nunc dui, ut
            vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel
            aliquam nisi suscipit a. Aenean est enim, porttitor quis felis
            ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi
            tempor ligula at mi fermentum rhoncus. Phasellus euismod
            sollicitudin euismod. Morbi porttitor rutrum risus non pharetra.
            Praesent tincidunt finibus lorem ut euismod. Etiam ut ornare mauris,
            ut luctus nisl.
          </p>
        </Group>
      </Row>
    </div>
  );
}
