import React from 'react'
import Icon from '../assets/icons/gym.png';

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <button
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top:1800, left:100, behavior: 'smooth'})
      }}
      className={`flex flex-col items-center justify-center transform scale-100 transition-all duration-300 ease-in-out hover:scale-x-105 
      ${bodyPart === item ? "border-t-8 border-[#ff2625]" : ""}
      bg-white rounded-b-lg  w-[14rem] h-[14.5rem] gap-12 `}
    >
      <img src={Icon} alt="icon logo" className="w-10 h-10" />
      <p className='font-bold capitalize text-lg'>{item}</p>
    </button>
  );
}

export default BodyPart

// import React from 'react'
// import { Stack, Typography } from '@mui/material'
// import Icon from '../assets/icons/gym.png';

// const BodyPart = ({ item, setBodyPart, bodyPart }) => {
//   return (
//     <Stack
//       type="button"
//       alignItems="center"
//       justifyContent="center"
//       className="transform scale-100 transition-all duration-300 ease-in-out hover:scale-110"
//       sx={{
//         borderTop: bodyPart === item ? "4px solid #ff2625" : "",
//         backgroundColor: "#fff",
//         borderBottomLeftRadius: "20px",
//         width: "270px",
//         height: "280px",
//         cursor: "pointer",
//         gap: "47px",
//       }}
//     >
//       <img
//         src={Icon}
//         alt="dumbbell"
//         styles={{ width: "40px", height: "40px" }}
//       />
//     </Stack>
//   );
// }

// export default BodyPart
