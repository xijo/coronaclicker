import React, {useState} from 'react'

export const App = (props) => {
  const [counter, setCounter] = useState(178000)

  return <div onClick={() => setCounter(counter - 1)}>
    Aktuell {counter}
  </div>
}
