import React from 'react';
import footerImage from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <div className='bg-[#06091A] text-base-100 pt-45 p-10 mt-5'>
            <div className='flex justify-center mb-10'>
                <img src={footerImage} alt="Footer Logo" />
            </div>
            <footer className="footer grid grid-cols-1 md:grid-cols-3">
                <nav>
                    <h6 className="footer-title text-xl">About Us</h6>
                    <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <form>
                    <h6 className="footer-title text-xl">Subscribe</h6>
                    <fieldset className="w-80">
                        <label>Subscribe to our newsletter for the latest updates.</label>
                        <div className="join mt-2">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item text-neutral" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;