import { TimelineItem } from '../types';

// Static fallback for timeline section
export async function getTimeline(): Promise<TimelineItem[]> {
  return [
    {
      timelineType: "work",
      name: "Carestream Dental",
      title: "Head of Marketing",
      techStack: "Go-to-Market, Dental, Leadership",
      summaryPoints: [
        "Owned go-to-market for imaging and implant planning software across the Americas."
      ],
      dateRange: "2024 – Present"
    },
    {
      timelineType: "work",
      name: "Siemens",
      title: "Global Marketing Lead",
      techStack: "Paid Media, CRM, Global Campaigns",
      summaryPoints: [
        "Managed multi-channel paid media and CRM campaigns in automation, pharma, and electronics verticals."
      ],
      dateRange: "2022 – 2024"
    },
    {
      timelineType: "work",
      name: "Siemens",
      title: "Global Senior Marketing Manager",
      techStack: "SaaS, ABM, Automation",
      summaryPoints: [
        "Scaled industrial and healthcare SaaS campaigns using ABM and marketing automation."
      ],
      dateRange: "2020 – 2022"
    },
    {
      timelineType: "work",
      name: "Advantech",
      title: "eCommerce Lead",
      techStack: "B2B, CRM, Marketing Tech",
      summaryPoints: [
        "Managed multi-channel paid media and CRM campaigns in automation, pharma, and electronics verticals."
      ],
      dateRange: "2019 – 2020"
    },
    {
      timelineType: "work",
      name: "Advantech",
      title: "Digital Marketing Manager",
      techStack: "Higher Ed, Campaign Management, Strategy",
      summaryPoints: [
        "Built and optimized marketing campaigns for higher education institutions and online programs."
      ],
      dateRange: "2018 – 2019"
    },
    {
      timelineType: "work",
      name: "Education Services Group",
      title: "Marketing Specialist",
      techStack: "Email Marketing, Copywriting, SEO",
      summaryPoints: [
        "Built and optimized marketing campaigns for higher education institutions and online programs."
      ],
      dateRange: "2015 – 2018"
    }
  ];
}
