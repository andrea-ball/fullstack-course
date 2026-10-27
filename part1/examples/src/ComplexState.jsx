import { useState } from "react"

const History = (props) => {
    if (props.allClicks.length === 0){
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return(
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)

    // spread syntax creates a copy of an iterable object 
    // for example, ...clicks can be left: 3, right:5-- 
    // we then override the left property with left+1 so it becomes 4 in the new copy
    // copying the object forces react to update and rerender the page
    const handleLeftClicks = () => {
        setClicks({ ...clicks, left: clicks.left + 1 })
    }

    // setClicks() replaces the whole state object; 
    // if we only did setClicks({right:clicks.right+1}), the left property would be erased
    const handleRightClicks = () => {
        setClicks({ ...clicks, right: clicks.right + 1 })
    }

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <Button onClick={handleLeftClick} text="left" />
            <Button onClick={handleRightClick} text="right" />
            {right}
            <History allClicks={allClicks} />
        </div>
    )
}

export default App