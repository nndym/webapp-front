import Button from '@components/Button'
import React from 'react'

const data = [
    {
        title: "Exclusive Content",
        description: "Gain access to all the awesome stuff that isn't freely available, right at your finger tips",
        icon: "lab la-fort-awesome",
        bg_color: "bg-red-400",
        icon_color: "text-red-800",
    },
    {
        title: "Early Sign Up's",
        description: "Always late to the party? we reserve spots for all members so that you get first pick at all our events!",
        icon: "las la-pen-fancy",
        bg_color: "bg-green-400",
        icon_color: "text-green-800",
    },
    {
        title: "Seva Opportunities",
        description: "Want to help but don't ever know when or where? well pick from our wide range of opptruntites.",
        icon: "las la-people-carry",
        bg_color: "bg-purple-400",
        icon_color: "text-purple-800",
    },
    {
        title: "Exclusive Events",
        description: "Don't have #FOMO we host special events just for you!",
        icon: "las la-calendar-day",
        bg_color: "bg-pink-400",
        icon_color: "text-pink-900",
    },
]

function Banner() {
    return (
        <div className="w-[90%] md:h-screen relative flex flex-col justify-center py-16 md:py-0">
            <div className='md:fixed '>
                <div className='w-64'>
                    <h2 className="text-4xl font-bold text-white">Become a Member</h2>
                    <p className="my-3">Join a engaging, caring and empowering community to seek your true potential.</p>
                    <div className='py-1'>
                        <Button className='absolute' href="/account/info" color="black" size="medium" >
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className='mt-16 grid lg:grid-cols-2 gap-4'>
                    {data.map((item, index) => (
                        <div key={index} className='flex'>
                            <div>
                                <div className={item.bg_color + " w-12 h-12 flex justify-center items-center rounded-full"}>
                                    <i className={item.icon + " text-2xl " + item.icon_color}></i>
                                </div>
                            </div>
                            <div className="ml-4 mt-3">
                                <h6 className='font-bold'>{item.title}</h6>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Banner
