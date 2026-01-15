import { BannerWithSliderData } from '@/data/sections/bannerWithSliderData';
import { ImageTextData } from '@/data/sections/imageTextData';
import { WhyChooseUsData } from '@/data/sections/whyChooseUsData';
import { WorkingProcessData } from '@/data/sections/workingProcessData';
import { OurServicesDataAccordion } from '@/data/sections/ourServicesDataAccordion';
import { FeaturedProjectData } from '@/data/sections/featuredProjectData';
import { WhyChooseUsGridData } from '@/data/sections/whyChooseUsGridData';
import { PricingPlanData } from '@/data/sections/pricingPlanData';
import { FaqData } from '@/data/sections/faqData';
import { TestimonialSliderThumbData } from '@/data/sections/testimonialSliderThumbData';
import { FeaturedBlogData } from '@/data/sections/featuredBlogData';

import BannerWithSlider from "@/components/sections/BannerWithSlider";
import ImageText from '@/components/sections/ImageText';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import WorkingProcess from '@/components/sections/WorkingProcess';
import OurServicesAccordion from '@/components/sections/OurServicesAccordion';
import ProjectSlider from '@/components/sections/ProjectSlider';
import WhyChooseUsGrid from '@/components/sections/WhyChooseUsGrid';
import PricingPlan from '@/components/sections/PricingPlan';
import TestimonialSliderWithThumb from '@/components/sections/TestimonialSliderWithThumb';
import Faq from '@/components/sections/Faq';
import FeaturedBlog from '@/components/sections/FeaturedBlog';


const Home2 = () => {
    return(
        <>
            {/* Banner Slider */}
            <BannerWithSlider data={BannerWithSliderData} />

            {/* Image Text */}
            <ImageText data={ImageTextData} />

            {/* Why Choose Us */}
            <WhyChooseUs data={WhyChooseUsData} />

            {/* Working Process */}
            <WorkingProcess data={WorkingProcessData} />

            {/* Service Section */}
            <OurServicesAccordion data={OurServicesDataAccordion} />

            {/* Recent Projects */}
            <ProjectSlider data={FeaturedProjectData} />

            {/* Why Choose Us */}
            <WhyChooseUsGrid data={WhyChooseUsGridData} />

            {/* Pricing Plan */}
            <PricingPlan data={PricingPlanData} />

            {/* Testimonial Slider with Thumb */}
            <TestimonialSliderWithThumb data={TestimonialSliderThumbData} />

            {/* FAQ */}
            <Faq data={FaqData} />

            {/* Featured Blog */}
            <FeaturedBlog data={FeaturedBlogData} />
        </>
    )
}

export default Home2;