import React from 'react';
import Container from 'react-bootstrap/Container';
import SectionHeading from '@/components/Common/SectionHeading'
import styles from './faqs.module.scss';

function Index(props) {
    const influencerFaqData = [
        {
            id:1,
            question: "How does Nojom work?",
            answer: "As an influencer, you must register and create your profile on the Nojom app and list your services, portfolio, and other things you want to display. Share links where brands or clients can discover your past campaigns. Clients can view your profile and enlist your services based on their campaign requirements. In contrast, you can view the required services listed by clients and express your interest in campaigning for them.",
        },
        {
            id:2,
            question: "Can you guarantee that I will get paid?",
            answer: "Yes, the payment process involves the client making the payment deposit once you are assigned the campaign. After the campaign is completed and you submit it, the client reviews and releases the payment."
        },
        {
            id:3,
            question: "How do I get paid?",
            answer: "Payments can be made directly on our website. When you finish an order, you will have the option of receiving your money by PayPal, CashApp, or Venmo."
        },
        {
            id:4,
            question: "Do I need to sign any contracts with Nojom?",
            answer: "No. There is no need for you to sign any contracts. We are just a self-service platform that connects you with clients/brands. You will have complete control over your profile and you can manage your own transactions without our involvement. You can use our platform to advertise your services to brands."
        },
        {
            id:5,
            question: "Can I refuse orders?",
            answer: "Yes, you can accept or deny an order. This allows you to exclusively collaborate with brands that you believe in."
        }
    ]
    const brandsFaqData=[
        {
            id:1,
            question: "What is Nojom?",
            answer: "It is a marketplace where you can find and hire influencers to do your campaigns and expand your brand reach. We act as a bridge between clients and influencers and facilitate communication and help you meet your campaign stars."
        },
        {
            id:2,
            question: "How does Nojom work?",
            answer: "Register and create your profile on our platform and start searching for influencers who fits your campaign requirements. Or, once you create the profile, list your requirements (campaigns) to attract relevant influencers. Once you assign a campaign to a influencer, deposit your payment and release it to the influencer only when the campaign is completed and satisfactory."
        },
        {
            id:3,
            question: "How are influencers screened before they join Nojom?",
            answer: "We confirm the identification of every influencer listed on the platform. We also do a thorough audit of their social media accounts to check for indicators of fraudulent followers and interaction. We also take into account their previous brand deals."
        },
        {
            id:4,
            question: "How do I know I'll get the work I've paid for?",
            answer: "Nojom will retain your payment until the campaign is completed and approved by you. You will have up to 48 hours after submitting the work to request a change or file a disagreement with us."
        },
        {
            id:5,
            question: "What types of payment do you accept at Nojom?",
            answer: "We accept all major debit and credit cards to process the transactions."
        }
    ]
    return (
        <>
            <Container className={styles.container}>
                <SectionHeading title={"Frequently Asked Questions (FAQs)"} showViewAllButton={false} />
                <h2 className={styles.subHeading}>For influencers</h2>
                {
                    influencerFaqData.map(item => (
                        <li key={item.id}>
                            <h3 className={styles.question}>{item.question}</h3>
                            <p>{item.answer}</p>
                        </li>
                    ))
                }
                <h2 className={styles.subHeading}>For Brands</h2>
                {
                    brandsFaqData.map(item => (
                        <li key={item.id}>
                            <h3 className={styles.question}>{item.question}</h3>
                            <p>{item.answer}</p>
                        </li>
                    ))
                }
            </Container>
        </>
    );
}

export default Index;