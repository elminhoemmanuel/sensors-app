import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './styles/tailwind.css'
import Home from './pages/Home';
import AddSensor from './pages/AddSensor';
import SensorDetails from './pages/SensorDetails';
import EditSensor from './pages/EditSensor';
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sensor/add" element={<AddSensor />} />
            <Route path="/sensor/:sensorId" element={<SensorDetails />} />
            <Route path="/sensor/:sensorId/edit" element={<EditSensor />} />
        </Routes>
    </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
