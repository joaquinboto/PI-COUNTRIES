import React from 'react'
import Lottie from "lottie-react";
import flagLoading from "../assets/89993-flag.json";

const options = {
  loop: true,
  autoplay: true,
  animationData: flagLoading
}

export default function Loading() {
  return (
        <div>
            <Lottie {...options}/>
        </div>
  )
}


