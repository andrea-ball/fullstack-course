//https://fullstackopen.com/en/part1/component_state_event_handlers
import { useState } from 'react'

//a very simplified component that only returns one div for display
//destructures counter param and uses it in the return
const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const App = () => {
    //creates two new variables: counter and setCounter
    //counter is initalized with the value of 0 (useState)
    //setCounter is assigned a function that will be used to modify the state
    const [counter, setCounter] = useState(0) //set[blank] will rerender the component (re-execute the function body)
    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

    return (
        <div>
            <Display counter={counter} />
            <Button
                onClick={increaseByOne}
                text='plus'
            />
            <Button
                onClick={decreaseByOne}
                text='minus'
            />
            <Button
                onClick={setToZero}
                text='zero'
            />
            {/**You can also set the counter state within an event handler */}
            {/**<button onClick={() => setCounter(0)}>
                zero
            </button>*/}
        </div>
    )
}

export default App