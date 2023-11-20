import React from 'react';
import ProfileDetails from "@/components/Profile/profileDetails";
import Container from "react-bootstrap/Container";
import Stores from "@/components/Stores/stores";

function Index({socialPlatform, agentDetails, username}) {
    return (
        <Container>
            { agentDetails && <ProfileDetails agentDetails={agentDetails}
                                              socialPlatform={socialPlatform} /> }
            { agentDetails && <Stores agentDetails={agentDetails}
                                      username={username}
                                      showAll={true} />}
        </Container>
    );
}

export default Index;