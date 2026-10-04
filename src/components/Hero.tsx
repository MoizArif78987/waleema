import { motion } from "framer-motion";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import "./Hero.css";

const softReveal = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__media">
        <ImagePlaceholder
          src={event.images.hero}
          alt="Waleema celebration"
          label="Hero photo coming soon"
          className="hero__placeholder"
        />
      </div>

      <motion.div
        className="hero__wash"
        aria-hidden="true"
        initial={{ opacity: 0.55 }}
        animate={{ opacity: 0.78 }}
        transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="hero__frame" aria-hidden="true">
        <motion.span
          className="hero__frame-line hero__frame-line--top"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="hero__frame-line hero__frame-line--bottom"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="hero__frame-line hero__frame-line--left"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className="hero__frame-line hero__frame-line--right"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="hero__content">
        <motion.p
          className="hero__event"
          variants={softReveal}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.15 }}
        >
          {event.label}
        </motion.p>

        <motion.h1
          className="hero__names"
          variants={softReveal}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.35 }}
        >
          <span className="hero__name">{event.groom}</span>
          <span className="hero__amp">&</span>
          <span className="hero__name">{event.bride}</span>
        </motion.h1>

        <motion.p
          className="hero__date"
          variants={softReveal}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.55 }}
        >
          {event.day} · {event.dateDisplay}
        </motion.p>

        <motion.a
          href="#details"
          className="hero__cta"
          variants={softReveal}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.75 }}
        >
          Discover the evening
        </motion.a>
      </div>
    </header>
  );
}
