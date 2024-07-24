import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HomeImg from '../images/HomeImg.png'
import '../styles/ProductCard.css'

function BasicExample() {
  return (
    <Card >
      <Card.Img variant="top" src={HomeImg} />
      <Card.Body>
        <Card.Title>Organic Sun Glow Body Lotion - 16oz w/ Travel Size</Card.Title>
        <Card.Text className='price'>$13.99</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;