/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from './Card/Card';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [AllCourse, setAllcourse] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [countTotal, setCountTotal] = useState([]);
    const [creditTotal, setcreditTotal] = useState([]);
    const [TotalRemaining, setTotalRemaining] = useState([]);


    useEffect(() => {
        fetch("./fackdata.json")
            .then((res) => res.json())
            .then(data => setAllcourse(data))

    }, [])

    const handleClick = (course) => {
        const isExist = selectCourse.find((item) => item.ID == course.ID);

        let count = course.Price;
        let credit = course.Credit;

        if (isExist) {


            return toast.error('already selected')

        } else {

            selectCourse.forEach((item) => {
                count = count + item.Price;
            })
           
            selectCourse.forEach((item) => {
                credit = credit + item.Credit;
            })

            const TotalRemaining = 20 - credit;

            if (credit > 20) {
                return toast.error('you cannot select more than 20 hr!!!')
            } else {
                setCountTotal(count)
                setTotalRemaining(TotalRemaining);
                setcreditTotal(credit)
                setSelectCourse([...selectCourse, course]);
            }

        }

    };

    return (
        <div className='flex gap-20 mt-2'>
            <div className='grid grid-cols-3 max-w-7xl gap-4 ml-6 p-2'>
                {
                    AllCourse.map((course) => (

                        <div className="">
                            <div className="card w-96 bg-base-100 shadow-xl mt-10 pt-5">
                                <figure><img src={course.Image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{course.CourseName}</h2>
                                    <p>{[course.Title]}</p>
                                    <div className="flex mt-3">
                                        <img src="https://i.ibb.co/mJVp9Vy/dollar-sign-1.png" alt="" />
                                        <p>Price : {course.Price}</p>
                                        <img src="https://i.ibb.co/RPK3Vrf/Frame.png" alt="" />
                                        <p>Credit :{course.Credit}</p>
                                    </div>
                                    <div className="card-actions justify-center">
                                        <button onClick={() => handleClick(course)} className="btn btn-primary w-80 mt-5">Select</button>
                                        < ToastContainer />
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))
                }

            </div>


            <div className=' mt-14'>
                <Card selectCourse={selectCourse} countTotal={countTotal} creditTotal={creditTotal} TotalRemaining={TotalRemaining}></Card>
            </div>

        </div>
    );
};

export default Home;