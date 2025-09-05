import Hero from '@/components/marketing/Hero'
import Section from '@/components/ui/Section'
import ServicesCarousel from '@/components/marketing/ServicesCarousel'
import ValueBlock from '@/components/marketing/ValueBlock'
import Steps from '@/components/marketing/Steps'

export const revalidate = 3600
export const fetchCache = 'force-cache'

export default function Page() {
  return (
    <>
      <Hero />
      <Section>
        <ServicesCarousel />
      </Section>
      <ValueBlock />
      <Steps />
    </>
  )
}

