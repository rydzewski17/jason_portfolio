// Replaced DatoCMS fetch with static content

export async function getProfileBanner() {
  return {
    backgroundImage: {
      url: "/images/background.jpg"  // You can change this later
    },
    headline: "Marketing Technologist & Growth Strategist",
    resumeLink: {
      url: "/resume.pdf"  // Upload this to /public later
    },
    linkedinLink: "https://www.linkedin.com/in/jasonrydzewski",
    profileSummary: "I help companies grow through performance marketing, automation, and creative strategy."
  };
}
