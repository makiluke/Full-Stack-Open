import React from "react"

// @ts-expect-error fast-development
const Note = ({note})=>{
    return <li>{note.content}</li>
}
export default Note