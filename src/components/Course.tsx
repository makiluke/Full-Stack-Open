import {sum} from "mathjs";

const Course =  (props) => {
    const course = props.course;
    const {name, parts} = course
    const total = parts.reduce((acc: number, part: object) => acc + part.exercises, 0);
    return(
    <div>
        <h1>{name}</h1>
        <ul>
            {parts.map(part=>(<li key={part.id}>{part.name} {part.exercises}</li>
            ))}
        </ul>
        <h3>total of {total} exercises</h3>
    </div>
    );
};

export default Course