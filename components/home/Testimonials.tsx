import { Star } from "lucide-react";
import {Container} from "@/components/ui/Container";
import {SectionHeading }from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="Patient Experiences"
          title="Care that puts patients first"
          description="These placeholder testimonials are structured so they can be replaced with verified patient feedback."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mt-6 text-base leading-7 text-slate-600">
                “{testimonial.review}”
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700"
                  aria-hidden="true"
                >
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}