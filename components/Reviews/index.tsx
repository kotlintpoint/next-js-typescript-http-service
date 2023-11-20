import React from 'react';
import ProfileDetails from "@/components/Profile/profileDetails";
import Container from "react-bootstrap/Container";
import AgentReviews from "@/components/Reviews/agentReviews";

function Index({ socialPlatform, agentDetails, agentReview, username}) {
    return (
        <Container>
            { agentDetails && <ProfileDetails agentDetails={agentDetails}
                                              socialPlatform={socialPlatform} /> }
            { agentReview && <AgentReviews agentReview={agentReview}
                                           username={username}
                                           showAll /> }
        </Container>
    );
}

export default Index;