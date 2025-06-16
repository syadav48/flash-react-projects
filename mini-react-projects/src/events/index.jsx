import React from "react"
import Copy from "./copy"
import Drag from "./drag"
import BlurExample from "./blur"
import MouseMove from "./MouseEvents"
import DragDropList from "./drag-drop"

function Events(){
    return(
        <React.Fragment>
            <Copy />
            <Drag />
            <BlurExample />
            <MouseMove />
            <DragDropList />
        </React.Fragment>
    )
}

export default Events