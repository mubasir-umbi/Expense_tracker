import React, { createContext, useState } from 'react'
const CounterContext = createContext(null)

const useContext = (props) => {

    const [counter, setCounter] = useState(0)

  return (
    <CounterContext.Provider value={{counter, setCounter}}>
    <div>
      {props.children}
    </div>
    </CounterContext.Provider>
  )
}

export default useContext
export{CounterContext}
