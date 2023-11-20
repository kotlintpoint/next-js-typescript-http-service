import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import decode from "jsonwebtoken/decode";
import styles from "@/components/Home/home.module.scss";
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {Card} from "react-bootstrap";
import {Service, ServiceRoot} from "@/types/models/IService";
import StarRatings from 'react-star-ratings';
import SectionHeading from "@/components/Common/SectionHeading";
import Link from "next/link";


function Services({ socialPlatform, username, showAll=false }) {
    const [data, setData] = useState<Service[]>([]);

    useEffect(() => {
        const serviceData: ServiceRoot = decode<ServiceRoot>(socialPlatform);
        const tempData = serviceData?.data.filter(item => !!item.platform_icon);
        if(tempData?.length > 0 ) setData(tempData);
    },[]);

    if(data.length === 0) {
        return <></>
    }
    const sliceData = showAll ? data : data.slice(0,2);
    return (
        <Container className={styles.container}>
            <SectionHeading title={"Services"}
                            href={showAll ? `/influencer/${username}` : `/${username}/services`}
                            showAll={showAll}
                            showViewAllButton={data.length > 2}  />
            {
                sliceData.length > 0 && sliceData.map(item => (
                    <Link key={item.id}
                          href={item.redirectUrl}>
                        <Card key={item.id}
                              className={styles.servicesCard}>
                            <Image src={item.platform_icon}
                                   alt={item.platformName}
                                   width={40} height={40} />
                            <div className={styles.titleRating}>
                                <div className={styles.title}>{item.platformName}</div>
                                <div className={styles.ratings}>
                                    <StarRatings
                                        starRatedColor="#FFD500"
                                        numberOfStars={5}
                                        rating={item.starpoints}
                                        starDimension="16px"
                                        starSpacing="1px"
                                        name='rating'
                                    />
                                    <span>({item.real_count})</span>
                                </div>
                            </div>
                            <div className={styles.minPrice}>
                                From <span>{item.minPrice}</span>
                                <i className={styles.arrow} />
                            </div>
                        </Card>
                    </Link>
                ))
            }
        </Container>
    );
}

export default Services;