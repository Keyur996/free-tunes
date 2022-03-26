import React from "react";


//details, title, total time, icon, 
const Card = ({model}) => {
    const temp = {
        type: 'Playlist',
        details: 'My fav playlist',
        title: 'Zoobie Doobie',
        time: 'Autcalculated 10min',
        icon: 'Taimur s picture '
    }
    console.log(model)
    return (
        <div key={model.title} className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
            {/* {skillIcon} */}
            <p className="text-xl font-semibold mt-4">{model.title}</p>
        </div>
    )
}

export default Card;