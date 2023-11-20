import React from 'react';
import Container from 'react-bootstrap/Container';
import SectionHeading from '@/components/Common/SectionHeading'
import styles from './privacyPolicy.module.scss';
import Link from "next/link";

function Index() {
    return (
        <>
            <Container className={styles.container}>
                <SectionHeading title={"Privacy Policy"} showViewAllButton={false} />
                <p><i>Last Updated: 10th November 2023</i></p>
                <p>Welcome to the Nojom Influencer Marketplace App ("App"). Nojom ("we," "us," or "Nojom") is committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use the App.</p>
                <p>By using the App, you consent to the practices outlined in this Privacy Policy.</p>
                <h2>1. Information We Collect</h2>
                <p><span>1.1. Information You Provide:</span> When you use the App, you may voluntarily give us with information such as your name, email address, profile information, and payment information.</p>
                <p><span>1.2. Information Collected Automatically:</span> When you use the App, we may automatically gather information such as your IP address, device information, and usage data.</p>
                <p><span>1.3. Location Information:</span> We may gather precise location information from your device with your permission in order to provide location-based services.</p>
                <h2>2. How We Use Your Information</h2>
                <p><span>2.1. Provide and Improve the App:</span> We use the information you supply to run the App, deliver services, and improve your overall user experience.</p>
                <p><span>2.2. Communications:</span> Your contact information may be used to communicate with you, such as providing notifications, updates, and customer support messages.</p>
                <p><span>2.3. Legal Compliance:</span> We may use your information to comply with legal obligations, resolve disputes, and enforce our agreements.</p>
                <h2>3. Sharing Your Information</h2>
                <p><span>3.1. Service Providers:</span> Your information may be shared with third-party service partners who help us deliver the App and related services.</p>
                <p><span>3.2. With Other Users:</span> Your information will be shared with other users of the app if you use the App to engage with other users. Specific information will be visible to those users through your profile or other means.</p>
                <p><span>3.3. Business Transfers:</span> Your information may be transferred to the acquiring organization in the case of a merger, acquisition, or sale of all or a portion of our assets.</p>
                <h2>4. Data Security</h2>
                <p>We take precautions to protect your information, but no method of internet transmission or electronic storage is completely secure. We cannot guarantee complete safety.</p>
                <h2>5. Access and Control Over Your Information</h2>
                <p>You have the right to see, change, or remove your personal information. You can also restrict how we use your information by changing your account settings or contacting us.</p>
                <h2>6. Third-Party Links and Services</h2>
                <p>Links to third-party websites or services may be included in the App. We are not liable for the practices or policies of third-party vendors. Before supplying them with your information, please read their privacy rules.</p>
                <h2>7. Children's Privacy</h2>
                <p>Individuals under the age of 18 are not permitted to use the App. We do not gather personal information from children deliberately. Please contact us if you feel a kid has provided us with personal information.</p>
                <h2>8. Changes to This Privacy Policy</h2>
                <p>We retain the right to change or amend this Privacy Statement at any time. Your continued use of the App following such modifications indicates that you accept the amended Privacy Policy.</p>
                <h2>9. Contact Us</h2>
                <p>Please contact us at <Link href={"support@nojom.com"}>Support@Nojom.com</Link> if you have any questions or complaints about this Privacy Policy.</p>
                <h2>10. Governing Law</h2>
                <p>The laws of [Your Jurisdiction] govern and are construed in conformity with this Privacy Policy.</p>
            </Container>
        </>
    );
}

export default Index;