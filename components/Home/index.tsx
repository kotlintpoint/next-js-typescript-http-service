import React, {useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import InfluenceCard from 'components/Common/InfluenceCard';
import styles from './home.module.scss';
import decode from 'jsonwebtoken/decode';
import {IBestInfluencersRoot} from "@/types/models/IBestInfluencers";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SectionHeading from "@/components/Common/SectionHeading";

function Index({ socialGigList }) {
    const [data, setData] = useState<IBestInfluencersRoot>(undefined);
    useEffect(() => {
        const bestInfluencer: IBestInfluencersRoot = decode<IBestInfluencersRoot>(socialGigList);
        setData(bestInfluencer);
    },[]);

    return (
        <>
            <div className={styles.banner}>
                <Container>
                    <h1>Find and Hire <span>influencers</span> in mins</h1>
                    <Button className={styles.postCampaign} variant="warning">Post campaign <i className={styles.arrow} /> </Button>
                    <div className={styles.searchContainer}>
                        <Form.Control type="text"
                                      className={styles.searchInput}
                                      placeholder="Search for an influencer" />
                        <Button className={styles.searchButton}
                                variant="secondary">
                            Search
                        </Button>

                    </div>
                </Container>
            </div>

            {data?.bestInfluencers?.length > 0 && (
                <Container className={styles.container}>
                    <SectionHeading title={"Best influencers"}
                                    href={"/"}
                                    showViewAllButton={data.bestInfluencers.length>3} />
                    <Row>
                        {
                            data.bestInfluencers.map(item => (
                                <Col md={4} key={item.profile_id}>
                                    <InfluenceCard influencer={item} path={data.path} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            )}
        </>
    );
}

export default Index;