import React from "react";
import { View, Image, Dimensions } from "react-native";


import imageFile from '../../assets/event-1.jpg'

const ImageComponent = () => {

  // gaunam lango auksti ir ploti
  const windowDimensions = Dimensions.get('window');
  const imageDimensions = Image.resolveAssetSource(imageFile);

  const ratio = windowDimensions.width / imageDimensions.width;


  return (
      <View>
          <Image style={{ width: windowDimensions.width, height: imageDimensions.height * ratio}} source={imageFile} />
      </View>
  );
};

export default ImageComponent;