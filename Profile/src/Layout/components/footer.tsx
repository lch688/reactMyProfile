import React from 'react';
import styles from './footer.module.css'



export const Footer:React.FC=() =>{


    return(
        <div className={styles.wrapper}>
            <ul className={styles.footUl}>
                <li className={styles.footLi}>
                    <a href='https://twitter.com/liuchenhao13/status/1580295721583943680?s=20&t=Z0P1JLygaka4p6ydybWZRA'
                       style={{textDecoration:"none" , color:"#000"}}
                       target={'_blank'}
                    >
                        <span className="iconfont icon-twitter" />
                    </a>

                </li>
                <li className={styles.footLi}>
                    <a href='https://twitter.com/liuchenhao13'
                       style={{textDecoration:"none" , color:"#000"}}
                       target={'_blank'}
                    >
                        <span className="iconfont icon-facebookfacebook51" />
                    </a>

                </li>
                <li className={styles.footLi}>
                    <a href='https://www.google.com'
                       style={{textDecoration:"none" , color:"#000"}}
                       target={'_blank'}
                    >
                        <span className="iconfont icon-googleplus" />
                    </a>

                </li>
                <li className={styles.footLi}>
                    <a href='https://www.instagram.com/chen.hao66/'
                       style={{textDecoration:"none" , color:"#000"}}
                       target={'_blank'}
                    >
                        <span className="iconfont icon-instagram" />
                    </a>

                </li>
                <li className={styles.footLi}>
                    <a href='https://www.youtube.com/channel/UCkfvSj5x_7h9CgAbiVdAvjQ'
                       style={{textDecoration:"none" , color:"#000"}}
                       target={'_blank'}
                    >
                        <span className="iconfont icon-Youtube" />
                    </a>

                </li>
            </ul>

            <p className={styles.footP}>© COPYRIGHTS@CHENHAO LIU. ALL RIGHTS RESERVED.</p>
        </div>

    )
}