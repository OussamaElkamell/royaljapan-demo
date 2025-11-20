'use client'
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sitemap from '../components/Sitemap';
import { usePageData } from '../hooks/usePageData';

function SubPage({page}) {
    const { displayData, loading, error } = usePageData();
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        if (page === "specified") {
            setTitle(displayData["specified-title"] || "")
            setContent(displayData["specified-description"] || "")
        }
        if (page === "personal") {
            setTitle(displayData["protected-title"] || "")
            setContent(displayData["protected-description"] || "")
        }
        if (page === "privacy") {
            setTitle(displayData["privacy-title"] || "")
            setContent(displayData["privacy-title"] || "")
        }
    }, [displayData, page]);

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
                        {title}
                    </div>
                    <div className="contain">
                        <div style={{display:"flex"}}>
                            <p>{content}</p>
                        </div>
                    </div>
                </section>
            </div>
            <Sitemap/>

        </>
    )
}
export default SubPage;