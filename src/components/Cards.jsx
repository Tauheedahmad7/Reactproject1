import { FaRegFileAlt } from 'react-icons/fa';
import { MdDownloadForOffline } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Cards = ({ data, reference }) => {
  return (
    <motion.div
      dragConstraints={reference}
      drag
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      dragTransition={{ bounceStiffness: 900, bounceDamping: 30 }}
      whileDrag={{ scale: 1.2 }}
      className="cards relative h-64 w-48 sm:h-72 sm:w-56 md:h-80 md:w-64 lg:h-96 lg:w-72 rounded-[25px] sm:rounded-[35px] bg-zinc-800/90 text-white py-5 px-4 sm:py-7 sm:px-6 ml-3 overflow-hidden"
    >
      <FaRegFileAlt className="text-lg sm:text-xl" />

      <p className="text-xs sm:text-sm md:text-base leading-tight mt-4 sm:mt-5 font">
        {data.desc}
      </p>

      <div className="footer absolute w-full bottom-0 left-0">
        <div className="icons flex justify-between items-center py-3 px-4 sm:py-4 sm:px-6">
          <h6 className="text-xs sm:text-sm md:text-base">{data.filesize}</h6>
          {data.close ? (
            <IoClose className="text-lg sm:text-xl" />
          ) : (
            <MdDownloadForOffline className="text-lg sm:text-xl" />
          )}
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag py-2 w-full ${
              data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'
            } flex items-center justify-center`}
          >
            <h3 className="text-xs sm:text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
