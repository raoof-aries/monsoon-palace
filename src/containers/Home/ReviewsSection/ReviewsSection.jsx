import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./ReviewsSection.css";

const reviews = [
  {
    name: "Ananya Menon",
    place: "Kochi",
    review:
      "A quiet, beautifully kept place with warm service. The poolside evenings and outdoor dining made the weekend feel special.",
  },
  {
    name: "Rahul Nair",
    place: "Bengaluru",
    review:
      "Perfect for a relaxed family break. Rooms were comfortable, the property felt private, and the staff helped us plan nearby visits.",
  },
  {
    name: "Meera Joseph",
    place: "Thrissur",
    review:
      "Loved the calm atmosphere and the greenery around the resort. It felt close to nature without giving up comfort.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="reviewsSection-wrapper">
      <div className="reviewsSection-container">
        <motion.div
          className="reviewsSection-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="reviewsSection-badge">Customer Reviews</span>
          <h2 className="reviewsSection-title">
            Guest Stories <span>& Stays</span>
          </h2>
        </motion.div>

        <div className="reviewsSection-grid">
          {reviews.map((review, index) => (
            <motion.article
              className="reviewsSection-card"
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <FaQuoteLeft className="reviewsSection-quote" aria-hidden="true" />
              <div className="reviewsSection-stars" aria-label="5 star review">
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar key={starIndex} aria-hidden="true" />
                ))}
              </div>
              <p className="reviewsSection-text">{review.review}</p>
              <div className="reviewsSection-person">
                <span>{review.name}</span>
                <small>{review.place}</small>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
