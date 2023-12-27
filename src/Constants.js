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
import { Helmet } from "react-helmet";

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
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Leading website and app development services at ${c_businessName}. Create innovative and scalable solutions with our expert team.`}
        />
        <meta
          name="keywords"
          content="website development, app development, web design, mobile app development, custom websites, responsive web, frontend, backend, SEO"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    )
  },
  {
    path: "2",
    element: <Home2 />,
    text: "Home",
    title: "Home | The best websites in the world!",
    top_nav: true,
    hidden_nav: false,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Leading website and app development services at ${c_businessName}. Create innovative and scalable solutions with our expert team.`}
        />
        <meta
          name="keywords"
          content="website development, app development, web design, mobile app development, custom websites, responsive web, frontend, backend, SEO"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    )
  },
  {
    path: "about",
    element: <About1 />,
    text: "About",
    title: "About | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Learn more about ${c_businessName} and our mission. Discover our team and the innovative solutions we provide in website and app development.`}
        />
        <meta
          name="keywords"
          content="about us, mission, team, website development, app development, innovation"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
  },
  {
    path: "about2",
    element: <About2 />,
    text: "About",
    title: "About | The best websites in the world!",
    top_nav: false,
    hidden_nav: false,
    footer_nav: false,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Learn more about ${c_businessName} and our mission. Discover our team and the innovative solutions we provide in website and app development.`}
        />
        <meta
          name="keywords"
          content="about us, mission, team, website development, app development, innovation"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
  },
  {
    path: "gallery",
    element: <Gallery1 />,
    text: "Gallery",
    title: "Gallery | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Explore the gallery of ${c_businessName}. View our portfolio and discover a collection of visually stunning website and app development projects.`}
        />
        <meta
          name="keywords"
          content="gallery, portfolio, website design, app development, visual projects"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
  },
  {
    path: "services",
    element: <Services1 />,
    text: "Services",
    title: "Services | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Discover the services offered by ${c_businessName}. From website development to app creation, our expert team provides innovative and customized solutions to meet your digital needs.`}
        />
        <meta
          name="keywords"
          content="services, website development, app development, custom solutions, digital services"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),    
  },
  {
    path: "contact",
    element: <Contact1 />,
    text: "Contact",
    title: "Contact | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Contact ${c_businessName} for inquiries, collaborations, or to discuss your project. Reach out to our team for personalized assistance with website and app development.`}
        />
        <meta
          name="keywords"
          content="contact, inquiries, collaborations, website development, app development"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),    
  },
  {
    path: "menu",
    element: <Menu1 />,
    text: "Menu",
    title: "Menu | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Explore the menu at ${c_businessName}. Discover a diverse range of offerings, from website development services to app creation. Choose the solutions that best suit your digital needs.`}
        />
        <meta
          name="keywords"
          content="menu, offerings, website development, app development, digital solutions"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
  },
  {
    path: "faq",
    element: <FAQ1 />,
    text: "FAQ",
    title: "FAQ | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Find answers to frequently asked questions about ${c_businessName}. Learn more about our services, policies, and commonly inquired topics in website and app development.`}
        />
        <meta
          name="keywords"
          content="FAQ, frequently asked questions, website development, app development, policies"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
  },
  {
    path: "locations",
    element: <Locations1 />,
    text: "Locations",
    title: "Locations | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Explore the locations of ${c_businessName}. Find our offices and branches, and discover the accessibility of our website and app development services in various regions.`}
        />
        <meta
          name="keywords"
          content="locations, business branches, website development, app development, accessibility"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
  },
  {
    path: "events",
    element: <Events1 />,
    text: "Events",
    title: "Events | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Discover upcoming events hosted by ${c_businessName}. Stay informed about workshops, webinars, and gatherings related to website and app development.`}
        />
        <meta
          name="keywords"
          content="events, workshops, webinars, website development, app development, gatherings"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
  },
  {
    path: "reviews",
    element: <Reviews1 />,
    text: "Reviews",
    title: "Reviews | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Read reviews and testimonials about ${c_businessName}. Explore what our clients are saying about our top-notch website and app development services.`}
        />
        <meta
          name="keywords"
          content="reviews, testimonials, website development, app development, client feedback"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
  },
  {
    path: "blog",
    element: <Blog1 />,
    text: "Blog",
    title: "Blog | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Explore insightful articles and updates on the ${c_businessName} blog. Stay informed about the latest trends in website and app development, industry news, and expert tips.`}
        />
        <meta
          name="keywords"
          content="blog, articles, website development, app development, industry news, expert tips"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
  },
  {
    path: "blogpost",
    element: <BlogPost />,
    text: "Blog Post",
    title: "Blog Post | The best websites in the world!",
    top_nav: false,
    hidden_nav: false,
    footer_nav: false,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={``}
        />
        <meta
          name="keywords"
          content={``}
        />
        <meta name="author" content={"Innovative Internet Creations LLC"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
  },
  {
    path: "team",
    element: <Team1 />,
    text: "Team",
    title: "Team | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Meet the talented team at ${c_businessName}. Learn about our skilled professionals in website and app development, and discover the expertise behind our innovative solutions.`}
        />
        <meta
          name="keywords"
          content="team, professionals, website development, app development, innovation, expertise"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
  },
  {
    path: "login",
    element: <Login />,
    text: "Login",
    title: "Login | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Log in to ${c_businessName}. Access your account for personalized services in website and app development.`}
        />
        <meta
          name="keywords"
          content="login, account, website development, app development, personalized services"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    ),
    
  },
  {
    path: "orderonline",
    element: <OrderOnline1 />,
    text: "Order Online",
    title: "Order Online | The best websites in the world!",
    top_nav: true,
    hidden_nav: true,
    footer_nav: true,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Order online from ${c_businessName}. Explore our menu and choose from a variety of website and app development services to meet your digital needs.`}
        />
        <meta
          name="keywords"
          content="order online, menu, website development, app development, digital services"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
  },
  {
    path: "ordercart",
    element: <OrderCart1 />,
    text: "Order Cart",
    title: "Order Cart | The best websites in the world!",
    top_nav: false,
    hidden_nav: false,
    footer_nav: false,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`View and manage your order cart at ${c_businessName}. Review the selected website and app development services before confirming your order.`}
        />
        <meta
          name="keywords"
          content="order cart, review order, website development, app development, digital services"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
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
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`Log in to ${c_businessName}. Access your account for personalized services in website and app development.`}
        />
        <meta
          name="keywords"
          content="login, account, website development, app development, personalized services"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    ),
    
  },
  {
    path: "orders",
    element: <OrderOrders />,
    text: "Order Login",
    title: "Order Login | The best websites in the world!",
    top_nav: false,
    hidden_nav: false,
    footer_nav: false,
    Helmet: (
      <Helmet>
        <meta
          name="description"
          content={`View your orders at ${c_businessName}. Review and track the website and app development services you've ordered.`}
        />
        <meta
          name="keywords"
          content="orders, order history, website development, app development, order tracking"
        />
        <meta name="author" content={`Innovative Internet Creations LLC`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Helmet>
    ),
    
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
