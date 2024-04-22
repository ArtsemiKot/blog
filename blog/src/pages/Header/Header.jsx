import style from './style.module.scss'

function Header() {
    return (
        <>
            <div className={style.wrapper}>
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
        </>
    );
}

export default Header;