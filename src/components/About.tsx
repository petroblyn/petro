import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm tracking-widest text-primary mb-4 uppercase">
            About
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            A bit about me
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-16"
        >
          I am a Software Engineer based in South Africa with hands-on experience
          in Java, Python, and web development. Skilled in designing, building,
          and maintaining scalable applications. Strong foundation in
          object-oriented programming, data engineering fundamentals, and
          problem-solving.
        </motion.p>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <h3 className="font-mono text-xs tracking-widest text-primary uppercase mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
