import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8ff] pt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-10 px-6 lg:px-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className=" xl:-ml-24 ">
          <h3 className="text-2xl font-bold ">Shop Non-Stop on Meesho</h3>
          <p className="text-lg">
            Trusted by more than 1 Crore Indians Cash on Delivery I Free
            Delivery
          </p>
        </div>

        <div>
          <ul className="text-lg font-semibold text-[#616173]">
            <a href="https://meesho.io/jobs?utm_medium=footer&utm_source=meesho_website&utm_campaign=careerspagepromotion"><li className="mt-4 mb-2">Careers</li></a>
            <a href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=mweb&utm_campaign=footer"><li className="mb-2">Beome a supplier</li></a>
            <a href="https://www.meesho.com/legal/hall-of-fame?embed=true"><li>Hall of frame</li></a>
            <a href="https://www.meesho.com/sitemap"><li>Sitemap</li></a>
          </ul>
        </div>

        <div>
          <ul className="text-lg font-semibold text-[#616173]">
          <a href="https://www.meesho.com/legal?embed=true"><li className="mt-4 mb-2">Legal and Policies</li></a>
            <a href="https://meesho.io/blog?utm_medium=footer&utm_source=meesho_website&utm_campaign=blogpagepromotion"><li className="mb-2">Meesho Tech Blog</li></a>
            <a href="https://www.meesho.com/notices_and_returns?embed=true"><li>Notices and Returns</li></a>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Reach out to us</h3>
          <ul className="flex gap-2 mt-4 text-[20px]">
            <li>
              <FaFacebookF className="text-[#117aea]" />
            </li>
            <li>
              <FaInstagram className="text-[#d11d5f]" />
            </li>
            <li>
              <FaYoutube className="text-[#ff0200]" />
            </li>
            <li>
              <FaLinkedinIn className="text-[#2964b6]" />
            </li>
            <li>
              <FaTwitter className="text-[#1c9cef]" />
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p className="text-[12px] mt-4">
            Fashnear Technologies Private Limited, CIN: IJ74900KA2015PTC082263
            3rd Floor, Wing-El Helios Business Park, Kadubeesanahalli Village,
            Varthur Hobli, Outer Ring Road Bellandur, Bangalore, Bangalore
            South, Karnataka, India, 560103 E-mail address: query@meesho.com 0
            2015-2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
