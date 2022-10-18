import React from 'react';
import Loadable from 'react-loadable';


const LoadingComponent:React.FC =()=>{
    return (
        <div>loading</div>
    )
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader:any,loading = LoadingComponent)=>{
    return Loadable({
        loader,
        loading
    });
}