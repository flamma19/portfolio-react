import React from "react";
import { Col } from "react-bootstrap";

/**
 * It takes in a title, description, and imgUrl, and returns a column with a div with an image and a
 * div with a title and description.
 * @returns A React component.
 */
const ProjectCard = ({ title, description, imgUrl, address }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        className="project-links"
        href={address}
        target="_blank"
        style={{ color: "white" }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
