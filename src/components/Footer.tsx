import { motion } from "framer-motion";
import { Wrapper } from "./Wrapper";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-code text-muted-foreground text-sm mb-2">
            &lt;/&gt; Designed &amp; Coded by{" "}
            <span className="text-gradient font-semibold">
              James Clifford Astronomo II
            </span>
            <span className="blinking-cursor text-primary">|</span>
          </p>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} James Clifford Astronomo II. All rights
            reserved.
          </p>
        </motion.div>
      </Wrapper>
    </footer>
  );
};
