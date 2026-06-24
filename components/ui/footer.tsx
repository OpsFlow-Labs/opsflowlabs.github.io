import React from "react";
import Link from "next/link";
import classes from "./header.module.scss";

export default function Footer() {
  return (
    <footer id="sectionTwo">
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
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
              <div className="text-gray-400">Optimize Your Operations with Cutting Edge DevOps Solutions</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                {/* <h6 className="text-gray-200 font-medium mb-1">Products</h6> */}
                <ul>
                  {/* <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Web Studio
                    </Link>
                  </li> */}
                  {/* <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      DynamicBox Flex
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Programming Forms
                    </Link>
                  </li> */}
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                {/* <h6 className="text-gray-200 font-medium mb-1">Resources</h6> */}
                <ul>
                  {/* <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Nostrud exercitation
                    </Link>
                  </li> */}
                  {/* <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Visual mockups
                    </Link>
                  </li> */}
                  {/* <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Nostrud exercitation
                    </Link>
                  </li> */}
                  {/* <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Visual mockups
                    </Link>
                  </li> */}
                  {/* <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Nostrud exercitation
                    </Link>
                  </li> */}
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Contact Us</h6>
                <ul>
                  <li className="mb-1">
                    <span
                      // href="/"
                      className="text-gray-400 transition duration-150 ease-in-out"
                    >
                      contact@opsflowlabs.com
                    </span>
                  </li>
                  {/* <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li> */}
                  {/* <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Labore et dolore
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:mb-0">
              {/* <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li> */}
              {/* <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li> */}
              {/* <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
