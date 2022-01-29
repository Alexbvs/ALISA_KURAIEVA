import styles from './header.module.scss'

const Header = () => {
    const aboutScroll= () => {
        const element = document.getElementById("aboutAnchor");
        element && element.scrollIntoView({ behavior: 'smooth', block: 'end'});
    }
    return (
        <div className={styles.container} id="headerAnchor">
            <div className={styles.wrap}>
                <div className={styles.translation}>
                    <p className={styles.translationItem}>UA</p>
                    <p className={styles.translationItem}>EN</p>
                </div>
                <div className={styles.about} onClick={() => aboutScroll()}>обо мне</div>
            </div>
            <div className={styles.titleWrap}>
                <h1 className={styles.title}>ALISA KURAIEVA</h1>
            </div>
            <div className={styles.infoWrap}>
                <div className={styles.info}>фото</div>
                <div className={styles.info}>цена</div>
                <div className={styles.info}>контакты</div>
            </div>
        </div>
    )
}

export  default Header