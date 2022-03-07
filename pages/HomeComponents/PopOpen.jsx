import React, { useState} from "react";
import { Popover, Button, Modal } from "antd";
import { Card } from "antd";

const PopOpen = ({ provider }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const content = <p style={{ height: "10px" }}>Read More</p>;

  const { Meta } = Card;
  



  return (
    <div>
      {" "}
      <Card
        onClick={() => showModal()}
        hoverable

        style={{
          width: 300,
          marginTop: "30px",
          marginRight: "10px",
          marginLeft: "10px",
          backgroundColor: "#ccc9dc",
          minHeight: '440px'
        }}
        cover={<img alt={ provider && provider.altText } src={ provider && provider.headshot} />}
      >
        <Popover content={content}>
          <Meta
     
            title={<p  style={{fontSize: '1.3em', marginTop: '30px'}}>{provider && provider.name} {provider && provider.certifications.length > 0 ? ',' : ''} {provider && provider.certifications.map(
              (cert, i) => ` ${cert}`
            )}</p>}
            description={provider && provider.position ? provider.position.length === 0 ? "":  <h3 style={{fontSize: '1em', color: 'grey', marginTop: '-20px'}}>{provider && provider.position}</h3>  : ''}
          />
        </Popover>
      </Card>
      <Modal
        footer={null}
        width={800}
        title={`${provider && provider.name}, ${provider && provider.position}`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <div id='modal' >
                <img src={provider && provider.headshot} alt={provider && provider.altText} style={{height: '200px', float: 'left', marginRight: '30px'}}/>
                <div id="modal-text">
                  <h2 >{provider && provider.name} {provider && provider.certifications.length > 0 ? ',' : ''} {provider && provider.certifications.map(
              (cert, i) => ` ${cert}`
            )}</h2>
                  {provider && provider.specialties ? provider.specialties.length === 0 ? "":  <h3 style={{fontSize: '.9em', color: 'grey'}}>Specializing in {provider && provider.specialties}</h3>  : ''}

                  <br/>
                    <p>{provider && provider.description}</p>
                </div>
       </div>
      </Modal>
    </div>
  );
};

export default PopOpen;
