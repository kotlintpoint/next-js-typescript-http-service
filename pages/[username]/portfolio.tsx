import React from 'react';
import HttpService from "@/services/http.service";
import {IPortfolioPayload, ISocialGig} from "@/types/models/ISocialGig";
import {AgentDetailsRoot} from "@/types/models/IAgentDetails";
import decode from "jsonwebtoken/decode";
import {GetServerSideProps} from "next";
import Portfolio from "@/components/Portfolio";
import {stringify} from "querystring";

function Index({  socialPlatform, portfolio, agentDetails, username }) {
    return (
        <Portfolio socialPlatform={socialPlatform}
                   portfolio={portfolio}
                   agentDetails={agentDetails}
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

    const portfolioResponse = await httpBaseUrl.service().push<ISocialGig, IPortfolioPayload>(`getPortfolio`,
        {agent_profile_id: gigId}, {}, true);
    const portfolio = portfolioResponse.status ? portfolioResponse.data : "";


    return {
        props: {
            socialPlatform,
            portfolio,
            agentDetails,
            username
        }
    }

}) satisfies GetServerSideProps<{
    portfolio: string,
    socialPlatform: string,
    agentDetails: AgentDetailsRoot,
    username: string | string[]
}>


export default Index;