import React, {useState} from 'react';
import styles from './professional.module.css'
import {Nav} from "react-bootstrap";


import {Projects} from './projects'
import {useDispatch, useSelector} from "../../../../Tool/hooks";
import {ProfessionalInfoSlice } from  '../../RTK/slice'


interface props{

}

export const Professional:React.FC<props> =() =>{


    const projects =useSelector(state => state.Project.projects)
    const names =useSelector(state => state.Project.name)
    const location=useSelector(state => state.Project.location)

    const dispatch=useDispatch()


    return(
        <div className={styles.wrapper}>

            <section className={styles.container}>
                <div className={styles.Nav}>
                    <Nav variant="tabs"  className="justify-content-center" defaultActiveKey={names[0]} >

                        {
                            names.map((items,index)=>{
                                return (
                                <Nav.Item key={index}>
                                    <Nav.Link eventKey={items} onClick={() =>{
                                        dispatch(ProfessionalInfoSlice.actions.changeLocation(items))

                                    }}><span style={{textTransform: "capitalize"}} >{items}</span></Nav.Link>
                                </Nav.Item>
                                )
                            })
                        }
                    </Nav>
                </div>

                {
                    projects.map((items,index)=>{
                        if (location===items.head) {
                            return (
                                <Projects
                                    key={index}
                                img={items.img}
                                title={items.title}
                                content={items.content}
                                projectUrl={items.projectUrl}
                                gitUrl={items.gitUrl}
                            />
                            )
                        }
                    })
                }

            </section>
        </div>
    )

}