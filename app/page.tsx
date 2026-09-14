import {Hero} from '@/components/home/Hero'; import {TrustBar} from '@/components/home/TrustBar'; import {AboutDoctor} from '@/components/home/AboutDoctor'; import {Conditions} from '@/components/home/Conditions'; import {WhyChooseUs} from '@/components/home/WhyChooseUs'; import {Process} from '@/components/home/Process'; import {ClinicSection} from '@/components/home/ClinicSection'; import {Testimonials} from '@/components/home/Testimonials'; import {FAQ} from '@/components/home/FAQ'; import {FinalCTA} from '@/components/home/FinalCTA';
export default function Home(){
    return <>
    <Hero/>
    <TrustBar/>
    <AboutDoctor/>
    <Conditions/>
    <WhyChooseUs/>
    <Process/>
    <ClinicSection/>
    <Testimonials/>
    <FAQ/>
    <FinalCTA/>
    </>}
