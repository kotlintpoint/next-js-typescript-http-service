import React from 'react';
import Container from 'react-bootstrap/Container';
import SectionHeading from '@/components/Common/SectionHeading'
import styles from './termsOfUse.module.scss';
import Link from "next/link";

function Index(props) {

    return (
        <Container className={styles.container}>
                <SectionHeading title={"Terms of Use"} showViewAllButton={false} />
                <p><i>Last updated on - 9th November 2023</i></p>
                <p>Welcome to [Nojom] ("we," "us," or "[Nojom]"). These Terms of Service ("Terms") govern your access and use of [Nojom]'s influencer marketplace platform, including any related websites, applications, and services provided by us (collectively, the "Platform"). You agree to comply with these Terms by accessing or using the Platform.</p>
                <h2>1. Acceptance of Terms</h2>
                <p>By using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and any other policies or guidelines posted on the Platform.</p>
                <p>Individuals who use the Site are referred to as “Users“, “you” and “your”.Suppose you access the Site or accept these Terms on behalf of a company or other legal entity. In that case, you represent and warrant that you have the authority to bind that legal entity and, in such event, “you” and “your” will refer to that legal entity.“We”, “us”, or “our” refer to Nojom. In addition, in these Terms, unless the context requires otherwise, words in one gender include all genders, and words in the singular include the plural and vice-versa.</p>
                <p>YOU ACKNOWLEDGE AND AGREE THAT, BY ACCESSING OR USING THE SITE OR SERVICES, YOU ARE INDICATING THAT YOU HAVE READ AND THAT YOU UNDERSTAND AND AGREE TO BE BOUND BY THESE TERMS.</p>
                <h2 >2. Modification</h2>
                <p>Nojom maintains the right, at any time and without prior notice, to change or stop, temporarily or permanently, the Platform, Services, or these Terms. If we change these Terms, we will post the changes on the Site. The "Last Updated Date" at the top of these Terms will also be updated. Modifications to these Terms shall take effect immediately upon publishing. You agree to be bound by the amended Terms if you continue to access or use the Platform after we have posted a revision. If you disagree with the updated Terms, your only option is to stop accessing or using the Platform.</p>
                <h2 >3. Use of the Platform</h2>
                <p><span>3.1. Eligibility:</span> You must be at least 18 years old and capable of entering into a legally binding agreement to use the Platform.</p>
                <p><span>3.2. Account Creation:</span> You may need to register an account to access certain features of the Platform. During the registration process, you promise to give accurate, comprehensive, and up-to-date information.</p>
                <p><span>3.3. Account Security:</span> You are responsible for keeping your account, including your login and password, secure. You promise to immediately alert us of any unauthorized access or use of your account.</p>
                <h2 >4. Influencer Services</h2>
                <p><span>4.1. Registration:</span> On the Platform, influencers can build profiles and offer their services. You agree to submit truthful and up-to-date information about yourself on your influencer profile.</p>
                <p><span>4.2. Service Listings:</span> Influencers are in charge of developing accurate and comprehensive service listings. You commit to providing the services detailed in your ads.</p>
                <p><span>4.3. Communications:</span> You promise to communicate with other Platform users in a professional and respectful manner.</p>
                <h2 >5. User Conduct</h2>
                <p><span>5.1. Prohibited Activities:</span> You agree not to engage in any of the prohibited acts listed below on the Platform:</p>
                <p>
                    - Violating any laws, regulations, or these Terms.<br/>
                    - Posting defamatory, false, or misleading content.<br/>
                    -  Harassing, threatening, or discriminating against other users is prohibited.<br/>
                    - Uploading or sending viruses or malicious code.<br/>
                    - Attempting to gain unauthorized access to the Platform or the accounts of other users.<br/>
                    - Making any illegal or unauthorized use of the Platform.<br/>
                    - Access, "scrape", "crawl", or "spider" any web pages or other services contained in the Services using human or automatic software, devices, scripts, redirection, robots, or other means or processes.
                </p>
                <p><span>5.2. Reporting Violations:</span> Users are encouraged to report any violations of these Terms or suspicious activity to Nojom.</p>
                <h2 >6. Payment and Fees</h2>
                <p><span>6.1. Service Fees:</span> Nojom has the right to impose fees for the use of the Platform or for certain services. Every user agrees to pay all costs that may apply.</p>
                <p><span>6.2. Payment Processing:</span> Third-party payment processors may be used to process payments on the Platform. Nojom is not accountable for payment information security or processing.</p>
                <h2>7. Content Ownership</h2>
                <p><span>7.1. Your Content:</span> You maintain ownership of any content you upload to the Platform. However, by submitting content, you offer Nojom a global, non-exclusive, royalty-free license to use, alter, and distribute that work.</p>
                <h2>8. Termination</h2>
                <p><span>8.1. Termination by Nojom:</span> Nojom maintains the right, at its sole discretion and without notice, to cancel or suspend your account or access to the Platform for any breach of these Terms.</p>
                <p><span>8.2. Termination by User:</span> Users have the option to terminate their accounts at any time. Nojom may preserve content and data linked with a deactivated account for a length of time as specified in our Privacy Policy.</p>
                <h2>9. Privacy</h2>
                <p>Our Privacy Policy also governs your use of the Platform. Please review it to understand how we collect, use, and share your personal information.</p>
                <h2>10. Disclaimers and Limitations of Liability</h2>
                <p><span>10.1. No Warranty:</span> The Platform is provided "as is" and "as available" without any warranties.</p>
                <p><span>10.2. Limitation of Liability:</span> Nojom shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                <h2>11. Contact Information</h2>
                <p>If you have any questions or concerns about these Terms, please contact us at <Link className={styles.link} href={"support@nojom.com"}>Support@Nojom.com</Link>.</p>
                <h2>12. Governing Law</h2>
                <p>These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction].</p>
            </Container>
    );
}

export default Index;