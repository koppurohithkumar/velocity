import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { BookingForm } from "./components/BookingForm";
import { BookingSteps } from "./components/BookingSteps";
import { About } from "./components/About.js";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { VehicleModel } from "./components/VehicleModel";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookingForm" element={<BookingForm />} />
        <Route path="/bookingSteps/" element={<BookingSteps />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/vehicleModel" element={<VehicleModel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
