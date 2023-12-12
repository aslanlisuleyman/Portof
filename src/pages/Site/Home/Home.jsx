import React from 'react'
import './Home.css'
import HomeHeader from '../../../components/Site/HomeHeader/HomeHeader'
import Slider from '../../../components/Site/Sliders/Slider'
import Static from '../../../components/Site/Static/Static'
import Cards from '../../../components/Site/Cards/Cards'
import Cards2 from '../../../components/Site/Cards2/Cards2'

const Home = () => {
  return (
    <div style={{backgroundColor:'white'}}>
    <HomeHeader/>
    <Slider/>
    <Static/>
    <Cards/>
    <Cards2/>
    </div>
    
  )
}

export default Home