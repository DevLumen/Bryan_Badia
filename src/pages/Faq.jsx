import FaqAccordian from "../components/FaqAccordian";
import Navbar from "../components/Navbar";
import "../styles/Faq.css";

export default function Faq() {
    return (
      <>
        <Navbar/>
        <div id="FAQ-header">
            <p>Frequently Asked Questions</p>
        </div>
        <div id="FAQ-container">
            <FaqAccordian/>
        </div>
      </>
    )
  }