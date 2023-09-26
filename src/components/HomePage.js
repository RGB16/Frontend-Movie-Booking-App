import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Movieitems from './Movies/Movieitems'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../api-helpers/api-helpers'

const HomePage = () => {

    const [movie,setmovies]=useState([]);
    useEffect(()=>{
        getAllMovies()
        .then((data)=>setmovies(data.movies))
        .catch(err=>console.log(err))
    })

    
    console.log(movie)
  return (<Box width={'100%'} height={'100%'} margin="auto" marginTop={2} >
    <Box margin="auto" width={'80%'} height={'40vh'}  padding={2}>
        <img src="https://i0.wp.com/www.newsbugz.com/wp-content/uploads/2023/02/Kaatera-Movie-2.jpg?resize=1000%2C600&ssl=1" 
        alt="Kaatera"
        width={'100%'}
        height={'100%'}

        />
    </Box>
    <Box padding={5} margin="auto">
    <Typography variant='h4' textAlign={"center"} >Latest Releases
    </Typography>
    </Box>

    <Box
    margin={"auto"}
    display={"flex"}
    width={"80%"}
    justifyContent={"center"}
    alignItems={"center"}
    flexWrap={"wrap"}
    >
    {movie && 
    movie.slice(0,4).map((movie,index)=>(<Movieitems id={movie.id} title={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate}/>))}
    
   
    </Box>
    <Box display={"flex"} padding={5} margin={"auto"}>
        <Button
        LinkComponent={Link} 
        to="/movies"
        variant='outlined'
        sx={{margin:"auto",color:"#2b2d42"}}
        >View All Movies</Button>
    </Box>

  </Box>

    
  )
}

export default HomePage
