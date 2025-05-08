export async function getContactMe() {
  return {
    name: "Jason Rydzewski",
    title: "Head of Marketing",
    email: "your@email.com",
    phone: "(555) 123-4567",
    phoneNumber: "(555) 123-4567",
    location: "Cincinnati, OH",
    linkedin: "https://linkedin.com/in/jasonrydzewski",
    linkedinLink: "https://linkedin.com/in/jasonrydzewski",
    github: "https://github.com/jasonrydzewski",
    companyUniversity: "Carestream Dental",
    summary: "I help companies grow through performance marketing, automation, and creative strategy.",
    profilePicture: { url: "/images/profile.jpg" } // FIXED: now matches expected object type
  };
}
