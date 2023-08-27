import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import AboutPage from "./pages/about-page";
import GroupComponent from "./pages/group-component";
import GroupComponent1 from "./pages/group-component1";
import GroupComponent2 from "./pages/group-component2";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import Dashboard from "./pages/dashboard";
import Services from "./pages/services";
import Acitivities from "./pages/acitivities";
import Profiles from "./pages/profiles";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about-page":
        title = "";
        metaDescription = "";
        break;
      case "/group-12":
        title = "";
        metaDescription = "";
        break;
      case "/group-11":
        title = "";
        metaDescription = "";
        break;
      case "/group-10":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/register-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/acitivities":
        title = "";
        metaDescription = "";
        break;
      case "/profiles":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/group-12" element={<GroupComponent />} />
      <Route path="/group-11" element={<GroupComponent1 />} />
      <Route path="/group-10" element={<GroupComponent2 />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/acitivities" element={<Acitivities />} />
      <Route path="/profiles" element={<Profiles />} />
    </Routes>
  );
}
export default App;
