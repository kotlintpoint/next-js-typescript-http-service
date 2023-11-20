import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './Home/home.module.scss';

function Layout({ children }) {
    const { meta } = children.props;
    return (
        <>
            <Header meta={meta} />
            <div className={styles.layoutContainer}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;