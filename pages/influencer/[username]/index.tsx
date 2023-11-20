import React from "react";
import {GetServerSideProps} from 'next'
import HttpService from "@/services/http.service";
import {IPortfolioPayload, ISocialGig} from "@/types/models/ISocialGig";
import Profile from '@/components/Profile';
import decode from 'jsonwebtoken/decode';
import {AgentDetailsRoot} from "@/types/models/IAgentDetails";

const HomePage = ({profileAgency, portfolio, socialPlatform, agentDetails, agentReview, username}) => {
    return (
        <Profile agentDetails={agentDetails}
                 profileAgency={profileAgency}
                 portfolio={portfolio}
                 socialPlatform={socialPlatform}
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

    const profileAgencyResponse = await httpBaseUrl.service().get<ISocialGig>(`getAgentProfileAgency/${gigId}`);
    const profileAgency = profileAgencyResponse.status ? profileAgencyResponse.data : "";

    const socialPlatformResponse = await httpGigUrl.service().get<ISocialGig>(`client/getSocialPlatformGigListsByID/${gigId}`);
    const socialPlatform = socialPlatformResponse.status ? socialPlatformResponse.data : "";

    const portfolioResponse = await httpBaseUrl.service().push<ISocialGig, IPortfolioPayload>(`getPortfolio`,
        {agent_profile_id: gigId}, {}, true);
    const portfolio = portfolioResponse.status ? portfolioResponse.data : "";

    const agentReviewResponse = await httpBaseUrl.service().push<ISocialGig, IPortfolioPayload>(`getAgentReview`,
        {agent_profile_id: gigId}, {}, true);
    const agentReview = agentReviewResponse.status ? agentReviewResponse.data : "";


    return {
        props: {
            profileAgency,
            socialPlatform,
            portfolio,
            agentDetails,
            agentReview,
            username
        }
    }

}) satisfies GetServerSideProps<{
    profileAgency: string,
    portfolio: string,
    socialPlatform: string,
    agentReview: string,
    agentDetails: AgentDetailsRoot,
    username: string
}>


export {HomePage as default};