import React from "react";
import success from "../images/people-clipart-success-1.png"
import "../styles/AboutUs.css"
import "../styles/HomePage.css"
const AboutUs = () => {
  return (
    <>
      <div>
        <div id="image-container"> 
        <img src= {success} alt="image of success" id="success-image"/>
        </div>
        
        <h1 className="vitalitym">About Us</h1>
        <p>
          Welcome to our community of natural wellness, founded by three dynamic
          Black women from Atlanta, Texas, and New Jersey. United by our passion
          for holistic health and natural remedies, we have come together to
          create a range of healthcare products that are as nurturing as they
          are effective.
        </p>
      </div>

      <div>
        <h1>Our Story</h1>
        <p>
          Our journey began when we realized a shared frustration with the lack
          of accessible, natural healthcare options that truly understood our
          unique needs. Each of us brought a wealth of knowledge and experience
          from our diverse backgrounds:
          <br />
          <strong>Atlanta</strong>: Rooted in the rich cultural heritage of the South, our
          founder from Atlanta has always been deeply connected to the power of
          natural ingredients and traditional remedies. Her expertise in herbal
          medicine forms the foundation of our product formulations.
          <br />
          <strong>Texas</strong>: Hailing from the heart of Texas, our co-founder is a wellness
          advocate with a background in nutrition and fitness. Her holistic
          approach to health and wellness ensures that our products not only
          heal but also support overall well-being.
          <br />
          <strong>New Jersey</strong>: Our New Jersey native brings a strong scientific
          perspective, with a background in biochemistry and product
          development. Her rigorous approach to research and quality control
          ensures that our products are safe, effective, and innovative.
        </p>
      </div>

      <div>
        <h1>Our Mission</h1>
        <p>
          We are committed to empowering our community with natural healthcare
          solutions that are safe, effective, and affordable. Our products are
          crafted with love, using only the finest natural ingredients, and are
          designed to promote health and wellness from the inside out.
        </p>
      </div>
      <div>
        <h1>Why Choose Us?</h1>
        <p>
          Natural Ingredients: We believe in the power of nature to heal and
          rejuvenate. Our products are free from harmful chemicals and synthetic
          additives. Holistic Wellness: Our range of products supports a
          holistic approach to health, addressing physical, emotional, and
          spiritual well-being. Community-Focused: We are dedicated to serving
          our community and creating products that reflect our shared values and
          needs. Quality Assurance: With a strong focus on research and quality
          control, we ensure that every product meets the highest standards of
          safety and efficacy. Join us on our journey to natural wellness and
          discover the transformative power of nature with our healthcare
          products.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
