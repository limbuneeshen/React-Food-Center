import React from 'react';
import './homepage.style.css';
import image from '../../assets/homethumb.jpg';
import Banner from '../../components/banner.component/banner';
import Foodcontainer from '../../components/foodcontainer.component/foodcontainer';
import Aboutus from '../../components/aboutus.component/aboutus';
import Footer from '../../components/footer.component/footer';

const HomePage=()=>(
    <div className='homepage'>
      <img src={image} alt="Homepage" width="100%" height="700" />
      <div className='search'><input type="text" placeholder="Search Here.."/><button className='buttonsearch'>Search</button></div>
      <div className='banner'>
        <Banner/>
      </div>
      <div>
        <Foodcontainer/>
      </div>
      <div>
        <Aboutus/>
      </div>
      <div>
        <Footer/>
      </div>

    </div>
);
export default HomePage;
