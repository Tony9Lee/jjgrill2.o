import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import NavBar from "./NavBar";
import OrderOnline from "./OrderOnline";
import logo from "./logo.JPG";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppContent = () => {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/order-online" element={<OrderOnline />} />

        <Route
          path="/"
          element={
            <main>
              <section className="menu section">
                <div className="title">
                  <img src={logo} alt="logo" className="logo" />
                  <div className="hero-banner"></div>
                  <h1>TO ORDER (909-390-9020)</h1>
                  <h2>59 S. Milliken Ave, Suite #101, Ontario</h2>
                  <h3>
                    Deliveries Available by Special Arrangement Only! Delivery
                    must be a minimum of $60.
                  </h3>
                  <h4>
                    For BURGERS, SANDWICHES, & BURRITOS ONLY - Make It A Combo
                    for $4.89 (Includes Regular Drink & Fries)
                  </h4>
                  <h5>
                    • Hours: Mon - Fri 6:45AM to 2:30PM • Saturday 6:45AM to
                    12:30PM • Sunday CLOSED
                  </h5>

                  <div className="promo-gallery">
                    <Slider
                      dots
                      infinite
                      speed={700}
                      slidesToShow={1}
                      slidesToScroll={1}
                      autoplay
                      autoplaySpeed={5000}
                      arrows
                    >
                      <div>
                        <img src="/images/ad1.jpg" alt="Ad 1" />
                      </div>
                      <div>
                        <img src="/images/ad2.jpg" alt="Ad 2" />
                      </div>
                      <div>
                        <img src="/images/ad3.jpg" alt="Ad 3" />
                      </div>
                    </Slider>
                  </div>
                </div>
              </section>

              <div className="map-container">
                <iframe
                  title="JJ Grill Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31445.390527734548!2d-117.58530157512416!3d34.06209176200482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c3357b3d7ac1ef%3A0xb0131cc29ecd129e!2s59%20S%20Milliken%20Ave%2C%20Ontario%2C%20CA%2091761!5e0!3m2!1sen!2sus!4v1749701338319!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </main>
          }
        />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
        <AppContent />
    </Router>
  );
};

export default App;
