import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              Kaizen has cleared more than 200k claims
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-2xl/[1] font-medium tracking-tight text-balance text-gray-950 sm:text-4xl/[1] md:text-5xl/[1]">
          Welcome to Kaizens. We are dedicated to transforming healthcare through innovative solutions.
          </h1>
          <p className="mt-8 text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
         Empowering providers with cutting-edge technology and expertise, we enable exceptional patient care. Our specialized services optimize revenue cycles, streamline operations, and reduce administrative tasks, allowing you to focus on what matters most – delivering outstanding healthcare.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            {/* <Button variant="secondary" href="/pricing">
              See pricing
            </Button> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24 max-w-none">
        <Heading as="h2" className="max-w-xl">
          RCM Industry Forecast and Opportunities
        </Heading>
        <Screenshot
          height={768}
          src="/screenshots/test.png"
          className="mt-16 w-full h-auto object-cover"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Story Behind</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Why Kaizens?
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="At Kaizen Healthcare, we are a trusted partner in Revenue Cycle Management and Analytics Solutions, delivering end-to-end, cost-effective, and technology-driven services tailored to the needs of healthcare providers. Backed by over 50 years of collective experience with two of the largest US payors, we bring a deep understanding of the US healthcare ecosystem, having actively contributed to its evolution and engaged with a diverse network of clinicians, non-clinicians, and health plans across all 51 states."
          graphic={
            <div className="h-80 bg-[url(/screenshots/whykaizen.svg)] bg-[size:970px_400px] bg-[left_-175px_top_9px] bg-no-repeat" />
          }
          // fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Approach"
          title="Focus your investments where they matter the most. Modernize your infrastructure, applications, and services—all with one turnkey BPaaS approach."
          description="Our 360-degree approach enables us to tackle complex healthcare challenges by collaborating closely with providers, payors, and patients. Additionally, our expertise spans across the most widely used Electronic Health Records (EHRs), ensuring seamless integration and optimized performance for healthcare organizations."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/approach.png)] bg-[size:776px_582px] bg-[left_-72px_top_-106px] bg-no-repeat" />
          }
          // fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        {/* <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It's never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        /> */}
        {/* <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        /> */}
        {/* <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        /> */}
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          {/* <LogoCloud /> */}
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        {/* <DarkBentoSection /> */}
      </main>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}
