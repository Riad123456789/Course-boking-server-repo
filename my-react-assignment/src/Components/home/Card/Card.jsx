/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';

const Card = ({ selectCourse, countTotal, creditTotal, TotalRemaining }) => {

    return (
        <div style={{ backgroundColor: "white" }} className='p-5 rounded-lg'>
            <h1 className='card-title'>Credit Hour Remaining: {TotalRemaining} hr</h1>
            <hr className='mt-5'></hr>
            <p className='card-name mt-1 mb-2'>Course Name</p>
            {
                selectCourse.map(course => (
                    <li className='list-decimal card-list'>{course.CourseName}</li>
                ))
            }
            <hr className='mt-3'></hr>
            <p className='card-credit mt-2 '>Total Credit Hour : {creditTotal}</p>
            <hr className='mt-5'></hr>
            <p className='card-total mt-2'>Total Price :   {countTotal} USD</p>
        </div>
    );
};

export default Card;
