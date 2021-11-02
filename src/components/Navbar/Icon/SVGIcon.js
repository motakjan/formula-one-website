import React from "react";
import { motion } from "framer-motion";

export const SVGIcon = () => {
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const pathVariants2 = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
    },
  };

  return (
    <motion.span className="logo" whileHover={{ scale: 1.1 }}>
      <svg
        clipRule="evenodd"
        fillRule="evenodd"
        height="48px"
        imageRendering="optimizeQuality"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="8886.11 8002.49 12382.545 5401.88"
        width="140px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="m19406.3 8004.18h1862.355l-3072.167 3095.182h-1862.355zm-8771.51 3095.18h-1748.68l2181.78-2203.35c612.54-654.53 1402.95-893.52 2390.78-893.52h5576.61l-1157.81 1166.64h-4489.81c-751.68-1.46-1048.07 218.34-1466.15 638.16z"
          fill="#FFFFFF"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="m18728.03 13403.26v1.11h-805.79c-219.12 0-343.95-174.49-349.17-335.16l-1.31-40.37c-4.98-153.24 99.8-269.91 178.89-321.03l800.66-517.4h-921.44v-237.46h832.51c288.61 0 435 139.85 435 402.2v1048.11zm-7820.28-1475.72h406.56c290.95 0 528.99 238.04 528.99 528.99v415.31c0 290.94-238.04 528.98-528.99 528.98h-406.56c-290.94 0-528.98-238.04-528.98-528.98v-415.31c0-290.95 238.04-528.99 528.98-528.99zm53.33 218.6h299.91c174.81 0 317.82 134.77 317.82 309.56v425.71c0 174.79-143.03 309.56-317.82 309.56h-299.91c-174.79 0-317.82-134.75-317.82-309.56v-425.71c0-174.8 143.02-309.56 317.82-309.56zm3326.09 75.44c24.82-158.57 113.52-262.11 248.26-262.11h375.98c162.15 0 339.54 170.12 339.94 377.07v1066.72h-266.67l.12-1064.53c.01-70.05-84.31-149.75-145.53-149.75h-365.04c-93.52 0-184.66 73.77-184.66 185.16v1029.12h-266.67l-.05-1062.36c0-79.79-85.25-151.92-143.18-151.92h-335.53c-88.77 0-207.6 78.59-207.6 213.25v1001.03h-266.68v-1450.31h266.68v241.84c66.26-148.78 179.77-235.32 307.05-235.32h306.03c160.62 0 313.88 155.68 337.55 262.11zm6074.75-363.73v1295.13h471.09v251.39h-1267.8v-251.39h512.54v-1270.97c0-27.14-20.43-51.46-49.73-51.46h-401.63v-245.89h451.36c184.36 0 284.17 124.1 284.17 273.19zm-8293.19 431.73c0-220.14 159.14-337.71 311.53-337.71h474.33v251.38h-377.1c-85.57 0-142.09 62.8-142.09 137.43v1062.58h-266.67zm4446.06 1112.6h-512.55c-311.63 0-490.39-187.27-492.96-513.7l.01-.03v-935.5h266.68v935.55h-.18c2.52 153.85 59.8 247 226.45 247h512.55v-1182.55h266.67v1450.31h-266.67zm-6311.68-1042.67v246.97h-1045.96v796.78h-266.67v-1818.64h63.39v-.01h1290.75v266.67h-1087.47v508.23zm6884.37-774.89h284.17v1818.64h-284.17zm1543.22 800.17-734.3 475.78c-32.41 21-70.01 86.96-68.82 132.31l.67 25.43c1.36 51.89 68.23 147.8 157.38 147.8h645.07z"
        />
        <motion.path
          d="m12564.42 11070.96h-1600.06l1027.53-1031.72c699.89-702.75 861.3-675.25 2041.36-671.32h3641.05l-1043.98 1043.98-2719.29-2.22c-328.33-.27-667.9-2.72-988.63 311.06z"
          fill="#FFFFFF"
          variants={pathVariants2}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </motion.span>
  );
};
