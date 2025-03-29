import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

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
          {navItems.map((item) => (
            <li key={item}>
              <Link to={`/${item == "Home" ? "" : item.toLowerCase()}`} className="hover:text-primary">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
