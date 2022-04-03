import { useEffect, useState } from "react"

const useMovies = () =>{
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        fetch('movieReview.json')
        .then(res => res.json())
        .then(data => setMovies(data));
    },[]);
    return [movies,setMovies];
}
export default useMovies;