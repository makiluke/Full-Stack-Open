import {useState, type JSXElementConstructor,
    type MouseEventHandler,
    type ReactElement,
    type ReactNode,
    type ReactPortal,
    type SetStateAction
} from "react";


const Button = (props: { onClick: MouseEventHandler<HTMLButtonElement>; text: string}) => (
    <button onClick={props.onClick}>{props.text}</button>
)

const Display = (props: {value: number}) => (
    <div>{props.value}</div>
)

const App = () => {
    const [value, setValue] = useState(10);
    const setToValue = (newValue: SetStateAction<number>)  =>{
        console.log("value", newValue);
        setValue(newValue)
    }

    return (
        <div>
            <Display value={value}/>
            <Button onClick={() => setToValue(1000)} text = "thousand"/>
            <Button onClick={() => setToValue(0)} text = "reset"/>
            <Button onClick={() => setToValue(value+1)} text = "increment"/>
        </div>
    )
}

export default App