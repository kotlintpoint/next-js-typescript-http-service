import React from 'react';
import HttpService from "@/services/http.service";
import {IPortfolioPayload, ISocialGig} from "@/types/models/ISocialGig";
import {AgentDetailsRoot} from "@/types/models/IAgentDetails";
import decode from "jsonwebtoken/decode";
import {GetServerSideProps} from "next";
import Reviews from "@/components/Reviews";

function Index({  socialPlatform, agentDetails, agentReview, username }) {
    return (
        <Reviews  socialPlatform={socialPlatform}
                  agentDetails={agentDetails}
                  agentReview={agentReview}
                  username={username} />
    );
}
export const getServerSideProps = (async (context) => {
    const username = context.params?.username as string;
    const httpBaseUrl = new HttpService(true);
    const httpGigUrl = new HttpService();

    const agentDetailsResponse = await httpBaseUrl.service().get<ISocialGig>(`getAgentByUsername/${username}`);
    const agentDetailsToken = agentDetailsResponse.status ? agentDetailsResponse.data : "";

    const agentDetails: AgentDetailsRoot = decode<AgentDetailsRoot>(agentDetailsToken);
    const gigId = agentDetails?.id;

    const socialPlatformResponse = await httpGigUrl.service().get<ISocialGig>(`client/getSocialPlatformGigListsByID/${gigId}`);
    const socialPlatform = socialPlatformResponse.status ? socialPlatformResponse.data : "";

    const agentReviewResponse = await httpBaseUrl.service().push<ISocialGig, IPortfolioPayload>(`getAgentReview`,
        {agent_profile_id: gigId}, {}, true);
    const agentReview = agentReviewResponse.status ? agentReviewResponse.data : "";


    return {
        props: {
            socialPlatform,
            agentDetails,
            agentReview,
            username
        }
    }

}) satisfies GetServerSideProps<{
    socialPlatform: string,
    agentReview: string,
    agentDetails: AgentDetailsRoot,
    username: string
}>

export default Index;