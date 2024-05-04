import style from './style.module.scss'
function Main() {
    
    const arrComment = [
        {
            text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
            date: "10.02.2023",
        },
        {
            text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
            date: "10.02.2023",
        },
        {
            text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
            date: "10.02.2023",
        },
        {
            text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
            date: "10.02.2023",
        },
        {
            text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
            date: "10.02.2023",
        },
        {
            text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
            date: "10.02.2023",
        },
        {
            text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
            date: "10.02.2023",
        },
        {
            text: "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
            date: "10.02.2023",
        },
    ]
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
                        {arrComment.map((el)=>(
                        <div className={style.blockComment}>
                            <p className={style.textComment}>{el.text}</p>
                            <p className={style.textData}>{el.date}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;