import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import Note from './components/Note'

const App = ({notes}) => {
    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map((note: { content: string; id: number }) =>
                    <Note key={note.id} note={note}/>)}
            </ul>
        </div>
    )
}

export default App