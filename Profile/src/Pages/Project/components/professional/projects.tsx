import React from 'react';
import styles from './professional.module.css'
import {Typography} from "antd";
import { Button, Row, Col} from "react-bootstrap";



interface props{
    img:string,
    title:string,
    content:string,
    projectUrl:string,
    gitUrl:string
}

export const Projects:React.FC<props> =({img,title,content,projectUrl,gitUrl}) =>{
    return(


                <div className={styles.content}>
                    <Row>
                        <Col lg={6} xm={12}>
                            <section className={styles.imgContainer}>
                                <a href={projectUrl} target="_blank" >
                                    <img width='100%'
                                         height='100%'
                                         src={img}/>
                                </a>

                            </section>
                        </Col>
                        <Col lg={6} m={12}>
                            <article>
                                <Typography.Title level={3} >
                                    <a href={projectUrl} target="_blank" style={{position:'relative'}}>
                                        <span className={styles.title}>{title}</span>
                                    </a>
                                </Typography.Title>

                                <div className={styles.git}>
                                    <section className={styles.buttonText}>
                                        <Typography.Title level={4} >
                                            <p>Project source code(SC) :</p>
                                        </Typography.Title>
                                    </section>
                                    <section className={styles.button}>
                                        <a href={gitUrl} target="_blank">
                                            <Button variant="outline-secondary">
                                                <span className="iconfont icon-github5" style={{marginRight:'2px'}}/>

                                                <span className="iconfont icon-github" />

                                            </Button>
                                        </a>
                                    </section>


                                </div>
                                <section className={styles.dscribe}>
                                    <Typography.Title level={4}><span>Describe</span></Typography.Title>
                                    <Typography.Text type={"secondary"} strong={true}><p>
                                        {content}
                                    </p></Typography.Text>
                                </section>


                            </article>




                        </Col>

                    </Row>
                </div>


    )

}