// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
//       <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
//     </div>
//   )
// }

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }
// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>{props.part} {props.exercises}</p>
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//     </div>
//   )
// }

// const App = () => {
//   // const course = 'Half Stack application development'
//   // const part1 = {
//   //   name: 'Fundamentals of React',
//   //   exercises: 10
//   // }
//   // const part2 = {
//   //   name: 'Using props to pass data',
//   //   exercises: 7
//   // }
//   // const part3 = {
//   //   name: 'State of a component',
//   //   exercises: 14
//   // }

//   // return (
//   //   <div>
//   //     <Header course={course} />
//   //     <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
//   //     <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
//   //   </div>
//   // )

//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }


// Ejercicio 1.6 - 1.11
// Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. Tu tarea es implementar una aplicación web para recopilar comentarios de los clientes. Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).
// Tu aplicación debe mostrar cuántos comentarios de cada tipo se han dado. Tu aplicación debe mostrar también el porcentaje de comentarios positivos. Por ejemplo, si se ha dado un total de 14 comentarios, y 8 de estos son buenos, entonces el porcentaje de comentarios positivos es 57.

// import { useState } from 'react'



// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const handleGoodClick = () => {
//     const setGoodFeedBack = good + 1
//     setGood(setGoodFeedBack)
//   }
//   const handleNeutralClick = () => {
//     const setNeutralFeedBack = neutral + 1
//     setNeutral(setNeutralFeedBack)
//   }
//   const handleBadClick = () => {
//     const setBadFeedBack = bad + 1
//     setBad(setBadFeedBack)
//   }

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button handleClick={handleGoodClick} text='good' />
//       <Button handleClick={handleNeutralClick} text='neutral' />
//       <Button handleClick={handleBadClick} text='bad' />
//       <h1>statistics</h1>
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const Statistics = ({ good, neutral, bad }) => {
//   const total = good + neutral + bad
//   const average = (good - bad) / total
//   const positive = (good / total) * 100

//   if (total === 0) {
//     return (
//       <div>No feedback given</div>
//     )
//   }
//   return (
//     <div>
//       <table>
//         <tbody>
//           <Statistic text='good' value={good} />
//           <Statistic text='neutral' value={neutral} />
//           <Statistic text='bad' value={bad} />
//           <Statistic text='all' value={total} />
//           <Statistic text='average' value={(Math.round(average * 100) / 100).toFixed(2)} />
//           <Statistic text='positive' value={(Math.round(positive * 100) / 100).toFixed(2) + '%'} />
//         </tbody>
//       </table>
//     </div>
//   )

// }

// const Statistic = ({ text, value }) => {
//   return (
//     <tr>
//       <td>{text}</td>
//       <td>{value}</td>
//     </tr>
//   )
// }




// Ejercicio 1.12
// 1.12*: anecdotes, paso 1
// El mundo de la ingeniería de software está lleno con anécdotas que destilan verdades atemporales de nuestro campo en breves frases.
// Expande la siguiente aplicación agregando un botón en el que se pueda hacer clic para mostrar una anécdota aleatoria del campo de la ingeniería de software:

import { useState } from 'react'

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
//     'The only way to go fast, is to go well.'
//   ]


//   const [selected, setSelected] = useState(0)
//   const [setVote, setSelectedVote] = useState([])
//   const randomNumber = Random(anecdotes.length)

//   const points = new Array(8).fill(0)

//   const handleClick = () => {
//     setSelected(randomNumber)
//   }

//   const handleVoteClick = () => {
//     const copy = [...points]
//     copy[randomNumber] += 1
//     setSelectedVote(copy)

//   }

//   return (
//     <div>
//       {anecdotes[selected]}
//       <br />
//       {<Button handleClick={handleClick} text='next anecdote' />}
//       {<Button handleClick={handleVoteClick} text='vote' />}
//       <br />
//       <p>has {setVote} votes</p>
//     </div>
//   )
// }




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [setVote, setSelectedVote] = useState([])
  const [mostVotes, setMostVotes] = useState(0)

  const handleVoteClick = () => {
    const copy = [...setVote]
    copy[selected] = (copy[selected] || 0) + 1
    if (copy[selected] > mostVotes) {
      setMostVotes(copy[selected])
    }
    setSelectedVote(copy)
  }
  return (


    <div>
      HACERLO CON TABLA
      <br />
      <br />

      <table>
        <tbody>
          <tr>
            <th id='c'>Anecdote of the day</th>
            <td>{anecdotes[selected]}</td>
          </tr>
          <tr>
            <th id='c'>Anecdote with most votes</th>
            <td>{anecdotes[setVote.indexOf(mostVotes)]}</td>
          </tr>
          <tr>
            <th id='c'>Quantity of votes</th>
            <td>{mostVotes}</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <br />
      OTRA FORMA DE HACERLO
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {setVote[selected]} votes</p>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text='next anecdote' />
      <Button handleClick={handleVoteClick} text='vote' />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[setVote.indexOf(mostVotes)]}</p>
      <h1>Quantity of votes</h1>
      <p>{mostVotes}</p>


    </div>
  )

}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)



export default App