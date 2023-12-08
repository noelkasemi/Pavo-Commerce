import { useEffect, useState } from "react";
import {
  Details1,
  Details2,
  Details3,
  MyDisclosure,
  Arrow,
  Button,
} from "./Partials/Imports";
import Carousel from "../Tools/Transition";
import { data } from "../Data/Data";

export default function Index() {
  // Set initial state for isMobile based on the window width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1020);

  // Update isMobile state on window resize
  useEffect(() => {
    // Event handler to update isMobile based on the current window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1020);
    };

    // Attach the resize event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts to avoid memory leaks
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className={`relative ${isMobile && "top-14"} `}>
        <article className="mt-12 mb-32 text-center px-4 xl:px-4">
          <h1 className="lg:max-w-5xl text-3xl mx-auto ">
            Team management mobile apps don’t get better than Pavo. It’s
            probably the best app in the world for this purpose. Don’t hesitate
            to give it a try today and you will fall in love with it
          </h1>
        </article>
        <section className={`flex flex-wrap justify-center mx-auto px-8`}>
          {data.Cards.map((item, index) => (
            <article
              key={index}
              className={`flex flex-col mb-8 ${
                isMobile ? "w-full" : "w-[325px]"
              } xl:w-1/4 mx-2 px-12 bg-[#f1f9fc] h-[290px] items-center justify-center rounded-xl p-4 `}
            >
              <span className="block">{item.icon}</span>
              <h2 className="text-xl font-bold mt-2">{item.title}</h2>
              <p className="mt-2 text-center">{item.description}</p>
            </article>
          ))}
        </section>
      </section>
      <section className={`relative ${isMobile && "top-24"} space-y-16`}>
        <section className="lg:grid grid-cols-12 gap-x-12 2xl:mx-40 flex flex-wrap items-center justify-center sm:px-12">
          <article className="lg:col-span-5 lg:mx-0 px-4 sm:mx-10">
            <h3 className="font-bold text-4xl my-2 ">
              Results driven ground breaking technology
            </h3>
            <p className="text-gray-500 text-lg my-4 ">
              Based on our team's extensive experience in developing line of
              business applications and constructive customer feedback we
              reached a new level of revenue.
            </p>
            <p className="text-gray-500 text-lg ">
              We enjoy helping small and medium sized tech businesses take a
              shot at established Fortune 500 companies
            </p>
          </article>
          <article className="lg:col-span-7  my-12">
            <img
              src={Details1}
              alt="details-1"
              className={`${isMobile ? "" : "w-[600px]"}`}
            />
          </article>
        </section>
        <section className="lg:grid grid-cols-12 gap-x-12 2xl:mx-40 flex flex-wrap items-center justify-center sm:px-12">
          <article className="lg:col-span-7  my-12">
            <img
              src={Details2}
              alt="details-2"
              className={`${isMobile ? "" : "w-[600px]"}`}
            />
          </article>
          <article className="lg:col-span-5 lg:mx-0 px-2 sm:mx-10">
            <h3 className="font-bold text-4xl my-4 ml-1 ">
              Instant results for the marketing department
            </h3>
            <p className="text-gray-500 text-lg flex items-center ">
              <Arrow style={`w-5 h-5 -rotate-90`} /> Features that will help you
              and your marketers
            </p>
            <p className="text-gray-500 text-lg flex my-1 items-center">
              <Arrow style={`w-5 h-5 -rotate-90`} />
              Smooth learning curve due to the knowledge base
            </p>
            <p className="text-gray-500 text-lg flex items-center ">
              <Arrow style={`w-5 h-5 -rotate-90`} />
              Ready out-of-the-box with minor setup settings
            </p>
            <Button
              style="bg-[#4f46e5] text-white font-semibold my-4 hover:bg-white hover:text-[#4f46e5] hover:border border-[#4f46e5] ml-2 py-3 px-[40px]"
              text="Lightbox"
            />
            <Button
              style="bg-white text-[#252c38] font-semibold my-4 hover:bg-[#252c38] hover:text-[white] border border-[#252c38] mx-4 py-3 px-[40px] "
              text="Details"
            />
          </article>
        </section>
        <section className="lg:grid grid-cols-12 gap-x-12 2xl:mx-40 flex flex-wrap items-center justify-center sm:px-12">
          <article className="lg:col-span-5  lg:mx-0 px-2 sm:mx-10">
            <h3 className="font-bold text-4xl my-2 ">
              Platform integration and life time free updates
            </h3>
            <p className="text-gray-500 text-lg my-4 ">
              Get a glimpse of what this app can do for your marketing
              automation and understand why current users are so excited when
              using Pavo together with their teams.
            </p>
            <p className="text-gray-500 text-lg ">
              We will promptly answer any questions and honor your requests
              based on the service level agreement
            </p>
          </article>
          <article className="lg:col-span-7 lg:mx-4 my-12">
            <img
              src={Details3}
              alt="details-1"
              className={`${isMobile ? "" : "w-[600px]"}`}
            />
          </article>
        </section>
      </section>
      <section
        className={`relative ${
          isMobile && "top-24"
        } px-8 flex flex-col justify-center items-center my-12 space-y-16`}
      >
        <section className="w-fit flex flex-wrap items-center justify-center">
          {data.Stats.map((item) => (
            <article className={`sm:px-8 px-4`}>
              <h2 className="font-bold text-6xl my-2 text-center">
                {item.number}
              </h2>
              <p className="text-sm text-gray-500 text-center">{item.label}</p>
            </article>
          ))}
        </section>
        <section className={`w-full ${isMobile && "pb-24"}`}>
          <Carousel
            itemsPerRow={3}
            scroll={1}
            items={data.Users}
            renderItem={({ image, description, name }) => (
              <article className="flex  flex-col w-[300px] items-center space-y-4">
                <img
                  className="rounded-full w-24 h-24"
                  src={image}
                  alt={`testimonial ` + 1}
                />
                <p className="italic text-center text-gray-500">
                  "{description}"
                </p>
                <h4 className="font-bold text-xl text-center">{name}</h4>
              </article>
            )}
          />
        </section>
      </section>
      <MyDisclosure
        buttonChildren={`What is your refund policy?`}
        children={` If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.`}
        buttonChildren2={`Do you offer technical support?`}
        children2={`Yes`}
        buttonStyle={`bg-[#dfdcf7] text-[#eb427e]`}
        panelStyle={`shadow`}
      />
    </>
  );
}
