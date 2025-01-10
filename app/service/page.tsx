import React from "react";
import styles from "@/styles/components/service.module.scss";

import ShieldIcon from "@mui/icons-material/Shield";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import WebIcon from "@mui/icons-material/Web";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";

export default function Service() {
  return (
    <section className={styles.service}>
      <article className={styles.service__title_text}>
        <h5 className="main_blue-text">Our Services</h5>
        <h1 className="main_title">
          Custom IT Solutions for Your Successful Business
        </h1>
      </article>
      <div className={styles.service__services_cards}>
        <div className={styles.service__card}>
          <article className={styles.service__card_inner}>
            <div className={styles.service__service_icon}>
              <ShieldIcon className={styles.service__icon} style={{ color: "#fff" }} />
            </div>
            <h4 className={styles.service__card_title}>Cyber Security</h4>
            <p className={styles.service__card_description}>
              Protect your digital assets with our cutting-edge cyber security
              solutions, safeguarding your business against evolving threats.
            </p>
          </article>
        </div>
        <div className={styles.service__card}>
          <article className={styles.service__card_inner}>
            <div className={styles.service__service_icon}>
              <InsertChartIcon
                className={styles.service__icon}
                style={{ color: "#fff" }}
              />
            </div>
            <h4 className={styles.service__card_title}>Data Analytics</h4>
            <p className={styles.service__card_description}>
              Unlock the power of data with our advanced analytics tools,
              gaining valuable insights to drive informed decisions and maximize
              your business potential.
            </p>
          </article>
        </div>
        <div className={styles.service__card}>
          <article className={styles.service__card_inner}>
            <div className={styles.service__service_icon}>
              <WebIcon className={styles.service__icon} style={{ color: "#fff" }} />
            </div>
            <h4 className={styles.service__card_title}>Web Development</h4>
            <p className={styles.service__card_description}>
              Elevate your online presence with our top-notch web development
              services, creating stunning websites that captivate your audience
              and drive tangible results.
            </p>
          </article>
        </div>
        <div className={styles.service__card}>
          <article className={styles.service__card_inner}>
            <div className={styles.service__service_icon}>
              <AdbIcon className={styles.service__icon} style={{ color: "#fff" }} />
            </div>
            <h4 className={styles.service__card_title}>Apps Development</h4>
            <p className={styles.service__card_description}>
              Transform your ideas into reality with our expert app development
              services, crafting innovative and user-friendly applications that
              revolutionize the way you engage with your customers.
            </p>
          </article>
        </div>
        <div className={styles.service__card}>
          <article className={styles.service__card_inner}>
            <div className={styles.service__service_icon}>
              <SearchIcon className={styles.service__icon} style={{ color: "#fff" }} />
            </div>
            <h4 className={styles.service__card_title}>SEO Optimization</h4>
            <p className={styles.service__card_description}>
              Boost your online visibility and outrank the competition with our
              comprehensive SEO optimization strategies, driving targeted
              traffic and maximizing your website&apos;s potential.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
