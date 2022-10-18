import React, {useEffect} from 'react';
import styles from './header.module.css'
import {Navbar,Nav,Container,Row,Col,ProgressBar} from 'react-bootstrap';
import logo from '../../assets/svg/logo.svg'
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "../../Tool/hooks";
import {getHeaderInfo} from './RTK/slice'

export const Header:React.FC=() =>{

    const navigate=useNavigate()

    const name=useSelector((state) => state.Header.name)
    const navInfo=useSelector((state) => state.Header.nav)


    const dispatch=useDispatch()


    useEffect(()=>{
        dispatch(getHeaderInfo())
    },[])



    return(
        <div>
                    <Row style={{ width:'100%'}}>
                        <Col style={{marginTop:'10px'}} lg={2}>
                            <div  className={styles.NavName}>
                                <img src={logo} className={styles.AppLogo}/>
                                <Link to='/' style={{color:'black'}}>{name}</Link>
                            </div>


                        </Col>
                        <Col style={{marginTop:'15px'}} lg={8}>
                            <Navbar  variant="primary"  className={styles.Nav}  >

                            <Container className={"justify-content-center"}>
                                <Nav >
                                    <Nav.Item ><Link to="/"><span>{navInfo[0]}</span></Link></Nav.Item>
                                    <Nav.Item  ><Link to="/background"><span>{navInfo[1]}</span></Link></Nav.Item>
                                    <Nav.Item ><Link to="/project"><span>{navInfo[2]}</span></Link></Nav.Item>
                                </Nav>
                            </Container>

                            </Navbar>
                        </Col>
                        <Col  lg={2} style={{marginTop:'16px'}}>
                            <div>
                                <div onClick={() =>{
                                    navigate('/contact')
                                }}
                                     className={styles.NavContact}>CONTACT ME
                                </div>
                            </div>

                        </Col>


                    </Row>





        </div>

    )
    ///transition: all .6s ease-out 0s;
}