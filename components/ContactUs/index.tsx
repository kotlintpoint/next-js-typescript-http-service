import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import SectionHeading from '@/components/Common/SectionHeading'
import styles from './contactUs.module.scss';
import Button from "react-bootstrap/Button";

function Index(props) {
    const openInterCom = () => {
        // window.Intercom('show');
        console.log("Show Intercom")
    }
    const openInfo = (url) => {
        window.location.href = url;
    }
    return (
        <>
            <Container>
                <SectionHeading title={"Contact Us"} showViewAllButton={false} />

                <div className={styles.container}>
                    <div className={styles.form}>
                        <h4 className={styles.heading}>Send us message</h4>
                        <p>
                            Let’s talk about our platform and our services. Send us a message and we will be in touch within one workday.
                        </p>
                        <Form>
                            <Form.Group className="mb-3"
                                        controlId="exampleForm.ControlInput1">
                                {/*<Form.Label>Full Name</Form.Label>*/}
                                <Form.Control type="text"
                                              className={styles.formControl}
                                              placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3"
                                        controlId="exampleForm.ControlInput1">
                                {/*<Form.Label>Email address</Form.Label>*/}
                                <Form.Control type="email"
                                              className={styles.formControl}
                                              placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group className="mb-3"
                                        controlId="exampleForm.ControlTextarea1">
                                {/*<Form.Label>Message</Form.Label>*/}
                                <Form.Control as="textarea"
                                              placeholder={"Message"}
                                              className={styles.formControl}
                                              rows={3} />
                            </Form.Group>
                            <Button variant={"secondary"}
                                    className={styles.sendButton}>Send</Button>
                        </Form>
                    </div>
                    <div className={styles.contactInfo}>
                        <h4 className={styles.heading}>Contact info</h4>
                        <p>Dubai Silicon Oasis, DDP, Building A2, Dubai, United Arab Emirates</p>
                        <ul>
                            <li className={styles.phone}>
                                <button type="button"
                                        aria-label="+971 56 663 0880"
                                        onClick={(e) => openInfo("tel:+971 56 663 0880")}>
                                    +971 56 663 0880
                                </button>
                            </li>
                            <li className={styles.support}>
                                <button type="button"
                                        aria-label="support@24Task.com"
                                        onClick={(e) => openInfo("mailto:support@nojom.com")}>
                                    support@nojom.com
                                </button>
                            </li>
                            <li className={styles.msg}>
                                <button type="button"
                                        aria-label="+971 56 663 0880"
                                        onClick={(e) => openInfo('tel:+971 56 663 0880')}>
                                    +971 56 663 0880
                                </button>
                            </li>
                            <li className={styles.fb}>
                                <button type="button"
                                        aria-label="Facebook Message Us"
                                        onClick={(e) => openInfo("https://www.messenger.com/t/nojom")}>
                                    Click here to <b>Message Us</b>
                                </button>
                            </li>
                            <li className={styles.whatsapp}>
                                <button type="button"
                                        aria-label="+971 56 663 0880"
                                        onClick={(e) => openInfo("tel:+971 56 663 0880")}>
                                    +971 56 663 0880
                                </button>
                            </li>
                            <li className={styles.instagram}>
                                <button type="button"
                                        aria-label="Instagram Message Us"
                                        onClick={(e) => openInfo("https://www.instagram.com/nojom/")}>
                                    Click here to <b>Message Us</b>
                                </button>
                            </li>
                        </ul>
                        <Button variant={"dark"}
                                className={styles.buttonChat}
                                aria-label="Chat Now Online"
                                onClick={openInterCom}>Chat Now Online</Button>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Index;