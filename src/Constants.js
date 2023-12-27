import { BlogPost } from "./BLOGS/BlogPost";
import { About1, About2 } from "./PAGES/About";
import { Blog1 } from "./PAGES/Blog";
import { Contact1 } from "./PAGES/Contact";
import { Events1 } from "./PAGES/Events";
import { FAQ1 } from "./PAGES/FAQ";
import { Home1 } from "./PAGES/Home";
import { Home2 } from "./PAGES/Home";
import { Locations1 } from "./PAGES/Locations";
import { Login, OrderLogin } from "./PAGES/Login";
import { Menu1, Menu2 } from "./PAGES/Menu";
import OrderCart1 from "./PAGES/OrderCart";
import OrderConfirmation from "./PAGES/OrderConfirmation";
import { OrderOnline1 } from "./PAGES/OrderOnline";
import { Reviews1 } from "./PAGES/Reviews";
import Services1 from "./PAGES/Services";
import { Team1 } from "./PAGES/Team";
import Test from "./PAGES/Test";
import { Footer1 } from "./UTILITIES/Footer";
import { Navigation1 } from "./UTILITIES/Navigation";
import OrderOrders from "./PAGES/OrderOrders";
import Gallery1 from "./PAGES/Gallery";

// BUSINESS INFO
export const c_businessName = "Happy Code Dev";
export const c_desc =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan. Integer auctor nunc dui, ut vehicula turpis pretium accumsan. Sed ullamcorper tortor justo, vel aliquam nisi suscipit a. Aenean est enim, porttitor quis felis ultrices, volutpat commodo nibh. Maecenas sed semper massa. Morbi tempor ligula at mi fermentum rhoncus.";
export const c_copyright = `Copyright 2023 ${c_businessName}. All Rights Reserved.`;
export const c_instagram = "https://www.instagram.com/creations_of_innovation/";
export const c_facebook = "";
export const c_yelp = "";
export const c_phone = "123-456-7890";
export const c_email = "bagel@happycodewebsites.com";
export const c_address = "1024 E 4th St. National City, CA 91950";
export const c_domain = "http://localhost:3000";
//
export const stripePublishableKey =
  "pk_test_51NuJfZIDyFPNiK5CPKgovhg5fen3VM4SzxvBqdYAfwriYKzoqacsfIOiNAt5ErXss3eHYF45ak5PPFHeAD0AXit900imYxFTry";
export const serverURL = "https://thunder-easy-pick.glitch.me";
//
export const emailPublicKey = "L6fRNP99J11mfa0UD";
export const emailServiceID = "bagel";
export const contactTemplateID = "contact_customer";

// ROUTES
export const routes = [
  {
    path: "",
    element: <Home1 />,
    text: "Home",
    title: "Home | The best websites in the world!",
    top_nav: true,
    hidden_nav: false,
    footer_nav: true,
  },
  {
    path: "2",
    element: <Home2 />,
    text: "Home",
    title: "Home | The best websites in the world!",
    top_nav: true,
    hidden_nav: false,
    footer_nav: true,
  },
  {
    path: "about",
    element: <About1 />,
    text: "About",
    title: "About | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "about2",
    element: <About2 />,
    text: "About",
    title: "About | The best websites in the world!",
    top_nav: false,
    hidden_nav: false,
    footer_nav: false,
  },
  {
    path: "gallery",
    element: <Gallery1 />,
    text: "Gallery",
    title: "Gallery | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "services",
    element: <Services1 />,
    text: "Services",
    title: "Services | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "contact",
    element: <Contact1 />,
    text: "Contact",
    title: "Contact | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "menu",
    element: <Menu1 />,
    text: "Menu",
    title: "Menu | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "faq",
    element: <FAQ1 />,
    text: "FAQ",
    title: "FAQ | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "locations",
    element: <Locations1 />,
    text: "Locations",
    title: "Locations | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "events",
    element: <Events1 />,
    text: "Events",
    title: "Events | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "reviews",
    element: <Reviews1 />,
    text: "Reviews",
    title: "Reviews | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "blog",
    element: <Blog1 />,
    text: "Blog",
    title: "Blog | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "blogpost",
    element: <BlogPost />,
    text: "Blog Post",
    title: "Blog Post | The best websites in the world!",
    top_nav: false,
    hidden_nav: false,
    footer_nav: false,
  },
  {
    path: "team",
    element: <Team1 />,
    text: "Team",
    title: "Team | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "login",
    element: <Login />,
    text: "Login",
    title: "Login | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "orderonline",
    element: <OrderOnline1 />,
    text: "Order Online",
    title: "Order Online | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
  },
  {
    path: "ordercart",
    element: <OrderCart1 />,
    text: "Order Cart",
    title: "Order Cart | The best websites in the world!",
    top_nav: false,
    hidden_nav: false,
    footer_nav: false,
  },
  {
    path: "orderconfirmation",
    element: <OrderConfirmation />,
    text: "Order Confirmed",
    title: "Order Confirmed | The best websites in the world!",
    top_nav: false,
    hidden_nav: false,
    footer_nav: false,
  },
  {
    path: "orderlogin",
    element: <OrderLogin />,
    text: "Order Login",
    title: "Order Login | The best websites in the world!",
    top_nav: false,
    hidden_nav: false,
    footer_nav: false,
  },
  {
    path: "orders",
    element: <OrderOrders />,
    text: "Order Login",
    title: "Order Login | The best websites in the world!",
    top_nav: false,
    hidden_nav: false,
    footer_nav: false,
  },
  {
    path: "test",
    element: <Test />,
    text: "Test",
    title: "Test | The best websites in the world!",
  },
];

//
export function c_nav() {
  return <Navigation1 />;
}
export function c_footer() {
  return <Footer1 />;
}
