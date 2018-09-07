import React from "react";
import "./carousel.css";
import ChatList from "./ChatList";
import styled from "styled-components";

const Carousel = styled.div`
  min-width: 200px;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  position: relative;
  padding: 0;
  list-style: none;
`;

const CarouselTrack = styled.div`
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  transition: transform 0.5s ease 0s; */
`;

const MainCarousel = ({ viewState }) => {
  const trackClass = `carousel__track carousel__track slide${viewState}`;

  return (
    <Carousel>
      <div className={trackClass}>
        <li className="carousel__slide">
          <ChatList />
        </li>
        <li className="carousel__slide ">
          <p>{trackClass}</p>
          <h1>G</h1>
        </li>
        <li className="carousel__slide ">
          <ul className="testinglist">
            <li>{trackClass}</li>
            <li>testing</li>
            <li>this is a list</li>
            <li>pretty cool</li>
            <li />
          </ul>
        </li>
        <li className="carousel__slide ">
          <ChatList />
        </li>
      </div>
    </Carousel>
  );
};

export default MainCarousel;
