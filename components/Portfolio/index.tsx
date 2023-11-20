import React from 'react';
import Container from "react-bootstrap/Container";
import ProfileDetails from "@/components/Profile/profileDetails";
import Portfolio from "@/components/Portfolio/portfolio";
import useDeviceWidth from "../../hooks/useDeviceWidth";

function Index({  socialPlatform, portfolio, agentDetails, username }) {

    const {isMobileDevice} = useDeviceWidth();

    return (
        <Container>
            { agentDetails && <ProfileDetails agentDetails={agentDetails}
                                              socialPlatform={socialPlatform} /> }
            { portfolio && <Portfolio portfolio={portfolio}
                                      isMobileDevice={isMobileDevice}
                                      username={username}
                                      showAll />}
        </Container>
    );
}

export default Index;