import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"


const Note = (props:{content:string})=>{
    const {content} = props
    return <li>{content}</li>
}

const App = (props: { notes: any }) => {
    const {notes} = props

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map((note: { content: string; id: number }) =>
                    <Note key={note.id} content={note.content}/>)}
            </ul>
        </div>
    )
}

export default App