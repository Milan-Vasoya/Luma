import React from "react";
import './image-loader.styles.scss';
const ImageLoader = ( {abc:{index ,image ,setCountDefault}}  )=>{

    return <div onClick={()=>setCountDefault(index) } className='sub-slider-images-container' >
    <img className='sub-slider-images'  src={`${image}`} alt='img'   />

</div>
}

export default ImageLoader; 