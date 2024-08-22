import React from "react";
import ImageItem from "./ImageItem";

const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fc59a95f892aa36e23658402f56f43fc295b7c3f344f1234be602f6ed6cb9ba?placeholderIfAbsent=true&apiKey=2fad3b42e6974573944ad9b33015c121", width: "190px", aspectRatio: "1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5b73e3a73a520b7fe4cf90b0d5d4175639a4ad43816767bc2b68aadae9a180a?placeholderIfAbsent=true&apiKey=2fad3b42e6974573944ad9b33015c121", width: "52", aspectRatio: "1.12" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f544e45306bc4d708b4f96bc487725e051bee6ba171fe3364fbcae9cf6b83151?placeholderIfAbsent=true&apiKey=2fad3b42e6974573944ad9b33015c121", width: "86px", aspectRatio: "0.46" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1689f5b1c1de93eb0e3aedcd4d8a9393f5f28c57732b6ddcc2a3e5ba185e805?placeholderIfAbsent=true&apiKey=2fad3b42e6974573944ad9b33015c121", width: "296px", aspectRatio: "3.44" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4708fce7241156b0bfa128f2ebdf99d86052cbecf5391c9d0f719704ad0ca08?placeholderIfAbsent=true&apiKey=2fad3b42e6974573944ad9b33015c121", width: "163px", aspectRatio: "0.88" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee750e25e3672a8caaf96a743f165ca6ea05cb255070e950b8d48cc3d6d29099?placeholderIfAbsent=true&apiKey=2fad3b42e6974573944ad9b33015c121", width: "188px", aspectRatio: "1.01" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f77fd18a04a1ed0f2fc010a5224aa9bf4ae5645938fd2ce542f3a4bf7429c10a?placeholderIfAbsent=true&apiKey=2fad3b42e6974573944ad9b33015c121", width: "124px", aspectRatio: "0.67", className: "self-start mt-3.5" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee83ce04c663d77dbab04c388b8bfd1d144f64bfe0b58c057acbbc5b93a17a6f?placeholderIfAbsent=true&apiKey=2fad3b42e6974573944ad9b33015c121", width: "248px", aspectRatio: "1.82" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b833ab6fe83e47d42757e4a786145baad4f11d0f5fba86537fc8da9194553d32?placeholderIfAbsent=true&apiKey=2fad3b42e6974573944ad9b33015c121", width: "64", aspectRatio: "1.5" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5a6be89944dbcab16a137f9e0efc6c481bbdc68d21892263c47ae9301daf100?placeholderIfAbsent=true&apiKey=2fad3b42e6974573944ad9b33015c121", width: "181px", aspectRatio: "0.89" }
];

const loopedImages = [...images, ...images];

function ImageGallery() {
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-10 animate-loop-scroll ">
        {loopedImages.map((image, index) => (
          <ImageItem key={index} {...image} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;