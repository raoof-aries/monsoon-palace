import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import "./FaqSection.css";

const faqs = [
  {
    question: "What amenities are available at Monsoon Palace?",
    answer:
      "Monsoon Palace offers comfortable accommodations, fine dining areas, a beautiful courtyard, a stunning pool view, and riverside leisure activities along the Bharathapuzha river.",
  },
  {
    question: "Is Monsoon Palace suitable for events or retreats?",
    answer:
      "Absolutely. Whether you seek a peaceful retreat or an adventurous getaway, our exquisite accommodations and world-class amenities offer the perfect setting.",
  },
  {
    question: "How can I make a reservation?",
    answer:
      "You can contact us directly via WhatsApp, phone, or email. Visit our contact section below for our direct contact details to check availability.",
  },
  {
    question: "Where is Monsoon Palace located?",
    answer:
      "Desamangalam is a serene village located near the banks of the Bharathapuzha River. The village is surrounded by Shoranur, Kunnamkulam, Pattambi and Wadakkanchery. The area is well known for its lush greenery, peaceful atmosphere, and scenic natural beauty surrounded by forest landscapes.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqSection-wrapper">
      <div className="faqSection-container">
        <div className="faqSection-header">
          <motion.span
            className="faqSection-badge"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6 }}
          >
            FAQs
          </motion.span>
          <motion.h2
            className="faqSection-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Frequently Asked{" "}
            <span className="faqSection-gradient">Questions</span>
          </motion.h2>
          <motion.p
            className="faqSection-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Find answers to some of the most common questions about your stay at
            Monsoon Palace.
          </motion.p>
        </div>

        <div className="faqSection-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faqSection-item ${activeIndex === index ? "active" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => toggleFaq(index)}
            >
              <div className="faqSection-question">
                <h3>{faq.question}</h3>
                <span className="faqSection-icon">
                  <FiChevronDown />
                </span>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faqSection-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="faqSection-bgDecoration"></div>
    </section>
  );
};

export default FaqSection;
