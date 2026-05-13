import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBinoculars,
  FaChurch,
  FaFish,
  FaFortAwesome,
  FaLandmark,
  FaMountain,
  FaMosque,
  FaPagelines,
  FaTree,
  FaUmbrellaBeach,
  FaWater,
} from "react-icons/fa";
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
  const [expandedPlaceGroups, setExpandedPlaceGroups] = useState({});

  const dayPicnicLocations = [
    {
      name: "Nelliyampathy Hills",
      icon: FaMountain,
      detail:
        "These misty mountains are famous for lush orange plantations, tea gardens, and winding roads that offer incredible views of the valley below. Historically, it was a favorite getaway for British planters looking for a cool climate and fertile land.",
    },
    {
      name: "Malampuzha Dam & Garden",
      icon: FaWater,
      detail:
        'Often called the "Vrindavan of Kerala," this site features a massive dam and a beautifully landscaped garden with the famous giant sculpture of "Yakshi." It has been a major tourist hub since the 1950s and is well-known for its scenic ropeway.',
    },
    {
      name: "Kollengode Village",
      icon: FaPagelines,
      detail:
        "Renowned for its rural beauty, this village is home to the historic Kollengode Palace, which showcases traditional Kerala architecture. It offers a peaceful atmosphere with vast paddy fields set against the backdrop of the majestic Western Ghats.",
    },
    {
      name: "Poomala Dam",
      icon: FaWater,
      detail:
        "This quiet man-made dam located on a hilltop offers a serene environment and panoramic views of the surrounding greenery. Originally built for irrigation, it has now become a popular eco-tourism spot for those seeking a calm escape.",
    },
    {
      name: "Kannadi Lake",
      icon: FaWater,
      detail:
        'This calm water body is a hidden gem known for its crystal-clear, mirror-like surface, which is exactly what "Kannadi" means. It is a perfect, quiet spot for nature photography and enjoying the local landscape.',
    },
    {
      name: "Cheruchakkichola Waterfalls",
      icon: FaTree,
      detail:
        "Tucked away in the forest near the hills, this seasonal waterfall is a local favorite for its refreshing, untouched beauty. It is an ideal spot for trekking enthusiasts who want to experience the raw natural side of the Palakkad region.",
    },
    {
      name: "Palakkad Fort (Tipu Sultan Fort)",
      icon: FaFortAwesome,
      detail:
        "Built by Hyder Ali in 1766 and later used by his son Tipu Sultan, this is one of the most well-preserved forts in Kerala. It stands in the heart of the city as a symbol of historic battles between local rulers and the British.",
    },
    {
      name: "Peechi Dam",
      icon: FaBinoculars,
      detail:
        "This dam is the main water source for Thrissur and is famous for the vast wildlife sanctuary that surrounds its reservoir. Completed in the 1950s, it remains a landmark engineering project that also offers beautiful boating and picnic spots.",
    },
  ];

  const withinFiftyLocations = [
    {
      name: "Vamala View Point",
      icon: FaBinoculars,
      detail:
        "Vamala is a scenic hilltop that offers a breathtaking panoramic view of lush green plains and the distant coastline. It is a peaceful spot where visitors go to enjoy the cool breeze and the sunset near its small ancient hilltop temple.",
    },
    {
      name: "Guruvayoor Temple",
      icon: FaLandmark,
      detail:
        'Known as the "Dwarka of the South," this 5,000-year-old temple is dedicated to Lord Krishna and is one of India\'s most sacred pilgrimage sites. Its history is deeply rooted in legend, and it remains a major center for Hindu culture, weddings, and traditional arts.',
    },
    {
      name: "Guruvayoor Elephant Sanctuary",
      icon: FaTree,
      detail:
        "Located at the historic Punnathur Kotta, an old palace, this is the world's largest sanctuary for captive elephants, housing over 50 animals. These elephants are groomed and trained here to participate in temple festivals and ritual processions.",
    },
    {
      name: "Chavakkad Beach",
      icon: FaUmbrellaBeach,
      detail:
        'This popular beach is famous for its golden sands and the "Azhimukham," the unique spot where a river meets the Arabian Sea. It also features a tall lighthouse that has guided sailors for decades and offers great views of the coast.',
    },
    {
      name: "Marine World Public Aquarium",
      icon: FaFish,
      detail:
        "This is India's largest public aquarium, featuring a massive collection of exotic fish and underwater life in state-of-the-art tanks. It serves as an educational hub where people of all ages can learn about the wonders of the ocean.",
    },
    {
      name: "Manathala Mosque",
      icon: FaMosque,
      detail:
        "An ancient and culturally rich mosque, it is a landmark of Islamic heritage in the Chavakkad region. It is best known for the annual Chandanakudam festival, which attracts people from all faiths and symbolizes communal harmony.",
    },
    {
      name: "Sree Vishwanatha Temple, Chavakkad",
      icon: FaLandmark,
      detail:
        "Dedicated to Lord Shiva, this temple is a serene spiritual center known for its traditional Kerala-style architecture. It plays a vital role in local history, preserving Vedic rituals and providing a peaceful space for daily worship.",
    },
    {
      name: "Palayoor St. Thomas Church",
      icon: FaChurch,
      detail:
        "Established in 52 AD by St. Thomas the Apostle, this is widely considered the oldest church in India. It marks the very beginning of Christianity in the country and still houses historical artifacts from the apostolic era.",
    },
    {
      name: "St. Joseph's Shrine, Pavaratty",
      icon: FaChurch,
      detail:
        'This beautiful shrine is a major Christian pilgrimage center famous for the grand "Pavaratty Nercha" festival. It is celebrated for its stunning white facade and its long-standing reputation as a place of spiritual healing.',
    },
    {
      name: "Cheraman Juma Mosque",
      icon: FaMosque,
      detail:
        "Built in 629 AD, this is the first mosque ever built in India and is one of the oldest in the world. It was constructed by an Arab merchant and features a unique design that blends ancient Kerala architecture with Islamic tradition.",
    },
  ];

  const placeGroups = [
    {
      kicker: "Nearest places to visit",
      title: "Nearest One Day Picnic Locations",
      intro:
        "Easy day trips through misty hills, dams, waterfalls, forts, gardens, and quiet nature pockets around the resort.",
      places: dayPicnicLocations,
    },
    {
      kicker: "Within 50 km",
      title: "Within 50 km One Day Picnic Locations",
      intro:
        "A close-range mix of viewpoints, beaches, heritage landmarks, sanctuaries, and cultural destinations for a full-day plan.",
      places: withinFiftyLocations,
    },
  ];

  const initialPlacesCount = 6;

  const togglePlaceGroup = (groupTitle) => {
    setExpandedPlaceGroups((current) => ({
      ...current,
      [groupTitle]: !current[groupTitle],
    }));
  };

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
                Desamangalam is a serene village located near the banks of the Bharathapuzha River. The village is surrounded by Shoranur, Kunnamkulam, Pattambi and Wadakkanchery. The area is well known for its lush greenery, peaceful atmosphere, and scenic natural beauty surrounded by forest landscapes.
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
      {/* <section className="aboutPage-section aboutPage-sectionAlt">
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
      </section> */}

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
              Discover natural, historic, and cultural getaways surrounding
              Desamangalam
            </motion.p>
          </motion.div>
          <div className="aboutPage-placeGroups">
            {placeGroups.map((group) => (
              <motion.div
                key={group.title}
                className="aboutPage-placeGroup"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <div className="aboutPage-placeGroupIntro">
                  <motion.span
                    className="aboutPage-placeGroupKicker"
                    variants={fadeIn}
                  >
                    {group.kicker}
                  </motion.span>
                  <motion.h3
                    className="aboutPage-placeGroupTitle"
                    variants={fadeInUp}
                  >
                    {group.title}
                  </motion.h3>
                  <motion.p
                    className="aboutPage-placeGroupText"
                    variants={fadeInUp}
                  >
                    {group.intro}
                  </motion.p>
                </div>
                <motion.div
                  className="aboutPage-placesTimeline"
                  variants={staggerContainer}
                >
                  {(expandedPlaceGroups[group.title]
                    ? group.places
                    : group.places.slice(0, initialPlacesCount)
                  ).map((place) => (
                    <motion.article
                      key={place.name}
                      className="aboutPage-placeDetailCard"
                      layout
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6 }}
                    >
                      <span className="aboutPage-placeIconMark" aria-hidden="true">
                        <place.icon />
                      </span>
                      <div>
                        <h4>{place.name}</h4>
                        <p>{place.detail}</p>
                      </div>
                    </motion.article>
                  ))}
                  {group.places.length > initialPlacesCount && (
                    <motion.button
                      type="button"
                      className="aboutPage-loadMore"
                      onClick={() => togglePlaceGroup(group.title)}
                      layout
                      initial={false}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {expandedPlaceGroups[group.title]
                        ? "Show Less"
                        : "Load More"}
                    </motion.button>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Decoration */}
      <div className="aboutPage-bgDecoration"></div>
    </div>
  );
};

export default AboutPage;
