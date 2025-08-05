import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

const App = (props: { notes: any }) => {
    const {notes} = props

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map((note: { content: string; id: number }) =>
                    <li key={note.id}>{note.content}</li>)}
            </ul>
        </div>
    )
}

export default App