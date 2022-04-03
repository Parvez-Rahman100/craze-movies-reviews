import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='text-center  mx-4 px-10 bg-sky-600 p-7 text-white rounded-xl'>
                <h1 className='text-4xl text-center my-4'>What is context api?</h1>
                <p className='text-center '>Context Api gives us oportunity to send data without prop drilling. We can pass static and dynamic value by context api. 
                We can send data to up or down components. It is easier to use. It makes our code cleaner. It gives us more control to the root components.</p>
            </div>
            <div className='text-center  m-4 px-10 bg-sky-600 p-7 text-white rounded-xl'>
                <h1 className='text-4xl text-center my-10 '>What is semantic tag?</h1>
                <p className='text-center '>Semantic element provides what type of information inside the element . It is meaningful to developer and also users. There are various types of semantic tag . 
                    Example : Article , Aside , Header , Footer Etc. These element contain meaningful content. It is much easier to read as a developer.
                </p>
            </div>
        </div>
    );
};

export default Blogs;