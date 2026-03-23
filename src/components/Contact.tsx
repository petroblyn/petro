import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "petroblyn16@gmail.com",
    href: "mailto:petroblyn16@gmail.com",
  },
  {
    icon: Github,
    label: "github.com/petroblyn",
    href: "https://github.com/petroblyn",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/petro-blyn-b98113361",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="font-mono text-sm tracking-widest text-primary mb-4 uppercase">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto">
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/30 text-foreground hover:text-primary transition-all duration-300 group"
            >
              <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
