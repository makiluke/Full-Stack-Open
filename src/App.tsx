import {
    useState
} from "react";


const Button = (props: {onClick: any:; text: string}) => {
    const [value, setValue] = useState(0)
    return <button onClick={() => setValue(value + 1)}>(props.text)</button>
}
const App = () => {

    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" />
        </div>
    )
}

export default App