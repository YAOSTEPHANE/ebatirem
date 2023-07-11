import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <img src='images/IMG-20230705-WA0014.jpg' className='img-fluid' alt='blog' />
        </div>
        <div className='blog-content'>
            <p className='date'>05 July, 2023</p>
            <h5 className='title'>Best of the best</h5>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link to='/' className='button'>Read More</Link>
        </div>
    </div>
  );
};

export default BlogCard;