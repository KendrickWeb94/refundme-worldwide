import {AboutRefundMe} from "@/components/sections/AboutRefundMe";
import Articles from "@/components/sections/Articles";
import {CTA} from "@/components/sections/Cta";
import {Footer} from "@/components/sections/Footer";
import {Hero_Section} from "@/components/sections/Hero";
import {HowItWorks} from "@/components/sections/HowItWorks";
import {Testimonials} from "@/components/sections/Testimonials";
import {WhyChoose} from "@/components/sections/whyChooseUs";

export const HomeView = () => {
    return (
        <main className="w-full space-y-24">
            <Hero_Section/>
            <section id="about-refundme">
                <AboutRefundMe/>
            </section>

            <Testimonials/>
            <section id="How-it-works">
                <HowItWorks/>
            </section>
            <section id="why-refundme">
                <WhyChoose/>
            </section>
            <section id="Articles">
                <Articles/>
            </section>
            <CTA/>
            <Footer/>
        </main>
    );
};
