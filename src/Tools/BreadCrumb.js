import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import routes from "../Routes/Routes";

export default function BreadCrumb() {
  const navigate = useNavigate();
  const location = useLocation();
  const [breadcrumb, setBreadcrumb] = useState([]);

  useEffect(() => {
    // Extract the current route from the location
    const currentRoute = routes.find((route) => route.path === location.pathname);

    // Update breadcrumb state, avoiding duplicates
    if (currentRoute) {
      setBreadcrumb((prevBreadcrumb) => {
        // Remove any trailing entries after the current route
        const index = prevBreadcrumb.findIndex((item) => item === currentRoute.breadcrumb);
        return index !== -1 ? prevBreadcrumb.slice(0, index + 1) : [...prevBreadcrumb, currentRoute.breadcrumb];
      });
    }
  }, [location.pathname]);

  const handleBreadcrumbClick = (index) => {
    // Clear the breadcrumb trail if clicking on the first breadcrumb (Home)
    if (index === 0) {
      setBreadcrumb(["home"]);
      navigate("/");
    } else {
      // Navigate to the selected breadcrumb item
      navigate(routes[index].path);
    }
  };

  // Add "Home" as the default breadcrumb
  useEffect(() => {
    setBreadcrumb(["home"]);
  }, []);

  return (
    <nav className="flex w-full justify-center mt-20 px-4 sm:px-0" aria-label="Breadcrumb">
      <ol className="inline-flex justify-center items-center lg:w-1/2 space-x-1 md:space-x-2 rtl:space-x-reverse flex-wrap">
        {breadcrumb.map((breadcrumbItem, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            )}
            <p
              onClick={() => handleBreadcrumbClick(index)}
              className="inline-flex cursor-pointer items-center text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              {breadcrumbItem.toUpperCase()}
            </p>
          </li>
        ))}
      </ol>
    </nav>
  );
}
