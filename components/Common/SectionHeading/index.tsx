import React from 'react';
import styles from "@/components/Common/SectionHeading/sectionHeading.module.scss";
import Link from "next/link";

function Index({title, href="#" , showAll=false, showViewAllButton= true}) {
    return (
        <div className={styles.heading}>
            <h1>{title}</h1>
            {showViewAllButton && (
                <Link href={href}
                      className={styles.viewAllButton}>
                    { showAll &&  <i className={`${styles.arrow} ${styles.left}`} /> }
                    { showAll ? 'Back' : 'View all'}
                    { !showAll && <i className={`${styles.arrow} ${styles.right}`} /> }
                </Link>
            )}
        </div>
    );
}

export default Index;