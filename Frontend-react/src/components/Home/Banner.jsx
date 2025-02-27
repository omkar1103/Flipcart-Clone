
import { styled } from '@mui/material';
import "react-multi-carousel/lib/styles.css";

import { bannerData } from '../Constants/data';
import Carousel from 'react-multi-carousel';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Image = styled('img')({
    width: "100%",
    height: 280,
    objectFit: "cover",
});


const Banner = ({ deviceType }) => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={deviceType !== "mobile"} // Fixed: No 'this'
            autoPlaySpeed={1000}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {bannerData.map(image => (
                <Image src={image.url} alt="banner" key={image.id} />
            ))}
        </Carousel>
    );
};

export default Banner;