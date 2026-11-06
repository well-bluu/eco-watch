// CONTENT MOCKS: the API does not store these yet.
import type { AppNotification, Faq, NewsStory, Service } from "./types";

export const news: NewsStory[] = [
  {
    id: "news-1",
    headline: "MCENRO clears 2 tonnes of waste from Butuanon River banks",
    lang: "en",
    source: "MCENRO",
    publishedAt: "2026-11-05T07:00:00+08:00",
    photo: require("../../assets/images/mock/news-river.jpg"),
  },
  {
    id: "news-2",
    headline: "Ayaw paglabay og basura sa kanal, pahimangno sa siyudad",
    lang: "ceb",
    source: "Mandaue City",
    publishedAt: "2026-11-04T10:30:00+08:00",
    photo: require("../../assets/images/mock/news-canal.jpg"),
  },
  {
    id: "news-3",
    headline: "Tree-planting drive in Tipolo this Saturday",
    lang: "en",
    source: "MCENRO",
    publishedAt: "2026-11-02T16:00:00+08:00",
    photo: require("../../assets/images/mock/news-trees.jpg"),
  },
];

export const services: Service[] = [
  {
    id: "svc-1",
    name: "Solid Waste Unit",
    handles: "Garbage, dumping and collection",
  },
  {
    id: "svc-2",
    name: "Water Quality Unit",
    handles: "Waste water and canals",
  },
  { id: "svc-3", name: "Air Quality Unit", handles: "Smoke, dust and odour" },
];

export const faqs: Faq[] = [
  {
    id: "faq-1",
    question: "What can I report?",
    answer: "Placeholder answer. The real text comes from MCENRO.",
  },
  {
    id: "faq-2",
    question: "Who sees my name?",
    answer: "Placeholder answer. The real text comes from MCENRO.",
  },
  {
    id: "faq-3",
    question: "How long does MCENRO take to respond?",
    answer: "Placeholder answer. The real text comes from MCENRO.",
  },
];

export const notifications: AppNotification[] = [
  {
    id: "ntf-4",
    reportId: "rep-1004",
    status: "Submitted",
    title: "Report submitted",
    message: "Waste beside the creek is with MCENRO.",
    createdAt: "2026-11-05T09:20:00+08:00",
    read: false,
  },
  {
    id: "ntf-3",
    reportId: "rep-1003",
    status: "Dispatched",
    title: "A team is on the way",
    message: "MCENRO dispatched a team for Smoke emission.",
    createdAt: "2026-11-04T08:00:00+08:00",
    read: false,
  },
  {
    id: "ntf-2",
    reportId: "rep-1002",
    status: "Verified",
    title: "Report verified",
    message: "MCENRO checked Grey water into the canal.",
    createdAt: "2026-10-31T11:00:00+08:00",
    read: true,
  },
  {
    id: "ntf-1",
    reportId: "rep-1001",
    status: "Resolved",
    title: "Resolved",
    message: "Overgrown lot with rubbish has been cleared.",
    createdAt: "2026-10-20T15:30:00+08:00",
    read: true,
  },
];

export const unreadCount = notifications.filter((n) => !n.read).length;
