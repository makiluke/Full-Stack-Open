import {
    useState
} from "react";


const Button = (props: {onClick, text: string}) => {
    return <button onClick={props.onClick}>{props.text}</button>;
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all: number = good + neutral + bad
    const average: number = (good - bad)/all
    const positive: number = (good)/all
    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" onClick={()=> setGood(good+1)}/>
            <Button text="neutral" onClick={()=> setNeutral(neutral+1)}/>
            <Button text="neutral" onClick={()=> setBad(bad+1)}/>
            <h1>statistics</h1>
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
            <div>all {all}</div>
            <div>average {average}</div>
            <div>positive {positive * 100} %</div>
        </div>
    )
}

export default App