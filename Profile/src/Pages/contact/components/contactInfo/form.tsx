import React from 'react';
import styles from './contactInfo.module.css'
import {Row, Col, Form ,Button} from "react-bootstrap";



interface props{

}

export const InfoForm:React.FC<props> =() =>{

    return(
        <Form>
            <div className={styles.inputWraper}>
                <Row >
                    <Form.Group as={Col} >
                        <Form.Control
                            required
                            size="lg"
                            type="text"
                            placeholder=" Enter Your Name"
                            style={{borderRadius:'0'}}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Control
                            required
                            size="lg"
                            type="email"
                            placeholder="Enter Your Email"
                            style={{borderRadius:'0'}}
                        />
                    </Form.Group>
                </Row>
            </div>

            <div className={styles.inputWraper}>
                <Form.Group  controlId="formGridEmail">
                    <Form.Control
                        required
                        size="lg"
                        type="email"
                        placeholder=" Enter Your Subject"
                        style={{borderRadius:'0'}}
                    />
                </Form.Group>
            </div>

            <div className={styles.inputWraper}>
                <Form.Group  controlId="formGridPassword">
                    <Form.Control
                        required
                        size="lg"
                        as="textarea"
                        rows={5}
                        placeholder="Enter Your Message"
                        style={{borderRadius:'0'}}
                    />
                </Form.Group>
            </div>
            <div style={{width:'100%', textAlign:'center'}}>

                <Button variant="primary"  type='submit'  style={{width:'25%'}}
                >
                    Submit
                </Button>


            </div>


        </Form>
    )
}