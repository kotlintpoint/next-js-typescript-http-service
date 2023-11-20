import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import styles from "@/components/Home/home.module.scss";
import Button from "react-bootstrap/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {Card} from "react-bootstrap";
import SectionHeading from "@/components/Common/SectionHeading";


function Stores({ agentDetails, username, showAll=false }) {

    if(agentDetails?.store?.length === 0){
        return <></>
    }
    const sliceData = showAll ? agentDetails?.store : agentDetails?.store.slice(0,2);
    return (
        <Container className={styles.container}>
            <SectionHeading title={"Stores"}
                            href={showAll ? `/influencer/${username}` : `/${username}/stores`}
                            showAll={showAll}
                            showViewAllButton={agentDetails?.store?.length > 2} />
            {
                sliceData.store.map(item => (
                    <Card key={item.id}
                          className={styles.servicesCard}>
                        <Image src={item.image_url}
                               alt={item.name}
                               width={40} height={40} />
                        <div className={styles.titleRating}>
                            <div className={styles.title}>{item.name}</div>
                        </div>
                        <Button className={styles.button}
                                variant={"secondary"}>
                            {item.button_title}
                        </Button>
                    </Card>
                ))
            }
        </Container>
    );
}

export default Stores;