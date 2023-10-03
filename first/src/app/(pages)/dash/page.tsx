'use client'

import {useState} from 'react'

export default function Dash(){
    const [active,setActive] = useState(false)

    const handleActive = () => active ? setActive(false) : setActive(true)
    return(
        <>
            <button onClick={handleActive}>Click me</button>
            {active ? <h1>Now it's active</h1>: <h1></h1>}
        </>
    )
}