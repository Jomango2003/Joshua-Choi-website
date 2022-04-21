import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './style.css'

import { HomePage } from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";


ReactDOM.render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/projects" element={<ProjectsPage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
</Routes>
</BrowserRouter>
, document.getElementById("root"));