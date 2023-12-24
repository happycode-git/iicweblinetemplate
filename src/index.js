import React from "react";
import ReactDOM from "react-dom/client";
import "./STYLES/Sizes.css";
import "./STYLES/Fonts.css";
import "./STYLES/Layout.css";
import "./STYLES/Format.css";
import "./STYLES/Animations.css";
import "./STYLES/Colors.css";
import "./STYLES/Responsive.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  contactTemplateID,
  emailPublicKey,
  emailServiceID,
  routes,
} from "./Constants";
import emailjs from "@emailjs/browser";

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root"));
function emailInit() {
  emailjs.init(emailPublicKey);
}
emailInit();
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
