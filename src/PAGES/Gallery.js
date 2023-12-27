import React, { useEffect, useState } from "react";
import { c_footer, c_nav, routes } from "../Constants";
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
import { Image } from "../COMPONENTS/Image";
import { Group } from "../COMPONENTS/Group";
import { screenHeight, screenWidth } from "../Global";
import { Spacer } from "../COMPONENTS/Spacer";
import { Clickable } from "../COMPONENTS/Clickable";
import { useLocation } from "react-router-dom";

export default function Gallery1() {
  const location = useLocation();
  const images = [
    {Image: img1, Alt: ""},
    {Image: img2, Alt: ""},
    {Image: img3, Alt: ""},
    {Image: img4, Alt: ""},
    {Image: img5, Alt: ""},
    {Image: img6, Alt: ""},
    {Image: img7, Alt: ""},
    {Image: img8, Alt: ""},
    {Image: img9, Alt: ""},
  ];
  const [chosenImage, setChosenImage] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = routes.find(
      (route) => `/${route.path}` === location.pathname
    ).title;
  }, [])
  
  return (
    <div className="fade_in main_title_font">
      {routes.find((route) => `/${route.path}` === location.pathname).Helmet}{c_nav()}
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
                  image={image.Image}
                  height={screenHeight * 0.4}
                  classes={"cover"}
                  alt={image.Alt}
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
              src={chosenImage.Image}
              className="cover"
              style={{
                maxWidth: screenWidth * 0.8,
                maxHeight: screenHeight * 0.8,
              }}
              alt={chosenImage.Alt}
            />
          </div>
        </div>
      )}
      {c_footer()}
    </div>
  );
}
