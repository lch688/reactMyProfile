import React from 'react';
import styles from './layout.module.css'
import {Header,Footer} from  './components'

interface props{
    children:React.ReactNode
}

export const MianLayout:React.FC<props> =({children}) =>{

    return(
        <>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}