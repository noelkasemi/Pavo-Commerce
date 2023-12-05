import "../CSS/magnific-popup.css";
// import "../CSS/styles.css";
import "../CSS/swiper.css";
import { ConclusionSmartphone, Details1,Details2,Details3,Lightbox,Testimonial1,Testimonial2,Testimonial3,Testimonial4,Testimonial5,Testimonial6,FeaturesIcon1,FeaturesIcon2,FeaturesIcon3,FeaturesIcon4,FeaturesIcon5,FeaturesIcon6,MyDisclosure,} from "./Partials/Imports";

export default function Index() {
  return (
    <>
      {/* <Header /> */}
      {/* Introduction */}
      <div className="pt-4 pb-14 text-center">
        <div className="container px-4 sm:px-8 xl:px-4">
          <p className="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto">
            {" "}
            Team management mobile apps don’t get better than Pavo. It’s
            probably the best app in the world for this purpose. Don’t hesitate
            to give it a try today and you will fall in love with it
          </p>
        </div>{" "}
        {/* end of container */}
      </div>
      {/* end of introduction */}
      {/* Features */}
      <div id="features" className="cards-1">
        <div className="container px-4 sm:px-8 xl:px-4">
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-1.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Platform Integration</h5>
              <p className="mb-4">
                You sales force can use the app on any smartphone platform
                without compatibility issues
              </p>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-2.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Easy On Resources</h5>
              <p className="mb-4">
                Works smoothly even on older generation hardware due to our
                optimization efforts
              </p>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-3.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Great Performance</h5>
              <p className="mb-4">
                Optimized code and innovative technology insure no delays and
                ultra-fast responsiveness
              </p>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-4.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Multiple Languages</h5>
              <p className="mb-4">
                Choose from one of the 40 languages that come pre-installed and
                start selling smarter
              </p>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-5.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Free Updates</h5>
              <p className="mb-4">
                Don't worry about future costs, pay once and receive all future
                updates at no extra cost
              </p>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img src="images/features-icon-6.svg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Community Support</h5>
              <p className="mb-4">
                Register the app and get acces to knowledge and ideas from the
                Pavo online community
              </p>
            </div>
          </div>
          {/* end of card */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of cards-1 */}
      {/* end of features */}
      {/* Details 1 */}
      <div className="pt-4 pb-14 text-center">
        <div className="container px-4 sm:px-8 xl:px-4">
          <p className="mb-4 text-gray-800 text-3xl leading-10 lg:max-w-5xl lg:mx-auto">
            {" "}
            Team management mobile apps don’t get better than Pavo. It’s
            probably the best app in the world for this purpose. Don’t hesitate
            to give it a try today and you will fall in love with it
          </p>
        </div>{" "}
        {/* end of container */}
      </div>
      {/* end of details 1 */}
      {/* Details 2 */}
      <div className="py-24">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <div className="mb-12 lg:mb-0 xl:mr-14">
              <img
                className="inline"
                src="images/details-2.jpg"
                alt="alternative"
              />
            </div>
          </div>{" "}
          {/* end of col */}
          <div className="lg:col-span-5">
            <div className="xl:mt-12">
              <h2 className="mb-6">
                Instant results for the marketing department
              </h2>
              <ul className="list mb-7 space-y-2">
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Features that will help you and your marketers</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Smooth learning curve due to the knowledge base</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Ready out-of-the-box with minor setup settings</div>
                </li>
              </ul>
              <a
                className="btn-solid-reg popup-with-move-anim mr-1.5"
                href="#details-lightbox"
              >
                Lightbox
              </a>
              <a className="btn-outline-reg" href="article.html">
                Details
              </a>
            </div>
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of container */}
      </div>
      {/* end of details 2 */}
      {/* Details Lightbox */}
      {/* Lightbox */}
      <div className="py-24">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <div className="mb-12 lg:mb-0 xl:mr-14">
              <img
                className="inline"
                src="images/details-2.jpg"
                alt="alternative"
              />
            </div>
          </div>{" "}
          {/* end of col */}
          <div className="lg:col-span-5">
            <div className="xl:mt-12">
              <h2 className="mb-6">
                Instant results for the marketing department
              </h2>
              <ul className="list mb-7 space-y-2">
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Features that will help you and your marketers</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Smooth learning curve due to the knowledge base</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Ready out-of-the-box with minor setup settings</div>
                </li>
              </ul>
              <a
                className="btn-solid-reg popup-with-move-anim mr-1.5"
                href="#details-lightbox"
              >
                Lightbox
              </a>
              <a className="btn-outline-reg" href="article.html">
                Details
              </a>
            </div>
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of container */}
      </div>
      {/* end of lightbox-basic */}
      {/* end of lightbox */}
      {/* end of details lightbox */}
      {/* Details 3 */}
      <div className="pt-16 pb-12">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <div className="mb-16 lg:mb-0 xl:mt-16">
              <h2 className="mb-6">
                Platform integration and life time free updates
              </h2>
              <p className="mb-4">
                Get a glimpse of what this app can do for your marketing
                automation and understand why current users are so excited when
                using Pavo together with their teams.
              </p>
              <p className="mb-4">
                We will promptly answer any questions and honor your requests
                based on the service level agreement
              </p>
            </div>
          </div>{" "}
          {/* end of col */}
          <div className="lg:col-span-7">
            <div className="ml-14">
              <img
                className="inline"
                src="images/details-3.jpg"
                alt="alternative"
              />
            </div>
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of container */}
      </div>
      {/* end of details 3 */}
      {/* Statistics */}
      <div className="counter">
        <div className="container px-4 sm:px-8">
          {/* Counter */}
          <div id="counter">
            <div className="cell">
              <div className="counter-value number-count" data-count={231}>
                1
              </div>
              <p className="counter-info">Happy Users</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count={385}>
                1
              </div>
              <p className="counter-info">Issues Solved</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count={159}>
                1
              </div>
              <p className="counter-info">Good Reviews</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count={127}>
                1
              </div>
              <p className="counter-info">Case Studies</p>
            </div>
            <div className="cell">
              <div className="counter-value number-count" data-count={211}>
                1
              </div>
              <p className="counter-info">Orders Received</p>
            </div>
          </div>
          {/* end of counter */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of counter */}
      {/* end of statistics */}
      {/* Testimonials */}
      <div className="slider-1 py-32 bg-gray">
        <div className="container px-4 sm:px-8">
          <h2 className="mb-12 text-center lg:max-w-xl lg:mx-auto">
            What do users think about Pavo
          </h2>
          {/* Card Slider */}
          <div className="slider-container">
            <div className="swiper-container card-slider">
              <div className="swiper-wrapper">
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-1.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        It's been so fun to work with Pavo, I've managed to
                        integrate it properly into my business flow and it's
                        great
                      </p>
                      <p className="testimonial-author">
                        Jude Thorn - Designer
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-2.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        We were so focused on launching as many campaigns as
                        possible that we've forgotten to target our loyal
                        customers
                      </p>
                      <p className="testimonial-author">
                        Roy Smith - Developer
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-3.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        I've been searching for a tool like Pavo for so long. I
                        love the reports it generates and the amazing high
                        accuracy
                      </p>
                      <p className="testimonial-author">
                        Marsha Singer - Marketer
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-4.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        We've been waiting for a powerful piece of software that
                        can help businesses manage their marketing projects
                      </p>
                      <p className="testimonial-author">Tim Shaw - Designer</p>
                    </div>
                  </div>
                </div>{" "}
                {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-5.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        Searching for a great prototyping and layout design app
                        was difficult but thankfully I found app suite quickly
                      </p>
                      <p className="testimonial-author">
                        Lindsay Spice - Marketer
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="card">
                    <img
                      className="card-image"
                      src="images/testimonial-6.jpg"
                      alt="alternative"
                    />
                    <div className="card-body">
                      <p className="italic mb-3">
                        The app support team is amazing. They've helped me with
                        some issues and I am so grateful to the entire team
                      </p>
                      <p className="testimonial-author">
                        Ann Blake - Developer
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end of swiper-slide */}
                {/* end of slide */}
              </div>{" "}
              {/* end of swiper-wrapper */}
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              {/* end of add arrows */}
            </div>{" "}
            {/* end of swiper-container */}
          </div>{" "}
          {/* end of slider-container */}
          {/* end of card slider */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of slider-1 */}
      {/* end of testimonials */}
      {/* Pricing */}
      <div id="pricing" className="cards-2">
        <div className="absolute bottom-0 h-40 w-full bg-white" />
        <div className="container px-4 pb-px sm:px-8">
          <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">
            Pricing options for all budgets
          </h2>
          <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto">
            {" "}
            Our pricing plans are setup in such a way that any user can start
            enjoying Pavo without worrying so much about costs. They are
            flexible and work for any type of industry{" "}
          </p>
          {/* Card*/}
          <div className="card">
            <div className="card-body">
              <div className="card-title">STANDARD</div>
              <div className="price">
                <span className="currency">$</span>
                <span className="value">29</span>
              </div>
              <div className="frequency">monthly</div>
              <p>
                This basic package covers the marketing needs of small startups
              </p>
              <ul className="list mb-7 space-y-2 text-left">
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>List building and relations</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Seamless platform integration</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Great performance on devices</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Community support and videos</div>
                </li>
              </ul>
              <div className="button-wrapper">
                <a className="btn-solid-reg page-scroll" href="#download">
                  Download
                </a>
              </div>
            </div>
          </div>{" "}
          {/* end of card */}
          {/* end of card */}
          {/* Card*/}
          <div className="card">
            <div className="card-body">
              <div className="card-title">ADVANCED</div>
              <div className="price">
                <span className="currency">$</span>
                <span className="value">39</span>
              </div>
              <div className="frequency">monthly</div>
              <p>This is a more advanced package suited for medium companies</p>
              <ul className="list mb-7 space-y-2 text-left">
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>List building and relations</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Seamless platform integration</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Great performance on devices</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Community support and videos</div>
                </li>
              </ul>
              <div className="button-wrapper">
                <a className="btn-solid-reg page-scroll" href="#download">
                  Download
                </a>
              </div>
            </div>
          </div>{" "}
          {/* end of card */}
          {/* end of card */}
          {/* Card*/}
          <div className="card">
            <div className="card-body">
              <div className="card-title">COMPLETE</div>
              <div className="price">
                <span className="currency">$</span>
                <span className="value">49</span>
              </div>
              <div className="frequency">monthly</div>
              <p>
                This is a comprehensive package designed for big organizations
              </p>
              <ul className="list mb-7 text-left space-y-2">
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>List building and relations</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Seamless platform integration</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Great performance on devices</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right" />
                  <div>Community support and videos</div>
                </li>
              </ul>
              <div className="button-wrapper">
                <a className="btn-solid-reg page-scroll" href="#download">
                  Download
                </a>
              </div>
            </div>
          </div>{" "}
          {/* end of card */}
          {/* end of card */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of cards-2 */}
      {/* end of pricing */}
      {/* Conclusion */}
      <div id="download" className="basic-5">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
          <div className="mb-16 lg:mb-0">
            <img src="images/conclusion-smartphone.png" alt="alternative" />
          </div>
          <div className="lg:mt-24 xl:mt-44 xl:ml-12">
            <p className="mb-9 text-gray-800 text-3xl leading-10">
              Team management mobile applications don’t get much better than
              Pavo. Download it today
            </p>
            <a className="btn-solid-lg" href="#your-link">
              <i className="fab fa-apple" />
              Download
            </a>
            <a className="btn-solid-lg secondary" href="#your-link">
              <i className="fab fa-google-play" />
              Download
            </a>
          </div>
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of basic-5 */}
      {/* end of conclusion */}
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
