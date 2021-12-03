import React from "react";
import { 
  Header, 
  HeroSection,
  ContactForm,
  Footer
} from "./components/index";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <HeroSection />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
