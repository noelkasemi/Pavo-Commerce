import { useEffect, useState } from 'react';
import { ConclusionSmartphone, Details1,Details2,Details3,Lightbox,Testimonial1,Testimonial2,Testimonial3,Testimonial4,Testimonial5,Testimonial6,FeaturesIcon1,FeaturesIcon2,FeaturesIcon3,FeaturesIcon4,FeaturesIcon5,FeaturesIcon6,MyDisclosure, Arrow, Button} from "./Partials/Imports";

export default function Index() {
  const card = [{icon: <FeaturesIcon1 />,  title: 'Platform Integration', description: 'You sales force can use the app on any smartphone platform without compatibility issues'},
  {icon: <FeaturesIcon2 />, title: 'Easy On Resources', description: 'Works smoothly even on older generation hardware due to our optimization efforts'},
  {icon: <FeaturesIcon3 />, title: 'Great Performance', description: 'Optimized code and innovative technology insure no delays and ultra-fast responsiveness'},
  {icon: <FeaturesIcon4 />, title: 'Multiple Languages', description: 'Choose from one of the 40 languages that come pre-installed and start selling smarter'},
  {icon: <FeaturesIcon5 />, title: 'Free Updates', description: "Don't worry about future costs, pay once and receive all future updates at no extra cost"},
  {icon: <FeaturesIcon6 />, title: 'Community Support', description: 'Register the app and get acces to knowledge and ideas from the Pavo online community'},]
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 945);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const users = [{image: Testimonial1 , name: 'Jude Thorn - Designer', description: "It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great"},
  {image: Testimonial2 , name: 'Roy Smith - Developer', description: "We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers"},
  {image: Testimonial3 , name: 'Marsha Singer - Marketer', description: "I've been searching for a tool like Pavo for so long. I love the reports it generates and the amazing high accuracy"},
  {image: Testimonial4 , name: 'Tim Shaw - Designer', description: "We've been waiting for a powerful piece of software that can help businesses manage their marketing projects"},
  {image: Testimonial5 , name: 'Lindsay Spice - Marketer', description: "Searching for a great prototyping and layout design app was difficult but thankfully I found app suite quickly"},
  {image: Testimonial6 , name: 'Ann Blake - Developer', description: "The app support team is amazing. They've helped me with some issues and I am so grateful to the entire team"},]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1020);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : (prevIndex + 1 && currentIndex === 3 ? setCurrentIndex(0) : '')) );
  };

  
  return (
    <>
       <section className={`relative ${isMobile ? 'top-[300px]' : ''} `}>
            <article className='mt-12 mb-32 text-center px-4 xl:px-4'>
            <h1 className='lg:max-w-5xl text-3xl mx-auto '>Team management mobile apps don’t get better than Pavo. It’s probably the best app in the world for this purpose. Don’t hesitate to give it a try today and you will fall in love with it</h1>
            </article>
            <section className={`flex flex-wrap justify-center mx-auto px-8`}>
        {card.map((item, index) => (
          <article key={index} className={`flex flex-col mb-8 ${isMobile ? 'w-full' : 'w-[325px]'} xl:w-1/4 mx-2 px-12 bg-[#f1f9fc] h-[290px] items-center justify-center rounded-xl p-4 `}>
            <span className="block">{item.icon}</span>
            <h2 className="text-xl font-bold mt-2">{item.title}</h2>
            <p className="mt-2 text-center">{item.description}</p>
          </article>
        ))}
      </section>
        </section>
        <section className={`relative ${isMobile ? 'top-[300px]' : ''} space-y-16`}>
            <section className='lg:grid grid-cols-12 gap-x-12 2xl:mx-40 flex flex-wrap items-center justify-center sm:px-12'>
            <article className='lg:col-span-5 lg:mx-0 px-4 sm:mx-10'>
                <h3 className='font-bold text-4xl my-2 '>Results driven ground breaking technology</h3>
                <p className='text-gray-500 text-lg my-4 '>Based on our team's extensive experience in developing line of business applications and constructive customer feedback we reached a new level of revenue.</p>
                <p className='text-gray-500 text-lg '>We enjoy helping small and medium sized tech businesses take a shot at established Fortune 500 companies</p>
            </article>
            <article className='lg:col-span-7  my-12'>
                <img src={Details1} alt="details-1" className={`${isMobile ? '' : 'w-[600px]'}`} />
            </article>
            </section>
            <section className='lg:grid grid-cols-12 gap-x-12 2xl:mx-40 flex flex-wrap items-center justify-center sm:px-12'>
             <article className='lg:col-span-7  my-12'>
                <img src={Details2} alt="details-2" className={`${isMobile ? '' : 'w-[600px]'}`} />
            </article> 
            <article className='lg:col-span-5 lg:mx-0 px-2 sm:mx-10'>
                <h3 className='font-bold text-4xl my-4 ml-1 '>Instant results for the marketing department</h3>
                <p className='text-gray-500 text-lg flex items-center '><Arrow style={`w-5 h-5 -rotate-90`} /> Features that will help you and your marketers</p>
                <p className='text-gray-500 text-lg flex my-1 items-center'><Arrow style={`w-5 h-5 -rotate-90`} />Smooth learning curve due to the knowledge base</p>
                <p className='text-gray-500 text-lg flex items-center '><Arrow style={`w-5 h-5 -rotate-90`} />Ready out-of-the-box with minor setup settings</p>
                <Button style='bg-[#4f46e5] text-white font-semibold my-4 hover:bg-white hover:text-[#4f46e5] hover:border border-[#4f46e5] ml-2 py-3 px-[40px]' text='Lightbox' />
                <Button style='bg-white text-[#252c38] font-semibold my-4 hover:bg-[#252c38] hover:text-[white] border border-[#252c38] mx-4 py-3 px-[40px] ' text='Details' />
                
            </article>
          
            </section>
            <section className='lg:grid grid-cols-12 gap-x-12 2xl:mx-40 flex flex-wrap items-center justify-center sm:px-12'>
            <article className='lg:col-span-5  lg:mx-0 px-2 sm:mx-10'>
                <h3 className='font-bold text-4xl my-2 '>Platform integration and life time free updates</h3>
                <p className='text-gray-500 text-lg my-4 '>Get a glimpse of what this app can do for your marketing automation and understand why current users are so excited when using Pavo together with their teams.</p>
                <p className='text-gray-500 text-lg '>We will promptly answer any questions and honor your requests based on the service level agreement</p>
            </article>
            <article className='lg:col-span-7 lg:mx-4 my-12'>
                <img src={Details3} alt="details-1" className={`${isMobile ? '' : 'w-[600px]'}`} />
            </article>
            </section>
        </section>
        <section className={`relative ${isMobile ? 'top-[300px]' : ''} px-8 flex flex-col justify-center items-center my-12 space-y-16`}>
          <section className='w-fit flex flex-wrap items-center justify-center'>
            <article  className={`sm:px-8 px-4`}>
                <h2 className="font-bold text-6xl my-2 text-center">231</h2>
                <p className="text-sm text-gray-500 text-center">Happy Users</p>
            </article>
            <article  className={`sm:px-8 px-4`}>
                <h2 className="font-bold text-6xl my-2 text-center">385</h2>
                <p className="text-sm text-gray-500 text-center">Issues Solved</p>
            </article>
            <article className={`sm:px-8 px-4`} >
                <h2 className="font-bold text-6xl my-2 text-center">159</h2>
                <p className="text-sm text-gray-500 text-center">Good Reviews</p>
            </article>
            <article className={`sm:px-8 px-4`} >
                <h2 className="font-bold text-6xl my-2 text-center">127</h2>
                <p className="text-sm text-gray-500 text-center">Case Studies</p>
            </article>
            <article className={`sm:px-8 px-4`} >
                <h2 className="font-bold text-6xl my-2 text-center">211</h2>
                <p className="text-sm text-gray-500 text-center">Orders Received</p>
            </article>
            </section>
            <section className='w-full'>
                <section className='flex items-center justify-center w-full'>
                    <Arrow  onClick={handlePrev} style='w-10 h-10 rotate-90 cursor-pointer h-20 text-gray-700 rotate-180 mr-4' />
                   <section className='overflow-x-hidden lg:w-[1000px] sm:w-[670px] w-[full]  '>
                    <h2 className='font-bold text-4xl text-center my-8 mb-12'>What do users think about Pavo</h2>
                    <section className={`carousel-container flex w-fit space-x-8 transition-transform duration-300 ease-in-out transform ` } style={{ transform: `translateX(-${currentIndex * (308)}px)` }}>
                    {users.map((user, index) => <article className='flex flex-col w-[300px] items-center space-y-4' key={index} >
                        <img className='rounded-full w-24 h-24' src={user.image} alt={`testimonial ` + index} />
                        <p className='italic text-center text-gray-500'>"{user.description}"</p>
                        <h4 className='font-bold text-xl text-center'>{user.name}</h4>
                    </article>)}
                    </section>
                    </section>
                    <Arrow onClick={handleNext} style='w-10 h-10 -rotate-90 cursor-pointer h-20 text-gray-700 ml-4'/>
                </section>
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
      {/* Footer */}
    </>
  );
}
