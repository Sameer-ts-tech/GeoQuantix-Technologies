export type ProjectStatus = "completed" | "ongoing"

export interface ProjectData {
  id: number
  name: string
  status: ProjectStatus
  startDate: string
  propertiesMapped?: number
    description: string

  before: {
    properties: number
    demand: number
  }
  after: {
    properties: number
    demand: number
  }

  websiteUrl?: string
}
// data/projects.ts

export const projectsData: ProjectData[] = [
  {
    id: 1,
    name: "नगर पंचायत करहल , मैनपुरी",
    status: "completed",
    startDate: "2025",
    propertiesMapped: 7390,
    websiteUrl: "https://karhal.npup.in",
    description: "Complete property mapping and GIS survey for urban area",
    before: { properties: 5395, demand: 3826370 },
    after: { properties: 7390, demand: 7639924 },
  },
  {
    id: 2,
    name: "नगर पंचायत बरनाहल , मैनपुरी",
    status: "completed",
    startDate: "2025",
    propertiesMapped: 5482,
    description: "Comprehensive cadastral survey and digital mapping",

    websiteUrl: "https://barnahal.npup.in",
    before: { properties: 4365, demand: 0 },
    after: { properties: 5482, demand: 4042241 },
  },
  {
    id: 3,
    name: "नगर पंचायत बेवर , मैनपुरी",
    status: "completed",
    startDate: "2025",
    propertiesMapped: 7594,
    description: "Property assessment and revenue demand generation",

    websiteUrl: "https://bewar.npup.in",
    before: { properties: 4685, demand: 1980520 },
    after: { properties: 7594, demand: 10860215 },
  },
  {
    id: 4,
    name: "नगर पंचायत घिरोर , मैनपुरी",
    status: "ongoing",
    startDate: "2026",
    propertiesMapped: 0,
    description: "Digital property records and GIS integration",

    websiteUrl: "https://ghiror.npup.in",
    before: { properties: 0, demand: 0 },
    after: { properties: 0, demand: 0 },
  },
  {
    id: 5,
    name: "नगर पंचायत कंचौसी ,कानपुर देहात",
    status: "ongoing",
    startDate: "2026",
    propertiesMapped: 0,
    description: "Digital property records and GIS integration",

    websiteUrl: "https://kanchausi.npup.in",
    before: { properties: 0, demand: 0 },
    after: { properties: 0, demand: 0 },
  },
]
