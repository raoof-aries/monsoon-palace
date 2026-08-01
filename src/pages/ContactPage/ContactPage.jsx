import { motion } from "framer-motion";
import "./ContactPage.css";

const ContactPage = () => {
  // Animation variants
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const fadeInUp = {
    hidden: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: isMobile ? { opacity: 1 } : { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.08,
      },
    },
  };

  return (
    <motion.section
      className="contactPage-wrapper"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div className="contactPage-header" variants={staggerContainer}>
        <motion.span className="contactPage-badge" variants={fadeInUp}>
          Get In Touch
        </motion.span>
        <motion.h1 className="contactPage-title" variants={fadeInUp}>
          Plan Your Perfect{" "}
          <span className="contactPage-titleGradient">Escape</span>
        </motion.h1>
      </motion.div>

      <motion.div className="contactPage-content" variants={fadeInUp}>
        <div className="contactPage-details">
          <div className="contactPage-detailRow">
            <div className="contactPage-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="contactPage-text">
              <h4>Location</h4>
              <p>
                Urooli, Palloor P.O
                <br />
                Deshamangalam
                <br />
                Thrissur, Kerala, India
                <br />
                Pin : 679532
              </p>
            </div>
          </div>

          <div className="contactPage-detailRow">
            <div className="contactPage-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="contactPage-text">
              <h4>Contact</h4>
              <div className="contactPage-phone-list">
                <div className="contactPage-phone-item">
                  <span className="contactPage-phone-label">Office</span>
                  <a
                    href="tel:+918714804320"
                    className="contactPage-phone-number"
                  >
                    +91 87148 04320
                  </a>
                </div>
                <div className="contactPage-phone-item">
                  <span className="contactPage-phone-label">Akhil (UAE)</span>
                  <a
                    href="tel:+971569357865"
                    className="contactPage-phone-number"
                  >
                    +971 56 935 7865
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contactPage-detailRow">
            <div className="contactPage-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="contactPage-text">
              <h4>Email</h4>
              <p>
                <a href="mailto:contact@keralamonsoonpalace.com">
                  contact@keralamonsoonpalace.com
                </a>
                <br />
                <a href="mailto:int.projects2020@gmail.com">
                  int.projects2020@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="contactPage-social">
            <a href="#" className="contactPage-socialLink">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="contactPage-socialLink">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="contactPage-socialLink">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/place/Monsoon+Palace,+Kondayur/@10.770015,76.233147,16z/data=!4m6!3m5!1s0x3ba7c5950b8fb7db:0x86c4d3af0cce5b21!8m2!3d10.770015!4d76.233147!16s%2Fg%2F11wpy6ntls?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="contactPage-mapLink"
        >
          <div className="contactPage-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.6028948973817!2d76.233147!3d10.770014999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c5950b8fb7db%3A0x86c4d3af0cce5b21!2sMonsoon%20Palace%2C%20Kondayur!5e1!3m2!1sen!2sin!4v1777697513708!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location of Monsoon Palace"
              style={{ pointerEvents: "none" }}
            ></iframe>
          </div>
        </a>
      </motion.div>

      {/* Background Decoration */}
      <div className="contactPage-bgDecoration"></div>
    </motion.section>
  );
};

export default ContactPage;
