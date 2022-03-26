import React from "react"
import Song from "./Song";
const Playlist = ({ songs = [] }) => {
    return (
        <div  className="grid grid-cols-4 gap-4">
            {songs.map((_song) => (<Song key={_song.title} song={_song} />))}
        </div>
    )
}

export default Playlist;