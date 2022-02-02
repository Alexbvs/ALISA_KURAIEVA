import React from 'react';
import Slider from 'react-slick';
import styles from './slider.module.scss'
import slide1 from '../../assets/main_slider_1.png'
import slide2 from '../../assets/main_slider_2.jpg'
import slide3 from '../../assets/main_slider_3.jpg'
import slide4 from '../../assets/main_slider_4.jpg'

function SampleNextArrow(props: any) {
    const { style, onClick } = props;
    return (
        <div
            className={styles.slickNext}
            style={{ ...style, display: "block", right: "45px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: any) {
    const { style, onClick } = props;
    return (
        <div
            className={styles.slickPrev}
            style={{ ...style, display: "block", left: "45px", zIndex: "1" }}
            onClick={onClick}
        />
    );
}

const HomeSlider = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    const headerScroll = () => {
        const element = document.getElementById("headerAnchor");
        element && element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
    return (
        <div className={styles.container}>
            <Slider {...settings}>
                <div className={styles.imageWrap}>
                    <img src={slide1} alt='slide'/>
                </div>
                <div className={styles.imageWrap}>
                    <img src={slide2} alt='slide'/>
                </div>
                <div className={styles.imageWrap}>
                    <img src={slide3} alt='slide'/>
                </div>
                <div className={styles.imageWrap}>
                    <img src={slide4} alt='slide'/>
                </div>
            </Slider>
            <div className={styles.arrow} onClick={() => headerScroll()}/>
        </div>
    );
}

export default HomeSlider
