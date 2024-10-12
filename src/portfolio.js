/* Change this file to get your personal Porfolio */

// https://icon-sets.iconify.design/?query=openai
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hulk's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Hulk Pham Portfolio",
    type: "website",
    url: "https://hulk-pham.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Hulk Pham",
  logo_name: "Hulk Pham",
  nickname: "",
  subTitle:
    "Senior Fullstack Developer, Cloud DevOps and AI/ML Engineer",
  resumeLink:
    "https://www.topcv.vn/xem-cv/WVAMVVsOVgtQVFEEVFZSXAwDVgMFVAcLDQoDVg82a5",
  portfolio_repository: "https://github.com/hulk-pham",
  githubProfile: "https://github.com/hulk-pham",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/hulk-pham",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hulk-pham",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:tanhunghue@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/HulkPhamDev",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Upwork",
    link: "https://www.upwork.com/freelancers/~013f88b8477fb9b7ec?mp_source=share",
    fontAwesomeIcon: "fa-brands fa-upwork", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#14a400", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux, Next.js, Vue.js",
        "⚡ Creating application backend in Node.js, Python, PHP, Java Spring, .Net Core",
        "⚡ Developing cross-flatform mobile applications using Flutter, React Native",
        "⚡ Familiar with CI/CD, Cloud Computing and Microservices",
        "⚡ Experience with SQL and NoSQL databases",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "devicon:nestjs",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "devicon:vuejs-wordmark",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Golang",
          fontAwesomeClassname: "skill-icons:golang",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Java Spring Boot",
          fontAwesomeClassname: "devicon:spring",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "DotNet Core",
          fontAwesomeClassname: "skill-icons:dotnet",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Laravel Framework",
          fontAwesomeClassname: "devicon:laravel",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Python Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "devicon-plain:graphql-wordmark",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "PostgesQL",
          fontAwesomeClassname: "devicon:postgresql-wordmark",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "devicon:redis",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "tabler:brand-react-native",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Experience with LLM, Langchain, Huggingface, OpenAI, etc.",
        "⚡ Experience with Pandas, Numpy, Scikit-learn",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Langchain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "transparent",
            color: "black",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            backgroundColor: "transparent",
            color: "#f7a704",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            backgroundColor: "transparent",
            color: "black",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "black",
          },
        },
      ],
    },
    {
      title: "Cloud Architect & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building on-premise and cloud infrastructure for deploying applications",
        "⚡ Experience working on multiple cloud platforms such as GCP, AWS, Azure, Firebase",
        "⚡ Containerization of applications using Docker, Kubernetes and Jenkins for CI/CD",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "flat-color-icons:linux",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "vscode-icons:file-type-light-firebasehosting",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Blockchain & DApps",
      fileName: "DesignImg",
      filePath: "blockchain.png",
      skills: [
        "⚡ Experience with Ethereum, Solidity and Smart Contracts",
        "⚡ Developing DApps using Web3.js, ether.js and Hardhat",
        "⚡ Experience with Ganache for local blockchain development",
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos:ethereum-color",
          style: {
            color: "#3C3C3D",
          },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            color: "#363636",
          },
        },
        {
          skillName: "Web3.js",
          fontAwesomeClassname: "simple-icons:web3dotjs",
          style: {
            color: "#363636",
          },
        },
        {
          skillName: "Hardhat",
          fontAwesomeClassname: "devicon:hardhat",
          style: {
            color: "#363636",
          },
        },
        {
          skillName: "Ganache",
          fontAwesomeClassname: "logos:ganache",
          style: {
            color: "#363636",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HUSC",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Science, Hue University",
      subtitle: "Bachelor of Science in Computer Science",
      logo_path: "husc.png",
      alt_name: "HUSC",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Excellent Degree, GPA: 3.6/4.0",
        "⚡ English Certificate B1 (according to CEFR)",
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, Security and Networking.",
        "⚡ I have also completed various technology and programming language courses like C, C++, Java, Python, DotNet, HTML, CSS, JS.",
        `⚡ My subject is Software Engineering, so I have done projects on Web Development, Mobile Development`,
      ],
      website_link: "https://husc.edu.vn/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Educate Introduction to Cloud",
      subtitle: "- Amazon Web Services (AWS)",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/2542940e-9b5c-4a00-8e2d-f12e688fc7cc/linked_in_profile",
      alt_name: "AWS",
      color_code: "white",
    },
    {
      title: "Google Cloud Essentials",
      subtitle: "- Google Cloud Skills Boost",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/5e163655-f6e7-4aba-bb8c-9b1862a0ae21/badges/11966831?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DevOps Professional Certificate",
      subtitle: "- PagerDuty",
      logo_path: "pagerduty_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/de10fac1a50f58beb39074ae5799abee223ca7b8334ffd94924ade94f1e3dac0",
      alt_name: "PagerDuty",
      color_code: "white",
    },
    {
      title: "Programming with Python Professional Certificate",
      subtitle: "- OpenEDG Python Institute ",
      logo_path: "py_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/a34eb7aefe9131992d7929be8fb71fc1b7b6a3c08f8e9949b4cd7502f5620b3e?trk=share_certificate",
      alt_name: "OpenEDG",
      color_code: "#1F70C199",
    },
    {
      title: "Cloud Infrastructure Technologies",
      subtitle: "- The Linux Foundation",
      logo_path: "lf_logo.jpg",
      certificate_link:
        "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/bcd0ea91-6557-4a1f-bd43-e46090025e70-hulk-pham-6b715ba1-c527-4d2f-8387-3667f6c5341a-certificate.pdf",
      alt_name: "The Linux Foundation",
      color_code: "white",
    },
    {
      title: "Graph Developer - Associate",
      subtitle: "- Apollo GraphQL",
      logo_path: "apolo_logo.png",
      certificate_link:
        "https://www.apollographql.com/tutorials/certifications/abadb9c2-6e72-4d8e-bb0d-d176bcaf91ca",
      alt_name: "Apollo GraphQL",
      color_code: "#D83B0199",
    },
    {
      title: "Deep Learning Introdution",
      subtitle: "- Kaggle",
      logo_path: "kaggle-logo.svg",
      certificate_link:
        "https://www.kaggle.com/learn/certification/hulkpham/intro-to-deep-learning",
      alt_name: "deeplearning.ai",
      color_code: "white",
    },
    {
      title: "Scrum Advance",
      subtitle: "- Project Management Institute (PMI)",
      logo_path: "pmi_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/8f10bf7b7242935330888d543260720b981ee5265659ebfa53fc511ca94266f6?trk=share_certificate",
      alt_name: "PMU",
      color_code: "white",
    },
    {
      title: "MongoDB for SQL Experts",
      subtitle: "- MongoDB",
      logo_path: "mongodb-logo.png",
      certificate_link:
        "https://learn.mongodb.com/c/7AuGc49SRJaxggMsO6Y-wQ",
      alt_name: "MongoDB",
      color_code: "white",
    },
    // {
    //   title: "Building Systems with the ChatGPT API",
    //   subtitle: "- Deeplearning.ai",
    //   logo_path: "deep_learning_ai_logo.png",
    //   certificate_link:
    //     "https://learn.deeplearning.ai/accomplishments/be21006c-3bcf-439e-9819-cba170bd5bb4?usp=sharing",
    //   alt_name: "deeplearning.ai",
    //   color_code: "white",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteering",
  description:
    "Start from internship to Fullstack Developer, Team Leader and Tech Lead at STDIO.ASIA. I have +7 year experience worked with many technologies and tools to build scalable and sustainable products.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Technical Lead at STDIO.ASIA",
          company: "STDIO.ASIA",
          company_url: "https://stdio.asia/",
          logo_path: "stdio_logo.png",
          duration: "January 2021 - Now",
          location: "Hue, Vietnam",
          description:
            "As a Technical Lead and Manager, responsibilities include leading the team, designing system architectures, managing projects, and ensuring timely delivery. The role involves training the team, maintaining code quality, managing risks, and aligning technical solutions with business goals. Additionally, project proposals, documentation, and collaboration with stakeholders are key tasks.",
          color: "#000000",
        },
        {
          title: "Fullstack Developer at STDIO.ASIA",
          company: "STDIO.ASIA",
          company_url: "https://stdio.asia/",
          logo_path: "stdio_logo.png",
          duration: "July 2019 - Dec 2020",
          location: "Hue, Vietnam",
          description:
            "I have worked extensively on the development of web applications using a variety of technologies, such as Node.js, React.js, Vue.js, PHP, and React Native, to build dynamic and responsive user experiences. In addition to frontend and backend development, I have hands-on experience with cloud infrastructure and DevOps practices, ensuring scalable and reliable deployments. I have also developed microservices architectures and built serverless applications, leveraging cutting-edge technologies to deliver efficient, high-performance solutions tailored to business needs.",
          color: "#000000",
        },
        {
          title: "Web Intern at STDIO.ASIA",
          company: "STDIO.ASIA",
          company_url: "https://stdio.asia/",
          logo_path: "stdio_logo.png",
          duration: "December 2018 - June 2019",
          location: "Hue, Vietnam",
          description:
            "Worked on the development of web applications using PHP, Node.js, Laravel, etc. Training and research on new technologies under the guidance of senior developers. Company also support many training courses for me.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "STDIO.ASIA Free Code Camp",
          company: "STDIO.ASIA",
          company_url: "https://stdio.asia/",
          logo_path: "stdio_logo.png",
          duration: "January 2019 - April 2020",
          location: "Hue, Vietnam",
          description: "I provide comprehensive training in JavaScript and React.js for students at Hue University of Science, with a strong emphasis on modern development practices. The training covers key topics such as Redux for state management, advanced JavaScript concepts, and ES6 features like arrow functions, destructuring, and modules. My goal is to equip students with the skills needed to build dynamic, scalable web applications using React.js, while also ensuring they have a solid understanding of JavaScript fundamentals and industry best practices. Through hands-on coding sessions, projects, and problem-solving exercises, students are prepared for real-world development challenges.",
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dev-image.png",
    description: "Connect with me on LinkedIn, Twitter, GitHub and Gmail. I am always available for interesting conversations and new opportunities.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Like write about system design, cloud computing and latest technologies. You can read my blogs on Dev.to",
    link: "https://dev.to/hulk-pham",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Where am I?",
    subtitle: "Hue, Vietnam - GMT +7",
    locality: "Hue",
    country: "Viet Name",
    region: "Hue",
    postalCode: "50000",
    streetAddress: "Duy Tan",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/LBctoRqsbj8aqn1X7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
