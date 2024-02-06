"use client";
import Link from "next/link";
import classes from "./header.module.scss";
import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Header() {
  const path = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    "use client";
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            <a
              href="https://opsflowlabs.com/"
              className={classes.opsFlowLink}
              aria-label="Cruip"
            >
              <div className={classes.testClass}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fill="#8066EB"
                    d="M28 18h2v10h-2zM24 14h2v14h-2zM20 22h2v6h-2zM22.175 10l1.585-1.266a9.952 9.952 0 0 0-5.87-3.552 10.002 10.002 0 0 0-11.72 7.933A7.505 7.505 0 0 0 .054 21.41 7.684 7.684 0 0 0 7.77 28H16v-2H7.694a5.632 5.632 0 0 1-5.602-4.486 5.506 5.506 0 0 1 4.434-6.43l1.349-.245.214-1.11a8.206 8.206 0 0 1 6.742-6.642 7.967 7.967 0 0 1 3.014.13A7.804 7.804 0 0 1 22.175 10Z"
                  />
                  <path
                    d="M0 0h32v32H0z"
                    data-name="&lt;Transparent Rectangle&gt;"
                  />
                </svg>
                <span className={classes.logoText}>OpsFlow</span>
                <span className={classes.labs}>Labs</span>
              </div>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://opsflowlabs.com/"
                  // scroll={false}
                  // className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  className={classes.aboutUs}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className={classes.aboutUs}>
                  Blog
                </Link>
              </li>
              {!path.includes("blog") && (
                <li>
                  <Link
                    href="#first-section"
                    // scroll={false}
                    // className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                    className={classes.aboutUs}
                    onClick={handleScroll}
                  >
                    About Us
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="#sectionTwo"
                  // className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                  className={classes.btnWorkWithUs}
                  onClick={handleScroll}
                >
                  WORK WITH US
                </Link>
              </li>
            </ul>
          </nav>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}
