import React from 'react'
import Lottie from "lottie-react";
import flagLoading from "../assets/89993-flag.json";
import '../css/loader.css'

const options = {
  loop: true,
  autoplay: true,
  animationData: flagLoading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}
const style = {
  width: "50%",
}

export default function Loading() {
  return (
        <div className='loader-container'>
            <Lottie animationData={flagLoading}
                    style={style}
                    options={options} />
        </div>
  )
}


