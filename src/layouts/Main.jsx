import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import './Main.css';
import Banner from '../pages/BannerSection/Banner';
import FirstSection from '../pages/Shared/FirstSection/FirstSection';
import SecondSection from '../pages/Shared/SecondSection/SecondSection';
import ThirdSection from '../pages/Shared/ThirdSection/ThirdSection';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
            <Footer></Footer>
        </div>
    );
};

export default Main;