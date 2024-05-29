import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Hiw from "./Components/Hiw";
import Bento from "./Components/Bento";
import Companiesline from "./Components/Companiesline";
import Customerstories from "./Components/Customerstories";
import Download from "./Components/Download";
import Pricing from "./Components/Pricing";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Hiw />
        <Bento />
        <Companiesline />
        <Customerstories />
        <Download />
        <Pricing />
        <Contact />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
