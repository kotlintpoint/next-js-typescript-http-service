import React from 'react';
import ProfileDetails from "@/components/Profile/profileDetails";
import Container from "react-bootstrap/Container";
import Services from "@/components/Services/services";
import AgencyProfile from "@/components/Agency/agencyProfile";

function Index({ profileAgency, socialPlatform, agentDetails, username }) {
    return (
        <Container>
            { agentDetails && <ProfileDetails agentDetails={agentDetails}
                                              socialPlatform={socialPlatform} /> }
            { profileAgency && <AgencyProfile profileAgency={profileAgency}
                                              username={username}
                                              showAll /> }
        </Container>
    );
}

export default Index;