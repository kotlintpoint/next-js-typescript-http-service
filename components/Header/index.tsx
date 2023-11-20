import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './header.module.scss';
import Head from "next/head";
import { usePathname } from 'next/navigation'


function Index({ meta }) {
    const {title, description, keywords} = meta || process.env.defaultMeta
    const pathname = usePathname()
    const canonical = `${process.env.BASE_URL}${pathname}`;
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={canonical} />

                {/* Google / Search Engine Tags  */}
                <meta itemProp="name" content={title} />
                <meta itemProp="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#000000" />
                <meta name="robots" content={'index, follow'} />
                <meta name="referrer" content="no-referrer" />

                {/*<meta property="og:url" content={props.ogURL ? props.ogURL : live_url + router.pathname} />*/}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                {/*<meta property="og:image" content="https://s3.us-east-2.amazonaws.com/cdn.24task.com/24taskbanner.png" />*/}


                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:site" content="@Nojom" />
                <meta name="twitter:card" content="summary_large_image" />
                {/*<meta name="twitter:image" content="https://s3.us-east-2.amazonaws.com/cdn.24task.com/24taskbanner.png" />*/}


            </Head>
            <Navbar expand="lg"
                    className={styles.navbar}
                    variant="dark"
                    fixed="top">
            <Container>
                <Navbar.Brand className={styles.logo} href="/">Nojom</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.nav}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/terms-of-use">Terms of Use</Nav.Link>
                        <Nav.Link href="/about-us">About US</Nav.Link>
                        <Nav.Link href="/faq">FAQs</Nav.Link>
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                        <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Index;