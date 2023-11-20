import React from 'react';
import Container from "react-bootstrap/Container";
import AgencyProfile from "@/components/Agency/agencyProfile";
import Portfolio from "@/components/Portfolio/portfolio";
import Services from "@/components/Services/services";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import ProfileDetails from "@/components/Profile/profileDetails";
import AgentReviews from "@/components/Reviews/agentReviews";
import Stores from "@/components/Stores/stores";
import styles from './profile.module.scss';

function Index({ agentDetails, profileAgency, portfolio, socialPlatform, agentReview, username }) {

    const { isMobileDevice } = useDeviceWidth();

    return (
        <Container className={styles.container}>
            { agentDetails && <ProfileDetails agentDetails={agentDetails}
                                              socialPlatform={socialPlatform} /> }
            { portfolio && <Portfolio portfolio={portfolio}
                                      isMobileDevice={isMobileDevice}
                                      username={username} />}
            { socialPlatform && <Services socialPlatform={socialPlatform}
                                          username={username} />}
            { agentDetails && <Stores agentDetails={agentDetails}
                                      username={username} />}
            { profileAgency && <AgencyProfile profileAgency={profileAgency}
                                              username={username} /> }
            { agentReview && <AgentReviews agentReview={agentReview}
                                           username={username} /> }
        </Container>
    );
}

export default Index;