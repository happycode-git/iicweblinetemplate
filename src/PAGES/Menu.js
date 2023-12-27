import React from "react";
import { Navigation1 } from "../UTILITIES/Navigation";
import { Footer1 } from "../UTILITIES/Footer";
import { Row } from "../COMPONENTS/Row";
import { Group } from "../COMPONENTS/Group";
import { Block1 } from "../COMPONENTS/Blocks";
import { Image } from "../COMPONENTS/Image";
//
import img1 from "../IMAGES/MAIN/stock1.jpg";
import img2 from "../IMAGES/MAIN/stock2.jpg";
import img3 from "../IMAGES/MAIN/stock3.jpg";
import img4 from "../IMAGES/MAIN/stock4.jpg";
import img5 from "../IMAGES/MAIN/stock5.jpg";
import { c_footer, c_nav } from "../Constants";
import { Spacer } from "../COMPONENTS/Spacer";

export function Menu1() {
  const drinks = [
    {
      Name: "Pepsi",
      Prices: [
        { Size: "S", Price: "5" },
        { Size: "M", Price: "6" },
      ],
      Details: "8oz cup",
    },
    {
      Name: "Coca-Cola",
      Prices: [
        { Size: "S", Price: "4" },
        { Size: "M", Price: "5" },
      ],
      Details: "12oz can",
    },
    {
      Name: "Iced Tea",
      Prices: [
        { Size: "S", Price: "3" },
        { Size: "M", Price: "4" },
      ],
      Details: "Sweetened",
    },
    {
      Name: "Orange Juice",
      Prices: [
        { Size: "S", Price: "7" },
        { Size: "M", Price: "8" },
      ],
      Details: "Freshly squeezed",
    },
    {
      Name: "Lemonade",
      Prices: [
        { Size: "S", Price: "4" },
        { Size: "M", Price: "5.5" },
      ],
      Details: "Refreshing homemade lemonade.",
    },
    {
      Name: "Iced Coffee",
      Prices: [
        { Size: "R", Price: "5" },
        { Size: "L", Price: "7" },
      ],
      Details: "Cold brew coffee with a hint of sweetness.",
    },
    {
      Name: "Fruit Punch",
      Prices: [
        { Size: "S", Price: "4.5" },
        { Size: "M", Price: "6" },
      ],
      Details: "Tropical fruit punch to quench your thirst.",
    },
  ];
  const breakfast = [
    {
      Name: "Pancakes",
      Prices: [
        { Size: "R", Price: "8" },
        { Size: "L", Price: "10" },
      ],
      Details:
        "Beautiful fluffy pancakes made from the most flavorful ingredients.",
    },
    {
      Name: "Egg and Cheese Croissant",
      Prices: [{ Size: "", Price: "6" }],
      Details: "A classic breakfast sandwich with a buttery croissant.",
    },
    {
      Name: "Avocado Toast",
      Prices: [
        { Size: "S", Price: "7" },
        { Size: "L", Price: "9" },
      ],
      Details: "Sliced avocado on artisanal toast with seasonings.",
    },
    {
      Name: "French Toast",
      Prices: [
        { Size: "Single", Price: "5" },
        { Size: "Full", Price: "9" },
      ],
      Details: "Golden brown French toast topped with powdered sugar.",
    },
  ];
  const entrees = [
    {
      Name: "Prime Steak",
      Prices: [
        { Size: "Half", Price: "25" },
        { Size: "Pound", Price: "40" },
      ],
      Details: "The best wagyu found in the world. Cooked to perfection.",
    },
    {
      Name: "Chicken Alfredo Pasta",
      Prices: [
        { Size: "R", Price: "15" },
        { Size: "L", Price: "28" },
      ],
      Details: "Creamy Alfredo sauce with grilled chicken over pasta.",
    },
    {
      Name: "Vegetarian Quinoa Bowl",
      Prices: [
        { Size: "Single", Price: "12" },
        { Size: "Double", Price: "22" },
      ],
      Details: "A healthy and flavorful bowl with mixed vegetables.",
    },
    {
      Name: "Salmon Caesar Salad",
      Prices: [
        { Size: "R", Price: "18" },
        { Size: "L", Price: "30" },
      ],
      Details: "Grilled salmon served on a bed of crisp Caesar salad.",
    },
  ];
  const dessert = [
    {
      Name: "Tiramisu",
      Prices: [{ Size: "", Price: "7.5" }],
      Details:
        "The most amazing flavors of Italy. Tiramisu made with the finest ingredients.",
    },
    {
      Name: "Chocolate Chip Cookies",
      Prices: [
        { Size: "Dozen", Price: "10" },
        { Size: "Two ", Price: "18" },
      ],
      Details: "Homemade cookies loaded with chocolate chips.",
    },
    {
      Name: "Mango Sorbet",
      Prices: [
        { Size: "Single", Price: "5" },
        { Size: "Double", Price: "8" },
      ],
      Details: "Refreshing mango sorbet made from ripe mangoes.",
    },
    {
      Name: "Apple Crisp",
      Prices: [
        { Size: "Single", Price: "6" },
        { Size: "Family", Price: "12" },
      ],
      Details: "Warm apple crisp with a crispy oat topping.",
    },
  ];

  return (
    <div className="fade_in">
      {c_nav()}
      <Row classes={"padding_v"}>
        <Group height={"70vh"} classes={"relative"}>
          <Image image={img1} classes={"cover"} />
          <Block1 classes={"absolute top left right separate_vertical"}>
            <div></div>
            <div>
              <h1
                className="white center_text all_caps main_title_font"
                style={{ fontSize: "15vw" }}
              >
                Menu
              </h1>
            </div>
            <div></div>
          </Block1>
        </Group>
      </Row>
      <Row>
        <Group classes={"padding"}>
          <h2 className="no_margin all_caps main_title_font large_text">
            Drinks
          </h2>
          <Spacer height={20} />
          <div className="vertical main_body_font">
            {drinks.map((thing, i) => {
              return (
                <div key={i} className="separate_horizontal padding_h">
                  <div>
                    <p
                      className="no_margin all_caps small_text"
                      style={{ fontSize: "20px" }}
                    >
                      {thing.Name}
                    </p>
                    <p className="no_margin">{thing.Details}</p>
                  </div>
                  <div>
                    <div className="horizontal">
                      {thing.Prices.map((price, j) => {
                        return (
                          <div key={j}>
                            <p
                              className="bold right_text no_margin"
                            >
                              {price.Size}
                            </p>
                            <p className="right_text no_margin">
                              ${price.Price}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Group>
        <Group classes={"padding"}>
          <h2 className="no_margin all_caps main_title_font large_text">
            Breakfast
          </h2>
          <Spacer height={20} />
          <div className="vertical main_body_font padding_h">
            {breakfast.map((thing, i) => {
              return (
                <div key={i} className="separate_horizontal padding_h">
                  <div>
                    <p
                      className="no_margin all_caps small_text"
                      style={{ fontSize: "20px" }}
                    >
                      {thing.Name}
                    </p>
                    <p className="no_margin">{thing.Details}</p>
                  </div>
                  <div>
                    <div className="horizontal">
                      {thing.Prices.map((price, j) => {
                        return (
                          <div key={j}>
                            <p
                              className="bold right_text"
                              style={{ margin: 0 }}
                            >
                              {price.Size}
                            </p>
                            <p className="right_text" style={{ margin: 0 }}>
                              ${price.Price}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Group>
        <Group classes={"padding"}>
          <h2 className="no_margin all_caps main_title_font large_text">
            Entrees
          </h2>
          <Spacer height={20} />
          <div className="vertical main_body_font padding_h">
            {entrees.map((thing, i) => {
              return (
                <div key={i} className="separate_horizontal padding_h">
                  <div>
                    <p
                      className="no_margin all_caps small_text"
                      style={{ fontSize: "20px" }}
                    >
                      {thing.Name}
                    </p>
                    <p className="no_margin">{thing.Details}</p>
                  </div>
                  <div>
                    <div className="horizontal">
                      {thing.Prices.map((price, j) => {
                        return (
                          <div key={j}>
                            <p
                              className="bold right_text"
                              style={{ margin: 0 }}
                            >
                              {price.Size}
                            </p>
                            <p className="right_text" style={{ margin: 0 }}>
                              ${price.Price}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Group>
        <Group classes={"padding"}>
          <h2 className="no_margin all_caps main_title_font large_text">
            Desserts
          </h2>
          <Spacer height={20} />
          <div className="vertical main_body_font padding_h">
            {dessert.map((thing, i) => {
              return (
                <div key={i} className="separate_horizontal padding_h">
                  <div>
                    <p
                      className="no_margin all_caps small_text"
                      style={{ fontSize: "20px" }}
                    >
                      {thing.Name}
                    </p>
                    <p className="no_margin">{thing.Details}</p>
                  </div>
                  <div>
                    <div className="horizontal">
                      {thing.Prices.map((price, j) => {
                        return (
                          <div key={j}>
                            <p
                              className="bold right_text"
                              style={{ margin: 0 }}
                            >
                              {price.Size}
                            </p>
                            <p className="right_text" style={{ margin: 0 }}>
                              ${price.Price}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Group>
      </Row>
      <Row classes={"padding_v gap"}>
        <Group height={"40vh"}>
          <Image image={img2} classes={"cover"} />
        </Group>
        <Group height={"40vh"}>
          <Image image={img3} classes={"cover"} />
        </Group>
        <Group height={"40vh"}>
          <Image image={img4} classes={"cover"} />
        </Group>
        <Group height={"40vh"}>
          <Image image={img5} classes={"cover"} />
        </Group>
      </Row>
      {c_footer()}
    </div>
  );
}
