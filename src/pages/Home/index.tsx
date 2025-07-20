import banner_1 from "../../assets/images/hero-img.d06ff33bd5f804baba29.png";
import bg_1 from "../../assets/images/feature1_bg.02fab76ed86ad763f03f.png";
import bg_2 from "../../assets/images/tải xuống (1).png";
import bg_3 from "../../assets/images/tải xuống (6).png";
import bg_4 from "../../assets/images/feature4_bg.da2f2bdbea11c95080a8.png";
import f_1 from "../../assets/images/feature1.3bd68cd8e4cd29a40d80.png";
import f_2 from "../../assets/images/feature2.aa8cfbcff7c4975f6f37.png";
import f_3 from "../../assets/images/feature3.d41c5afe07c670d96f41.png";
import f_4 from "../../assets/images/feature4.821e83ecc96bd79a8e9a.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      {/* Learn */}
      <div className={styles.mainLearn}>
        <div className={styles.learnText}>
          <h1 className={styles.textTitle}>Save your data storage here.</h1>
          <p className={styles.textContent}>
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <a href="#" className={`${styles.button} ${styles.buttonLearn}`}>
            Learn more
          </a>
        </div>
        <div className={styles.learnImg}>
          <img src={banner_1} alt="Banner" />
        </div>
      </div>

      {/* Features */}
      <div className={styles.mainFeatures}>
        <div className={styles.featuresTitle}>
          <h2 className={styles.featuresTitleDescription}>Features</h2>
          <p className={styles.featuresContent}>
            Some of the features and advantages that we provide for those of
            you who store data in this Data Warehouse.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {[ 
            { bg: bg_1, icon: f_1, title: "Search Data", desc: "Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time." },
            { bg: bg_2, icon: f_2, title: "24 Hours Access", desc: "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent." },
            { bg: bg_3, icon: f_3, title: "Print Out", desc: "Print out service gives you convenience if someday you need print data, just edit it all and just print it." },
            { bg: bg_4, icon: f_4, title: "Security Code", desc: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password than you created, so only you can open the file." }
          ].map((item, index) => (
            <div key={index} className={styles.featuresGridItem}>
              <div className={styles.featuresGridGroup}>
                <div className={styles.bgFeatures}>
                  <img src={item.bg} alt="" />
                </div>
                <div className={styles.featuresContentGroup}>
                  <div className={styles.imgFeatures}>
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className={styles.featuresContentItem}>
                    <h3 className={styles.featuresContentTitle}>{item.title}</h3>
                    <p className={styles.featuresContentDescription}>{item.desc}</p>
                    <div className={styles.featuresContentRouter}>
                      <a href="#">
                        Learn more <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className={styles.mainTestimonials}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialsGroup}>
            <h2 className={styles.testimonialsTitle}>Testimonials</h2>
            <div className={styles.testimonialsSlide}>
              <div className={`${styles.arrow} ${styles.arrowLeft}`}>
                <i className="fa-solid fa-arrow-left" />
              </div>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <img
                    className={styles.testimonialAvatar}
                    src="https://i.pravatar.cc/100"
                    alt="avatar"
                  />
                  <div className={styles.testimonialInfo}>
                    <h3 className={styles.testimonialName}>John Fang</h3>
                    <a className={styles.testimonialSite} href="#">
                      wordfaang.com
                    </a>
                    <p className={styles.testimonialText}>
                      Suspendisse ultrices at diam lectus nullam.
                      <br />
                      Nisl, sagittis viverra enim erat tortor ultricies massa
                      turpis.
                      <br />
                      Arcu pulvinar aenean nam laoreet nulla.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles.arrow} ${styles.arrowRight}`}>
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
            <div className={styles.testimonialDots}>
              <span className={`${styles.dot} ${styles.active}`} />
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
