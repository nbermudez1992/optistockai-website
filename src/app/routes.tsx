import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { Pricing } from "./components/Pricing";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: Product },
      { path: "pricing", Component: Pricing },
      { path: "articles", Component: Blog },
      { path: "articles/:slug", Component: BlogPost },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
