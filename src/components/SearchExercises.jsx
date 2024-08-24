import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    }
    fetchExercisesData();
  }, []);

  // handleSearch method
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1327",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[37px] p-[20px]">
        <h1 className="font-bold text-center mb-[49px] text-[30px] lg:text-[44px]">
          Awesome Exercises You <br /> Should Know
        </h1>

        <div className="relative mb-[72px]">
          <input
            className="py-3 px-4 w-[45rem] text-md outline-none border-l-[1px] border-t-[1px] border-b-[1px] text-left rounded-l-md"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <button
            className="bg-[#e93232] px-12 py-3 text-md border-r-2 border-t-2 border-b-2 text-white font-bold rounded-r-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="relative w-full p-[20px]">
          <HorizontalScrollbar 
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </div>
      </div>
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
