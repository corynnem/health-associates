import React from "react";
import { Card } from "antd";
import separator from '../assets/separator.png'

const WaysToHelp = () => {
    
    const cardStyles = {
        width: 200,
        marginTop: '10px'
    }
  return (
    <div id="ways-help">
      <h1>Ways We Can Help</h1>
            <img src={separator.src} style={{ width: '75px'}}/>
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
