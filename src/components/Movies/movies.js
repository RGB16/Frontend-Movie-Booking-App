import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../api-helpers/api-helpers';
import Movieitems from './Movieitems';



    const Movies = () => {
        const [movie,setMovies]=useState([]);
        useEffect(()=>{
            getAllMovies().then((data)=>setMovies(data.movies)).catch(err=>console.log(err))
        
        },[])
  return <Box
  margin={"auto"}
  marginTop={4}
  >
    <Typography
    variant='h4'
    margin={"auto"}
    padding={2}
    width="40%"
    textAlign={"center"}
    bgcolor={"#900C3F"}
    color={"white"}
    >All Movies</Typography>

    <Box
    width={"100%"}
    margin={"auto"}
    marginTop={5}
    display={"flex"}
    justifyContent={"flex-start"}
    flexWrap={"wrap"}
    >
     {movie && movie.map((movie,index)=>(<Movieitems key={index} id={movie._id} posterUrl={movie.posterUrl}  releaseDate={movie.releaseDate} title={movie.title}/>))}
    
    
    </Box>
  </Box>
  
}

export default Movies;
