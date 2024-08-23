import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/Logo.png";
import HeroBannerImage from "../assets/images/Banner.png";

const Navbar = () => {
  const [focus, SetFocus] = useState("Home");

  return (
    <nav className="flex gap-10 px-10 py-5 items-end">
      <img src={Logo} alt="logo" />
      <a
        href="#"
        className={`text-xl ml-28 ${
          focus === "Home"
            ? "underline decoration-[#e93232] decoration-4 font-bold"
            : ""
        }`}
        onClick={() => SetFocus("Home")}
      >
        Home
      </a>
      <a
        href="#"
        className={`text-xl ${
          focus === "Exercises"
            ? "underline decoration-[#e93232] decoration-4 font-bold"
            : ""
        }`}
        onClick={() => SetFocus("Exercises")}
      >
        Exercises
      </a>
      <img
        src={HeroBannerImage}
        alt="Banner"
        className="absolute top-[0px] right-[40px] w-[600px] h-[800px]"
      />
    </nav>
  );
};

export default Navbar;

// import React from 'react'
// import { Link } from 'react-router-dom';
// import { Stack } from '@mui/material';

// import Logo from '../assets/images/Logo.png'

// const Navbar = () => {
//   return (
//     <Stack
//       direction="row"
//       justifyContent="space-around" sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent:'none' }} px="20px">
//       <Link to="/">
//         <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px' }} />
//       </Link>
//       <Stack
//         direction="row"
//         gap="40px"
//         fontSize="24px"
//         alignItems="flex-end">
//         <Link to="/" className='no-underline border-b-2 border-[#b63434]'>Home</Link>
//         <a href="#exercises"  >Exercises</a>
//       </Stack>
//     </Stack>
//   )
// }

// export default Navbar

// <div className="flex justify-around px-5 mt-5 sm:mt-8 sm:gap-28 gap-10">
//   <Link to="/">
//     {/* <img src={Logo} alt="logo" className="w-12 h-12 mx-5" /> */}
//   </Link>
//   <div className="flex items-end gap-10 text-xl">
//     <Link to="/" className="no-underline border-b-2 border-red-600">Home</Link>
//     <a href="#exercises">Exercises</a>
//   </div>
// </div>
