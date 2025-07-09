import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { contactLinks } from '../lib/data';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-github-text mb-8 text-center">
        Get In Touch
      </h2>
      <div className="flex flex-col items-center space-y-6">
        <p className="text-github-secondary text-lg max-w-2xl text-center mb-8">
          I'm always interested in hearing about new opportunities and collaborations.
          Feel free to reach out through any of these platforms:
        </p>
        <div className="flex space-x-8">
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-github-text hover:text-github-primary transition-colors"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-github-text hover:text-github-primary transition-colors"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href={`mailto:${contactLinks.email}`}
            className="text-github-text hover:text-github-primary transition-colors"
          >
            <MdEmail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
