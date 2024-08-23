import {React, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import BodyPart from "./BodyPart";
import "react-horizontal-scrolling-menu/dist/styles.css"; // Ensure this is imported for default styles

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button 
      onClick={() => scrollPrev()} 
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
    >
      <img src={LeftArrowIcon} alt="left-arrow" className="w-6 h-6" />
    </button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button 
      onClick={() => scrollNext()} 
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
    >
      <img src={RightArrowIcon} alt="right-arrow" className="w-6 h-6" />
    </button>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <div
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            className="inline-block mx-10"
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default HorizontalScrollbar;




// import {React, useContext } from "react";
// import { Box } from "@mui/material";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

// import BodyPart from "./BodyPart";
// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };


// const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
//   return (
//     <>
//       <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//         {data.map((item) => (
//           <Box
//             key={item.id || item}
//             itemId={item.id || item}
//             title={item.id || item}
//             m="0 40px"
//           >
//             <BodyPart
//               item={item}
//               bodyPart={bodyPart}
//               setBodyPart={setBodyPart}
//             />
//           </Box>
//         ))}
//       </ScrollMenu>
//     </>
//   );
// };

// export default HorizontalScrollbar;
 