
import React from "react";
import Navbar from "./components/Navbar";
import LandingSection from "./components/LandingSection";
import AboutCivicSafety from "./components/AboutCivicSafety";
import Features from "./components/Features";
import IssueList from "./components/IssueList";
import ContactPage from "./components/ContactPage";

export default function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <LandingSection />
      </section>
      <section id="about">
        <AboutCivicSafety />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="issues">
        <IssueList />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
    </div>
  );
}
