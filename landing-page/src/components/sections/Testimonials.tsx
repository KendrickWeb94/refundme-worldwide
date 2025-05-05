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
    header: "My World Collapsed, Then They Rebuilt It.",
    text: "I lost everything. Every single penny. I was ready to give up. My children were depending on me. Then, RefundMe... they were my last hope. They didn't just get my money back; they gave me back my life. I can't even put into words what they did for me. My tears are a testament to their miracle.",
    name: "Ms. L.O.",
    date: "January 2",
  },
  {
    id: 2,
    header: "I Was Drowning, They Threw Me a Lifeline.",
    text: "I was so ashamed, so broken. I thought I'd never recover. RefundMe saw the human being behind the victim. They were patient, they were kind, they were relentless. I cried when they told me they'd recovered my funds. They didn't just save my money; they saved my soul.",
    name: "John D.",
    date: "February 15",
  },
  {
    id: 3,
    header: "From Utter Despair to Unbelievable Hope.",
    text: "I had lost all faith in humanity. I was a shell of myself. RefundMe showed me that there are still good people in the world. They fought for me like I was family. They gave me back my hope, my dignity, and my future. I will never forget them.",
    name: "Sarah K.",
    date: "March 10",
  },
  {
    id: 4,
    header: "I Was Shattered, They Put Me Back Together.",
    text: "The scam left me broken, both financially and emotionally. I was terrified. RefundMe understood. They didn't judge me; they just helped me. They worked tirelessly, and they succeeded. The relief was overwhelming. It was like a weight lifted from my heart. I owe them everything.",
    name: "David M.",
    date: "April 5",
  },
  {
    id: 5,
    header: "They Saw Me, They Heard Me, They Rescued Me.",
    text: "I felt so alone, so vulnerable. RefundMe was the only one who truly understood what I was going through. They were my voice when I had none. They fought for me with such passion, such dedication. I'm forever indebted to them. They gave me back my peace of mind.",
    name: "Emily R.",
    date: "May 8",
  },
  {
    id: 6,
    header: "More Than Just a Refund, They Gave Me My Life Back.",
    text: "I was drowning in despair, convinced that I was doomed. RefundMe was my miracle. They didn't just recover my stolen money; they restored my belief in goodness. They gave me a second chance. I will spend the rest of my life being grateful for their existence.",
    name: "Michael B.",
    date: "June 20",
  },
];

export const Testimonials = () => {
  return (
    <Section>

      <div className="w-full space-y-4">
        <button className="rounded-3xl  px-4 py-1 border-[0.8px] border-tw_primary bg-tw_primary text-white text-sm font-medium">
          Testimonials
        </button>
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
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 3.1, spaceBetween: 10 },
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
                 <div className="header text-[#101010] tw-font-medium text-base">
                    {review.header}
                  </div>
                  <div className="tw-font-light text-sm leading-6  text-gray-600">
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
          <img src={Trustpilot_logoDark} alt="" width={90} className="" />
          <span id="rating-long" className="text-center">
            Rated <strong>4.9</strong> / 5 based on{" "}
            <strong className="bold-underline">532 reviews</strong>
          </span>
        </div>
      </div>
    </Section>
  );
};
