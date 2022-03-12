import React from "react"
import Playlist from "./Playlist";
let _playlistArr = [
    {
        name: 'Maharshi Favorite Playlist',
        songs : [
            {
                name: ' "Aaj Se Teri" Padman',
            },
            {
                name: '"Tere Mere" Chef',
            },
            {
                name: '"Main Tere Kabil Hoon" Kaabil',
            }
        ]
    },
    {
        name: 'Keyur Favorite Playlist',
        songs : [
            {
                name: '"Enna Sona" OK Jaanu',
            },
            {
                name: '"Humsafar" Badrinath Ki Dulhania'
            },
            {
                name: '"Lambiyaan Si Judaiyan" Raabta',
            }
        ]
    },
    {
        name: 'Abhi Favorite Playlist',
        songs : [
            {
                name: '"Ban Ja Rani" Tumhari Sulu',
            },
            {
                name: '"Nazm Nazm" Bareilly Ki Barfi',
            }
        ]
    }
]
const PlaylistList = ({ playlistArr = _playlistArr }) => {
    return (
        <div>
            {playlistArr.map((playlist, index) => {
                console.log('--------- Inside PlayList', index, playlist);
                return (
                    <span key={index}>
                        <div>PlayList Name: {playlist.name}</div>
                        <Playlist  songs={playlist.songs} />
                    </span>
                )
            })}
        </div>
    )
}

export default PlaylistList;