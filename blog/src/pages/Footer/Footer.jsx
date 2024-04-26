import style from './style.module.scss'

function Footer() {
    return (
        <>
            <div className={style.wrapperFooter}>
                <p className={style.textMedia}>Our social media:</p>
                <div className={style.socialNetwork}>
                    <div className={style.menuFooter}>
                        <p className={style.elMenu}>Terms & Conditions</p>
                        <p className={style.elMenu}>Cookies</p>
                        <p className={style.elMenu}>Contacts</p>
                        <p className={style.elMenu}>Careers</p>
                        <p className={style.elMenu}>Brand Guide</p>
                    </div>
                    <div className={style.socialMedia}>
                        <div className={style.iconTwitter}></div>
                        <div className={style.iconFacebook}></div>
                        <div className={style.iconInstagram}></div>
                        <div className={style.iconLinkedln}></div>
                        <div className={style.iconYouTube}></div>
                        <div className={style.iconTicTok}></div>
                        <div className={style.iconTelegram}></div>
                        <div className={style.iconVK}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;