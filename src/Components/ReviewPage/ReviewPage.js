import React from 'react';

const ReviewPage = ({movie}) => {
    const {name,img,Rating,review,reviewer,reviewerName} = movie;
    return (
        <div className=' border-slate-800 border p-10 rounded-xl bg-teal-50'>
             <div className=' w-full' >
                <img   src={img} alt="" />
            </div>
            <div className='my-3'>
                <h1 className='text-2xl'>{name}</h1>
                <p className='text-3xl'>Rating : {Rating}</p>
                <p className='my-2'>Reviewer : {reviewerName}</p>
            </div>
            <div className='flex justify-center items-center my-3'>
            <img className=' w-10 h-10 rounded-full mr-3' src={reviewer} alt="" />
            <p>{review}</p>
            
            </div>
        </div>
    );
};

export default ReviewPage;