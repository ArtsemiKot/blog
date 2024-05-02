import style from './style.module.scss'
function Main() {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.contentLeft}>
                    <h1 className={style.textHouse}>HOUSE OF <span>GAMBLING</span></h1>
                    <p className={style.textROI}>Raise your ROI with direct advertiser</p>
                    <div className={style.btn}>Become a Partner</div>
                </div>
                <div className={style.contentCentre}>
                    <div className={style.imgVertical1}></div>
                    <div className={style.imgVertical2}></div>
                    <div className={style.imgVertical3}></div>
                </div>
                <div className={style.contentRight}>
                    <p className={style.textBlog}>BLOG</p>
                    <div className={style.commentsBlog}>
                        <div className={style.blockComment1}>
                            <p className={style.textComment}>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                            <p className={style.textData}>10.02.2023</p>
                        </div>
                        <div className={style.blockComment2}>
                            <p className={style.textComment}>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                            <p className={style.textData}>10.02.2023</p>
                        </div>
                        <div className={style.blockComment3}>
                            <p className={style.textComment}>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                            <p className={style.textData}>10.02.2023</p>
                        </div>
                        <div className={style.blockComment4}>
                            <p className={style.textComment}>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                            <p className={style.textData}>10.02.2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;