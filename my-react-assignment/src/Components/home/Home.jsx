/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from './Card/Card';


const Home = () => {

    const [AllCourse, setAllcourse] = useState([])
    useEffect(() => {
        fetch("./fackdata.json")
            .then((res) => res.json())
            .then(data => setAllcourse(data))

    }, [])

    console.log(AllCourse.length)

    return (
        <div className='flex gap-32 mt-10'>
            <div style={{border:"1px solid black"}} className='grid grid-cols-3 max-w-7xl gap-4 ml-6 p-5'>
                {
                    AllCourse.map((course) => (

                        <div className="">
                            <div className="card w-96 bg-base-100 shadow-xl mt-10">
                                <figure><img src={[course.Image]} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{[course.CourseName]}</h2>
                                    <p>{[course.Title]}</p>
                                    <div className="flex mt-3">
                                        <img src="https://i.ibb.co/mJVp9Vy/dollar-sign-1.png" alt="" />
                                        <p>Price : {[course.Price]}</p>
                                        <img src="https://i.ibb.co/RPK3Vrf/Frame.png" alt="" />
                                        <p>Credit :{[course.Credit]}</p>
                                    </div>
                                    <div className="card-actions justify-center">
                                        <button className="btn btn-primary w-80 mt-5">Select</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))
                }

            </div>


            <div style={{border:"1px solid black"}} className=''>
                <Card></Card>
            </div>

        </div>
    );
};

export default Home;