import React from "react";
import { Card } from "antd";
import separator from '../assets/separator.png'
import Image from "next/image";
const WaysToHelp = () => {
    
    const cardStyles = {
        width: 200,
        marginTop: '10px'
    }
  return (
    <div id="ways-help">
      <h1>Ways We Can Help</h1>
      <Image src={separator.src} height={'75px'} width={'80px'} alt='A line icon separating the title from the rest of the text on the page'/>
      <div id="help-cards">
        <Card style={cardStyles}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card style={cardStyles}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card style={cardStyles}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </div>
  );
};

export default WaysToHelp;
