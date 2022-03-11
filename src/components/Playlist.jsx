import React from "react"
import Song from "./Song";
let _playlistArr = [
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
const Playlist = ({ playlistArr = _playlistArr }) => {
    return (
        <div>
            {(playlistArr || []).map((_song) => (<Song key={_song.name} song={_song} />))}
        </div>
    )
}

export default Playlist;