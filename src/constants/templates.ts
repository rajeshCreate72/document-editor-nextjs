export const templates = [
    { id: "blank", label: "Blank Document", imageUrl: "/blank-document.svg", initialContent: "" },
    {
        id: "software-proposal",
        label: "Software Development Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>
            <h2>Project Overview</h2>
            <p>[Briefly describe the project, its goals, and the problem it aims to solve.]</p>

            <h2>Scope of Work</h2>
            <ul>
                <li>Feature 1: [Description]</li>
                <li>Feature 2: [Description]</li>
                <li>Timeline: [Estimated duration]</li>
            </ul>

            <h2>Technology Stack</h2>
            <ul>
                <li>Frontend: [Tech]</li>
                <li>Backend: [Tech]</li>
                <li>Database: [Tech]</li>
            </ul>

            <h2>Budget and Timeline</h2>
            <p>Estimated Cost: $[Amount]</p>
            <p>Estimated Completion: [Date]</p>

            <p>Sincerely,<br>[Your Name]</p>
        `,
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>
            <h2>Introduction</h2>
            <p>[Briefly introduce the project and its purpose.]</p>

            <h2>Objectives</h2>
            <ol>
                <li>[Objective 1]</li>
                <li>[Objective 2]</li>
            </ol>

            <h2>Scope</h2>
            <ul>
                <li>Deliverables: [List key deliverables]</li>
                <li>Timeline: [Specify phases and deadlines]</li>
            </ul>

            <h2>Budget</h2>
            <p>[Provide cost estimates]</p>

            <p>Best regards,<br>[Your Name]</p>
        `,
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
            <p><strong>[Your Name]</strong><br>
            [Your Address]<br>
            [City, State, ZIP Code]<br>
            [Email Address]<br>
            [Date]</p>

            <p><strong>[Recipient's Name]</strong><br>
            [Recipient's Position]<br>
            [Company Name]<br>
            [Company Address]</p>

            <p>Dear [Recipient's Name],</p>

            <p>I am writing to [state your purpose, e.g., discuss a business opportunity, request information, or provide updates].</p>

            <p>[Body content]</p>

            <p>Thank you for your time and consideration. I look forward to your response.</p>

            <p>Sincerely,<br>[Your Name]</p>
        `,
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
            <h1>[Your Name]</h1>
            <h2>Contact Information</h2>
            <ul>
                <li>Email: [Your Email]</li>
                <li>Phone: [Your Phone]</li>
                <li>LinkedIn: [Your Profile]</li>
                <li>Portfolio: [Your Website]</li>
            </ul>

            <h2>Summary</h2>
            <p>[Write a short professional summary about your skills and experience.]</p>

            <h2>Experience</h2>
            <p><strong>[Job Title]</strong> - [Company Name] ([Year - Year])</p>
            <ul>
                <li>[Responsibility 1]</li>
                <li>[Responsibility 2]</li>
            </ul>

            <h2>Education</h2>
            <p><strong>[Degree]</strong> - [University Name] ([Year])</p>

            <h2>Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
            </ul>
        `,
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <p><strong>[Your Name]</strong><br>
            [Your Address]<br>
            [City, State, ZIP Code]<br>
            [Email Address]<br>
            [Date]</p>

            <p><strong>[Hiring Manager's Name]</strong><br>
            [Company Name]<br>
            [Company Address]</p>

            <p>Dear [Hiring Manager's Name],</p>

            <p>I am excited to apply for the [Job Title] position at [Company Name]. With my background in [Your Field], I believe I would be a great addition to your team.</p>

            <p>[Mention your skills, achievements, or projects relevant to the role.]</p>

            <p>I would love the opportunity to discuss how my experience can contribute to your team. Please feel free to contact me at your convenience.</p>

            <p>Sincerely,<br>[Your Name]</p>
        `,
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
            <p><strong>[Your Name]</strong><br>
            [Your Address]<br>
            [City, State, ZIP Code]<br>
            [Email Address]<br>
            [Date]</p>

            <p><strong>[Recipient's Name]</strong><br>
            [Recipient's Position or Relationship]<br>
            [Company or Organization (if applicable)]<br>
            [Recipient's Address]</p>

            <p>Dear [Recipient's Name],</p>

            <p>[Write the main content of the letter here.]</p>

            <p>Best regards,<br>[Your Name]</p>
        `,
    },
];
