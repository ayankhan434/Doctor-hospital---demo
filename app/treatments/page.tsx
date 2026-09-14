import {Container} from '@/components/ui/Container'; 
import {SectionHeading} from '@/components/ui/SectionHeading';
 import {TreatmentCard} from '@/components/ui/TreatmentCard'; 
 import {treatments} from '@/data/treatments';
export const metadata={title:'Treatments & Conditions',description:'Explore conditions and health concerns covered by this demo clinic website.'};
export default function Treatments(){
    return <section className="py-16 lg:py-24">
        <Container>
            <SectionHeading eyebrow="Treatments" title="Conditions & health concerns" description="This demo list is editable. Publish only conditions that match the doctor's actual scope of practice."/>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {treatments.map(t=><TreatmentCard key={t.slug} item={t}/>)}
                </div>
                </Container>
                </section>}
