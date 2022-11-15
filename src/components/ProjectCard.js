import React from "react";
import { Col } from "react-bootstrap";

/**
 * It takes in a title, description, and imgUrl, and returns a column with a div with an image and a
 * div with a title and description.
 * @returns A React component.
 */
const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
