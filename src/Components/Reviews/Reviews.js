import React from 'react';
import useMovies from '../../hooks/useMovies';
import ReviewPage from '../ReviewPage/ReviewPage';

const Reviews = () => {
    const [movies,setMovies] = useMovies();
    return (
        
        <div>
            <h1 className='text-center text-5xl text-emerald-700'>What our Audience says </h1>
            <div className=' grid md:grid-cols-3 gap-10 items-center my-8 mx-40'>
            {
                movies.map(movie=><ReviewPage key={movie.id} movie={movie}></ReviewPage>)
            }
        </div>
        </div>
    );
};

export default Reviews;