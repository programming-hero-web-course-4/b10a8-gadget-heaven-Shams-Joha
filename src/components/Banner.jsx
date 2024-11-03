
import Header from "./Header";
import banner from "../assets/banner.jpg"
const Banner = () => {
    return (
        <div className="mx-8 relative -top-20">
            <div className="rounded-3xl p-2 bg-[#FFFFFF4D]  border border-gray-200">
                <div className="rounded-3xl bg-[#9538E2]">
                    <div className="pb-52 pt-16">

                        <Header title={'Upgrade Your Tech Accessories with Gadget Heaven Accessories'} description={
                            'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'
                        } className={'text-5xl font-bold text-center text-white w-1/2'}></Header>


                        <div className="flex justify-center">
                            <button onClick={() => console.log('clicked')} className="btn text-base bg-white rounded-3xl text-[#9538E2] font-bold px-7">Shop Now</button>
                        </div>


                    </div>


                </div>
            </div>
            <div className="rounded-2xl p-3 bg-[#FFFFFF4D] border border-gray-200 w-[900px] absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-32">
                <div>
                    <img src={banner} className="w-full  rounded-2xl h-[500px]"></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;