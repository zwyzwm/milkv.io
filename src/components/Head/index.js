import React, { useEffect } from 'react';
import styles from './head.module.css'


export default function (props) {
    const { flag, module, type } = props

    useEffect(() => {
        if (flag) {
            document.documentElement.style.overflowY = 'hidden'
        } else {
            document.documentElement.style.overflowY = 'auto'
        }
    }, [flag])
    const toApp = () => {
        if (type === 'duo') {
            window.open('https://app6hodqg6k9861.h5.xiaoeknow.com')

        } else if (type === 'mars') {
            // window.open('https://app6hodqg6k9861.h5.xiaoeknow.com')

        } else if (type === 'pioneer') {
            // window.open('https://app6hodqg6k9861.h5.xiaoeknow.com')
        } else {
            window.open('https://app6hodqg6k9861.h5.xiaoeknow.com')
        }
    }
    return (
        <>
            <div className={styles.tanchuang} style={{ display: `${flag ? 'block' : 'none'}` }} >
                <img src='/home/icon-close.svg' onClick={module} className={styles.close} />
                <img src='/img/ICON.svg' className={styles.boxLogo} />
                <div className={type === 'duo' || type === 'buy' ? styles.goBuy : styles.none} onClick={() => toApp()}>
                    <img src='/home/china.svg' className={styles.buyIcon} />
                    <div className={styles.textBOx}>
                        <p className={styles.tp}>China's mainland</p>
                        <img src='/home/icon_more-right.svg' className={styles.img1} />
                        <img src='/home/icon_more-right_white.svg' className={styles.img2} />
                    </div>
                    <img src='/home/COMINGSOON.svg' style={{ display: `${type === 'duo' || type === 'buy' ? 'none' : 'block'}` }} className={styles.coming} />
                </div>
                <div className={styles.none}>
                    <img src='/home/other.svg' className={styles.buyIcon} />
                    <div className={styles.textBOx}>
                        <p className={styles.tp}>Other countries and regions</p>
                        <img src='/home/icon_more-right.svg' className={styles.img1} />
                        <img src='/home/icon_more-right_white.svg' className={styles.img2} />
                    </div>
                    <img src='/home/COMINGSOON.svg' className={styles.coming} />
                </div>
            </div>
        </>
    );
}