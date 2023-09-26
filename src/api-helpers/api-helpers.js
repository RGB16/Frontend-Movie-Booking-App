import axios from "axios"
// import { log } from "console";


export const getAllMovies = async () => {
    try {
      const response = await axios.get("movie"); //without base url ->get("http://localhost:5000/movie");
      if (response && response.status === 200) {
        return response.data;
      } else {
        console.log("No Data");
        return null;
      }
    } catch (error) {
      console.error("Axios Error:", error);
      return null;
    }
  };
  

export const sendUserAuthRequest=async(data,signup)=>{
  const res=await axios
  .post(`/user/${signup ? "signup":"login"}`,{
    name:signup ? data.name: "" ,
    email:data.email,
    password:data.password,
  }).catch((err)=>console.log(err));

  if(res.status !==200 && res.status !==201){
    console.log("Unexpected Error Ocurred")
  }

  const resData =await res.data;
  return resData;
}




export const sendAdmininAuthRequest=async(data)=>{
  const res=await axios
  .post("/admin/login",{
    email:data.email,
    password:data.password,
  })
  .catch((err)=>console.log(err));

  if (res.status !==200){
    return console.log("Unexpected Error")
  }

  const resData=await res.data;
  return resData;
}



export const getMovieDetails = async (id) => {
  const res = await axios.get(`/movie/${id}`).catch((err) =>  console.log(err));

  if (res.status !== 201) {
    return console.log("unexpected Error");
  }
  const resData = await res.data;
  return resData;
};

// export const getMovieDetails = async (id) => {
//   console.log(id, "id in function");
//   try {
//     const response = await axios.get(`/movie/${id}`);
    
//     if (response.status === 201) {
//       return response.data; // Return the data directly
//     } else if (response.status === 404) {
//       return { error: 'Movie not found'}; // Handle 404 error
//     } else {
//       return { error: `Request failed with status code ${response.status}` };
//     }
//   } catch (error) {
//     console.error("An error occurred while fetching movie details:", error);
//     return { error: 'An error occurred while fetching movie details' };
//   }
// };


export const newBooking=async (data)=>{
  const res=await axios.post('/booking',{
    movie:data.movie,
    seatNumber:data.seatNumber,
    date:data.date,
    user:localStorage.getItem("userId"),
  })
  .catch((err)=>console.log(err));

  if (res.status!==201){
    return console.log("Unexpected Error")
  }

  const resData=await res.data;
  return resData;
}

//not getting all details in array format
export const getUserBooking = async () => {
  const id = localStorage.getItem("userId");
  console.log(id, "id in getUserBooking")
  const res = await axios
    .get(`/user/bookings/${id}`) // Use backticks (`) for template string
    .catch((err) => console.log(err));

    console.log(res, "in helper")
  if (res.status !== 200) {
    console.error("Unexpected error");
    throw new Error("Unexpected error"); // Throw an error to handle it upstream
  }
  const resData = await res.data;
  return resData;
};



export const deleteBooking =async(id)=>{
  const res=await  axios
  .delete(`/booking/${id}`)
  .catch((err)=>console.log(err));


  if (res.status !== 200) {
    console.error("Unexpected error");
    throw new Error("Unexpected error"); // Throw an error to handle it upstream
  }
  const resData = await res.data;
  return resData;

}


export const getUserDetails= async()=>{
  const id = localStorage.getItem("userId");
  const res =await axios.get(`/user/${id}`).catch((err)=>console.log(err));

  if (res.status!==200){
    return console.log("Unexpected Error")
  }
  const resData=await res.data;
  return resData;
}

export const addMovie =async(data)=>{
  const res=await axios.post("/movie",{
    title:data.title,
    description:data.description,
    posterUrl:data.posterUrl,
    releaseDate:data.releaseDate,
    featured:data.featured,
    actors:data.actors,
    admin:localStorage.getItem("adminId"),
  },{
    headers:{
      Authorization:`Bearer ${localStorage.getItem("token")}`,
    },
  }
  ).catch(err=>console.log(err));

 if (res.status!==201){
  return console.log("Unexpected Error Occured");

 }
 const resData=await res.data;
  return resData;

}



// export const getAdminById =async()=>{
//   const adminId=localStorage.getItem("adminId");
//   const res =await axios
//   .get(`/admin/${adminId}`)
//   .catch((err)=>console.log(err));

//   if (res.status!==200){
//     return console.log("Unexpected Error Ocurred")
//   }

//   const resData=await res.data;
//   return resData;


// }



export const getAdminById = async () => {
  const adminId = localStorage.getItem('adminId');

  try {
    const res = await axios.get(`/admin/${adminId}`);

    if (res.status === 200) {
      return res.data; // Return the data when the request is successful
    } else {
      console.error(`Request failed with status code ${res.status}`);
      return null; // Return null or handle the error as needed
    }
  } catch (err) {
    console.error('An error occurred:', err);

    if (err.response) {
      // Server responded with an error status code
      console.error(`Response status: ${err.response.status}`);
      console.error(`Response data: ${JSON.stringify(err.response.data)}`);
    } else if (err.request) {
      // The request was made, but no response was received
      console.error('No response received from the server');
    } else {
      // Something else went wrong
      console.error('Unexpected error occurred');
    }

    return null; // Return null or handle the error as needed
  }
};

