import React from 'react';
import styles from './home.module.scss'
import alisa from '../../assets/about.png'
import slide1 from '../../assets/main_slider_1.png'

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <div className={styles.imageWrap}>
                    <img src={alisa} alt="alisa"/>
                </div>
                <div className={styles.about} id="aboutAnchor">
                    <h3 className={styles.title}>
                        ТУТ КАКОЙ-ТО ЗАГЛАВНЫЙ ТЕКСТ
                    </h3>
                    <p className={styles.description}>
                        Много слов, много букав <br/>
                        Интересный факт 1 <br/>
                        Интересный факт 2 <br/>
                        Люблю пить воду, смотреть синего трактора <br/>
                        Делаю самые лучшие фотки <br/>
                        Путешествую <br/>
                        Артем делает мне сайт
                    </p>
                </div>
            </div>
            <div className={styles.galleryContainer}>
                <div className={styles.firstRow}>
                    <div className={styles.rowWrap}>
                        <img src={alisa} alt="gallery image"/>
                    </div>
                    <div className={styles.rowWrap}>
                        <img src={alisa} alt="gallery image"/>
                    </div>
                    <div className={styles.rowWrap}>
                        <img src={alisa} alt="gallery image"/>
                    </div>
                </div>
                <div className={styles.secondRow}>
                    <div className={styles.rowWrap}>
                        <img src={alisa} alt="gallery image"/>
                    </div>
                    <div className={styles.rowWrap}>
                        <img src={alisa} alt="gallery image"/>
                    </div>
                </div>
                <div className={styles.thirdRow}>
                    <div className={styles.rowWrap}>
                        <img src={slide1} alt="gallery image"/>
                    </div>
                </div>
                <div className={styles.fourthRow}>
                    <div className={styles.rowWrap}>
                        <img src={slide1} alt="gallery image"/>
                    </div>
                    <div className={styles.rowWrap}>
                        <img src={slide1} alt="gallery image"/>
                    </div>
                    <div className={styles.rowWrap}>
                        <img src={slide1} alt="gallery image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
