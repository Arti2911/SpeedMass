import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import OurService from "./Components/OurServices/OurService";
import TermsCondition from "./Components/TermsCondition/TermsCondition";
import Policy from "./Components/Policy/Policy";
import Contact from "./Components/Contact/Contact";
import Blogs from "./Components/Blogs/Blogs";
import JoinUs from "./Components/JoinUs/JoinUs";
import WebDevelopment from "./Components/WebDevelopment/WebDevelopment";
import Application from "./Components/ApplicationForm/Application";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<OurService />} />
        <Route exact path="/term" element={<TermsCondition />} />
        <Route exact path="/policy" element={<Policy />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/join" element={<JoinUs />} />
        <Route exact path="/web" element={<WebDevelopment />} />
        <Route exact path="/app" element={<Application />} />
        {/* <Redirect to="/" /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
