import React from 'react';
import HttpService from "@/services/http.service";
import {IPortfolioPayload, ISocialGig} from "@/types/models/ISocialGig";
import {AgentDetailsRoot} from "@/types/models/IAgentDetails";
import decode from "jsonwebtoken/decode";
import {GetServerSideProps} from "next";
import Stores from "@/components/Stores";

function Index({  socialPlatform, agentDetails, username }) {
    return (
        <Stores agentDetails={agentDetails}
                socialPlatform={socialPlatform}
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


    return {
        props: {
            socialPlatform,
            agentDetails,
            username
        }
    }

}) satisfies GetServerSideProps<{
    socialPlatform: string,
    agentDetails: AgentDetailsRoot,
    username: string
}>

export default Index;