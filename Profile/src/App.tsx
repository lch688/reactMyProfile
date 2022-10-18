import React from 'react';


import {HashRouter,Routes,Route} from  'react-router-dom'

import './assets/icon/iconfont.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'

import loadable from './Tool/loadable'
const Home = loadable(()=>import('./Pages/Home/home'))
const Background = loadable(()=>import('./Pages/Background/background'))
const Project = loadable(()=>import('./Pages/Project/project'))
const Contact = loadable(()=>import('./Pages/contact/contact'))

function App() {
  return (
    <div className="App">
          <HashRouter>
            <Routes>
              <Route path='/'  element={<Home />} />
              <Route path='/background'  element={<Background />} />
              <Route path='/project'  element={<Project />} />
              <Route path='/contact'  element={<Contact />} />



              <Route path='*'  element={
                <div>404</div>

              } />

            </Routes>

          </HashRouter>

    </div>
  );
}

export default App;
