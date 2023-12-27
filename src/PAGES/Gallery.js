import React, { useState } from "react";
import { c_footer, c_nav } from "../Constants";
import { Row } from "../COMPONENTS/Row";
import img1 from "../IMAGES/MAIN/stock1.jpg";
import img2 from "../IMAGES/MAIN/stock2.jpg";
import img3 from "../IMAGES/MAIN/stock3.jpg";
import img4 from "../IMAGES/MAIN/stock4.jpg";
import img5 from "../IMAGES/MAIN/stock5.jpg";
import img6 from "../IMAGES/MAIN/stock6.jpg";
import img7 from "../IMAGES/MAIN/stock7.jpg";
import img8 from "../IMAGES/MAIN/stock8.jpg";
import img9 from "../IMAGES/MAIN/stock9.jpg";
import img10 from "../IMAGES/MAIN/stock10.jpg";
import { Image } from "../COMPONENTS/Image";
import { Group } from "../COMPONENTS/Group";
import { screenHeight, screenWidth } from "../Global";
import { Spacer } from "../COMPONENTS/Spacer";
import { Clickable } from "../COMPONENTS/Clickable";
import { FaXmark } from "react-icons/fa6";

export default function Gallery1() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [chosenImage, setChosenImage] = useState(null);
  return (
    <div className="fade_in main_title_font">
      {c_nav()}
      <h1 className="xlarge_text center_text" style={{ letterSpacing: "-1px" }}>
        Take a closer look
      </h1>
      <Row>
        {images.map((image, i) => {
          return (
            <Group key={i}>
              <Clickable
                onClick={() => {
                  setChosenImage(image);
                }}
              >
                <Image
                  image={image}
                  height={screenHeight * 0.4}
                  classes={"cover"}
                />
              </Clickable>
            </Group>
          );
        })}
      </Row>
      <Spacer height={20} />
      {chosenImage !== null && (
        <div
          onClick={() => {
            setChosenImage(null);
          }}
          className="fixed top bottom right left pointer"
          style={{ backgroundColor: "rgba(0,0,0,0.8)", zIndex: 2000 }}
        >
          <div className="center_text relative" style={{}}>
            <Spacer height={"30px"} />
            <img
              src={chosenImage}
              className="cover"
              style={{
                maxWidth: screenWidth * 0.8,
                maxHeight: screenHeight * 0.8,
              }}
            />
          </div>
        </div>
      )}
      {c_footer()}
    </div>
  );
}
