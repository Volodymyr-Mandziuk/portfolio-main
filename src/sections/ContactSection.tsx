import "../styles/contact.css";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);

    setTimeout(() => {
      setCopied(null);
    }, 1500);
  };
  return (
    <section id="contact" className="contact-section">
    <div className="container">
      <h2>Contact</h2>

      <p className="contact-description">
        Feel free to reach out for freelance opportunities or collaborations.
      </p>

      {/* EMAIL */}
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />

        <a href="mailto:vmandziuk@gmail.com">
          vmandziuk@gmail.com
        </a>

        <button
          className="copy-btn"
          onClick={() =>
            handleCopy("vmandziuk@gmail.com", "email")
          }
        >
          <FiCopy />
        </button>

        {copied === "email" && <span className="copied">Copied!</span>}
      </div>

      {/* GITHUB */}
      <div className="contact-item">
        <FaGithub className="contact-icon" />

        <a
          href="https://github.com/Volodymyr-Mandziuk"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/Volodymyr-Mandziuk
        </a>

        <button
          className="copy-btn"
          onClick={() =>
            handleCopy(
              "https://github.com/Volodymyr-Mandziuk",
              "github"
            )
          }
        >
          <FiCopy />
        </button>

        {copied === "github" && <span className="copied">Copied!</span>}
      </div>
    </div>
  </section>
  );
};

export default ContactSection;
