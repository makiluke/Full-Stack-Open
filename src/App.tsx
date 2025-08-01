import {
    useState
} from "react";


const Button = (props: {onClick, text: string}) => {
    return <button onClick={props.onClick}>{props.text}</button>;
}
const Statistics = (props) => {
    const {good, neutral, bad} = props;
    const all: number = good + neutral + bad
    const average: number = (good - bad)/all
    const positive: number = (good)/all
    if (all == 0)
        return (<>
                    <h1>statistics</h1>
                    <div>No feedback given</div>
        </>)
    else
        return (
            <>
                <h1>statistics</h1>
                <div>good {good}</div>
                <div>neutral {neutral}</div>
                <div>bad {bad}</div>
                <div>all {all}</div>
                <div>average {average}</div>
                <div>positive {positive * 100} %</div>
            </>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" onClick={()=> setGood(good+1)}/>
            <Button text="neutral" onClick={()=> setNeutral(neutral+1)}/>
            <Button text="neutral" onClick={()=> setBad(bad+1)}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App