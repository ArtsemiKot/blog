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
                <div className={style.contentRight}></div>
            </div>
        </>
    );
}

export default Main;