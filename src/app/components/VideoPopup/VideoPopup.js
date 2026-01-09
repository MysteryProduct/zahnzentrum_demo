"use client";

import { useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import ImageFallback from "./ImageFallback";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
function VideoPopup() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="w-full">
      {showPopup ? (
        <div className="relative w-full rounded-xl overflow-hidden justify-center items-center">
          <LiteYouTubeEmbed id={"BN-t6Ag79_o"} defaultPlay={true} />
        </div>
      ) : (
        <div className="relative cursor-pointer iten-center">
          <ImageFallback
            className="w-full"
            src={"/images/hero/img-hero3_rs.PNG"}
            width={200}
            height={450}
            alt=""
          />
          <button
            onClick={() => setShowPopup(true)}
            className="intro-play-btn absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-2xl text-body lg:h-[90px] lg:w-[90px] cursor-pointer hover:bg-secondary hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faPlay} size={25} />
          </button>
        </div>
      )}  
    </div>
  );
}

export default VideoPopup;
