import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Sparkles } from "./Sparkles";
import "./Hero.css";

const springSoft = { stiffness: 70, damping: 26, mass: 0.55, restDelta: 0.001 };

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, springSoft);
  const y = useTransform(progress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(progress, [0, 0.85], [1, 0.2]);
  const scale = useTransform(progress, [0, 1], [1, 1.08]);

  return (
    <header className="hero" ref={ref}>
      <motion.div className="hero__media" style={{ y, scale }}>
        <motion.div
          className="hero__media-inner"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <ImagePlaceholder
            src={event.images.hero}
            alt="Abdul Moiz Arif and Fatima Zafar illustration"
            label="Hero illustration"
            className="hero__placeholder"
          />
        </motion.div>
      </motion.div>

      <motion.div className="hero__wash" aria-hidden="true" style={{ opacity }} />
      <Sparkles count={36} />

      <div className="hero__frame" aria-hidden="true">
        <motion.span
          className="hero__frame-line hero__frame-line--top"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="hero__frame-line hero__frame-line--bottom"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="hero__frame-line hero__frame-line--left"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.span
          className="hero__frame-line hero__frame-line--right"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <motion.div className="hero__content" style={{ opacity }}>
        <motion.p
          className="hero__event shimmer-text shimmer-text--light"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.label}
        </motion.p>

        <motion.h1
          className="hero__names"
          initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.15, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__name">{event.groom}</span>
          <motion.span
            className="hero__amp"
            animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            &
          </motion.span>
          <span className="hero__name">{event.bride}</span>
        </motion.h1>

        <motion.p
          className="hero__date"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.day} · {event.dateDisplay}
        </motion.p>

        <motion.a
          href="#details"
          className="hero__cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.75, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, letterSpacing: "0.28em" }}
          whileTap={{ scale: 0.97 }}
        >
          Discover the evening
        </motion.a>
      </motion.div>
    </header>
  );
}
