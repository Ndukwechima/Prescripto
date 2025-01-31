import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="md:mx-10">
      <div
        className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10
      mt-40 text-sm"
      >
        {/* ---------- Left Side ----------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed at
            dolores dignissimos libero aperiam nihil atque quam quo aliquid ea!
            Unde nam ducimus in ea perferendis fugiat illum consequuntur
            voluptate explicabo, ipsum inventore maxime recusandae itaque
            deleniti veniam esse quis aliquam.
          </p>
        </div>

        {/* ---------- Center Section ----------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ---------- Right Side ----------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+234-111-000-2</li>
            <li>chimandukwe.r@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ---------- Copyright Text ----------- */}

      <div>
        <hr className="border border-gray-300" />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Prescrpto | Crafted by Arubydev - All Right Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer