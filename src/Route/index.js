import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from '../Container/Home';
import AboutContainer from '../Container/About';
import MoviesContainer from '../Container/Movies';
import SeriesContainer from '../Container/TvSeries';
import SearchContainer from '../Container/Search';
import DetailsContainer  from '../Container/Details'
import ContactContainer from '../Container/Contact';

import HeaderContainer from '../Components/Header'
import FooterContainer from '../Components/Footer'

const RouterComponent = () => {
    return (
        <>
            <BrowserRouter>
            <HeaderContainer />
                <Routes>
                    <Route path="/" element={<HomeContainer />} />
                    <Route path="/about" element={<AboutContainer />} />
                    <Route path="/movies" element={<MoviesContainer />} />
                    <Route path="/contact" element={<ContactContainer />} />
                    <Route path="/series" element={<SeriesContainer />} />
                    <Route path="/search" element={<SearchContainer />} />
                    <Route path="/details/:movieid/:/mediatype" element={<DetailsContainer />}/>
                </Routes>
                <FooterContainer />
            </BrowserRouter>
        </>

    )
}
export default RouterComponent;



















