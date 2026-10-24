import classes from "./header.module.scss";

// OpsFlow Labs logo: purple "flow" mark + wordmark. Used in header and footer.
export default function Logo() {
  return (
    <a
      href="https://opsflowlabs.com/"
      className={classes.opsFlowLink}
      aria-label="OpsFlow Labs home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#5D5DFF" />
        <path
          d="M9 10l6 6-6 6M17 10l6 6-6 6"
          stroke="#fff"
          strokeWidth="2.75"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={classes.logoText}>
        OpsFlow<span className={classes.labs}>Labs</span>
      </span>
    </a>
  );
}
