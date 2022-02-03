import styles from './header.module.scss'
import {useState} from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import classNames from 'classnames';

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {isMobile} = useWindowSize()
    const toggleMenu = () => {
        if (isMobile) {
            setIsOpen((prevState) => {
                return !prevState
            })
        }
    }
    const aboutScroll = () => {
        const element = document.getElementById("aboutAnchor");
        element && element.scrollIntoView({behavior: 'smooth', block: 'end'});
    }
    return (
        <div className={styles.container} id="headerAnchor">
            {isMobile ? (
                <>
                    <div className={styles.titleWrap}>
                        <h1 className={styles.title}>ALISA KURAIEVA</h1>
                    </div>
                    <div
                        className={classNames(
                            styles.burgerOpenButton,
                            isOpen ? styles.open : '',
                        )}
                        onClick={toggleMenu}
                    >
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </>
            ) : (
                <>
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
                </>
            )}
            {isMobile && isOpen ? (
              <div className={styles.sidebar}>
                  sidebar
              </div>
            ) : null}
        </div>
    )
}

export default Header