import { motion } from "framer-motion";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import "./EventDetails.css";

export function EventDetails() {
  return (
    <section className="section details" id="details" aria-labelledby="details-heading">
      <div className="section-inner details__inner">
        <motion.div
          className="details__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">When & Where</p>
          <h2 id="details-heading" className="section-title">
            {event.label}
          </h2>
          <motion.span
            className="platinum-line details__line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          />
        </motion.div>

        <motion.div
          className="details__atmosphere"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImagePlaceholder
            src={event.images.waleema}
            alt="Waleema atmosphere"
            label="Atmosphere photo"
            aspect="16 / 9"
            className="details__photo"
          />
        </motion.div>

        <motion.dl
          className="details__grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <div className="details__item">
            <dt>Date</dt>
            <dd>
              {event.day}
              <br />
              {event.dateDisplay}
            </dd>
          </div>
          <div className="details__item">
            <dt>Time</dt>
            <dd>{event.time}</dd>
          </div>
          <div className="details__item details__item--wide">
            <dt>Venue</dt>
            <dd>{event.venue}</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
