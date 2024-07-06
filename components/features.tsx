import PageIllustration from "./page-illustration";

export default function Features() {
  return (
    <section id="first-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Innovative Solutions</h2>
            <p className="text-xl text-gray-400">
              We offer a variety of services to make sure your project is a
              success.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              {/* <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-purple-100"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-300"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  transform="translate(20, 18)"
                  strokeLinecap="square"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  className="stroke-current text-purple-100"
                  d="M5.5 20A5.5 5.5 0 0 1 0 14.5 5.5 5.5 0 0 1 5.5 9 6.52 6.52 0 0 1 18 11.03l.5-.03c2.5 0 4.5 2 4.5 4.5S21 20 18.5 20h-13m0-10C3 10 1 12 1 14.5S3 19 5.5 19h13a3.5 3.5 0 0 0 3.5-3.5 3.5 3.5 0 0 0-3.5-3.5c-.56 0-1.1.13-1.57.37.07-.28.07-.57.07-.87A5.5 5.5 0 0 0 11.5 6a5.51 5.51 0 0 0-5.31 4.05L5.5 10Z"
                />
              </svg>
              <h4 className="h4 mb-2 text-center">Transform Faster with DevOps Consulting</h4>
              <p className="text-lg text-gray-400 text-center">Ready to supercharge your digital journey?</p>
              <p className="text-lg text-gray-400  text-center">Our DevOps Consulting Services are designed to help you accelerate your transformation. Partner with our experts to:</p>
              <li className="text-lg text-gray-400">Review: Evaluate your current DevOps practices.</li>
              <li className="text-lg text-gray-400">Assess: Gauge your organization's maturity level.</li>
              <li className="text-lg text-gray-400">Plan: Get a customized action plan for guaranteed success.</li>
              <p className="text-lg text-gray-400">Let’s streamline your operations and drive growth together!</p>              
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              {/* <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-current text-purple-600"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  className="stroke-current text-purple-100"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="stroke-current text-purple-300"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
              >
                <circle
                  className="fill-current text-purple-600"
                  cx="32"
                  cy="32"
                  r="32"
                />
                <path
                  transform="translate(20, 18)"
                  className="stroke-current text-purple-100"
                  strokeWidth="0.5"
                  fill="white"
                  fillRule="evenodd"
                  strokeLinecap="square"
                  d="M3.5 8a5.5 5.5 0 1 1 8.6 4.55 9 9 0 0 1 5.9 8.18.75.75 0 0 1-1.5.04 7.5 7.5 0 0 0-15 0 .75.75 0 0 1-1.5-.04 9 9 0 0 1 5.9-8.18A5.5 5.5 0 0 1 3.5 8ZM9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8.29 4c-.15 0-.3.01-.43.03a.75.75 0 1 1-.22-1.48 4.53 4.53 0 0 1 3.38 8.1 6.69 6.69 0 0 1 3.96 6.1.75.75 0 0 1-1.5 0 5.2 5.2 0 0 0-3.7-4.97l-.53-.16v-1.68l.41-.2A3.03 3.03 0 0 0 17.29 8Z"
                />
              </svg>
              <h4 className="h4 mb-2 text-center">Exceptional Staffing Solutions for Every Need</h4>
              <p className="text-lg text-gray-400 text-center">
              Unlock the talent you need with our comprehensive Staffing Services. Whether you require contract staffing, full-time hires, or temporary to permanent placements, we’ve got you covered. Our expert resources ensure your project’s success from start to finish.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              {/* <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 21)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <ellipse
                    className="stroke-current text-purple-300"
                    cx="11"
                    cy="11"
                    rx="5.5"
                    ry="11"
                  />
                  <path
                    className="stroke-current text-purple-100"
                    d="M11 0v22M0 11h22"
                  />
                  <circle
                    className="stroke-current text-purple-100"
                    cx="11"
                    cy="11"
                    r="11"
                  />
                </g>
              </svg> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
              >
                <rect
                  className="fill-current text-purple-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="stroke-current text-purple-100"
                  strokeWidth="1"
                  fill="white"
                  fillRule="evenodd"
                  strokeLinecap="square"
                  transform="translate(20, 20)"
                  d="M5 4h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-4.5l.5 3h1v1H8v-1h1l.5-3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m5.5 13-.5 3h3l-.5-3h-2M5 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z"
                />
              </svg>
              <h4 className="h4 mb-2 text-center">Innovative Custom Development at Your Service</h4>
              <p className="text-lg text-gray-400 text-center">Our dedicated full-stack engineers bring years of experience to the table, delivering fully-functional, scalable projects that are always on-time and on-budget. Trust us to turn your vision into reality with precision and efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
