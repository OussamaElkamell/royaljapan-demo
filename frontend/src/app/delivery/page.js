'use client'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sitemap from '../../components/Sitemap';
import { usePageData } from '../../hooks/usePageData';

function DeliveryPage() {
    const { displayData, loading, error } = usePageData();

    if (loading) {
        return (
            <>
                <Header/>
                <div className="product">
                    <section className="list">
                        <div className="contain" style={{textAlign: 'center', padding: '50px'}}>
                            <p>読み込み中...</p>
                        </div>
                    </section>
                </div>
                <Sitemap/>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header/>
                <div className="product">
                    <section className="list">
                        <div className="contain" style={{textAlign: 'center', padding: '50px', color: 'red'}}>
                            <p>エラー: {error}</p>
                        </div>
                    </section>
                </div>
                <Sitemap/>
            </>
        );
    }

    return(
        <>
            <Header/>
            <div className="product">
                <section className="top">
                    <div className="top-img">
                        <img src="/assets/images/top-img.png" alt=""/>
                        <img src="/assets/images/top-img02.png" className="sp" alt=""/>
                    </div>
                    <img src="/assets/images/logo.svg" className="top-logo-img" alt=""/>
                    <p className="top-text1">ロイヤルジャパン<br/>公式オンラインショッピング</p>
                    <p className="top-text2">愛の証を超濃厚に、超濃密に</p>
                    <p className="top-text3">ふたりだけの夜をもっと愉しむために</p>
                </section>

                <section className="list">
                    <div className="sub-page-title">
                        {displayData["delivery-title"]}
                    </div>
                    <div className="contain">
                        <p>{displayData["delivery-main-description"]}</p>
                        <div style={{display:"flex"}}>
                            <img style={{minWidth:"200px", minHeight:"200px"}} src={displayData["delivery-image"]}  alt=""/>
                            <p>{displayData["delivery-sub-description"]}</p>
                        </div>

                    </div>
                </section>
            </div>
            {/* <Footer/> */}
            <Sitemap/>

        </>
    )
}
export default DeliveryPage;