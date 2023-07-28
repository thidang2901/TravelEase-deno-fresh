import { motion } from "framer-motion";

import { Destination } from "@/libs/schemas/destination.schema.ts";

interface Props {
  items: Destination[];
}

export function Carousel({ items }: Props) {
  const divTest = (
    <motion.div
      className="box"
      transition={{
        // TIP... Use linear easing for the proper effect
        easing: "linear",

        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
    </motion.div>
  );
  return (
    <>
    </>
  );
}
