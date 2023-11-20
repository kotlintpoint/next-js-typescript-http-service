import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import decode from "jsonwebtoken/decode";
import {IAgentProfileAgency, IProfileAgencyData} from "@/types/models/IAgentProfileAgency";
import styles from "@/components/Home/home.module.scss";
import SectionHeading from "@/components/Common/SectionHeading";

function AgencyProfile({ profileAgency, username, showAll= false }) {
    const [data, setData] = useState<IProfileAgencyData>(undefined);
    useEffect(() => {
        const agencyProfileData: IAgentProfileAgency = decode<IAgentProfileAgency>(profileAgency);
        if(agencyProfileData?.data?.length > 0){
            setData(agencyProfileData?.data[0]);
        }
    },[]);

    if(!data) {
        return <></>
    }

    return (
        <Container className={styles.container}>
            <SectionHeading title={"Agency"}
                            href={showAll ? `/influencer/${username}` : `/${username}/agency`}
                            showAll={showAll} />
            {data && <div className={styles.agencyDetails}>
                <div className={styles.title}>Agency Name</div>
                <div className={styles.detail}>{data?.name}</div>
                {
                    showAll && (
                        <>
                            <div className={styles.title}>About</div>
                            <div className={styles.detail}>{data?.about}</div>
                        </>
                    )
                }
                <div className={styles.title}>{showAll ? "Phone" : "Contact"}</div>
                <div className={styles.detail}>{data?.phone}</div>
                {
                    showAll && (
                        <>
                            <div className={styles.title}>Email</div>
                            <div className={styles.detail}>{data?.email}</div>
                        </>
                    )
                }
                <div className={styles.title}>{showAll ? "Website" : "Service"}</div>
                <div className={styles.detail}>{data?.website}</div>
                {showAll && (
                    <>
                        <div className={styles.title}>Address</div>
                        <div className={styles.detail}>{data?.address}</div>
                        <div className={styles.title}>Note</div>
                        <div className={styles.detail}>{data?.note}</div>
                    </>
                )}
            </div>
            }
        </Container>
    );
}

export default AgencyProfile;