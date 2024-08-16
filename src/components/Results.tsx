import { error } from "console";
import {motion} from "framer-motion";
import { formatPercentage } from "../utils/helpers";

const Results = ({
  errors,
  accuracy,
  total,
  className,
}:{
  errors: number;
  accuracy: number;
  total: number;
  className?: string;
}) => {
  //animation using framer motion
  const initial = {opacity: 0, y: -50}; //start
  const animate = {opacity: 1, y: 0}; //end
  const transition = {duration: 0.5}; //transition time
  return (
    <motion.ul
      className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
    >
      <motion.li 
        initial={initial}
        animate={animate}
        transition={{...transition, delay: 0}}
        className="text-xl font-semibold">Results</motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{...transition, delay: 0.5}}
      >Accuracy: {formatPercentage(accuracy)}</motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{...transition, delay: 1}}
      >Errors: {errors}</motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{...transition, delay: 1.5}}
      
      >Typed:</motion.li>

    </motion.ul>
  )
}

export default Results; 