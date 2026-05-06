import { useState } from "react";
import "./BookingPage.css";

const bookingPackages = [
  {
    id: "one-bed",
    title: "One Bedroom",
    maxPax: "3 Pax per room",
    extraPaxInfo: "1 extra person allowed @ Rs. 4,000",
    options: [
      { name: "With dining room & pool", price: "15,000", desc: "No meals" },
      { name: "Without pool", price: "10,000", desc: "No meals" },
    ],
  },
  {
    id: "two-bed",
    title: "Two Bedroom",
    maxPax: "3 Pax per room",
    extraPaxInfo: "1 extra person allowed @ Rs. 4,000",
    options: [
      { name: "With dining room & pool", price: "25,000", desc: "No meals" },
      { name: "Without pool", price: "20,000", desc: "No meals" },
    ],
  },
  {
    id: "three-bed",
    title: "Three Bedroom",
    maxPax: "3 Pax per room",
    extraPaxInfo: "1 extra person allowed @ Rs. 4,000",
    options: [
      { name: "With dining room & pool", price: "35,000", desc: "No meals" },
      { name: "Without pool", price: "25,000", desc: "No meals" },
    ],
  },
  {
    id: "four-bed",
    title: "Four Bedroom",
    maxPax: "3 Pax per room",
    extraPaxInfo: "1 extra person allowed @ Rs. 4,000",
    options: [
      { name: "With dining room & pool", price: "45,000", desc: "No meals" },
      { name: "Without pool", price: "35,000", desc: "No meals" },
    ],
  },
];

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "one-bed",
    packageOption: "option-1",
    extraPerson: "0",
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
            Review our accommodation options below and fill out the reservation
            form. Our team will help you plan your unforgettable stay at Monsoon Palace.
          </p>
        </div>

        <div className="bookingPage-content">
          {/* Packages Info */}
          <div className="bookingPage-info">
            <h2 className="bookingPage-sectionTitle">Accommodation Packages</h2>
            <div className="bookingPage-packagesGrid">
              {bookingPackages.map((pkg) => (
                <div key={pkg.id} className="bookingPackage-card">
                  <h3 className="bookingPackage-title">{pkg.title}</h3>
                  <div className="bookingPackage-pax">
                    <span className="bookingPackage-paxMax">Max: {pkg.maxPax}</span>
                    <span className="bookingPackage-paxExtra">
                      ({pkg.extraPaxInfo})
                    </span>
                  </div>
                  <div className="bookingPackage-options">
                    {pkg.options.map((opt, index) => (
                      <div key={index} className="bookingPackage-option">
                        <div className="bookingPackage-optionHeader">
                          <span className="bookingPackage-optionName">
                            {opt.name}
                          </span>
                          <span className="bookingPackage-optionPrice">
                            Rs. {opt.price}
                          </span>
                        </div>
                        <span className="bookingPackage-optionDesc">
                          {opt.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bookingPage-formWrapper">
            <h2 className="bookingPage-sectionTitle">Reservation Form</h2>
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
                    <label htmlFor="roomType">Room Type</label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      required
                    >
                      <option value="one-bed">One Bedroom</option>
                      <option value="two-bed">Two Bedroom</option>
                      <option value="three-bed">Three Bedroom</option>
                      <option value="four-bed">Four Bedroom</option>
                    </select>
                  </div>
                  
                  <div className="bookingPage-inputGroup">
                    <label htmlFor="packageOption">Package Option</label>
                    <select
                      id="packageOption"
                      name="packageOption"
                      value={formData.packageOption}
                      onChange={handleChange}
                      required
                    >
                      <option value="option-1">With dining room & pool</option>
                      <option value="option-2">Without pool</option>
                    </select>
                  </div>

                  <div className="bookingPage-inputGroup">
                    <label htmlFor="extraPerson">Extra Persons</label>
                    <select
                      id="extraPerson"
                      name="extraPerson"
                      value={formData.extraPerson}
                      onChange={handleChange}
                      required
                    >
                      <option value="0">None</option>
                      <option value="1">1 Extra Person (@ Rs. 4,000)</option>
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
                  
                  <div className="bookingPage-inputGroup bookingPage-fullWidth">
                    <label htmlFor="guests">Total Guests</label>
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
                </div>

                <div className="bookingPage-inputGroup bookingPage-fullWidth mt1">
                  <label htmlFor="message">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your preferences, special occasions, or any specific requirements..."
                    rows="4"
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
        </div>
      </div>

      {/* Background Decoration */}
      <div className="bookingPage-bgDecoration"></div>
    </section>
  );
};

export default BookingPage;





