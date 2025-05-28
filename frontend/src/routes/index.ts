import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

const publicRoutes = [
    { path: '/', page: Home, layout: null },
    { path: '/about', page: AboutUs, layout: null },
    { path: '/contact', page: Contact, layout: null },
    { path: '*', page: NotFound, layout: null },
]

export { publicRoutes }