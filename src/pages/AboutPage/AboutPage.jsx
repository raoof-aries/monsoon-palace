import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";

import About1 from "../../assets/images/about/about1.jpg";
import About2 from "../../assets/images/about/about2.jpg";
import About3 from "../../assets/images/about/about3.jpg";
import AboutMain from "../../assets/images/about/about4.jpg";
import About5 from "../../assets/images/about/about5.webp";
import About6 from "../../assets/images/about/about6.jpg";
// Add these new images to your assets folder:
// about5.jpg - Bharathapuzha river view
// about6.jpg - Malayalam cinema/cultural scene
// about7.jpg - Educational institutions
// about8.jpg - Community life

const AboutPage = () => {
  const places = [
    { name: "Mulla Kadavu Pallam View Point", icon: "🏞️" },
    { name: "Thekkenchery Temple", icon: "🛕" },
    { name: "Manakkutti Anchumoorthy Temple", icon: "🕉️" },
    { name: "Desamangalam Mana", icon: "🏛️" },
    { name: "Mayiladum Para", icon: "⛰️" },
    { name: "Kottipara Bhagavathi Temple", icon: "🛕" },
    { name: "Sree Maha Vishnu Temple", icon: "🕉️" },
    { name: "Kattuvattur Shiva Temple", icon: "🛕" },
  ];

  const demographics = [
    { label: "Population", value: "8,446", icon: "👥" },
    { label: "Pin Code", value: "679532", icon: "📮" },
    { label: "District", value: "Thrissur", icon: "📍" },
    { label: "Division", value: "Central Kerala", icon: "🗺️" },
  ];

  const institutions = [
    {
      name: "Government High School",
      year: "Est. 1913",
      icon: "🎓",
      desc: "Became High School in 1967",
    },
    {
      name: "Service Co-operative Bank",
      year: "Community Service",
      icon: "🏦",
      desc: "Serving local population",
    },
    {
      name: "Mahila Samajam",
      year: "Social Welfare",
      icon: "👥",
      desc: "Women's community organization",
    },
    {
      name: "Grameena Vayanasala",
      year: "Village Library",
      icon: "📚",
      desc: "Intellectual pursuits center",
    },
  ];

  const films = [
    { name: "Adharvam", director: "Bharathan" },
    { name: "Keli", director: "Bharathan" },
    { name: "Njan Gandharvan", director: "Padmarajan" },
    { name: "Indira", director: "Suhasini Maniratnam" },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="aboutPage-wrapper">
      {/* Hero Section */}
      <section className="aboutPage-hero">
        <motion.div
          className="aboutPage-heroContent"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="aboutPage-badge" variants={fadeIn}>
            Discover
          </motion.span>
          <motion.h1 className="aboutPage-title" variants={fadeInUp}>
            Welcome to
            <br />
            <span className="aboutPage-gradient">Desamangalam</span>
          </motion.h1>
          <motion.p className="aboutPage-heroText" variants={fadeInUp}>
            A serene village steeped in rich heritage, vibrant culture, and
            timeless traditions
          </motion.p>
        </motion.div>
        <motion.div
          className="aboutPage-heroImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.5 }}
        >
          <img src={AboutMain} alt="Desamangalam Village" />
          <div className="aboutPage-imageOverlay"></div>
        </motion.div>
      </section>

      {/* Quick Facts */}
      {/* <section className="aboutPage-quickFacts">
        <div className="aboutPage-container">
          <motion.div
            className="aboutPage-factsGrid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {demographics.map((item, index) => (
              <motion.div
                key={index}
                className="aboutPage-factCard"
                variants={scaleIn}
              >
                <div className="aboutPage-factIcon">{item.icon}</div>
                <div className="aboutPage-factContent">
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Geography Section */}
      <section className="aboutPage-section">
        <div className="aboutPage-container">
          <motion.div
            className="aboutPage-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="aboutPage-textContent">
              <motion.span className="aboutPage-sectionBadge" variants={fadeIn}>
                Location
              </motion.span>
              <motion.h2 className="aboutPage-sectionTitle" variants={fadeInUp}>
                <span className="aboutPage-gradient">Geography</span>
              </motion.h2>
              <motion.p className="aboutPage-text" variants={fadeInUp}>
                Desamangalam is a small village surrounded by Shoranur in the
                east, Kunnamkulam in the west, Pattambi in the north and
                Wadakkanchery in the south. It is 12 km from Shoranur via the
                Shoranur–Guruvayur road, Shoranur being one of the important
                junctions of Southern Railway, situated on the banks of
                Bharathapuzha.
              </motion.p>
              <motion.div
                className="aboutPage-stats"
                variants={staggerContainer}
              >
                {[
                  { icon: "📍", title: "12 km", desc: "From Shoranur" },
                  { icon: "🚂", title: "Connected", desc: "Southern Railway" },
                  { icon: "🌊", title: "Riverside", desc: "Bharathapuzha" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="aboutPage-stat"
                    variants={scaleIn}
                  >
                    <div className="aboutPage-statIcon">{stat.icon}</div>
                    <div>
                      <h4>{stat.title}</h4>
                      <p>{stat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div className="aboutPage-imageContent" variants={scaleIn}>
              <img src={About3} alt="Geography" />
              <div className="aboutPage-imageOverlay"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bharathapuzha River Section */}
      <section className="aboutPage-section aboutPage-sectionAlt">
        <div className="aboutPage-container">
          <motion.div
            className="aboutPage-content aboutPage-contentReverse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="aboutPage-imageContent" variants={scaleIn}>
              <img src={About6} alt="Bharathapuzha River" />
              <div className="aboutPage-imageOverlay"></div>
            </motion.div>
            <div className="aboutPage-textContent">
              <motion.span className="aboutPage-sectionBadge" variants={fadeIn}>
                Lifeline
              </motion.span>
              <motion.h2 className="aboutPage-sectionTitle" variants={fadeInUp}>
                <span className="aboutPage-gradient">Bharathapuzha River</span>
              </motion.h2>
              <motion.p className="aboutPage-text" variants={fadeInUp}>
                The Bharathapuzha, locally known as Nila, is the second-longest
                river in Kerala and flows majestically through Desamangalam.
                This sacred river, often called the "Nile of Kerala," has been
                the lifeline of Kerala's cultural heritage for centuries.
              </motion.p>
              <motion.p className="aboutPage-text" variants={fadeInUp}>
                The river originates from the Anaimalai Hills and flows through
                the Palakkad Gap, nurturing the land and inspiring countless
                artists, writers, and poets who have grown up along its banks.
              </motion.p>
              <motion.div
                className="aboutPage-riverFeatures"
                variants={staggerContainer}
              >
                {[
                  { icon: "📏", title: "209 km", desc: "Total Length" },
                  {
                    icon: "🌊",
                    title: "Second Longest",
                    desc: "River in Kerala",
                  },
                  {
                    icon: "🎭",
                    title: "Cultural Hub",
                    desc: "Art & Literature",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="aboutPage-riverFeature"
                    variants={scaleIn}
                  >
                    <div className="aboutPage-featureIcon">{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="aboutPage-section">
        <div className="aboutPage-container">
          <motion.div
            className="aboutPage-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="aboutPage-textContent">
              <motion.span className="aboutPage-sectionBadge" variants={fadeIn}>
                Heritage
              </motion.span>
              <motion.h2 className="aboutPage-sectionTitle" variants={fadeInUp}>
                <span className="aboutPage-gradient">History</span>
              </motion.h2>
              <motion.p className="aboutPage-text" variants={fadeInUp}>
                Desamangalam is known for "Mana", the residence of Nambuthiries,
                the Brahmin community of Kerala, who were temple priests but
                were the landlords and local rulers. These historic houses are
                significant specimens of traditional Kerala architecture.
              </motion.p>
              <motion.p className="aboutPage-text" variants={fadeInUp}>
                Desamangalam was part of the Cochin region in Central Kerala,
                under the direct rule of the Cochin Royals. Nairs form the
                majority community, and all faiths coexist harmoniously,
                creating an inclusive environment that has been the village's
                hallmark for generations.
              </motion.p>
              <motion.div
                className="aboutPage-highlights"
                variants={staggerContainer}
              >
                {[
                  {
                    icon: "🏛️",
                    title: "Mana Heritage",
                    desc: "Historic Nambuthiri residences",
                  },
                  {
                    icon: "🤝",
                    title: "Unity",
                    desc: "Harmonious coexistence",
                  },
                  {
                    icon: "👑",
                    title: "Cochin Kingdom",
                    desc: "Royal heritage of Central Kerala",
                  },
                ].map((highlight, i) => (
                  <motion.div
                    key={i}
                    className="aboutPage-highlight"
                    variants={scaleIn}
                  >
                    <div className="aboutPage-highlightIcon">
                      {highlight.icon}
                    </div>
                    <h4>{highlight.title}</h4>
                    <p>{highlight.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div className="aboutPage-imageContent" variants={scaleIn}>
              <img src={About2} alt="History" />
              <div className="aboutPage-imageOverlay"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cinema Heritage Section */}
      <section className="aboutPage-section aboutPage-sectionAlt">
        <div className="aboutPage-container">
          <motion.div
            className="aboutPage-content aboutPage-contentReverse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="aboutPage-imageContent" variants={scaleIn}>
              <img src={About5} alt="Cinema Heritage" />
              <div className="aboutPage-imageOverlay"></div>
            </motion.div>
            <div className="aboutPage-textContent">
              <motion.span className="aboutPage-sectionBadge" variants={fadeIn}>
                Cinema
              </motion.span>
              <motion.h2 className="aboutPage-sectionTitle" variants={fadeInUp}>
                <span className="aboutPage-gradient">
                  Malayalam Film Heritage
                </span>
              </motion.h2>
              <motion.p className="aboutPage-text" variants={fadeInUp}>
                Desamangalam's scenic beauty has made it a favored location for
                Malayalam cinema. Legendary directors like Padmarajan,
                Bharathan, Dennis Joseph, and Suhasini Maniratnam have filmed
                iconic movies here, capturing the village's natural charm and
                cultural essence.
              </motion.p>
              <motion.p className="aboutPage-text" variants={fadeInUp}>
                Renowned actors including Prem Nazir, Sheela, Mammootty, and
                Mohanlal have graced this village during film shoots, making
                Desamangalam an integral part of Malayalam cinema history.
              </motion.p>
              <motion.div
                className="aboutPage-filmsGrid"
                variants={staggerContainer}
              >
                {films.map((film, i) => (
                  <motion.div
                    key={i}
                    className="aboutPage-filmCard"
                    variants={scaleIn}
                  >
                    <div className="aboutPage-filmIcon">🎬</div>
                    <h4>{film.name}</h4>
                    <p>{film.director}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Art & Culture Section */}
      <section className="aboutPage-section">
        <div className="aboutPage-container">
          <motion.div
            className="aboutPage-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="aboutPage-textContent">
              <motion.span className="aboutPage-sectionBadge" variants={fadeIn}>
                Traditions
              </motion.span>
              <motion.h2 className="aboutPage-sectionTitle" variants={fadeInUp}>
                <span className="aboutPage-gradient">Art & Culture</span>
              </motion.h2>
              <motion.p className="aboutPage-text" variants={fadeInUp}>
                Desamangalam is known for various art forms. Taipooyam and
                Desamangalam Pooram are well-known festivals that bring the
                community together in vibrant celebrations, showcasing the
                village's rich cultural traditions.
              </motion.p>
              <motion.p className="aboutPage-text" variants={fadeInUp}>
                "Chozhi Kettu" is another art form unique to Desamangalam and
                surrounding places like Arangottukara, Pallam, Kondayur, and
                Pallur. This distinctive cultural expression reflects the
                region's artistic heritage and continues to be celebrated by the
                community.
              </motion.p>
              <motion.div
                className="aboutPage-artForms"
                variants={staggerContainer}
              >
                {[
                  { icon: "🎭", name: "Taipooyam" },
                  { icon: "🎪", name: "Desamangalam Pooram" },
                  { icon: "🎨", name: "Chozhi Kettu" },
                ].map((art, i) => (
                  <motion.div
                    key={i}
                    className="aboutPage-artForm"
                    variants={scaleIn}
                  >
                    <span>{art.icon}</span>
                    <p>{art.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div className="aboutPage-imageContent" variants={scaleIn}>
              <img src={About1} alt="Art and Culture" />
              <div className="aboutPage-imageOverlay"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education & Institutions Section */}
      <section className="aboutPage-section aboutPage-sectionAlt">
        <div className="aboutPage-container">
          <motion.div
            className="aboutPage-institutionsHeader"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="aboutPage-sectionBadge" variants={fadeIn}>
              Community
            </motion.span>
            <motion.h2 className="aboutPage-sectionTitle" variants={fadeInUp}>
              <span className="aboutPage-gradient">
                Education & Institutions
              </span>
            </motion.h2>
            <motion.p
              className="aboutPage-text aboutPage-centered"
              variants={fadeInUp}
            >
              Desamangalam takes pride in its educational and social
              institutions that have been serving the community for generations
            </motion.p>
          </motion.div>
          <motion.div
            className="aboutPage-institutionsGrid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {institutions.map((institution, index) => (
              <motion.div
                key={index}
                className="aboutPage-institutionCard"
                variants={scaleIn}
                whileHover={{ scale: 1.03 }}
              >
                <div className="aboutPage-institutionIcon">
                  {institution.icon}
                </div>
                <h3>{institution.name}</h3>
                <span className="aboutPage-institutionYear">
                  {institution.year}
                </span>
                <p>{institution.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Places to Visit Section */}
      <section className="aboutPage-places">
        <div className="aboutPage-container">
          <motion.div
            className="aboutPage-placesHeader"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="aboutPage-sectionBadge" variants={fadeIn}>
              Explore
            </motion.span>
            <motion.h2 className="aboutPage-sectionTitle" variants={fadeInUp}>
              Places Near to <span className="aboutPage-gradient">Visit</span>
            </motion.h2>
            <motion.p
              className="aboutPage-text aboutPage-centered"
              variants={fadeInUp}
            >
              Discover the spiritual and natural beauty surrounding Desamangalam
            </motion.p>
          </motion.div>
          <motion.div
            className="aboutPage-placesGrid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {places.map((place, index) => (
              <motion.div
                key={index}
                className="aboutPage-placeCard"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aboutPage-placeIcon">{place.icon}</div>
                <h3>{place.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Background Decoration */}
      <div className="aboutPage-bgDecoration"></div>
    </div>
  );
};

export default AboutPage;
