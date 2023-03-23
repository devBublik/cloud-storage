import {FC} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type SliderProps = {
    images: string[]
}

const Slider: FC<SliderProps> = ({images}) => {
    return (
        <Carousel>
            {images.map((image, ind) => {
                return (
                    <div key={ind}>
                        <img src={image}/>
                    </div>
                )
            })}
        
        </Carousel>
    )
}

export default Slider;