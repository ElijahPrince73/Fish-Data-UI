import React from 'react';

const Image = ({images}) => {
  if (Array.isArray(images)) {
    return <img src={images[0].src} alt={images[0].alt} className="object-cover h-48 w-96 rounded-md"/>
  } else {
    return <div className="bg-slate-300 w-96 h-48 rounded-md" />
  }
}

export default Image