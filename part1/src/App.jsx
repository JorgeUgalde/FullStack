// const Hello = (props) => {

//   console.log(props)
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const Footer = () => {
//   return (
//     <div>
//       greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
//     </div>
//   )
// }


//  Es otra solucion para no usar el div
// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }


//  Es otra solucion para no usar el div
// const App = () => {
//   return [
//     <h1>Greetings</h1>,
//     <Hello name='Maya' age={26 + 10} />,
//     <Footer />
//   ]
// }

////////////////////////////////////////////////////////////////////////
// Ejemplo friendas con array
// const App = () => {
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]

//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//     </div>
//   )
// }

// ejemplo friendas imprimiendo el array
// const App = () => {
//   const friends = [ 'Peter', 'Maya']

//   return (
//     <div>
//       <p>{friends}</p>
//     </div>
//   )
// }


//************************************************************************ */

// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }



// desustruturacion en el parametro
// const Hello = ({ name, age }) => {

// const Hello = (props) => {
//   const name = props.name
//   const age = props.age

// lo mismo que lo de arriba
//const { name, age } = props               


//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }


// ******************************************************************************************
// re renderizado


import { useState } from 'react'

// forma recomendada de hacerlo 
// const App = () => {
//   const [ counter, setCounter ] = useState(0)


//   const increaseByOne = () => setCounter(counter + 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <div>{counter}</div>

//       <button onClick={increaseByOne}>
//         plus
//       </button>

//       <button onClick={setToZero}>
//         zero
//       </button>
//     </div>
//   )
// }

// const App = () => {
//   const [counter, setCounter] = useState(0)


//   const handleClick = () => {
//     console.log('clicked')
//   }

//   return (
//     <div>
//       <div>{counter}</div>

//       <button onClick={() => setCounter(counter + 1)}>
//         plus
//       </button>
//       <button onClick={() => setCounter(0)}>
//         zero
//       </button>
//     </div>
//   )
// }



// ******************************************************************************************
//Jerarquia de componentes

// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

//desestructurando
// const Display = ({ counter }) => {
//   return (
//     <div>{counter}</div>
//   )
// }

//desestructurando y quitando los parentesis o compactando
const Display = ({ counter }) => <div>{counter}</div>

// const Button = (props) => {
//   return (
//     <button onClick={props.handleClick}>
//       {props.text}
//     </button>
//   )
// }

// const Button = ({ onSmash, text }) => (
//   <button onClick={onSmash}>
//     {text}
//   </button>
// )

// const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button
//         handleClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         handleClick={setToZero}
//         text='zero'
//       />
//       <Button
//         handleClick={decreaseByOne}
//         text='minus'
//       />
//     </div>
//   )
// }

//*****     ***************************************************************************************** */
// Parte D

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>
//         left
//       </button>
//       <button onClick={() => setRight(right + 1)}>
//         right
//       </button>
//       {right}
//     </div>
//   )
// }


// App utilizando dos estados y un solo objeto

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   // manera larga de hacer lkos clicks
//   // const handleLeftClick = () => {
//   //   const newClicks = {
//   //     left: clicks.left + 1,
//   //     right: clicks.right
//   //   }
//   //   setClicks(newClicks)
//   // }

//   // const handleRightClick = () => {
//   //   const newClicks = {
//   //     left: clicks.left,
//   //     right: clicks.right + 1
//   //   }
//   //   setClicks(newClicks)
//   // }

//   // Forma corta de hacer los clicks
//   const handleLeftClick = () =>
//     setClicks({ ...clicks, left: clicks.left + 1 })

//   const handleRightClick = () =>
//     setClicks({ ...clicks, right: clicks.right + 1 })

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }


// manejo de matrices 

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   const [allClicks, setAll] = useState([])


//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }


//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}

//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }


// actualizacion del estado es asincronica 

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updateRight = right + 1
//     setRight(updateRight)
//     setTotal(updateRight + left)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>

//       <p>total {total}</p>
//     </div>
//   )
// }


// renderizado condicional
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updateRight = right + 1
    setRight(updateRight)
    setTotal(updateRight + left)
  }

  return (
    <div>
      {left}
      {/* <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button> */}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      <p>total {total}</p>
    </div>
  )
}

// reglas de los hooks
// 1. no se pueden llamar hooks dentro de un bucle, condicion o funcion anidada
// 2. solo se pueden llamar hooks desde componentes funcionales de react






export default App
