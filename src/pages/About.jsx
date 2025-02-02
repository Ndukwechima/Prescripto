import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="about_image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Prescripto Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum dolorum delectus maiores consequuntur cum
            velit ipsam veniam a labore consectetur Laborum dolorum delectus
            maiores consequuntur cum velit ipsam veniam a labore consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            tempore fugit quisquam similique voluptates, sapiente earum
            explicabo itaque. Cumque soluta error nostrum neque vel culpa?
            Deserunt, nihil quae totam dolores fuga cupiditate corrupti,
            obcaecati, ut repellendus sit excepturi neque culpa fuga cupiditate
            corrupti, obcaecati, ut repellendus sit excepturi neque culpa.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at
            minus delectus molestias ducimus consequatur dolorum omnis est
            corrupti culpa molestias ducimus consequatur dolorum omnis est
            corrupti culpa.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p className="uppercase">
          Why <span className="text-gray-700 font-semibold">Choose Us</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div
          className="border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5
         text-[15px] hover:bg-(--primary-color) hover:text-white transition-all
          duration-300 text-gray-600 cursor-pointer"
        >
          <b>Efficiency:</b>
          <p>
            Streamlined appoint scheduling that fits into your busy lifestyle.
          </p>
        </div>

        <div
          className="border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5
         text-[15px] hover:bg-(--primary-color) hover:text-white transition-all
          duration-300 text-gray-600 cursor-pointer"
        >
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>

        <div
          className="border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5
         text-[15px] hover:bg-(--primary-color) hover:text-white transition-all
          duration-300 text-gray-600 cursor-pointer"
        >
          <b>Personalization</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health
          </p>
        </div>
      </div>
    </div>
  );
}

export default About