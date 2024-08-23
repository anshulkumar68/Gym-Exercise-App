import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/Banner.png';

const HeroBanner = () => {
    return (
        <>
        <section className='flex flex-col w-[500px] my-[120px] mx-[100px] h-[600px]'>
                <p className='text-[1.7rem] font-bold text-[#b63434] mb-[20px]'>Fitness Club</p>
                <span className='font-bold text-[2.4rem]'>Sweat, Smile <br /> and Repeat</span>
                <p className='text-[1rem] my-[20px]'>Check out the most effective exercises personalized for you</p>
                <button className='bg-[#e93232] px-[1rem] py-[0.5rem] text-lg text-white font-bold rounded-md max-w-[220px] mt-[9px]'>Explore Exercise</button>
                <p className='opacity-10 text-[#e93232] text-[13rem] z-[-1] pt-20 tracking-widest'>Exercise</p>
        </section>
        </>

        // <Box>
        //     <Typography color='#b63434' fontWeight="600" fontSize="26px">
        //         <div>Fitness Club</div>
        //     </Typography>
        //     <Typography fontWeight="700" sx={{ fontSize: { lg: '44px', xs: '40px' }}} mb="23px" mt='30px'>
        //         Sweat, Smile <br /> and Repeat
        //     </Typography>
        //     <Typography fontSize='22px' lineHeight='35px' mb={3}>
        //         Check out the most effective exercises
        //     </Typography>
        //     <Button variant='contained' color='error' href="#exercises" sx={{ backgroundColor:"#ff2625", padding: '150'}}>Explore Exercises</Button>
        //     <Typography fontWeight={600} color='#ff2625' sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }} fontSize='200px'>Exercise</Typography>
        //     <img src={HeroBannerImage} alt="Banner" className='hero-banner-img' />
        // </Box>
    )
}

export default HeroBanner
