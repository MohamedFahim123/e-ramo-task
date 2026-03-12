export type PricingPlan = {
  id: string;
  category: "shared" | "private" | "meeting" | "desk";
  title: string;
  subtitle: string;
  description: string;
  monthly?: number;
  yearly?: number;
  popular?: boolean;
  features: {
    label: string;
    value: number;
  }[];
};

export const pricingPlans: PricingPlan[] = [
  /* ---------------- SHARED SPACE ---------------- */

  {
    id: "students",
    category: "shared",
    title: "Students Membership",
    subtitle: "For mid companies",
    description: "Enjoy 50 hours access to our quiet shared area spaces",
    yearly: 499,
    features: [
      { label: "Shared Area Hours", value: 50 },
      { label: "Meeting Rooms Hours", value: 0 },
      { label: "Number of Friends", value: 0 },
      { label: "Number of Invitations", value: 0 },
      { label: "Dedicated Desk Days", value: 0 },
    ],
  },

  {
    id: "virtual6",
    category: "shared",
    title: "6/6 virtual yearly bundle",
    subtitle: "For mid companies",
    description: "Enjoy your virtual office for 30 hours every month",
    yearly: 2400,
    popular: true,
    features: [
      { label: "Shared Area Hours", value: 360 },
      { label: "Meeting Rooms Hours", value: 0 },
      { label: "Number of Friends", value: 0 },
      { label: "Number of Invitations", value: 0 },
      { label: "Dedicated Desk Days", value: 0 },
    ],
  },

  {
    id: "premiumShared",
    category: "shared",
    title: "Chair Location Premium Bundle",
    subtitle: "For mid companies",
    description: "Enjoy 130 hours in shared area and 20 hours meeting room",
    monthly: 2899,
    features: [
      { label: "Shared Area Hours", value: 130 },
      { label: "Meeting Rooms Hours", value: 20 },
      { label: "Number of Friends", value: 2 },
      { label: "Number of Invitations", value: 5 },
      { label: "Dedicated Desk Days", value: 0 },
    ],
  },

  /* ---------------- PRIVATE OFFICE ---------------- */

  {
    id: "lawyers",
    category: "private",
    title: "Lawyers Bundle",
    subtitle: "For mid companies",
    description: "Lawyers office bundle with meeting rooms access",
    monthly: 3399,
    popular: true,
    features: [
      { label: "Shared Area Hours", value: 0 },
      { label: "Meeting Rooms Hours", value: 10 },
      { label: "Private Office Duration", value: 1 },
      { label: "Number of Friends", value: 0 },
      { label: "Number of Invitations", value: 0 },
    ],
  },

  {
    id: "company2",
    category: "private",
    title: "2 Employees Company Bundle",
    subtitle: "For mid companies",
    description: "Premium office access for two employees",
    monthly: 4299,
    features: [
      { label: "Shared Area Hours", value: 0 },
      { label: "Meeting Rooms Hours", value: 10 },
      { label: "Private Office Duration", value: 1 },
      { label: "Number of Friends", value: 0 },
      { label: "Number of Invitations", value: 0 },
    ],
  },

  /* ---------------- MEETING ROOM ---------------- */

  {
    id: "meeting10",
    category: "meeting",
    title: "10 Hours Meeting Plan",
    subtitle: "For teams",
    description: "Perfect plan for startups meetings",
    monthly: 750,
    features: [
      { label: "Meeting Rooms Hours", value: 10 },
      { label: "Shared Area Hours", value: 5 },
      { label: "Number of Invitations", value: 3 },
      { label: "Number of Friends", value: 2 },
      { label: "Dedicated Desk Days", value: 0 },
    ],
  },

  {
    id: "meeting30",
    category: "meeting",
    title: "30 Hours Meeting Bundle",
    subtitle: "For companies",
    description: "Extended meeting hours for large teams",
    monthly: 1890,
    features: [
      { label: "Meeting Rooms Hours", value: 30 },
      { label: "Shared Area Hours", value: 10 },
      { label: "Number of Invitations", value: 10 },
      { label: "Number of Friends", value: 5 },
      { label: "Dedicated Desk Days", value: 0 },
    ],
  },

  /* ---------------- DEDICATED DESK ---------------- */

  {
    id: "deskBasic",
    category: "desk",
    title: "Dedicated Desk Basic",
    subtitle: "For individuals",
    description: "Your own dedicated desk space",
    monthly: 799,
    features: [
      { label: "Dedicated Desk Days", value: 30 },
      { label: "Meeting Rooms Hours", value: 5 },
      { label: "Shared Area Hours", value: 20 },
      { label: "Number of Invitations", value: 5 },
      { label: "Number of Friends", value: 2 },
    ],
  },

  {
    id: "deskPro",
    category: "desk",
    title: "Dedicated Desk Pro",
    subtitle: "For professionals",
    description: "Private desk plus meeting hours",
    monthly: 1199,
    features: [
      { label: "Dedicated Desk Days", value: 30 },
      { label: "Meeting Rooms Hours", value: 10 },
      { label: "Shared Area Hours", value: 40 },
      { label: "Number of Invitations", value: 10 },
      { label: "Number of Friends", value: 5 },
    ],
  },
];
