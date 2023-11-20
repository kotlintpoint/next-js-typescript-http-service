import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import styles from "@/components/Profile/profile.module.scss";
import FavouriteIcon from '../../public/favourite.png';
import ShareIcon from '../../public/share.webp';
import LeftArrow from '../../public/left_arrow.webp';
import VerifiedIcon from '../../public/verified.webp';
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Link from "next/link";
import decode from "jsonwebtoken/decode";
import {Service, ServiceRoot} from "@/types/models/IService";

function ProfileDetails({ agentDetails, socialPlatform }) {
    const [servicesData, setServicesData] = useState<Service[]>([]);

    useEffect(() => {
        const serviceData: ServiceRoot = decode<ServiceRoot>(socialPlatform);
        const tempData = serviceData?.data.filter(item => !!item.platform_icon);
        if(tempData?.length > 0 ) setServicesData(tempData);
    },[]);

    return (
        <Container className={styles.agentDetailsContainer}>
            <div className={styles.imageContainer}>
                <Link href={"/"}>
                    <Image src={LeftArrow}
                           alt={'left-arrow-icon'}
                           width={24} height={24} />
                </Link>

                <Image src={agentDetails.path + agentDetails.profile_pic}
                       className={styles.image}
                       alt={agentDetails.username}
                       width={100} height={100} />
                <div>
                    <Image src={FavouriteIcon} alt={'favourite-icon'}
                           className={styles.favouriteIcon}
                           width={24} height={24} />
                    <Image src={ShareIcon} alt={'share-icon'}
                           className={styles.shareIcon}
                           width={24} height={24} />
                </div>
            </div>
            <div className={styles.fullName}>
                {agentDetails.first_name} {agentDetails.last_name}
                <Image src={VerifiedIcon} alt={'verified-icon'} width={24} height={24} />
            </div>
            {
                agentDetails.proUsername && <div className={styles.username}>@{agentDetails.proUsername}</div>
            }
            {
                agentDetails.websites && <div className={styles.website}>{agentDetails.websites}</div>
            }
            <div className={styles.buttonContainer}>
                <Button variant={"outline-dark"}>Send Offer</Button>
                &nbsp;
                <Button variant={"outline-dark"}>Message</Button>
            </div>
            <div className={styles.platformContainer}>
                {
                    servicesData.length > 0 && servicesData.map(item => (
                        <Link key={item.id}
                              href={item.redirectUrl}>
                            <Image
                                   src={item.platform_icon}
                                   className={styles.image}
                                   alt={item.platformName}
                                   width={40} height={40} />
                        </Link>
                    ))
                }
            </div>
        </Container>
    );
}

export default ProfileDetails;