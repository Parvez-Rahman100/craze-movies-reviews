import { useNavigate } from 'react-router-dom';
import ImgBanner from '../../Assests/img-banner.jpg';
import useMovies from '../../hooks/useMovies';
import MovieReview from '../../MovieReview/MovieReview';

const Home = () => {
    const [movies,setMovies] = useMovies();
    let nevigate = useNavigate();
    const handleReviewBtn = () =>{
        const path =  `/reviews`;
        nevigate(path);
    }
    return (
        <div>
            <div className=' flex justify-around m-10 p-10'>
                <div className=' shadow-stone-400 shadow-xl rounded-xl'>
                <img className=' w-96 rounded-2xl' src={ImgBanner} alt="movieBanner" />
                </div>
                <div>
                <h1 className='text-4xl text-emerald-600'>Craziest Movie All Time</h1>
                <p className=' text-red-600 m-8'>These movies will blow your mind.</p>
                </div>
                
            </div>
            <h1 className='text-4xl text-teal-800 text-center'>Customer Review {movies.length}</h1>
            <div className=' grid md:grid-cols-3 gap-5 items-center my-8 mx-40'>
                {
                    movies.slice(0,3).map(movie =><MovieReview key={movie.id} movie={movie}></MovieReview>)
                }  
                             
            </div>
            <button className=' block mx-auto m-4 p-4 bg-teal-900 rounded-xl text-slate-50' onClick={handleReviewBtn}>Sell All Reviews</button>
            
        </div>
    );
};

export default Home;