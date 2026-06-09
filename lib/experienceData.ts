import { IconType } from 'react-icons'
import { RiClaudeLine } from 'react-icons/ri'
import { LuBuilding2 } from 'react-icons/lu'
import { CiGlobe } from 'react-icons/ci'
import { PiLinkedinLogoBold } from 'react-icons/pi'
import {
  SiFigma,
  SiGoogleanalytics,
  SiHubspot,
  SiJira,
  SiN8N,
  SiNextdotjs,
  SiNotion,
  SiOpenai,
  SiPostman,
  SiReact,
  SiSalesforce,
  SiSlack,
} from 'react-icons/si'

export type ExperienceData = {
  companyIcon: IconType
  companyName: string
  position: string
  startDate: string
  endDate: string
  location: string
  isCurrent?: boolean
  iconBgColor: string
  iconColor: string
  technologies: Array<{
    icon: IconType
    name: string
    href: string
    iconColor: string
  }>
  responsibilities: string[]
  socialLinks?: Array<{
    icon: IconType
    href: string
    label: string
  }>
}

export const experiences: ExperienceData[] = [
  {
    companyIcon: SiN8N,
    companyName: 'Neome.ai',
    position: 'Product Manager',
    startDate: 'July 2022',
    endDate: 'March 2026',
    location: 'India',
    isCurrent: false,
    iconBgColor: 'bg-indigo-600',
    iconColor: 'text-white',
    technologies: [
      { icon: SiOpenai, name: 'OpenAI', href: 'https://openai.com/', iconColor: 'text-emerald-600' },
      { icon: RiClaudeLine, name: 'Claude', href: 'https://claude.ai/', iconColor: 'text-orange-600' },
      { icon: SiFigma, name: 'Figma', href: 'https://www.figma.com/', iconColor: 'text-purple-500' },
      { icon: SiJira, name: 'Jira', href: 'https://www.atlassian.com/software/jira', iconColor: 'text-blue-600' },
      { icon: SiReact, name: 'React', href: 'https://react.dev/', iconColor: 'text-blue-500' },
      { icon: SiNextdotjs, name: 'Next.js', href: 'https://nextjs.org/', iconColor: 'text-black' },
      { icon: SiSalesforce, name: 'Salesforce', href: 'https://www.salesforce.com/', iconColor: 'text-blue-500' },
      { icon: SiHubspot, name: 'HubSpot', href: 'https://www.hubspot.com/', iconColor: 'text-orange-600' },
      { icon: SiSlack, name: 'Slack', href: 'https://slack.com/', iconColor: 'text-purple-600' },
      { icon: SiGoogleanalytics, name: 'Analytics', href: 'https://analytics.google.com/', iconColor: 'text-orange-500' },
      { icon: SiNotion, name: 'Notion', href: 'https://www.notion.so/', iconColor: 'text-black' },
    ],
    responsibilities: [
      'Led delivery of LLM-powered features — conversational automation, text extraction, workflow generation, and predictive alerts — improving user productivity by 50–70%; chose prompt-first over RAG to cut latency by 40% for real-time enterprise workflows.',
      'Owned roadmap across 3 verticals using RICE and customer pain mapping; deprioritised low-leverage modules to build a reusable component library — cutting implementation cost by 50% and driving 45% growth in product adoption.',
      'Conducted 40+ customer interviews across segments; synthesised findings into journey maps, opportunity trees, and North Star metrics — reducing time-to-value from 2 days to 4 hours and shaping 3 key product bets.',
      'Partnered with sales on 3 product launches — defined ICP, improved onboarding flows, and increased trial-to-paid conversion by 28%; reduced client escalations by 40% through structured stakeholder alignment.',
      'Owned delivery of integrations across CRM (Salesforce, HubSpot), WhatsApp, Email, Slack, and client internal systems via webhook and API connectors — defined requirements and scoped with engineering end to end.',
      'Used Claude, v0, and Cursor to rapidly prototype feature concepts, generate UI mockups, and stress-test ideas before involving design and engineering — shortening the path from insight to actionable spec.',
      'Tracked adoption funnels and identified blockers across enterprise accounts — synthesising usage patterns and customer feedback into targeted improvements that drove adoption growth across events, CRM, field ops, and HR.',
      'Owned end-to-end design and delivery of 30+ self-serve workflow templates in Neome Studio — spanning CRM, event management, field ops, HR, and approvals — enabling enterprise clients to configure custom use cases independently.',
    ],
    socialLinks: [
      { icon: CiGlobe, href: 'https://neome.ai', label: 'Visit website' },
      { icon: PiLinkedinLogoBold, href: 'https://www.linkedin.com/in/maulik-tanna', label: 'Connect on LinkedIn' },
    ],
  },
  {
    companyIcon: LuBuilding2,
    companyName: 'Wolters Kluwer India',
    position: 'Quality Assurance Analyst',
    startDate: 'October 2020',
    endDate: 'June 2022',
    location: 'Remote',
    isCurrent: false,
    iconBgColor: 'bg-slate-800',
    iconColor: 'text-white',
    technologies: [
      { icon: SiJira, name: 'Jira', href: 'https://www.atlassian.com/software/jira', iconColor: 'text-blue-600' },
      { icon: SiPostman, name: 'Postman', href: 'https://www.postman.com/', iconColor: 'text-orange-500' },
      { icon: SiNotion, name: 'Notion', href: 'https://www.notion.so/', iconColor: 'text-black' },
    ],
    responsibilities: [
      'Reduced release bugs by 25%, increased test coverage by 20%, and cut testing cycle time by 30% through automation frameworks — recognised with Employee of the Month.',
      'Collaborated with product and engineering teams to translate defect patterns into requirement improvements, building early instincts for edge-case thinking and product quality.',
      'Achieved 95% test coverage and 15% QA efficiency gain through structured automation and process improvements.',
    ],
    socialLinks: [
      { icon: CiGlobe, href: 'https://www.wolterskluwer.com', label: 'Visit website' },
      { icon: PiLinkedinLogoBold, href: 'https://www.linkedin.com/company/wolters-kluwer', label: 'Connect on LinkedIn' },
    ],
  },
]
