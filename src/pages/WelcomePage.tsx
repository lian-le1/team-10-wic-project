import arrowRightIcon from '../assets/icons/arrow-right.svg'
import arrowRightTealIcon from '../assets/icons/arrow-right-teal.svg'
import calendarCheckIcon from '../assets/icons/calendar-check.svg'
import calendarDaysIcon from '../assets/icons/calendar-days.svg'
import circleCheckIcon from '../assets/icons/circle-check.svg'
import circleXIcon from '../assets/icons/circle-x.svg'
import clockIcon from '../assets/icons/clock.svg'
import heartHandshakeIcon from '../assets/icons/heart-handshake.svg'
import messageCircleHeartIcon from '../assets/icons/message-circle-heart.svg'
import pillIcon from '../assets/icons/pill.svg'
import quoteIcon from '../assets/icons/quote.svg'
import shieldCheckIcon from '../assets/icons/shield-check.svg'
import usersIcon from '../assets/icons/users.svg'
import familyPhoto from '../assets/images/family-photography.png'
import { Accordion, AccordionItem } from '../components/ui/Accordion'
import Avatar from '../components/ui/Avatar'
import { Button, ButtonLink } from '../components/ui/Button'
import Card from '../components/ui/Card'
import Chip from '../components/ui/Chip'
import Container from '../components/ui/Container'
import Icon from '../components/ui/Icon'
import IconBadge from '../components/ui/IconBadge'
import SectionHeading from '../components/ui/SectionHeading'
import { cn } from '../lib/cn'

const principles = [
  { icon: calendarCheckIcon, label: 'One shared schedule' },
  { icon: usersIcon, label: 'Everyone in the loop' },
  { icon: heartHandshakeIcon, label: 'Care, without the overwhelm' },
]

const features = [
  {
    icon: pillIcon,
    title: 'A home for every medication',
    body: 'Keep names, schedules, duration, and expiration dates together. No more scattered notes.',
    tone: 'default',
  },
  {
    icon: calendarDaysIcon,
    title: 'A rhythm you can share',
    body: "See everyone's routines in one calm calendar, with a clear view of what's coming next.",
    tone: 'cornflower',
  },
  {
    icon: messageCircleHeartIcon,
    title: 'Small check-ins. Big comfort.',
    body: "Let loved ones know how you're doing, and know when someone could use a little support.",
    tone: 'default',
  },
] as const

const steps = [
  { title: 'Bring your people', body: 'Create a family or request to join with a private invitation code.' },
  {
    title: 'Add the essentials',
    body: 'Enter medication details from the package and care plan. Review everything before saving.',
  },
  { title: 'Find your rhythm', body: 'Follow your shared schedule and send a check-in along the way.' },
]

const scheduleItems = [
  { initials: 'DM', title: 'David · Morning medications', status: '8:00 AM · Taken', done: true },
  { initials: 'OM', title: 'Olivia · Vitamin D3', status: '9:00 AM · Taken', done: true },
  { initials: 'EM', title: 'Emma · Ferrous sulfate', status: '12:00 PM · Upcoming', done: false },
]

const faqs = [
  {
    question: 'Who can join my family space?',
    answer:
      "Anyone you invite. A coordinator reviews requests before new members can see your family's information.",
  },
  {
    question: 'Can I be part of more than one family?',
    answer: 'Yes. Switch family spaces from the family control in your workspace.',
  },
  {
    question: 'Does CareCapsule give medical advice?',
    answer:
      'No. Always confirm medication details with a doctor or pharmacist. Use the care-team contact option when you have questions.',
  },
]

// The sign-up flow doesn't exist yet, so the "create your family space" buttons have no action.
export default function WelcomePage() {
  return (
    <>
      <Hero />
      <CarePrinciples />
      <Features />
      <HowItWorks />
      <SharedOverview />
      <Privacy />
      <FamilyPerspective />
      <Faq />
      <GetStarted />
    </>
  )
}

