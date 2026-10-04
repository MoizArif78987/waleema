import { motion } from "framer-motion";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Sparkles } from "./Sparkles";
import "./EventDetails.css";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function EventDetails() {
  return (
    <section className="section details" id="details" aria-labelledby="details-heading">
      <Sparkles count={18} />
      <div className="section-inner details__inner">
        <motion.div
          className="details__header"
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">When & Where</p>
          <h2 id="details-heading" className="section-title shimmer-text">
            {event.label}
          </h2>
          <motion.span
            className="platinum-line details__line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          />
        </motion.div>

        <motion.div
          className="details__atmosphere"
          initial={{ opacity: 0, scale: 1.08, y: 36 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.015 }}
        >
          <ImagePlaceholder
            src={event.images.waleema}
            alt="Waleema celebration atmosphere"
            label="Atmosphere photo"
            aspect="16 / 9"
            className="details__photo"
          />
        </motion.div>

        <motion.dl
          className="details__grid"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div className="details__item" variants={item} whileHover={{ y: -4 }}>
            <dt>Date</dt>
            <dd>
              {event.day}
              <br />
              {event.dateDisplay}
            </dd>
          </motion.div>
          <motion.div className="details__item" variants={item} whileHover={{ y: -4 }}>
            <dt>Time</dt>
            <dd>{event.time}</dd>
          </motion.div>
          <motion.div className="details__item details__item--wide" variants={item}>
            <dt>Venue</dt>
            <dd>{event.venue}</dd>
          </motion.div>
        </motion.dl>
      </div>
    </section>
  );
}
