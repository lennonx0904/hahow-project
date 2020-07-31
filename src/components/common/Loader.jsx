import React from "react";
import styled from "styled-components";

const LoaderRing = styled.div`
  :before,
  :after {
    content: "";
    position: absolute;
    top: 10px;
    left: 100px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 10px solid transparent;
    border-top-color: #266794;
  }
  :before {
    z-index: 100;
    animation: spin 1s infinite;
  }
  :after {
    border: 10px solid #c6c7c8;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return <LoaderRing />;
}

export default Loader;
