import React from 'react';
import ProfileDetails from "@/components/Profile/profileDetails";
import Container from "react-bootstrap/Container";
import Services from "@/components/Services/services";

function Index({socialPlatform, agentDetails, username}) {
    return (
        <Container>
            { agentDetails && <ProfileDetails agentDetails={agentDetails}
                                              socialPlatform={socialPlatform} /> }
            { socialPlatform && <Services socialPlatform={socialPlatform}
                                          username={username}
                                          showAll />}
        </Container>
    );
}

export default Index;