function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <Container className="flex flex-col gap-12 pt-8 pb-16 lg:flex-row lg:items-center lg:gap-16 lg:px-gutter lg:pt-18 lg:pb-25">
        <div className="flex flex-col items-start gap-6 lg:flex-[578_1_0%] lg:gap-7.5">
          <Chip variant="status">✨ A little less worry. A lot more together.</Chip>
          <h1
            id="hero-title"
            className="text-headline-sm leading-[1.07] font-extrabold text-ink sm:text-display"
          >
            Care that brings <br className="hidden sm:inline" />
            you closer.
          </h1>
          <p className="text-title font-semibold text-cobalt sm:text-lead">
            Take care of your loved ones from your fingertips
          </p>
          <p className="max-w-125 text-body-lg leading-[1.75] text-cobalt">
            Make room for more peace of mind. Keep medication routines, family check-ins, and little moments of
            care in one shared place.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button icon={<Icon src={arrowRightIcon} />}>Create your family space</Button>
            <ButtonLink href="#how-it-works" variant="outline">
              See how it works
            </ButtonLink>
          </div>
          <p className="flex items-center gap-2 text-caption font-semibold text-cobalt">
            <Icon src={shieldCheckIcon} />
            Private by invitation. Made for every generation.
          </p>
        </div>

        <div className="relative aspect-638/544 w-full rounded-media bg-mint-200 lg:flex-[638_1_0%]">
          <img
            src={familyPhoto}
            alt="Three generations of a family chatting and smiling together on a sofa"
            className="size-full rounded-media object-cover"
          />
          <CheckInCard />
        </div>
      </Container>
    </section>
  )
}

function CheckInCard() {
  return (
    <Card
      tone="cobalt"
      size="sm"
      shadow="float"
      className="absolute bottom-4 left-4 w-[min(300px,calc(100%-2rem))] gap-3 lg:top-[67.3%] lg:bottom-auto lg:-left-7.5 lg:w-75"
    >
      <div className="flex items-center gap-2.5">
        <Avatar initials="DM" />
        <div className="flex flex-col gap-0.75">
          <p className="text-label font-bold text-ink">Dad checked in</p>
          <p className="text-micro font-semibold text-cobalt">Today, 8:05 AM</p>
        </div>
        <Icon src={circleCheckIcon} />
      </div>
      <p className="text-caption font-semibold text-cobalt">"Morning meds taken. Feeling good!"</p>
    </Card>
  )
}

