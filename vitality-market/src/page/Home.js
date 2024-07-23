import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import MainImg from '../images/MainImg.png'
import '../styles/HomePage.css'

const Home = () => {

  return (
  <>
      <div>
        <img src={MainImg} alt='brownBottles' className='homeImage' />
      </div>
    
        <section className='intro'>
          <p>
          Welcome to Vitality Marketplace, where your well-being is our top priority. Specializing in premium body oils, detox teas, and organic supplements, we are dedicated to enhancing your health naturally and effectively. Our carefully curated products are designed to support your body's natural processes, promoting overall wellness and vitality. Each item in our collection is crafted with the finest ingredients, ensuring you receive the highest quality and most effective solutions. Whether you're looking to rejuvenate your skin, cleanse your body, or boost your nutritional intake, Vitality Marketplace offers a range of products tailored to meet your unique needs. We believe in empowering you with the tools and knowledge to lead a healthier, happier life. Your journey to optimal health starts here at Vitality Marketplace, where we are committed to supporting you every step of the way.
          </p>
        </section>
        <HomeCarousel/>
    </>
  )}
  

export default Home