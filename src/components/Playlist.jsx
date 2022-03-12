import React from "react"
import Song from "./Song";
const Playlist = ({ songs = [] }) => {
    return (
        <div>
            {songs.map((_song) => (<Song key={_song.name} song={_song} />))}
        </div>
    )
}

export default Playlist;