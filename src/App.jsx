import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Greetings from './components/Greetings';

const App = () => (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Greetings />} />
       </Routes>
    </BrowserRouter>
);

export default App;
