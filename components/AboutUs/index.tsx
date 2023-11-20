import React from 'react';
import Container from 'react-bootstrap/Container';
import SectionHeading from '@/components/Common/SectionHeading'
import styles from './aboutUs.module.scss';

function Index() {
    return (
        <>
            <Container className={styles.container}>
                <SectionHeading title={"About Us"} showViewAllButton={false} />
                <p>
                    Nojom is a leading influencer marketing platform that assists brands and influencers in connecting and taking influencer marketing to the next level. We are a dynamic team dedicated to redefining the digital marketing environment with our Influencer Marketing App. We believe in the power of genuine connections and influencers' tremendous impact on brand narratives at Nojom.
                </p>
                <p>
                    Our mission is to empower brands and create a vibrant and secure ecosystem where brands can seamlessly connect with influencers who genuinely resonate with their values and aspirations. We are committed to excellence and innovation and are driven by the belief that authentic connections result in lasting impressions. Our app demonstrates our commitment to establishing authentic interactions between brands and influencers. We appreciate transparency, integrity, and the distinct tales that each digital influencer brings to the table.
                </p>
                <SectionHeading title={"Diversify Your Network"} showViewAllButton={false} />
                <p>
                    Nojom uses cutting-edge technologies to automate the influencer marketing process. Our software is meticulously built to provide a user-friendly experience for both brands and influencers. We've got it all covered, from powerful analytics to seamless collaboration tools.
                </p>
                <p>
                    In the future, we view Nojom as becoming a change agent in the influencer marketing landscape. We strive to break down barriers, promote innovation, and construct bridges meaningfully link brands with audiences. Our goal is to be the go-to platform for true influencer collaborations worldwide.
                </p>
                <p>
                    We are proud to have cultivated a varied and lively group of influencers. One can find incredible fashionistas, tech experts, or fitness fanatics in our influencer group. We believe in inclusivity and value the individuality of each voice.
                </p>
                <h2>Join Nojom Today!</h2>
                <p>Are you earnest about commissioning amazing influencers for your campaign? </p>
            </Container>
        </>
    );
}

export default Index;