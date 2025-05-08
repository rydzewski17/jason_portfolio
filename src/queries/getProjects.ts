// Static fallback for projects section

export async function getProjects() {
  return [
    {
      title: "AI Portfolio Bot",
      description: "A GPT-based assistant that answers interview questions using your resume.",
      technologies: ["OpenAI", "Node.js", "React"],
      techUsed: "OpenAI, Node.js, React",
      repoLink: "https://github.com/jasonrydzewski/ai-portfolio-bot",
      liveLink: "https://your-portfolio-bot.netlify.app",
      image: { url: "/images/ai-bot.png" }
    },
    {
      title: "Landing Page Builder",
      description: "No-code drag-and-drop tool for marketers to build and deploy pages.",
      technologies: ["React", "Tailwind", "Firebase"],
      techUsed: "OpenAI, Node.js, React", 
      repoLink: "https://github.com/jasonrydzewski/landing-builder",
      liveLink: "",
      image: { url: "/images/ai-bot.png" }
    }
  ];  
}