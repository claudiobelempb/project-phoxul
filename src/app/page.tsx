import Image from 'next/image';
import {
  FaAddressCard,
  FaBrush,
  FaCamera,
  FaCheck,
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaLightbulb,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaRulerCombined,
  FaTwitch,
  FaVideo
} from 'react-icons/fa';
import ImgPerson from '../../public/images/personal-info-img.jpg';

import ImgWork01 from '../../public/images/my-works/my-work-1.jpg';
import ImgWork02 from '../../public/images/my-works/my-work-2.jpg';
import ImgWork03 from '../../public/images/my-works/my-work-3.jpg';
import ImgWork04 from '../../public/images/my-works/my-work-4.jpg';
import ImgWork05 from '../../public/images/my-works/my-work-5.jpg';
import ImgWork06 from '../../public/images/my-works/my-work-6.jpg';
import ImgWork07 from '../../public/images/my-works/my-work-7.jpg';
import ImgWork08 from '../../public/images/my-works/my-work-8.jpg';
import ImgWork09 from '../../public/images/my-works/my-work-9.jpg';

import ImgContact01 from '../../public/images/contact/icon-1.png';
import ImgContact02 from '../../public/images/contact/icon-2.png';
import ImgContact03 from '../../public/images/contact/icon-3.png';
import ImgContact04 from '../../public/images/contact/icon-4.png';

import ImgHeroBg from '../../public/images/hero-bg.jpg';

