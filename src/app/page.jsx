import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Briefcase, Book, Settings } from 'react-feather'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { UseCaseCard } from '@/components/UseCaseCard'
import { Globe } from '@/components/Globe'
import logoLeeto from '@/images/logos/leeto.svg'
import epitechLogo from '@/images/logos/epitech.svg'
import logoYuso from '@/images/logos/yuso.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read use case</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Leeto',
      title: 'Front-End Engineer',
      logo: logoLeeto,
      start: 'January 2021',
      end: 'August 2024',
    },
    {
      company: 'Yuso Fleet',
      title: 'Front-End Engineer',
      logo: logoYuso,
      start: 'October 2016',
      end: 'September 2018',
    },
  ]

  let skills = [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'TanStack Query',
    'Vite',
    'Storybook',
    'Jest',
    'React Testing Library',
    'Cypress',
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Briefcase className="h-6 w-6 flex-none text-zinc-500" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mb-6 mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Book className="h-6 w-6 flex-none text-zinc-500" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mb-6 mt-6 space-y-4">
        <Role
          role={{
            company: 'Epitech',
            title: 'Master Degree, Computer Science',
            logo: epitechLogo,
            start: '2020',
            end: '2022',
          }}
        />
      </ol>
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Settings className="h-6 w-6 flex-none text-zinc-500" />
        <span className="ml-3">Skills</span>
      </h2>
      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="focus:ring-ring text-primary-foreground hover:bg-primary/80 dark:bg-primary inline-flex items-center rounded-md border border-transparent bg-zinc-600 px-2.5 py-0.5 text-xs font-semibold text-white shadow transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {skill}
          </div>
        ))}
      </div>

      <Button
        href="/resume.pdf"
        locale={false}
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const useCases = [
  {
    image: 'https://placehold.co/400x300.png',
    title:
      'Unlocking the Power of Cloud Computing: A Guide to Scalable Solutions',
    tags: ['Cloud', 'AWS', 'Infrastructure'],
  },
  {
    image: 'https://placehold.co/400x300.png',
    title:
      'The Future of AI: How Machine Learning is Revolutionizing Industries',
    tags: ['AI', 'Machine Learning', 'Python'],
  },
  {
    image: 'https://placehold.co/400x300.png',
    title:
      'The Impact of 5G on Business: How Faster Networks are Transforming the Way We Work',
    tags: ['5G', 'Networks', 'Telecommunications'],
  },
]

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  console.log(articles)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Front-end developer, freelancer, inspired by cultural discovery and
            the world’s diversity.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Youness, a front-end developer with over 5 years of experience.
            I help companies build user-friendly and feature-rich web
            applications using React, TypeScript, and modern technologies. I
            split my year between Tokyo, Bangkok, and Kuala Lumpur to draw
            inspiration from these vibrant cities.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/younessbennaj"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
            />
            <SocialLink
              href="https://www.linkedin.com/in/youness-bennaj/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <h2 className="text-center text-sm font-bold uppercase tracking-tight text-zinc-800 dark:text-zinc-100">
          Experience and Skills
        </h2>
        <h3 className="mb-12 mt-2 text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          My professional journey and the technologies I master
        </h3>
        <Resume />
        {/* <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div> */}
      </Container>
      <Container className="mt-24 md:mt-28">
        <h2 className="text-center text-sm font-bold uppercase tracking-tight text-zinc-800 dark:text-zinc-100">
          Remote Work, Global Vision
        </h2>
        <h3 className="mb-4 mt-2 text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Discover how I manage work from vibrant cities around the world
        </h3>
        <div className="mb-12 mt-6 space-y-7 text-center text-lg text-zinc-600 dark:text-zinc-400">
          <p>
            Embracing a full remote, location-independent lifestyle allows me to
            fuel both my <b>creativity</b> and <b>productivity</b> as a
            front-end developer. By working from vibrant cities like Tokyo,
            Bangkok, and Kuala Lumpur, I stay connected with dynamic, fast-paced
            environments that inspire my work.
          </p>
        </div>
        <div className="relative">
          <Globe />
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <h2 className="text-center text-sm font-bold uppercase tracking-tight text-zinc-800 dark:text-zinc-100">
          My Projects
        </h2>
        <h3 className="mb-[64px] mt-2 text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Explore the projects I’ve worked on recently
        </h3>
        <div className="mb-[64px] flex flex-col gap-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
        <div className="text-center">
          <Button>View all case studies</Button>
        </div>
        {/* <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              image={useCase.image}
              title={useCase.title}
              tags={useCase.tags}
            />
          ))}
        </div> */}
      </Container>
    </>
  )
}
