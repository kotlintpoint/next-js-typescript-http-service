import Card from 'react-bootstrap/Card';
import styles from './influenceCard.module.scss';
import StarRatings from 'react-star-ratings';
import Image from "next/image";
import Link from "next/link";
import useDeviceWidth from "../../../hooks/useDeviceWidth";
import FavouriteIcon from "../../../public/favourite.png";


function Influencer({ influencer, path }) {
    const { isMobileDevice } = useDeviceWidth();

    return (
        <Link href={`/influencer/${influencer.username}`}>
            <Card className={`${styles.cardContainer} ${isMobileDevice ? styles.mobileCardContainer : '' }`}>
                <Image width={383} height={300}
                       className={styles.image}
                       alt={influencer?.first_name+' '+influencer?.last_name}
                       src={influencer?.img ? path+influencer?.img : "https://picsum.photos/400"} />
                <Card.Body>
                        <Card.Title className={styles.influencerName}>
                            {influencer?.first_name}&nbsp;{influencer?.last_name}
                            <Image src={FavouriteIcon}
                                   alt={'favourite-icon'}
                                   width={24} height={24} />
                        </Card.Title>
                        <Card.Text>
                            <div className={styles.rating}>
                                <StarRatings
                                    starRatedColor="#FFD500"
                                    numberOfStars={5}
                                    rating={influencer?.starpoints}
                                    starDimension="20px"
                                    starSpacing="1px"
                                    name='rating'
                                />
                                <span className={styles.ratingCount}>({influencer?.count_rating})</span>
                            </div>
                            <div>{influencer?.stateName || 'State'}, {influencer?.countryName || 'Country'}</div>
                            <div className={styles.from}>From <span className={styles.money}>${influencer?.minPrice}</span></div>
                        </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default Influencer;