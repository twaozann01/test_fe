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
import { useState } from "react";
// import { useEffect, useState } from "react";
// import Api from "../../services/Api";
 const testimonials = [
  {
    id: 1,
    name: "John Fang",
    site: "wordfaang.com",
    avatar: "https://i.pravatar.cc/100?img=1",
    text: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
  },
  {
    id: 2,
    name: "Sarah Lee",
    site: "sarahlee.dev",
    avatar: "https://i.pravatar.cc/100?img=2",
    text: "Vivamus commodo velit ac urna fermentum, in tincidunt turpis pulvinar. Quisque eget lectus sit amet lacus egestas faucibus."
  },
  {
    id: 3,
    name: "Michael Chen",
    site: "mikechen.io",
    avatar: "https://i.pravatar.cc/100?img=3",
    text: "Curabitur euismod neque nec erat tincidunt, vitae consequat nulla volutpat. Aliquam erat volutpat."
  },
  {
    id: 4,
    name: "Anna Smith",
    site: "annasmith.com",
    avatar: "https://i.pravatar.cc/100?img=4",
    text: "Maecenas pharetra nulla in justo commodo, vitae porttitor metus volutpat. Aenean a mauris ac ante feugiat mattis."
  },
  {
    id: 5,
    name: "David Kim",
    site: "davidkim.design",
    avatar: "https://i.pravatar.cc/100?img=5",
    text: "Integer non elit eget urna malesuada faucibus sit amet ac sem. Duis feugiat, mauris a tincidunt dictum."
  }
];
const Home = () => {
  // const [gallery, setGallery] = useState<any[]>([])

  // useEffect(()=> {
  //   const fetchGallery = async () => {
  //     try {
  //       const res = await Api.getGalleries()
  //       setGallery(res.data)
  //     } catch (error) {
  //       console.log("Lỗi khi lấy Gallery: ", error)
  //     }
  //   }
  //   fetchGallery()
  // }, [])
 

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

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
          <a href="#" className={`button ${styles.buttonLearn}`}>
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
            <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrev}>
              <i className="fa-solid fa-arrow-left" />
            </div>

            {/* Hiển thị testimonial hiện tại */}
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <img
                  className={styles.testimonialAvatar}
                  src={testimonials[currentIndex].avatar}
                  alt="avatar"
                />
                <div className={styles.testimonialInfo}>
                  <h3 className={styles.testimonialName}>
                    {testimonials[currentIndex].name}
                  </h3>
                  <a
                    className={styles.testimonialSite}
                    href="#"
                  >
                    {testimonials[currentIndex].site}
                  </a>
                  <p className={styles.testimonialText}>
                    {testimonials[currentIndex].text}
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNext}>
              <i className="fa-solid fa-arrow-right" />
            </div>
          </div>

          {/* Dots */}
          <div className={styles.testimonialDots}>
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot} ${idx === currentIndex ? styles.active : ""}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default Home;
