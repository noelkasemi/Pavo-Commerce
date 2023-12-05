export default function Footer({ navigateTo }) {
  return (
    <footer className="h-[300px] flex flex-col bg-gradient-to-b from-white to-cyan-100">
      <article className="w-1/2 mx-auto mb-36 mt-14">
        {" "}
        <h2 className="text-center  text-xl font-bold ">
          Pavo is a mobile application for marketing automation and you can
          reach the team at{" "}
          <a
            onClick={() => navigateTo("contact")}
            className="text-blue-600 cursor-pointer"
          >
            email@domain.com
          </a>
        </h2>
      </article>

      <article className="flex  text-slate-500 h-1/2 space-x-24 w-full justify-center">
        <ul className="flex space-x-4">
          <li>Article Details</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <article className="flex space-x-24">
          {" "}
          <p>Copyright Your Name</p>
          <p>Distributed by: Themewagon</p>
        </article>
      </article>
    </footer>
  );
}
