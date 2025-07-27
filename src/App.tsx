import {type JSX, type MouseEventHandler, useState} from 'react'


const Display = (props: { counter: number }) => {
    const counter = props.counter
    return (
        <div>{counter}</div>
    )
}



const Button = (props: { onClick: MouseEventHandler<HTMLButtonElement>, text: string }): JSX.Element => {
    const {onClick, text} = props
    return <button onClick={onClick}>{text}</button>
}
const App = () => {

    const [ counter, setCounter ] = useState(1)
    const handleClick = () => {setCounter(counter + 1)}
    const resetCounter = () => {setCounter(0)}
    const squareCounter = () => {setCounter(counter**2)}
    const squareRoot = () => {setCounter(counter**0.5)}

    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={handleClick} text={"+"}/>
            <Button onClick={squareCounter} text={"x²"}/>
            <Button onClick={squareRoot} text = {"√"}/>
            <Button onClick={resetCounter} text={"↺"}/>
        </div>
    )
}

export default App