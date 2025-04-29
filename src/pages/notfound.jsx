import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center h-screen text-center p-6"
    >
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl mt-4 mb-2 text-black">Page Not Found 😢</h2>
      <p className="text-gray-600 mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-primary text-black px-6 py-2 rounded-md font-semibold hover:scale-105 transition"
      >
        Go Home
      </a>
    </motion.div>
  );
};

export default NotFound;
