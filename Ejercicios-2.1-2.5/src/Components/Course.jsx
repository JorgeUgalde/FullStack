import React from "react";

const Course = ({ course }) => {

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}


const Header = ({ course }) => {
    return (
        <div>
            <h1>{course}</h1>
        </div>
    )
}
const Content = ({ parts }) => {
    return (

        <div>
            {parts.map(part => (
                <Part key={part.id} part={part.name} exercises={part.exercises} />
            ))}
        </div>
    )
}

const Part = ({ part, exercises }) => {
    return (
        <div>
            <p>{part} {exercises}</p>
        </div>
    )
}

const Total = ({ parts }) => {
    return (
        <div>

            <p>Number of exercises  {parts.reduce((sum, part) => sum + part.exercises, 0)} </p>
            <p></p>

        </div>
    )
}



export default Course