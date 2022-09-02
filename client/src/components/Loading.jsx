import React from 'react'
import Lottie from "lottie-react";
import flagLoading from "../assets/89993-flag.json";
import '../css/loader.css'

const options = {
  autoplay: true,
  animationData: flagLoading
}
const style = {
  width: "20%",
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


