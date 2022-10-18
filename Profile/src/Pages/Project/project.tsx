import React, {useEffect} from 'react';
import styles from './project.module.css'
import {MianLayout} from '../../Layout'
import {Intro} from '../Background/components/intro'
import {Professional} from './components'
import {Spin} from "antd";
import {useDispatch, useSelector} from "../../Tool/hooks";
import {getProfessionalInfo} from  './RTK/slice'
import Background from "../Background/background";

interface props{

}

const Project:React.FC<props> =() =>{

    const loading =useSelector(state => state.Project.loading)
    const error =useSelector(state => state.Project.error)
    const head =useSelector(state => state.Project.headline)
    const sub =useSelector(state => state.Project.subtitle)
    const dispatch=useDispatch()

    useEffect(() =>{
        dispatch(getProfessionalInfo())
    },[])





    if (loading) {
        return (
            <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        );
    }
    if (error) {
        return <div>website error：{error}</div>;
    }
    return(
        <MianLayout>
            <section>
                <Intro title={head} content={sub}/>
            </section>
            <section>
                <Professional />
            </section>
        </MianLayout>
    )
}
export default Project