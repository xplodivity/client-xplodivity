import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <Image
          src="/assets/images/logo.jpeg"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <p>
          xplodivity
          <br />
          Exploding Creativity
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <a className="link link-hover">Terms & Conditions</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Refunds & Cancellation Policy</a>
      </nav>

      <nav>
        <a className="link link-hover">Contact Us</a>
      </nav>
    </footer>
  );
};

export default Footer;
