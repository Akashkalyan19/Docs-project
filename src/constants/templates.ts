export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
    <h1>Software Development Proposal</h1>

    <h2>Project Overview</h2>
    <p>Provide a brief description of the project, including its purpose, goals, and objectives.</p>

    <h2>Scope of Work</h2>
    <p>Outline the tasks and deliverables that will be completed as part of the project.</p>

    <h2>Timeline</h2>
    <p>Provide an estimated timeline for the project, including key milestones and deadlines.</p>

    <h2>Budget</h2>
    <p>Include a detailed budget for the project, including costs for labor, materials, and other expenses.</p>

    <h2>Team</h2>
    <p>Introduce the team members who will be working on the project, including their roles and responsibilities.</p>

    <h2>Contact Information</h2>
    <p>Provide contact information for the project manager or primary point of contact.</p>
  `,
  },
  {
    id: "project-proposal ",
    label: "Project propossal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
  <h1>Project Proposal</h1>

  <h2>Introduction</h2>
  <p>Provide an overview of the project, including its purpose and objectives.</p>

  <h2>Project Goals</h2>
  <p>Outline the specific goals that the project aims to achieve.</p>

  <h2>Methodology</h2>
  <p>Describe the approach and methods that will be used to complete the project.</p>

  <h2>Deliverables</h2>
  <p>List the key deliverables that will be produced as part of the project.</p>

  <h2>Timeline</h2>
  <p>Provide a detailed timeline for the project, including major milestones and deadlines.</p>

  <h2>Budget</h2>
  <p>Include a comprehensive budget for the project, detailing all expected costs.</p>

  <h2>Team Members</h2>
  <p>Introduce the team members involved in the project, along with their roles and responsibilities.</p>

  <h2>Contact Information</h2>
  <p>Provide contact details for the project manager or main point of contact.</p>
  `,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <h1>Business Letter</h1>

      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP Code]</p>
      <p>[Email Address]</p>
      <p>[Phone Number]</p>

      <p>[Date]</p>

      <p>[Recipient's Name]</p>
      <p>[Recipient's Title]</p>
      <p>[Recipient's Company]</p>
      <p>[Recipient's Address]</p>
      <p>[City, State, ZIP Code]</p>

      <h2>Subject: [Subject of the Letter]</h2>

      <p>Dear [Recipient's Name],</p>

      <p>[Introduction: Briefly introduce yourself and the purpose of the letter.]</p>

      <p>[Body: Provide detailed information about the subject of the letter. Include any relevant facts, figures, or arguments to support your message.]</p>

      <p>[Conclusion: Summarize the main points and state any actions you expect from the recipient. Thank them for their time and consideration.]</p>

      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <h1>Resume</h1>

    <h2>Contact Information</h2>
    <p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[City, State, ZIP Code]</p>
    <p>[Email Address]</p>
    <p>[Phone Number]</p>

    <h2>Professional Summary</h2>
    <p>[A brief summary of your professional background, skills, and experience.]</p>

    <h2>Work Experience</h2>
    <h3>[Job Title]</h3>
    <p>[Company Name], [City, State]</p>
    <p>[Start Date] - [End Date]</p>
    <ul>
      <li>[Responsibility or Achievement]</li>
      <li>[Responsibility or Achievement]</li>
      <li>[Responsibility or Achievement]</li>
    </ul>

    <h2>Education</h2>
    <h3>[Degree]</h3>
    <p>[School Name], [City, State]</p>
    <p>[Graduation Date]</p>

    <h2>Skills</h2>
    <ul>
      <li>[Skill 1]</li>
      <li>[Skill 2]</li>
      <li>[Skill 3]</li>
    </ul>

    <h2>Certifications</h2>
    <ul>
      <li>[Certification Name]</li>
      <li>[Certification Name]</li>
    </ul>

    <h2>References</h2>
    <p>Available upon request</p>
  `,
  },

  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
    <h1>Cover Letter</h1>

    <p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[City, State, ZIP Code]</p>
    <p>[Email Address]</p>
    <p>[Phone Number]</p>

    <p>[Date]</p>

    <p>[Recipient's Name]</p>
    <p>[Recipient's Title]</p>
    <p>[Recipient's Company]</p>
    <p>[Recipient's Address]</p>
    <p>[City, State, ZIP Code]</p>

    <h2>Subject: [Job Title] Application</h2>

    <p>Dear [Recipient's Name],</p>

    <p>I am writing to express my interest in the [Job Title] position at [Company Name]. With my background in [Your Field], I am confident that I can contribute effectively to your team.</p>

    <p>In my previous role at [Previous Company], I [describe a relevant achievement or responsibility]. I believe these experiences have equipped me with the skills necessary to excel in this position.</p>

    <p>I am excited about the opportunity to bring my unique skills to [Company Name] and am eager to discuss how I can contribute to your team. Thank you for considering my application.</p>

    <p>Sincerely,</p>
    <p>[Your Name]</p>
  `,
  },

  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
    <h1>Letter</h1>
  
    <p>[Your Name]</p>
    <p>[Your Address]</p>
    <p>[City, State, ZIP Code]</p>
    <p>[Email Address]</p>
    <p>[Phone Number]</p>
  
    <p>[Date]</p>
  
    <p>[Recipient's Name]</p>
    <p>[Recipient's Title]</p>
    <p>[Recipient's Company]</p>
    <p>[Recipient's Address]</p>
    <p>[City, State, ZIP Code]</p>
  
    <h2>Subject: [Subject of the Letter]</h2>
  
    <p>Dear [Recipient's Name],</p>
  
    <p>[Introduction: Briefly introduce yourself and the purpose of the letter.]</p>
  
    <p>[Body: Provide detailed information about the subject of the letter. Include any relevant facts, figures, or arguments to support your message.]</p>
  
    <p>[Conclusion: Summarize the main points and state any actions you expect from the recipient. Thank them for their time and consideration.]</p>
  
    <p>Sincerely,</p>
    <p>[Your Name]</p>
  `,
  },
];
