import React from "react";
import './image-loader.styles.scss';
const ImageLoader = ( {abc:{index ,image ,setCountDefault}}  )=>{
    const ImagePath = "https://m241full.digitsoftsol.co/pub/media/catalog/product";

    return <div onClick={()=>setCountDefault(index) } className='sub-slider-images-container' >
    <img className='sub-slider-images'  src={`${ImagePath}/${image}`} alt='img'   />

</div>
}

export default ImageLoader; 