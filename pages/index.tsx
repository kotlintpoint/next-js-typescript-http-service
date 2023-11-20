import React from "react";
import Home from 'components/Home';
import {GetStaticProps} from 'next'
import HttpService from "services/http.service";
import {ISocialGig} from '@/types/models/ISocialGig';

const HomePage = ({ socialGigList }) => {
  return (
    <Home socialGigList={socialGigList} />
  );
}

export const getStaticProps = (async (context) => {
  const http = new HttpService();
  const response = await http.service().get<ISocialGig>(`client/getAllSocialGigLists`);
  const data = response.status ? response.data : "";

  return { props: { socialGigList : data } }

}) satisfies GetStaticProps<{
  socialGigList: string
}>


export { HomePage as default };