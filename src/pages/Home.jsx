import React from 'react';
import SideBar from '../components/nav-bar/SideBar';
import Map from '../components/map/Map';

const Home = () => (
  <div className="relative h-screen">
    <SideBar />
    <Map />
  </div>
);

export default Home;
