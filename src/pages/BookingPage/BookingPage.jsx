import { useState } from "react";
import "./BookingPage.css";
import ResortViewImage from "../../assets/images/home/top.webp";

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

  const handlePackageSelect = (roomType, packageOption = formData.packageOption) => {
    setFormData({
      ...formData,
      roomType,
      packageOption,
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
        <div className="bookingPage-hero">
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

          <div className="bookingPage-heroCard" aria-hidden="true">
            <img src={ResortViewImage} alt="" />
            <div className="bookingPage-heroShade"></div>
          </div>
        </div>

        <div className="bookingPage-content">
          {/* Packages Info */}
          <div className="bookingPage-info">
            <div className="bookingPage-sectionHeader">
              <h2 className="bookingPage-sectionTitle">Accommodation Packages</h2>
            </div>
            <div className="bookingPage-packagesGrid">
              {bookingPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  role="button"
                  tabIndex={0}
                  className={`bookingPackage-card ${
                    formData.roomType === pkg.id ? "selected" : ""
                  }`}
                  onClick={() => handlePackageSelect(pkg.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handlePackageSelect(pkg.id);
                    }
                  }}
                  aria-pressed={formData.roomType === pkg.id}
                >
                  {formData.roomType === pkg.id && (
                    <span className="bookingPackage-selectedBadge">
                      Selected
                    </span>
                  )}
                  <h3 className="bookingPackage-title">{pkg.title}</h3>
                  <div className="bookingPackage-pax">
                    <span className="bookingPackage-paxMax">Max: {pkg.maxPax}</span>
                    <span className="bookingPackage-paxExtra">
                      ({pkg.extraPaxInfo})
                    </span>
                  </div>
                  <div className="bookingPackage-options">
                    {pkg.options.map((opt, index) => (
                      <span
                        key={index}
                        role="button"
                        tabIndex={0}
                        className={`bookingPackage-option ${
                          formData.roomType === pkg.id &&
                          formData.packageOption === `option-${index + 1}`
                            ? "selected"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePackageSelect(pkg.id, `option-${index + 1}`);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            handlePackageSelect(pkg.id, `option-${index + 1}`);
                          }
                        }}
                        aria-pressed={
                          formData.roomType === pkg.id &&
                          formData.packageOption === `option-${index + 1}`
                        }
                      >
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
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bookingPage-promoRow">
              <div className="bookingPage-discountContainer">
                <div className="bookingPage-discountIconWrapper">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="bookingPage-discountIcon"
                  >
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                    <line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                </div>
                <div className="bookingPage-discountContent">
                  <span className="bookingPage-discountLabel">Special Offer</span>
                  <p className="bookingPage-discountValue">Special Discount from 15% onwards</p>
                </div>
              </div>

              <div className="bookingPage-gpayContainer">
                <div className="bookingPage-gpayIconWrapper">
                  <svg
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="bookingPage-gpayIcon"
                  >
                    <title>Google Pay</title>
                    <path d="M3.963 7.235A3.963 3.963 0 00.422 9.419a3.963 3.963 0 000 3.559 3.963 3.963 0 003.541 2.184c1.07 0 1.97-.352 2.627-.957.748-.69 1.18-1.71 1.18-2.916a4.722 4.722 0 00-.07-.806H3.964v1.526h2.14a1.835 1.835 0 01-.79 1.205c-.356.241-.814.379-1.35.379-1.034 0-1.911-.697-2.225-1.636a2.375 2.375 0 010-1.517c.314-.94 1.191-1.636 2.225-1.636a2.152 2.152 0 011.52.594l1.132-1.13a3.808 3.808 0 00-2.652-1.033zm6.501.55v6.9h.886V11.89h1.465c.603 0 1.11-.196 1.522-.588a1.911 1.911 0 00.635-1.464 1.92 1.92 0 00-.635-1.456 2.125 2.125 0 00-1.522-.598zm2.427.85a1.156 1.156 0 01.823.365 1.176 1.176 0 010 1.686 1.171 1.171 0 01-.877.357H11.35V8.635h1.487a1.156 1.156 0 01.054 0zm4.124 1.175c-.842 0-1.477.308-1.907.925l.781.491c.288-.417.68-.626 1.175-.626a1.255 1.255 0 01.856.323 1.009 1.009 0 01.366.785v.202c-.34-.193-.774-.289-1.3-.289-.617 0-1.11.145-1.479.434-.37.288-.554.677-.554 1.165a1.476 1.476 0 00.525 1.156c.35.308.785.463 1.305.463.61 0 1.098-.27 1.465-.81h.038v.655h.848v-2.909c0-.61-.19-1.09-.568-1.44-.38-.35-.896-.525-1.551-.525zm2.263.154l1.946 4.422-1.098 2.38h.915L24 9.963h-.965l-1.368 3.391h-.02l-1.406-3.39zm-2.146 2.368c.494 0 .88.11 1.156.33 0 .372-.147.696-.44.973a1.413 1.413 0 01-.997.414 1.081 1.081 0 01-.69-.232.708.708 0 01-.293-.578c0-.257.12-.47.363-.647.24-.173.54-.26.9-.26Z" />
                  </svg>
                </div>
                <div className="bookingPage-gpayContent">
                  <span className="bookingPage-gpayLabel">Google Pay</span>
                  <p className="bookingPage-gpayValue">+91 87148 04320</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bookingPage-formWrapper">
            <div className="bookingPage-sectionHeader">
              <h2 className="bookingPage-sectionTitle">Reservation Form</h2>
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





