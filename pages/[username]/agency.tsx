import React from 'react';
import HttpService from "@/services/http.service";
import {ISocialGig} from "@/types/models/ISocialGig";
import {AgentDetailsRoot} from "@/types/models/IAgentDetails";
import decode from "jsonwebtoken/decode";
import {GetServerSideProps} from "next";
import AgencyDetails from "@/components/Agency";

function Index({  profileAgency, socialPlatform, agentDetails, username }) {
    return (
        <AgencyDetails profileAgency={profileAgency}
                       socialPlatform={socialPlatform}
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

    const profileAgencyResponse = await httpBaseUrl.service().get<ISocialGig>(`getAgentProfileAgency/${gigId}`);
    const profileAgency = profileAgencyResponse.status ? profileAgencyResponse.data : "";

    const socialPlatformResponse = await httpGigUrl.service().get<ISocialGig>(`client/getSocialPlatformGigListsByID/${gigId}`);
    const socialPlatform = socialPlatformResponse.status ? socialPlatformResponse.data : "";

    return {
        props: {
            profileAgency,
            socialPlatform,
            agentDetails,
            username
        }
    }

}) satisfies GetServerSideProps<{
    profileAgency: string,
    socialPlatform: string,
    agentDetails: AgentDetailsRoot,
    username: string
}>


export default Index;