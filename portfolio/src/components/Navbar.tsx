import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
interface NavbarProps {
  onHomeClick?: () => void;
  onAboutClick?: () => void;
  onSkillsClick?: () => void;
  onProjectClick: () => void;
  onExperienceClick?: () => void;
  onContactClick?: () => void;
}
const Navbar = ({ onHomeClick, onAboutClick, onSkillsClick, onProjectClick, onExperienceClick, onContactClick }: NavbarProps) => {

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full text-white p-4 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>
        <ul className="flex space-x-6">
          <li className="hover:text-primary" onClick={onHomeClick}>
            Home
          </li>
          <li className="hover:text-primary" onClick={onAboutClick}>
            About
          </li>
          <li className="hover:text-primary" onClick={onSkillsClick}>
            Skills
          </li>
          <li className="hover:text-primary" onClick={onProjectClick}>
            Projects
          </li>
          <li className="hover:text-primary" onClick={onExperienceClick}>
            Experience
          </li>
          <li className="hover:text-primary" onClick={onContactClick}>
            Contact
          </li>

        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
