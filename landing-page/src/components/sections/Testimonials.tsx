import { Section } from "../ui/Section";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/swiper-bundle.css";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { TrustPilot_Stars } from "../ui/TrustPilot-stars";
import { Verified } from "../ui/Verified";
import Trustpilot_logoDark from "../../assets/svg/logo-dark.svg";

export { Trustpilot_logoDark };
const testimonials = [
  {
    id: 1,
    header: "I Thought It Was Over — Then RefundMe Stepped In",
    text: "When I realized I’d been scammed, I felt completely helpless. I had no savings left, and as a single mother, that terrified me. RefundMe took my case seriously from the start. They listened without judgment and acted quickly. When I got the email that they recovered my funds, I broke down in tears. They didn’t just give me money back—they gave me a chance to breathe again.",
    name: "Laura James",
    date: "January 2",
  },
  {
    id: 2,
    header: "They Helped When No One Else Would",
    text: "After being scammed, I felt stupid and ashamed. I didn’t think anyone would care. But RefundMe did. They treated me like a person, not just a case. Their team kept me updated, answered every question, and in the end—they got it all back. I’ll never forget the moment I saw the refund hit my account. It felt like I could finally move forward.",
    name: "Jonathan Davis",
    date: "February 15",
  },
  {
    id: 3,
    header: "They Turned My Hopelessness into Relief",
    text: "The loss wasn’t just financial—it was emotional. I couldn’t sleep. I couldn’t focus. RefundMe brought back hope I thought I’d lost. They handled my case with care and persistence. When they succeeded, I cried—not just because I got the money back, but because someone had fought for me. That meant everything.",
    name: "Sarah Klein",
    date: "March 10",
  },
  {
    id: 4,
    header: "A Weight Lifted Off My Shoulders",
    text: "I was skeptical at first. I’d already been burned once—how could I trust anyone again? But RefundMe earned it. They explained every step and never made me feel foolish. Their determination restored more than just my funds—it restored my faith in people.",
    name: "David Meinhardt",
    date: "April 5",
  },
  {
    id: 5,
    header: "I Didn’t Know Where to Turn. They Found Me.",
    text: "I felt invisible after the scam. RefundMe saw me. They reached out with empathy and a plan. They gave me hope when I was ready to give up. It wasn’t just about the money—it was about someone fighting for me when I couldn’t fight for myself. That changed everything.",
    name: "Emily Reinhart",
    date: "May 8",
  },
  {
    id: 6,
    header: "They Gave Me Back More Than I Lost",
    text: "It wasn’t just the financial hit that hurt—it was the humiliation. RefundMe handled my case with quiet professionalism and real compassion. They got every cent back. More than that, they helped me feel human again. I will always be thankful.",
    name: "Michael Berger",
    date: "June 20",
  },
];

export const Testimonials = () => {
  return (
    <Section>
      <div className="w-full space-y-4">
        <span className="rounded-3xl  tw-font-bold  px-4 py-1 border-[0.8px] border-tw_primary bg-tw_primary/10 text-tw_primary text-sm font-medium">
          People we've helped
        </span>
        <h1 className="text-5xl leading-tight font-bold">
          Rated{" "}
          <span className="text-tw_primary motion-preset-confetti">
            Excellent
          </span>{" "}
          <br />
          on Trustpilot
        </h1>
        <p className="text-gray-500 tw-font-regular md:max-w-sm">
          {" "}
          we have helped over a 1000 people around europe and america get their
          money back
        </p>
        <div className="">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 1.8, spaceBetween: 30 },
              1024: { slidesPerView: 2.5, spaceBetween: 10 },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials.map((review) => (
              <SwiperSlide key={review.id} className="py-10">
                <div className="p-4 border cursor-pointer rounded-xl md:w-[100%] space-y-4 bg-white">
                  <div className="flex items-center gap-4">
                    <TrustPilot_Stars />
                  </div>
                  <div className="space-y-2 mt-6">
                    <div className="header text-[#101010] tw-font-bold text-base">
                      {review.header}
                    </div>
                    <div className="tw-font-regular text-sm leading-6  text-gray-600">
                      {review.text}
                    </div>
                  </div>
                  <div className="date-and-user-info-wrapper text-sm my-4 text-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="name secondary-text tw-font-medium">
                          {review.name}
                        </div>

                        <div className="date tw-font-regular text-gray-500 ml-2 secondary-text">
                          {review.date}
                        </div>
                      </div>
                      <Verified />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <img
            src={Trustpilot_logoDark}
            alt=""
            width={90}
            className="object-cover"
          />
          <span id="rating-long" className="tw-font-light">
            Rated <strong>4.9</strong> / 5 based on{" "}
            <strong className="bold-underline">532 reviews</strong>
          </span>
        </div>
      </div>
    </Section>
  );
};
