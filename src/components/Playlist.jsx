import React from "react"
import Song from "./Song";
let _songsArray = [
    {
        name: 'Maharshi Favorite Song',
    },
    {
        name: 'Keyur Favorite Song',
    },
    {
        name: 'Abhi Favorite Song',
    }
]
const Playlist = ({ songsArray = _songsArray }) => {
    return (
        <div>
            {(songsArray || []).map((_song) => (<Song key={_song.name} song={_song} />))}
        </div>
    )
}

export default Playlist;