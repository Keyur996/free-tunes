import React from "react"
import Card from "../shared/Card"

const Song = ({ song }) => {
    return (
        <div>
            <Card key={song.title} model={song} />
        </div>
    )
}
export default Song;