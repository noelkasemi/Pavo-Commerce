import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="h-[260px] mt-24 flex flex-col space-y-14 md:space-y-28 bg-gradient-to-b from-white to-cyan-100">
      <article className="md:w-1/2 mx-auto ">
        {" "}
        <h2 className="text-center  text-xl font-bold ">
          Pavo is a mobile application for marketing automation and you can
          reach the team at{" "}
          <a
            onClick={() => navigate("/contact")}
            className="text-blue-600 cursor-pointer"
          >
            email@domain.com
          </a>
        </h2>
      </article>

      <ul className=" flex md:flex-row flex-col text-slate-500 w-full justify-center items-center md:space-x-4 ">
        <li>Article Details</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li> <li>Copyright Your Name</li>
        <li>Distributed by: Themewagon</li>
      </ul>
    </footer>
  );
}
