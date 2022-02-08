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
          backgroundColor: "#CDCACC",
        }}
        cover={<img alt={ provider && provider.altText } src={ provider && provider.headshot} />}
      >
        <Popover content={content}>
          <Meta
            title={`${provider && provider.name}, ${provider && provider.certifications.map(
              (cert, i) => ` ${cert}`
            )}`}
            description={`Specializes in ${provider && provider.specialties}`}
          />
        </Popover>
      </Card>
      <Modal
        width={800}
        title={`${provider && provider.name}, ${provider && provider.position}`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <div id='modal' >
                <img src={provider && provider.headshot} alt={provider && provider.altText} style={{height: '200px', float: 'left', marginRight: '30px'}}/>
                <div id="modal-text">
                    <h3>Specializing in {provider && provider.specialties}</h3>
                    <p ><a style={{color: 'grey'}} href={`mailto:${provider && provider.email}`}>{provider && provider.email}</a></p>
                    <p>{provider && provider.description}</p>
                </div>
       </div>
      </Modal>
    </div>
  );
};

export default PopOpen;
