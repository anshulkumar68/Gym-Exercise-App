import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      // {bodyPartsData.toUpperCase};
      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
          || item.target.toLowerCase().includes(search)
          || item.equipment.toLowerCase().includes(search)
          || item.bodyPart.toLowerCase().includes(search),
      );

      // window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <div className="my-10 flex flex-col items-center">
        <p className="text-3xl font-semibold pb-4">
          Awesome Exercises You <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Should Know
        </p>
        <p>
          <input
            type="text"
            placeholder="Search Exercises"
            className="py-2 px-4 w-[45rem] text-md outline-none border-l-[1px] border-t-[1px] border-b-[1px] text-left rounded-l-md"
          />
          <button className="bg-[#e93232] px-12 py-2 text-md border-r-2 border-t-2 border-b-2 text-white font-bold rounded-r-md ">
            Search
          </button>
        </p>
      </div>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </>
    // <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    //   <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49 px" textAlign="center">
    //     Awesome Exercises You <br /> Should Know
    //   </Typography>
    //   <Box position="relative" mb="72px">
    //     <TextField
    //       height="76px"
    //       sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '800px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
    //       value={search}
    //       onChange={(e) => setSearch(e.target.value.toLowerCase())}
    //       placeholder="Search Exercises"
    //       type="text"
    //     />
    //     <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
    //       Search
    //     </Button>
    //   </Box>
    //   <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
    //     <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    //   </Box>
    // </Stack>
  );
};

export default SearchExercises;
