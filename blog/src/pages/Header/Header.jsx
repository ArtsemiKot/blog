import { useState } from 'react';
import style from './style.module.scss'

function Header() {
    const [isOpen, setOpen] = useState(false)

    function changeMenu() {
        if (!isOpen) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    return (
        <>
            <div className={style.adaptiveWrapper}>
                <div className={style.imgGlobe}></div>
                <div className={style.wanishMenu} onClick={changeMenu}></div>
            </div>
            {isOpen ?
                <div className={style.wrapperHeader}>
                    <div className={style.menu}>
                        <p className={style.elMenu}>About us</p>
                        <p className={style.elMenu}>Brands</p>
                        <p className={style.elMenu}>Commissions</p>
                        <p className={style.elMenu}>News</p>
                        <p className={style.elMenu}>Contact us</p>
                        <p className={style.elMenu}>Careers</p>
                    </div>
                    <div className={style.btnMenu}>
                        <div className={style.btnEN}>
                            <div className={style.imgGlobe}></div>
                            <p className={style.textEN}>EN</p>
                        </div>
                        <div className={style.logIn}>LOG IN</div>
                        <div className={style.signIn}>SIGN UP</div>
                    </div>

                </div>
                : null}
        </>
    );
}

export default Header;