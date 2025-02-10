import React from "react";
import styles from "@/styles/components/service.module.scss";

import ShieldIcon from "@mui/icons-material/Shield";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import WebIcon from "@mui/icons-material/Web";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";

export default function Service() {
  return (
      <>
        <section className={styles.service}>
          <article className={styles.service__title_text}>
            <h5 className="main_blue-text">Our Services</h5>
            <h1 className="main_title">Custom IT Solutions for Your Successful Business</h1>
          </article>
          <div className={styles.service__services_cards}>
            {[{
              icon: <ShieldIcon className={styles.service__icon} style={{ color: "#fff" }} />,
              title: "Cyber Security",
              description: "Protect your digital assets with our cutting-edge cyber security solutions, safeguarding your business against evolving threats."
            }, {
              icon: <InsertChartIcon className={styles.service__icon} style={{ color: "#fff" }} />,
              title: "Data Analytics",
              description: "Unlock the power of data with our advanced analytics tools, gaining valuable insights to drive informed decisions and maximize your business potential."
            }, {
              icon: <WebIcon className={styles.service__icon} style={{ color: "#fff" }} />,
              title: "Web Development",
              description: "Elevate your online presence with our top-notch web development services, creating stunning websites that captivate your audience and drive tangible results."
            }, {
              icon: <AdbIcon className={styles.service__icon} style={{ color: "#fff" }} />,
              title: "Apps Development",
              description: "Transform your ideas into reality with our expert app development services, crafting innovative and user-friendly applications that revolutionize the way you engage with your customers."
            }, {
              icon: <SearchIcon className={styles.service__icon} style={{ color: "#fff" }} />,
              title: "SEO Optimization",
              description: "Boost your online visibility and outrank the competition with our comprehensive SEO optimization strategies, driving targeted traffic and maximizing your website's potential."
            }].map((service, index) => (
                <div className={styles.service__card} key={index}>
                  <article className={styles.service__card_inner}>
                    <div className={styles.service__service_icon}>{service.icon}</div>
                    <h4 className={styles.service__card_title}>{service.title}</h4>
                    <p className={styles.service__card_description}>{service.description}</p>
                  </article>
                </div>
            ))}
          </div>
        </section>

        <div className={styles.service__background_strip}>
            <div className={styles.service__why_choose}>
                <h2 className={styles.service__strip_title}>
                    <span className={styles.service__strip_line}></span>
                    Why Choose Quick Solutions
                    <span className={styles.service__strip_line}></span>
                </h2>
                <p>
                    We prioritize your objectives and challenges to drive tangible results
                    and foster business growth. Trust in our innovative and reliable IT
                    services to transform your business in the digital era.
                </p>
                <div className={styles.service__why_choose_columns}>
                    <div className={styles.service__why_choose_column}>
                        {[
                            { title: "Expertise and Experience", description: "Our team of skilled professionals has extensive experience and expertise in various technologies and industries, ensuring the delivery of high-quality and reliable IT solutions." },
                            { title: "Innovation and Technology Leadership", description: "We are committed to staying at the forefront of technological advancements and continuously innovating our services to help our clients adapt to new challenges and opportunities in the digital landscape." },
                            { title: "Training", description: "We believe in imparting modern and best in class training to both aspiring graduates and talented professionals to keep them abreast with changing needs of the competitive market place" }
                        ].map((item, index) => (
                            <div key={index} className={styles.service__why_choose_item}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.service__why_choose_column}>
                        {[
                            { title: "Client-Centric Approach", description: "We prioritize our clients' needs and objectives, and collaborate closely with them to develop customized solutions that align with their business goals and drive measurable results." },
                            { title: "Quality and Reliability", description: "We are dedicated to delivering high-quality and reliable IT services, maintaining the highest standards of excellence, and ensuring customer satisfaction." },
                            { title: "Proven Track Record", description: "With a strong history of successful IT projects and happy clients, Tanisha Systems is recognized as a trusted IT service provider. Our client success stories and case studies showcase our expertise in delivering high-quality, innovative IT solutions that foster business growth and success." }
                        ].map((item, index) => (
                            <div key={index} className={styles.service__why_choose_item}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}
