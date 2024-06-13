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

import Link from 'next/link';
import ImgTestimonial from '../../public/images/contact-img.jpg';

export default function Home() {
  return (
    <>
      {/* Logo  */}
      <Link href='#'>Phoxul</Link>
      {/* Navigation  */}
      <Link href='#'>Home</Link>
      <Link href='#'>about</Link>
      <Link href='#'>Services</Link>
      <Link href='#'>Works</Link>
      <Link href='#'>Gallery</Link>
      <Link href='#'>Blog</Link>
      <Link href='#'>Contact</Link>
      {/* Hero Section Small Title   */}
      <h6>Welcome to</h6>
      {/* Hero Section Main Title   */}
      <h1>Phoxul Studio</h1>
      {/* Hero Section Main Para  */}
      <p>
        I love to pause the wild, happy and real moments of life, just to hear
        their stories untold.
      </p>
      {/* Hero Section My Work a  */}
      <Link href='#'>My Works</Link>
      Hero Section Contact a<Link href='#'>Contact me</Link>
      {/* Personal Info Section title  */}
      <h2>Hello, Im Martin Dow, a professional photographer based in USa</h2>
      {/* Personal Info Section Para  */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente labore
        consectetur deleniti amet id laboriosam dolor eos molestias, architecto
        blanditiis?
      </p>
      {/* Personal Info Section List  */}
      <ul>
        <FaCheck />
        <li>Over 7 Years of Experience</li>

        <FaCheck />
        <li>200+ Successfully Executed Projets</li>

        <FaCheck />
        <li>Exceptional Work Quality</li>
      </ul>
      {/* Personal Info Section Image  */}
      <Image src={ImgPerson} alt='Personal Info Image' />
      {/* Services Section Title  */}
      <h2>My Services</h2>
      {/* Services Section Para  */}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam,
        ut. Commodi eius repudiandae laboriosam voluptatibus?
      </p>
      {/* Services Section Services  */}
      <FaCamera />
      <h3>Photography</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, ipsum.
      </p>
      <FaVideo />
      <h3>Videography</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem.
      </p>
      <FaBrush />
      <h3>Photo Retouching</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem.
      </p>
      <FaCamera />
      <h3>aerial Photography</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem.
      </p>
      <FaLightbulb />
      <h3>Lightning Setup</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem.
      </p>
      <FaRulerCombined />
      <h3>Video Color Grading</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem.
      </p>
      {/* News Section Title  */}
      <h2>Latest News</h2>
      {/* News Section Para  */}
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      {/* News Section Mini Title  */}
      <h6>Resources</h6>
      {/* News Section Sub Title  */}
      <h3>Cosina announces its fastest full-frame lens</h3>
      News Section Sub Para
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. assumenda,
        quos nisi? ab.
      </p>
      {/* News Section a  */}
      <Link href='#'>Read More</Link>
      {/* News Section Date  */}
      <p>20 OCT 2035</p>
      {/* My Works Section Title  */}
      <h2>My Works</h2>
      {/* My Works Section List  */}
      <ul>
        <li>all</li>
        <li>Personal</li>
        <li>Wedding</li>
        <li>Event</li>
        <li>Fashion</li>
        <li>Product</li>
      </ul>
      <Image src={ImgWork01} alt='My Works' />
      <Image src={ImgWork02} alt='My Works' />
      <Image src={ImgWork03} alt='My Works' />
      <Image src={ImgWork04} alt='My Works' />
      <Image src={ImgWork05} alt='My Works' />
      <Image src={ImgWork06} alt='My Works' />
      <Image src={ImgWork07} alt='My Works' />
      <Image src={ImgWork08} alt='My Works' />
      <Image src={ImgWork09} alt='My Works' />
      {/* Contact Section Parallax Effect  */}
      <section className='parallax'></section>
      {/* Contact Section Title  */}
      <h2>Need help with professional photography? Lets work together!</h2>
      <Link href='#'>Contact Me</Link>
      {/* Contact Section Icons  */}
      <Image src={ImgContact01} alt='Icons' />
      <Image src={ImgContact02} alt='Icons' />
      <Image src={ImgContact03} alt='Icons' />
      <Image src={ImgContact04} alt='Icons' />
      {/* Contact Section Testimonial  */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        corrupti totam porro voluptas quaerat reprehenderit magni eaque possimus
        fugiat. aliquid.
      </p>
      {/* Contact Section Testimonial Image  */}
      <Image src={ImgTestimonial} alt='Testimonial' />
      {/* Contact Section Testimonial Image  */}
      <p>James Brown</p>
      <p>CEO, ColorImage</p>
      {/* Footer Newsletter Title  */}
      <h2>Sign up to get latest update</h2>
      {/* Footer Newsletter Para  */}
      <p>Sign up for our monthly newsletter for the latest news & articles</p>
      {/* Footer Newsletter Form  */}
      <input type='Email' placeholder='Enter Your Email' />
      <input type='submit' value='Subscribe Now' />
      {/* Footer author Logo  */}
      <Link href='#'>Phoxul</Link>
      {/* Footer author Para  */}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
        rerum molestias distinctio qui placeat eaque iusto dignissimos suscipit
        facilis. Consequatur libero non, amet porro eligendi laboriosam numquam
        aliquam omnis eum!
      </p>
      {/* Footer author Quick as  */}
      <h3>Quick as</h3>
      <ul>
        <li>about</li>
        <li>Services</li>
        <li>Works</li>
        <li>Blog</li>
      </ul>
      {/* Footer author Contact  */}
      <h3>Contact</h3>
      <ul>
        <FaPhoneSquareAlt />
        <li>+93 123 456 7890</li>

        <FaEnvelope />
        <li>el@el.cool</li>

        <FaAddressCard />
        <li>177a Bleecker Street, NYC, USa</li>
      </ul>
      {/* Footer author Copy Right  */}
      <p>&copy; 2022 by Muslim Helalee. all Rights Reserved</p>
      Footer author Social as
      <FaFacebook />
      <FaTwitch />
      <FaLinkedin />
      <FaDribbble />
    </>
  );
}
