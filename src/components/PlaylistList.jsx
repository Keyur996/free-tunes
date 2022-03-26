import React from "react"
import Playlist from "./Playlist";
import Search from "../shared/Search";
import { Link } from "react-router-dom";
import "../styles/PlaylistList.css"
let _playlistArr = [
    {
        name: 'Maharshi Favorite Playlist',
        songs : [
            {
                title: ' "Aaj Se Teri" Padman',
            },
            {
                title: '"Tere Mere" Chef',
            },
            {
                title: '"Main Tere Kabil Hoon" Kaabil',
            },
            {
                title: ' "Aaj Se Teri" Padman1',
            },
            {
                title: '"Tere Mere" Chef1',
            },
            {
                title: '"Main Tere Kabil Hoon" Kaabil1',
            },
            {
                title: '"Enna Sona" OK Jaanu',
            },
            {
                title: '"Humsafar" Badrinath Ki Dulhania'
            },
            {
                title: '"Lambiyaan Si Judaiyan" Raabta',
            }
        ]
    },
    {
        name: 'Keyur Favorite Playlist',
        songs : [
            {
                title: '"Enna Sona" OK Jaanu',
            },
            {
                title: '"Humsafar" Badrinath Ki Dulhania'
            },
            {
                title: '"Lambiyaan Si Judaiyan" Raabta',
            }
        ]
    },
    {
        name: 'Abhi Favorite Playlist',
        songs : [
            {
                title: '"Ban Ja Rani" Tumhari Sulu',
            },
            {
                title: '"Nazm Nazm" Bareilly Ki Barfi',
            }
        ]
    }
]
const PlaylistList = ({ playlistArr = _playlistArr }) => {
    return (
        <div>
            <>
                <Search searchIn={'playlist'} />
            </>
            <div >
                {playlistArr.map((playlist, index) => {
                    console.log('--------- Inside PlayList', index, playlist);
                    return (
                        <span className="scrollable grid-rows-4 grid-flow-col gap-4" key={index}>
                            <div>PlayList Name: {playlist.name}</div>
                            <Playlist  songs={playlist.songs} />
                            <Link to={playlist.name}>{playlist.name}</Link>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default PlaylistList;