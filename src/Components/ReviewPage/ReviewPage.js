import React from 'react';

const ReviewPage = ({movie}) => {
    const {name,img,Rating} = movie;
    return (
        <div>
             <div className=' w-52' >
                <img  src={img} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{Rating}</p>
            </div>
        </div>
    );
};

export default ReviewPage;