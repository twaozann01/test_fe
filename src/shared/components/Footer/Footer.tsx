import logo from '../../../assets/images/tải xuống (4).png';
import styles from './Footer.module.css';

const Footer = () => {
    const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault(); // Ngăn reload/trang nhảy tự động
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn mượt lên đầu
    };
    return (
        <>
            {/* Footer */}
            <div className={styles.containerFooter}>
                <div className={styles.footerTop}>
                    <div className={styles.ftTopLeft}>
                        <a href="#" onClick={handleScrollTop} className={styles.topLeftLogo}>
                            <img src={logo} alt="#" />
                        </a>
                        <div className={styles.topLeftAddress}>
                            Warehouse Society, 234 Bahagia Ave Street PRBW 29281
                        </div>
                        <div className={styles.topLeftEmail}>
                            info@warehouse.project
                        </div>
                        <div className={styles.topLeftPhone}>
                            1-232-3434 (Main)
                        </div>
                    </div>
                    <div className={styles.ftTopRight}>
                        <div className={styles.topRightGroup}>
                            <h3 className={styles.ftGroupTitle}>About</h3>
                            <ul className={styles.ftListItems}>
                                <li className={styles.ftItem}><a href="#" onClick={handleScrollTop}>Profile</a></li>
                                <li className={styles.ftItem}><a href="#" onClick={handleScrollTop}>Features</a></li>
                                <li className={styles.ftItem}><a href="#" onClick={handleScrollTop}>Careers</a></li>
                                <li className={styles.ftItem}><a href="#" onClick={handleScrollTop}>DW News</a></li>
                            </ul>
                        </div>
                        <div className={styles.topRightGroup}>
                            <h3 className={styles.ftGroupTitle}>Help</h3>
                            <ul className={styles.ftListItems}>
                                <li className={styles.ftItem}><a href="#" onClick={handleScrollTop}>Support</a></li>
                                <li className={styles.ftItem}><a href="#" onClick={handleScrollTop}>Sign Up</a></li>
                                <li className={styles.ftItem}><a href="#" onClick={handleScrollTop}>Guide</a></li>
                                <li className={styles.ftItem}><a href="#" onClick={handleScrollTop}>Reports</a></li>
                                <li className={styles.ftItem}><a href="#" onClick={handleScrollTop}>Q &amp; A</a></li>
                            </ul>
                        </div>
                        <div className={`${styles.topRightGroup} ${styles.topRightGroupIcon}`}>
                            <h3 className={styles.ftGroupTitle}>Social Media</h3>
                            <ul className={styles.ftListItemsIcon}>
                                <li className={styles.ftItemIcon}><a href="#" onClick={handleScrollTop}><i className="fa-brands fa-youtube" /></a></li>
                                <li className={styles.ftItemIcon}><a href="#" onClick={handleScrollTop}><i className="fa-brands fa-instagram" /></a></li>
                                <li className={styles.ftItemIcon}><a href="#" onClick={handleScrollTop}><i className="fa-brands fa-github" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.ftBottomText}>
                        <p className={styles.bottomContent}>
                            © Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.
                        </p>
                    </div>
                    <div className={styles.ftBottomIcon}>
                        <i className="icon fa-regular fa-comment-dots" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
