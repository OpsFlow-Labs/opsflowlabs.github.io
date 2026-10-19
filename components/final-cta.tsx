import ScheduleButton, { CtaProps } from "./schedule-button";

type FinalCtaProps = {
  heading: React.ReactNode;
  subheading?: React.ReactNode;
  cta: CtaProps;
};

export default function FinalCta({ heading, subheading, cta }: FinalCtaProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="h2 mb-4">{heading}</h2>
            {subheading && (
              <p className="text-xl text-gray-400 mb-8">{subheading}</p>
            )}
            <div className="flex grow justify-center flex-wrap items-center">
              <ScheduleButton {...cta} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
