import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import decode from "jsonwebtoken/decode";
import styles from "@/components/Home/home.module.scss";
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card} from "react-bootstrap";
import StarRatings from 'react-star-ratings';
import {AgentReview, AgentReviewRoot} from "@/types/models/IAgentReviews";
import UtilHelper from "@/helper/UtilHelper";
import SectionHeading from "@/components/Common/SectionHeading";


function AgentReviews({ agentReview, username, showAll=false }) {

    const [data, setData] = useState<AgentReview[]>([]);

    useEffect(() => {
        const agentReviewData: AgentReviewRoot = decode<AgentReviewRoot>(agentReview);
        if(agentReviewData?.data.length > 0 ) setData(agentReviewData?.data);
    },[]);

    if(data.length === 0) {
        return <></>
    }
    const sliceData = showAll ? data : data.slice(0,2);
    return (
        <Container className={styles.container}>
            <SectionHeading title={"Reviews"}
                            href={showAll ? `/influencer/${username}` : `/${username}/reviews`}
                            showAll={showAll}
                            showViewAllButton={data.length > 2} />
            {
                sliceData.length > 0 && sliceData.map(item => (
                    <Card key={item.timestamp}
                          className={styles.servicesCard}>
                        <div className={styles.titleRating}>
                            <div className={styles.title}>
                                <div >{item.title}</div>
                                <div className={styles.reviewDate}>
                                {UtilHelper.convertReviewDate(item.timestamp)}
                                </div>
                            </div>
                            <div className={styles.ratings}>
                                <StarRatings
                                    starRatedColor="#FFD500"
                                    numberOfStars={5}
                                    rating={item.rate}
                                    starDimension="16px"
                                    starSpacing="1px"
                                    name='rating'
                                />
                                <span>{item.rate}</span>
                            </div>
                        </div>
                    </Card>
                ))
            }
        </Container>
    );
}

export default AgentReviews;