function CarePrinciples() {
  return (
    <section aria-label="What CareCapsule offers" className="bg-mint-100">
      <Container className="lg:px-35">
        <ul className="flex flex-col gap-4 py-6 sm:flex-row sm:flex-wrap sm:justify-between">
          {principles.map((principle) => (
            <li key={principle.label} className="flex items-center gap-3 text-body font-bold text-cobalt">
              <Icon src={principle.icon} />
              {principle.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="scroll-mt-4">
      <Container className="flex flex-col gap-12 py-16 lg:px-gutter lg:py-section">
        <SectionHeading
          id="features-title"
          eyebrow="Less to keep in your head"
          title="The everyday details, cared for."
          description="From the first reminder to the last check-in, find a gentler way to keep your family connected."
        />
        <ul className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => {
            const isBlue = feature.tone === 'cornflower'
            return (
              <li key={feature.title} className="flex">
                <Card tone={feature.tone} className="w-full gap-5">
                  <IconBadge shape="tile" tone={isBlue ? 'mint-strong' : 'mint'} className="size-13">
                    <Icon src={feature.icon} />
                  </IconBadge>
                  <h3 className={cn('text-title font-extrabold', isBlue ? 'text-cornflower-700' : 'text-primary')}>
                    {feature.title}
                  </h3>
                  <p className={cn('text-body font-semibold', isBlue ? 'text-cornflower-700' : 'text-primary')}>
                    {feature.body}
                  </p>
                </Card>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-title" className="scroll-mt-4 bg-mint-50">
      <Container className="flex flex-col gap-14 py-16 lg:px-30 lg:py-section">
        <SectionHeading
          id="how-it-works-title"
          eyebrow="A simple start"
          eyebrowTone="mint-strong"
          title="A family space in three little steps."
          description="You don't have to figure it all out at once. Start together, then build a routine that feels like yours."
        />
        <ol className="grid gap-10 md:grid-cols-3 md:gap-16">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col items-start gap-3.5">
              <IconBadge tone="primary" className="size-12 text-title font-extrabold">
                {String(index + 1).padStart(2, '0')}
              </IconBadge>
              <h3 className="text-title font-extrabold text-primary">{step.title}</h3>
              <p className="text-body font-semibold text-primary">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

function SharedOverview() {
  return (
    <section aria-labelledby="overview-title">
      <Container className="flex flex-col gap-12 py-16 lg:flex-row lg:items-center lg:gap-20 lg:px-25 lg:py-22">
        <Card shadow="card" className="w-full gap-5 lg:flex-1">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-title font-extrabold text-ink">A little look at today</h3>
            <Chip variant="tag">Morgan family</Chip>
          </div>
          <ul className="flex flex-col gap-5">
            {scheduleItems.map((item) => (
              <li
                key={item.title}
                className={cn(
                  'flex items-center gap-3.5 rounded-tile p-4',
                  item.done ? 'bg-mint-50' : 'bg-mist-50',
                )}
              >
                <Avatar initials={item.initials} tone={item.done ? 'mint-strong' : 'mist'} />
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="text-label font-bold text-ink">{item.title}</p>
                  <p className="text-caption font-semibold text-primary">{item.status}</p>
                </div>
                <Icon src={item.done ? circleCheckIcon : clockIcon} />
              </li>
            ))}
          </ul>
          <p className="text-micro font-semibold text-ink-faint">A preview with illustrative sample information.</p>
        </Card>

        <div className="flex flex-col items-start gap-6 lg:flex-1">
          <Chip>Together, even from afar</Chip>
          <h2 id="overview-title" className="text-title-lg leading-[1.15] font-extrabold text-ink sm:text-headline sm:leading-[1.15]">
            Less "did you remember?" <br className="hidden sm:inline" />
            More "how are you?"
          </h2>
          <p className="text-body-lg leading-[1.75] font-semibold text-ink-muted">
            Stay close without hovering. See what's been checked off, what's next, and how everyone is feeling —
            wherever the day takes you.
          </p>
          <Button icon={<Icon src={arrowRightIcon} />}>Make space for your family</Button>
        </div>
      </Container>
    </section>
  )
}

function Privacy() {
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-title"
      className="scroll-mt-4 border-y border-cornflower-300 bg-cornflower-50"
    >
      <Container className="flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:gap-10 lg:px-30">
        <IconBadge tone="cornflower" className="size-16">
          <Icon src={circleXIcon} />
        </IconBadge>
        <div className="flex flex-1 flex-col gap-3 text-cornflower-700">
          <h2 id="privacy-title" className="text-title font-extrabold sm:text-title-lg">
            Your family's space. Your family's choice.
          </h2>
          <p className="text-body font-semibold">
            Family coordinators approve every request to join. You choose what to share. CareCapsule organizes
            information — it doesn't replace advice from your doctor or pharmacist.
          </p>
        </div>
        {/* No privacy page yet */}
        <p className="shrink-0 text-label font-bold text-cobalt">Our approach to privacy ↗</p>
      </Container>
    </section>
  )
}

function FamilyPerspective() {
  return (
    <section aria-label="The feeling behind CareCapsule">
      <Container className="flex flex-col items-center gap-6 py-16 text-center lg:px-60 lg:py-section">
        <IconBadge className="size-14">
          <Icon src={quoteIcon} />
        </IconBadge>
        <figure className="flex flex-col items-center gap-6">
          <blockquote className="text-lead leading-[1.5] font-bold text-primary sm:text-quote">
            "It's not about keeping track of each other. <br className="hidden md:inline" />
            It's about knowing we're there for each other."
          </blockquote>
          <figcaption className="text-label font-semibold text-primary">The feeling behind CareCapsule</figcaption>
        </figure>
      </Container>
    </section>
  )
}

function Faq() {
  return (
    <section aria-labelledby="faq-title">
      <Container className="flex flex-col gap-8 py-16 lg:flex-row lg:gap-25 lg:px-30 lg:py-18">
        <div className="flex flex-col items-start gap-4 lg:w-87.5 lg:shrink-0">
          <Chip>A few things to know</Chip>
          <h2 id="faq-title" className="text-title-lg font-extrabold text-primary sm:text-headline-sm">
            A little clarity, <br className="hidden sm:inline" />
            before you begin.
          </h2>
          {/* No help/contact page yet */}
          <p className="text-label font-bold text-cobalt">Questions? We're here to help ↗</p>
        </div>
        <div className="flex-1">
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} title={faq.question} defaultOpen>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}

function GetStarted() {
  return (
    <section
      aria-labelledby="get-started-title"
      className="bg-linear-[164.5deg,var(--color-primary)_25%,var(--color-primary-soft)_75%]"
    >
      <Container className="flex flex-col items-center gap-6 py-16 text-center lg:px-30 lg:py-section">
        <h2 id="get-started-title" className="text-quote leading-[1.2] font-extrabold text-white sm:text-headline-lg">
          A little more connected. <br />A little less worried.
        </h2>
        <p className="text-body-lg leading-normal font-semibold text-white">
          Start a shared routine that makes care feel a little lighter.
        </p>
        <Button variant="inverse" size="xl" icon={<Icon src={arrowRightTealIcon} />}>
          Create your family space
        </Button>
      </Container>
    </section>
  )
}
