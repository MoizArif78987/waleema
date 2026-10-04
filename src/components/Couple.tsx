import { motion } from "framer-motion";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import "./Couple.css";

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Couple() {
  return (
    <section className="section couple" id="couple" aria-labelledby="couple-heading">
      <div className="section-inner couple__inner">
        <motion.div
          className="couple__intro"
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="section-label">Together</p>
          <h2 id="couple-heading" className="section-title">
            An evening of gratitude
          </h2>
          <p className="section-copy">
            Join us as we celebrate our Waleema — a gathering of love, family, and blessings.
          </p>
        </motion.div>

        <div className="couple__stack">
          <motion.article
            className="couple__row"
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ImagePlaceholder
              src={event.images.groom}
              alt={event.groom}
              label="Groom photo"
              aspect="4 / 5"
              className="couple__photo"
            />
            <div className="couple__meta">
              <span className="couple__role">Groom</span>
              <h3 className="couple__name">{event.groom}</h3>
            </div>
          </motion.article>

          <motion.article
            className="couple__row couple__row--reverse"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <ImagePlaceholder
              src={event.images.bride}
              alt={event.bride}
              label="Bride photo"
              aspect="4 / 5"
              className="couple__photo"
            />
            <div className="couple__meta">
              <span className="couple__role">Bride</span>
              <h3 className="couple__name">{event.bride}</h3>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
