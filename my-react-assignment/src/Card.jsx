

const Card = () => {

    return (
        <div className="">
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
                <figure><img src="https://i.ibb.co/1mLy7kZ/Rectangle-2-2.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Introduction to C Programming</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="flex mt-3">
                        <img src="https://i.ibb.co/mJVp9Vy/dollar-sign-1.png" alt="" />
                        <p>Price :</p>
                        <img src="https://i.ibb.co/RPK3Vrf/Frame.png" alt="" />
                        <p>Credit :</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary w-80 mt-5">Select</button>
                    </div>
                </div>
            </div>
            {/* <div className="">
                <p>second container</p>
            </div> */}
        </div>
    );
};

export default Card;