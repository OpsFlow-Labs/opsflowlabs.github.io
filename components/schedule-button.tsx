import Link from "next/link";
import classes from "./hero.module.scss";
import { BOOKING_URL } from "@/config/booking";

export type CtaProps = {
  href?: string;
  label?: string;
  // Rendered as data-cta for analytics click tracking
  dataCta?: string;
};

export default function ScheduleButton({
  href = BOOKING_URL,
  label = "SCHEDULE FREE CONSULTATION",
  dataCta,
}: CtaProps) {
  return (
    <Link href={href} className={classes.btnSchedule} data-cta={dataCta}>
      {label}
    </Link>
  );
}
