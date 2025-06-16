import React from "react"
import MovetheBall from "./move-the-ball"
import DragtheBall from "./drag-the-ball"

function BrowserEvents(){
    return(
        <React.Fragment>
            <MovetheBall />
            <DragtheBall />
        </React.Fragment>
    )
}
export default BrowserEvents