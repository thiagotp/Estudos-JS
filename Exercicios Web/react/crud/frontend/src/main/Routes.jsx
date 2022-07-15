import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from '../components/home/Home.jsx'
import UserCrud from '../components/user/UserCrud'

export default function Rts(props) {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/users' element={<UserCrud />} />
            <Route path='*' element={<Navigate to='/' />} /> 
        </Routes>
    )
}

// import React from 'react';
// import { Routes, Route, Navigate } from "react-router-dom";
 
// import Home from '../components/home/Home.jsx'
// import UserCrud from '../components/user/UserCrud'
 
// export default props => (
//     <Routes>
//         <Route exact path='/' element={<Home />} />
//         <Route path='/users' element={<UserCrud />} />
//         <Route path='*' element={<Navigate to='/' />} /> // New way
//         {/* <Route path='/*' element={<Home />} /> */} // Old way
//     </Routes>
// );