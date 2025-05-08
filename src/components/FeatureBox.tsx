import React from "react";
import Image from 'next/image'
interface FeatureBoxProps {
  images?: string[]; // Optional prop for images
  descriptions?: string[]; // Optional prop for descriptions
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  images = [],
  descriptions = [],
}) => {
  return (
    <div className="flex w-auto h-[900px] mt-2 justify-center items-start">
      <div className="flex flex-col w-auto h-auto p-2 gap-2">
        {/* Upper Box with Image */}
        <div className="flex w-352 h-100 mt-4 rounded-lg bg-white text-black justify-center items-center">
          {images[0] ? (
            <img
            src={images[0]}
            alt="lower-left"
            className="w-full h-full object-cover rounded-lg"
          />
          ) : (
            <p>{descriptions[0] || "Default Upper Box Description"}</p>
          )}
        </div>

        {/* Lower Left and Right Blocks */}
        <div className="flex gap-2">
          <div className="flex w-200 h-80 rounded-lg bg-white text-black justify-center items-center">
            {images[1] ? (
              <img
                src={images[1]}
                alt="lower-left"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <p>{descriptions[1] || "Default Lower Left Block Description"}</p>
            )}
          </div>
          <div className="flex w-150 h-80 rounded-lg bg-white text-black justify-center items-center">
            {images[2] ? (
              <img
                src={images[2]}
                alt="lower-right"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <p>{descriptions[2] || "Default Lower Right Block Description"}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;

{/* <div className="flex w-352 h-100 mt-4 rounded-lg bg-white text-black justify-center items-center">
  {images[0] ? (
    <Image
      src={images[0]}
      alt="upper-box"
      className="w-full h-full object-cover rounded-lg"
      layout="responsive" // Automatically scales the image
      width={700} // Define width (adjust according to design)
      height={400} // Define height (adjust according to design)
    />
  ) : (
    <p>{descriptions[0] || "Default Upper Box Description"}</p>
  )}
</div>; */}
