import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Album from "../components/Album";
import Genre from "../components/Genre";
import PlaylistList from "../components/PlaylistList";
import Playlist from "../components/Playlist";

const routeArr = [
    { path: "/", element: <Home /> },
    { path: "playlistlist", element: <PlaylistList /> },
    { path: "album", element: <Album />},
    { path: "genre", element: <Genre /> },
    { path: "playlist", element: <Playlist /> },
]

const Routing = () => {
    return (
        <Routes>
            {routeArr.map((_route) => {
                return (
                    <Route key={_route.element} path={_route.path} element={_route.element} />
                );
            })}
        </Routes>
    );
}

export default Routing;