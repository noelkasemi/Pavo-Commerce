export default function Footer({ navigateTo }) {
  return (
    <>
      <div className="footer">
        <div className="container px-4 sm:px-8">
          <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
            Pavo is a mobile application for marketing automation and you can
            reach the team at{" "}
            <button
              onClick={() => navigateTo("contact")}
              className="text-indigo-600 hover:text-gray-500"
            >
              email@domain.com
            </button>
          </h4>
          <div className="social-container">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-twitter fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-pinterest-p fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-youtube fa-stack-1x" />
              </a>
            </span>
          </div>{" "}
          {/* end of social-container */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of footer */}
      {/* end of footer */}
      {/* Copyright */}
      <div className="copyright">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
          <ul className="mb-4 list-unstyled p-small">
            <li className="mb-2">
              <a href="article.html">Article Details</a>
            </li>
            <li className="mb-2">
              <a href="terms.html">Terms &amp; Conditions</a>
            </li>
            <li className="mb-2">
              <a href="privacy.html">Privacy Policy</a>
            </li>
          </ul>
          <p className="pb-2 p-small statement">
            Copyright ©{" "}
            <a href="#your-link" className="no-underline">
              Your name
            </a>
          </p>
          <p className="pb-2 p-small statement">
            Distributed by :
            <a href="https://themewagon.com/" className="no-underline">
              Themewagon
            </a>
          </p>
        </div>
        {/* end of container */}
      </div>{" "}
    </>
  );
}
