import { motion as Motion } from "framer-motion";
import {
  FaBath,
  FaBookOpen,
  FaChair,
  FaCoffee,
  FaHospital,
  FaPhoneAlt,
  FaPlug,
  FaShoePrints,
  FaSuitcase,
  FaTint,
  FaTv,
  FaTshirt,
  FaWheelchair,
  FaWifi,
  FaWind,
  FaWater,
} from "react-icons/fa";
import "./OurFacilityPage.css";

import HeroImage from "../../assets/images/gallery-new/Landscape/landscape1.JPG";
import RoomImage from "../../assets/images/gallery-new/Rooms/rooms3.JPG";
import PoolImage from "../../assets/images/gallery-new/Landscape/landscape5.JPG";
import DiningImage from "../../assets/images/gallery-new/Indoor Dining/indoorDining1.JPG";
import OutdoorDiningImage from "../../assets/images/gallery-new/Outdoor Dining/outdoorDining1.png";
import LoungeImage from "../../assets/images/gallery-new/Amenities/amenities6.JPG";
import EntertainmentImage from "../../assets/images/gallery-new/Amenities/amenities12.JPG";

const facilityHighlights = [
  {
    title: "Rooms",
    label: "Quiet private stays",
    image: RoomImage,
  },
  {
    title: "Pool",
    label: "Open-air leisure",
    image: PoolImage,
  },
  {
    title: "Indoor Dining",
    label: "Comfortable family meals",
    image: DiningImage,
  },
  {
    title: "Outdoor Dining",
    label: "Evenings under the sky",
    image: OutdoorDiningImage,
  },
  {
    title: "Entertainment",
    label: "Fun for everyone",
    image: EntertainmentImage,
  },
];

const amenities = [
  { name: "High Speed Wireless Internet", icon: FaWifi },
  { name: "LCD / LED Television with Satellite Channels", icon: FaTv },
  { name: "Tea / Coffee Maker", icon: FaCoffee },
  { name: "Iron / Ironing Board (On Request)", icon: FaTshirt },
  { name: "Two Bottles of Packaged Drinking Water", icon: FaTint },
  { name: "Dental Kit, Shaving Kit, Soap, Shampoo", icon: FaBath },
  { name: "Newspaper", icon: FaBookOpen },
  { name: "Books for Reading", icon: FaBookOpen },
  { name: "Writing Table with Chair", icon: FaChair },
  { name: "Shoe Horn and Slippers", icon: FaShoePrints },
  { name: "Left Luggage Facilities", icon: FaSuitcase },
  { name: "Wheelchair", icon: FaWheelchair },
  { name: "Shoe Cleaning Facility", icon: FaShoePrints },
  { name: "Doctor on Call (Chargeable)", icon: FaHospital },
  { name: "Telephone with Direct Dial", icon: FaPhoneAlt },
  { name: "Adapters and Extension Cable (On Request)", icon: FaPlug },
  { name: "Hair Dryer", icon: FaWind },
  { name: "Riverside Leisure Activities", icon: FaWater },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09 },
  },
};

const OurFacilityPage = () => {
  return (
    <main className="facilityPage">
      <section className="facilityHero">
        <div className="facilityHero-media" aria-hidden="true">
          <img src={HeroImage} alt="" />
        </div>
        <Motion.div
          className="facilityHero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <Motion.span className="facilityPage-kicker" variants={fadeInUp}>
            Our Facility
          </Motion.span>
          <Motion.h1 className="facilityHero-title" variants={fadeInUp}>
            Spaces made for slow resort living.
          </Motion.h1>
          <Motion.p className="facilityHero-copy" variants={fadeInUp}>
            Comfortable rooms, inviting dining spaces, and thoughtful guest
            amenities come together for a calm stay at Monsoon Palace.
          </Motion.p>
        </Motion.div>
      </section>

      <section className="facilityShowcase">
        <div className="facilityPage-container">
          <Motion.div
            className="facilityShowcase-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <Motion.span className="facilityPage-kicker" variants={fadeInUp}>
              Property Photos
            </Motion.span>
            <Motion.h2 className="facilityPage-title" variants={fadeInUp}>
              Resort corners worth lingering in
            </Motion.h2>
          </Motion.div>

          <Motion.div
            className="facilityPhoto-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {facilityHighlights.map((item, index) => (
              <Motion.article
                className={`facilityPhoto-card ${
                  index === 0 ? "facilityPhoto-card--large" : ""
                }`}
                key={item.title}
                variants={fadeInUp}
              >
                <img src={item.image} alt={item.title} />
                <div className="facilityPhoto-shade" />
                <div className="facilityPhoto-copy">
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
              </Motion.article>
            ))}
          </Motion.div>
        </div>
      </section>

      <section className="facilityAmenities">
        <div className="facilityPage-container facilityAmenities-layout">
          <Motion.div
            className="facilityAmenities-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <Motion.span className="facilityPage-kicker" variants={fadeInUp}>
              Amenities
            </Motion.span>
            <Motion.h2 className="facilityPage-title" variants={fadeInUp}>
              Everything close at hand
            </Motion.h2>
            <Motion.p className="facilityPage-text" variants={fadeInUp}>
              From in-room comforts to practical support services, the details
              are arranged to make every stay easy from arrival to checkout.
            </Motion.p>
            <Motion.div className="facilityAmenities-image" variants={fadeInUp}>
              <img src={LoungeImage} alt="Monsoon Palace guest facility" />
            </Motion.div>
          </Motion.div>

          <Motion.div
            className="facilityAmenities-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <Motion.div
                  className="facilityAmenity-item"
                  key={amenity.name}
                  variants={fadeInUp}
                >
                  <span className="facilityAmenity-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <p>{amenity.name}</p>
                </Motion.div>
              );
            })}
          </Motion.div>
        </div>
      </section>

      <div className="facilityPage-bg" aria-hidden="true" />
    </main>
  );
};

export default OurFacilityPage;
