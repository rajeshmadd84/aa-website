import { BannerWithSliderData } from '@/data/sections/bannerWithSliderData';
import { AboutMeData } from '@/data/sections/aboutMeData';
import { ImageTextData } from '@/data/sections/imageTextData';
import { WhyChooseUsData } from '@/data/sections/whyChooseUsData';
import { WorkingProcessData } from '@/data/sections/workingProcessData';
import { TextBannerData } from "@/data/sections/textBannerData";
import { StickyBannerData } from "@/data/sections/stickyBannerData";
import { ServicesSliderHeadingsData } from "@/data/sections/servicesSliderHeadings";
import { OurServicesDataAccordion } from '@/data/sections/ourServicesDataAccordion';
import { FeaturedProjectData } from '@/data/sections/featuredProjectData';
import { WhyChooseUsGridData } from '@/data/sections/whyChooseUsGridData';
import { PricingPlanData } from '@/data/sections/pricingPlanData';
import { FaqData } from '@/data/sections/faqData';
import { TestimonialSliderData } from "@/data/sections/testimonialSliderData";
import { ContactData } from '@/data/sections/contactData';
import { FeaturedBlogData } from '@/data/sections/featuredBlogData';

import BannerWithSlider from "@/components/sections/BannerWithSlider";
import AboutMe from '@/components/sections/AboutMe';
import ImageText from '@/components/sections/ImageText';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import WorkingProcess from '@/components/sections/WorkingProcess';
import TextBanner from "@/components/sections/TextBanner";
import StickyBanner from "@/components/sections/StickyBanner";
import ServicesSlider from "@/components/sections/ServicesSlider";
import OurServicesAccordion from '@/components/sections/OurServicesAccordion';
import ProjectSlider from '@/components/sections/ProjectSlider';
import WhyChooseUsGrid from '@/components/sections/WhyChooseUsGrid';
import PricingPlan from '@/components/sections/PricingPlan';
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import ContactSection from '@/components/sections/Contact';
import Faq from '@/components/sections/Faq';
import FeaturedBlog from '@/components/sections/FeaturedBlog';


const Home = () => {
    return(
        <>
            {/* Banner Slider */}
            <BannerWithSlider data={BannerWithSliderData} />

            {/* About Me */}
            <AboutMe data={AboutMeData} />

            {/* Image Text */}
            <ImageText data={ImageTextData} />

            {/* Why Choose Us */}
            <WhyChooseUs data={WhyChooseUsData} />

            {/* Working Process */}
            <WorkingProcess data={WorkingProcessData} />

            {/* Text Banner */}
            <TextBanner data={TextBannerData} />

            {/* Sticky Banner */}
            <StickyBanner data={StickyBannerData} />

            {/* Service */}
            {/*  <ServicesSlider 
                data={ServicesSliderHeadingsData} 
                pagination={true}
            />*/}

            {/* Service Section */}
            {/* <OurServicesAccordion data={OurServicesDataAccordion} /> */}

            {/* Recent Projects */}
            {/*<ProjectSlider data={FeaturedProjectData} />*/}

            {/* Why Choose Us */}
            {/*<WhyChooseUsGrid data={WhyChooseUsGridData} />*/}

            {/* Pricing Plan */}
            {/* <PricingPlan data={PricingPlanData} />*/}

            {/* Testimonial Slider */}
            <TestimonialSlider 
                data={TestimonialSliderData}  
                pagination={true}
            />

            {/* Contact Section */}
            {/* <ContactSection data={ContactData} /> */}

            {/* FAQ */}
            {/*<Faq data={FaqData} />*/}

            {/* Featured Blog */}
            {/*<FeaturedBlog data={FeaturedBlogData} />*/}
        </>
    )
}

export default Home;
