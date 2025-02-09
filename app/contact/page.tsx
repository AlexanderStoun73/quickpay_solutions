import React from 'react'
import styles from '@/styles/components/contact.module.scss'
import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import PlaceIcon from '@mui/icons-material/Place'
import ContactForm from './contact-form'

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.contact__text}>
                <article className={styles.contact__title_text}>
                    <h5 className='main_blue-text'>Contact Us</h5>
                    <h1 className='main_title'>
                        If You Have Any Query, Feel Free To Contact Us
                    </h1>
                </article>
                <div className={styles.contact__blocks}>
                    <article className={styles.contact__block}>
						<span className={styles.contact__block_icon}>
							<PhoneIcon style={{ color: '#fff' }} />
						</span>
                        <div className={styles.contact__block_text}>
                            <h5>Call to ask any question</h5>
                            <h4><a href="tel:+1 609 455 3245">+1 609 455 3245</a></h4>
                        </div>
                    </article>
                    <article className={styles.contact__block}>
						<span className={styles.contact__block_icon}>
							<MailIcon style={{ color: '#fff' }} />
						</span>
                        <div className={styles.contact__block_text}>
                            <h5>Email to get free quote</h5>
                            <h4>order@qcksolve.us</h4>
                        </div>
                    </article>
                    <article className={styles.contact__block}>
						<span className={styles.contact__block_icon}>
							<PlaceIcon style={{ color: '#fff' }} />
						</span>
                        <div className={styles.contact__block_text}>
                            <h5>Visit our office</h5>
                            <h4>Oxford, NJ, USA</h4>
                        </div>
                    </article>
                </div>
                <div className={styles.form__form_map}>
                    <ContactForm />
                    <div className={styles.form__map}>
                        {/* Google Maps iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.417497937052!2d-74.62531718459544!3d40.62738997933478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c57ad0ab38e883%3A0x5b09ab2292b51f1d!2sOxford%2C+NJ%2C+USA!5e0!3m2!1sen!2sus!4v1639425098675!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
