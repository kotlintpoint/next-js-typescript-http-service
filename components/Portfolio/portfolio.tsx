import React, {useEffect, useMemo, useState} from 'react';
import Container from "react-bootstrap/Container";
import decode from "jsonwebtoken/decode";
import {PortfolioRoot} from "@/types/models/IPortfolio";
import styles from "@/components/Home/home.module.scss";
import SectionHeading from "@/components/Common/SectionHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {Card} from "react-bootstrap";

function Portfolio({ username, portfolio, isMobileDevice, showAll=false }) {

    const [data, setData] = useState<PortfolioRoot>(undefined);

    useEffect(() => {
        const portfolioData: PortfolioRoot = decode<PortfolioRoot>(portfolio);
        setData(portfolioData);
    },[]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobileDevice ? 2 : 4,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };

    const renderPortfolioData = useMemo(()=>{
        return (
            data?.portfolio.map(item => (
                    <Card key={item.id}
                          className={styles.portfolioCard}>
                        {
                            item.portfolio_files?.length > 0 && (
                                <Image src={data.path+item.portfolio_files[0].path}
                                       alt={item.title}
                                       className={styles.image}
                                       width={200} height={200} />
                            )
                        }
                        <div className={styles.title}>{item.title}</div>
                    </Card>
            ))
        )
    },[data])
    if(data?.portfolio.length === 0) {
        return <></>
    }
    return (
        <Container className={styles.container}>
            <SectionHeading title={"Portfolio"}
                            href={showAll ? `/influencer/${username}` : `/${username}/portfolio`}
                            showAll={showAll} />
            {
                showAll ?  (
                    <div className={styles.fullPortfolio}>
                        {renderPortfolioData}
                    </div>
                ) : (
                    <Slider {...settings}>
                        {renderPortfolioData}
                    </Slider>
                )
            }
        </Container>
    );
}

export default Portfolio;