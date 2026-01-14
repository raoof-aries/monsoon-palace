import { useState } from "react";
import "./BookingPage.css";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="bookingPage-wrapper">
      <div className="bookingPage-container">
        <div className="bookingPage-header">
          <span className="bookingPage-badge">Reserve Your Stay</span>
          <h1 className="bookingPage-title">
            Book Your
            <br />
            <span className="bookingPage-gradient">Perfect Escape</span>
          </h1>
          <p className="bookingPage-description">
            Ready to experience luxury redefined? Fill out the form below and our
            team will help you plan your unforgettable stay at Monsoon Palace.
          </p>
        </div>

        <div className="bookingPage-form">
          <form onSubmit={handleSubmit}>
            <div className="bookingPage-formGrid">
              <div className="bookingPage-inputGroup">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="bookingPage-inputGroup">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="bookingPage-inputGroup">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <div className="bookingPage-inputGroup">
                <label htmlFor="guests">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>

              <div className="bookingPage-inputGroup">
                <label htmlFor="checkIn">Check-in Date</label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="bookingPage-inputGroup">
                <label htmlFor="checkOut">Check-out Date</label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="bookingPage-inputGroup bookingPage-fullWidth mt1">
              <label htmlFor="message">Special Requests</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your preferences, special occasions, or any specific requirements..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="bookingPage-submitBtn">
              <span>Send Inquiry</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="bookingPage-bgDecoration"></div>
    </section>
  );
};

export default BookingPage;




