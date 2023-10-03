'use client'


import { useState } from "react"
import styles from './index.module.css'


export default function Header(props){
    const [authenticated, setAuthenticated] = useState(false)
    const handleAU = () => authenticated ? setAuthenticated(false) : setAuthenticated(true)

    return(
        <>
            <div className={styles.root}>
                {props.buttons.map((buttonkey:any) => 
                    <a>
                    <button>{buttonkey}</button>
                    </a>
                )}
                
            </div>
        </>
    )
}