import Link from 'next/link';
import ImgTestimonial from '../../public/images/contact-img.jpg';
import ImgLatest from '../../public/images/news-img.jpeg';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header id={styles.header__container} className='overall__layout'>
        <div className={`${styles.header__content} `}>
          <div className={styles.header__box}>
            <Link href='#'>Phoxul</Link>
          </div>
          <div className={styles.header__box}>
            <nav>
              <Link className={styles.header__nav__li} href='#'>
                Home
              </Link>
              <Link className={styles.header__logo} href='#'>
                about
              </Link>
              <Link href='#'>Services</Link>
              <Link href='#'>Works</Link>
              <Link href='#'>Gallery</Link>
              <Link href='#'>Blog</Link>
              <Link href='#'>Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <section
        id={styles.hero__container}
        className='overall__layout section__padding'
      >
        <div className={styles.hero__content}>
          <div className={styles.hero__box}>
            <h6>Welcome to</h6>
            <h1>Phoxul Studio</h1>
            <p>
              I love to pause the wild, happy and real moments of life, just to
              hear their stories untold.
            </p>
            <div className={styles.hero__links}>
              <Link href='#'>My Works</Link>
              <Link href='#'>Contact me</Link>
            </div>
          </div>
          <div className={styles.hero__box}>
            <Image src={ImgHeroBg} loading='lazy' alt='Studio' />
          </div>
        </div>
      </section>

      <section
        id={styles.personal__container}
        className='overall__layout section__padding'
      >
        <div className={styles.personal__content}>
          <div className={styles.personal__box}>
            <h2 className='section__title'>
              Hello, Im Martin Dow, a professional photographer based in USa
            </h2>
            {/* Personal Info Section Para  */}
            <p className='section__para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              labore consectetur deleniti amet id laboriosam dolor eos
              molestias, architecto blanditiis?
            </p>
            {/* Personal Info Section List  */}
            <ul>
              <li>
                <FaCheck />
                <p className='section__para'>Over 7 Years of Experience</p>
              </li>

              <li>
                <FaCheck />
                <p className='section__para'>
                  200+ Successfully Executed Projets
                </p>
              </li>

              <li>
                <FaCheck />
                <p className='section__para'>Exceptional Work Quality</p>
              </li>
            </ul>
          </div>
          <div className={styles.personal__box}>
            <Image src={ImgPerson} loading='lazy' alt='Personal Info Image' />
          </div>
        </div>
      </section>

      <section
        id={styles.sevices__container}
        className='overall__layout section__padding'
      >
        <div className={styles.sevices__content}>
          <h2 className='section__title'>My Services</h2>
          <p className='section__para'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.Laboriosam,
            ut.
            <span>Commodi eius repudiandae laboriosam voluptatibus?</span>
          </p>
        </div>
        <div className={styles.sevices__content}>
          <div className={styles.sevices__box}>
            <FaCamera />
            <h3>Photography</h3>
            <p className='section__para'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              ipsum.
            </p>
          </div>
          <div className={styles.sevices__box}>
            <FaVideo />
            <h3>Videography</h3>
            <p className='section__para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, rem.
            </p>
          </div>
          <div className={styles.sevices__box}>
            <FaBrush />
            <h3>Photo Retouching</h3>
            <p className='section__para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, rem.
            </p>
          </div>
          <div className={styles.sevices__box}>
            <FaCamera />
            <h3>Aerial Photography</h3>
            <p className='section__para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, rem.
            </p>
          </div>
          <div className={styles.sevices__box}>
            <FaLightbulb />
            <h3>Lightning Setup</h3>
            <p className='section__para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, rem.
            </p>
          </div>
          <div className={styles.sevices__box}>
            <FaRulerCombined />
            <h3>Video Color Grading</h3>
            <p className='section__para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, rem.
            </p>
          </div>
        </div>
      </section>

      <section
        id={styles.latest__container}
        className='overall__layout section__padding'
      >
        <div className={styles.latest__content}>
          <h2 className='section__title'>Latest News</h2>
          <p className='section__para'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <article className={styles.latest__content}>
          <div className={styles.latest__box}>
            <button>Resources</button>
            <h3>Cosina announces its fastest full-frame lens</h3>

            <p className='section__para'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              assumenda, quos nisi? ab.
            </p>
            <div>
              <Link href='#'>Read More</Link>
              <p className='section__para'>20 OCT 2035</p>
            </div>
          </div>
          <div className={styles.latest__box}>
            <Image src={ImgLatest} alt='' loading='lazy' />
          </div>
        </article>
      </section>

      <section
        id={styles.works__container}
        className='overall__layout section__padding'
      >
        <div className={styles.works__content}>
          <h2 className='section__title'>My Works</h2>
          <ul>
            <li className='section__para'>all</li>
            <li className='section__para'>Personal</li>
            <li className='section__para'>Wedding</li>
            <li className='section__para'>Event</li>
            <li className='section__para'>Fashion</li>
            <li className='section__para'>Product</li>
          </ul>
        </div>

        <div className={styles.works__content}>
          <figure>
            <Image src={ImgWork01} alt='My Works' />
          </figure>
          <figure>
            <Image src={ImgWork02} alt='My Works' />
          </figure>
          <figure>
            <Image src={ImgWork03} alt='My Works' />
          </figure>
          <figure>
            <Image src={ImgWork04} alt='My Works' />
          </figure>
          <figure>
            <Image src={ImgWork05} alt='My Works' />
          </figure>
          <figure>
            <Image src={ImgWork06} alt='My Works' />
          </figure>
          <figure>
            <Image src={ImgWork07} alt='My Works' />
          </figure>
          <figure>
            <Image src={ImgWork08} alt='My Works' />
          </figure>
          <figure>
            <Image src={ImgWork09} alt='My Works' />
          </figure>
        </div>
      </section>

      <section
        id={`${styles.contact__container}`}
        className='overall__layout section__padding'
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url('${ImgHeroBg.src}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className={`${styles.contact__content}`}>
          <div className={`${styles.contact__box}`}>
            <h2 className='section__title'>
              Need help with professional photography? Lets work together!
            </h2>
            <Link href='#'>Contact Me</Link>
          </div>
          <div className={`${styles.contact__box}`}>
            <p className='section__para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              corrupti totam porro voluptas quaerat reprehenderit magni eaque
              possimus fugiat. aliquid.
            </p>
            <div>
              <Image src={ImgTestimonial} alt='Testimonial' />
              <div>
                <p>James Brown</p>
                <p>CEO, ColorImage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id={`${styles.client__container}`}
        className='overall__layout section__padding'
      >
        <div className={`${styles.client__content}`}>
          <Image src={ImgContact01} alt='Icons' />
          <Image src={ImgContact02} alt='Icons' />
          <Image src={ImgContact03} alt='Icons' />
          <Image src={ImgContact04} alt='Icons' />
        </div>
      </section>

      <footer
        id={`${styles.footer__container}`}
        className='overall__layout section__padding'
      >
        <div className={`${styles.footer__content}`}>
          <div className={`${styles.footer__box}`}>
            <h2>Sign up to get latest update</h2>

            <p>
              Sign up for our monthly newsletter for the latest news & articles
            </p>
          </div>
          <div className={`${styles.footer__box}`}>
            <input type='Email' placeholder='Enter Your Email' />
            <input type='submit' value='Subscribe Now' />
          </div>
        </div>
        <div className={`${styles.footer__content}`}>
          <div className={`${styles.footer__box}`}>
            <Link href='#'>Phoxul</Link>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate, rerum molestias distinctio qui placeat eaque iusto
              dignissimos suscipit facilis. Consequatur libero non, amet porro
              eligendi laboriosam numquam aliquam omnis eum!
            </p>
          </div>
          <div className={`${styles.footer__box}`}>
            <h3>Quick as</h3>
            <ul>
              <li>about</li>
              <li>Services</li>
              <li>Works</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className={`${styles.footer__box}`}>
            <h3>Contact</h3>
            <ul>
              <FaPhoneSquareAlt />
              <li>+93 123 456 7890</li>

              <FaEnvelope />
              <li>el@el.cool</li>

              <FaAddressCard />
              <li>177a Bleecker Street, NYC, USa</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.footer__content}`}>
          <div className={`${styles.footer__box}`}>
            <p>&copy; 2022 by Muslim Helalee. all Rights Reserved</p>
          </div>
          <div className={`${styles.footer__box}`}>
            <FaFacebook />
            <FaTwitch />
            <FaLinkedin />
            <FaDribbble />
          </div>
        </div>
      </footer>
    </>
  );
}
