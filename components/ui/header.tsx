"use client";
import Link from "next/link";
import classes from "./header.module.scss";
import Logo from "./logo";
import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import MobileMenu from "./mobile-menu";

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
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="https://opsflowlabs.com/"
                  // scroll={false}
                  // className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  className={classes.aboutUs}
                >
                  Home
                </a>
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

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
