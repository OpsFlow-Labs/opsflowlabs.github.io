import Link from "next/link";
import classes from "./hero.module.scss";

export type CtaProps = {
  href?: string;
  label?: string;
  // Rendered as data-cta for analytics click tracking
  dataCta?: string;
};

export default function ScheduleButton({
  href = "mailto:alex@opsflowlabs.com",
  label = "SCHEDULE FREE CONSULTATION",
  dataCta,
}: CtaProps) {
  return (
    <Link href={href} className={classes.btnSchedule} data-cta={dataCta}>
      {label}
    </Link>
  );
}
