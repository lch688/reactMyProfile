import React from 'react';
import styles from './intro.module.css'
import {Row,Col,Carousel} from 'react-bootstrap';
import { Typography } from 'antd';
import webstrom from  '../../../../assets/svg/Webstorm.svg'
import pycharm from  '../../../../assets/svg/Pycharm.svg'
import diamond from  '../../../../assets/svg/diamond.svg'
import fire from  '../../../../assets/svg/fire.svg'
import vscode from  '../../../../assets/svg/vscode.svg'
import react from  '../../../../assets/svg/react.svg'


interface props{
    title:string,
    content:string
}

export const Intro:React.FC<props> =({title,content}) =>{


    return(
        <section className={styles.introWrapper}>


           <div className={styles.container} >
                <section >
                    <Typography.Title level={1}>
                        <span className={styles.title}>{title}</span>
                    </Typography.Title>
                </section>
               <article>
                    <Typography.Text type={"secondary"} strong={true} >
                        <span className={styles.content}>Home/</span>
                        <span className={styles.content} style={{color: "#FCAF17"}}>{content}</span>
                    </Typography.Text>
               </article>
                <ul >
                    <li className={styles.logoWraper + " " + styles.vscode}>
                        <img src={vscode} alt='vscode' />
                    </li>
                    <li className={styles.logoWraper + " " + styles.diamond}>
                        <img src={diamond} alt='diamond' />
                    </li>
                    <li className={styles.logoWraper + " " + styles.paycharm}>
                        <img src={pycharm} alt='pycharm' />
                    </li>
                    <li className={styles.logoWraper + " " + styles.webstrom}>
                        <img src={webstrom} alt='webstrom' />
                    </li>
                    <li className={styles.logoWraper + " " + styles.react}>
                        <img src={react} alt='react' />
                    </li>
                    <li className={styles.logoWraper + " " + styles.fire}>
                        <img src={fire} alt='fire' />
                    </li>
                </ul>


                </div>
        </section>
    )
}