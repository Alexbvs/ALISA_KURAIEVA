import React from 'react';
import styles from './home.module.scss'
import alisa from '../../assets/about.png'

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
        </div>
    )
}

export default Home;
