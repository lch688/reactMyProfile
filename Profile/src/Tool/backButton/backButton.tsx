import React,{useState,useEffect} from 'react';
import styles from './backbutton.module.css'




interface props{
    
}

export const BackButton:React.FC<props> =() =>{



    const [scroll,setScroll]=useState<boolean>(false)


    const if_show_backup=()=>{

        if(document.documentElement.scrollTop >200){

            setScroll(true)
        }else {

            setScroll(false)

        }
    }


    useEffect(() => {

        window.addEventListener('scroll',if_show_backup)
        return () => {

            window.removeEventListener('scroll',if_show_backup)
        }
    }, []);



    return(
        <div>

            {
                scroll? <div className={styles.backup}
                             onClick={() =>{
                                 window.scrollTo(0,0)
                             }}
                ><span className="iconfont icon-jiantoushang" />
                </div>:<div className={styles.backupOut}

                ><span className="iconfont icon-jiantoushang" />
                </div>
            }


        </div>
    )
}