
import React from 'react';
import { Button, Col, Row, Carousel, Modal } from 'react-bootstrap';

const SectionCarousel = (props) => (

      <Carousel>
      { props.splitSections.map((sectionGroup, overI) => {
          if (sectionGroup.indexOf('End') === -1) {
          return (
              <Carousel.Item key={overI}>
              { sectionGroup.map((section, i) => (
                  <Col md={3} className="sectionsScroll" key={i} onClick={() => props.onSectionClick(section, props.fromProjectHome || null)}>
                  <p>{section.name}</p>
                  <p>{section.description}</p>
                  <Button onClick={props.revealEdit}>Edit</Button> 
                  </Col>
              ))}
              </Carousel.Item>
          );
          } else {
          return (
              <Carousel.Item key={overI}>
              { sectionGroup.map((section, i) => {
                  if (section !== 'End') {
                  return (
                      <Col md={3} className="sectionsScroll" key={i} onClick={() => props.onSectionClick(section, props.fromProjectHome || null)}>
                      <p>{section.name}</p>
                      <p>{section.description}</p>
                      <Button onClick={props.revealEdit}>Edit</Button> 
                      </Col>
                  );
                  } else {
                  return (
                      <Col md={3} className="sectionsScroll" key={i} onClick={props.revealAddSection}>
                      <h2>+</h2>
                      </Col>
                  );
                  }
              })}
              </Carousel.Item>
          );
          }
      })}
      </Carousel>

)
  



export default SectionCarousel;