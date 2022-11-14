import React from "react";
import Navbar from "../components/Navbar";
import Carousal from "../components/Carousal";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
import Header from "../components/Header";

const Home = () => {
  
 
  
  return (
    <div>
      <Header />
      <div className='w-full  bg-gradient-to-r from-cyan-500 to-blue-500'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=""/>
      </div>
      <div className="">
         <Card />
      </div>

    </div>
  );
};

export default Home;
