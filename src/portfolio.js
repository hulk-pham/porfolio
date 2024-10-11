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
      title: "Blockchain Developer",
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
      title: "Deep Learning Introdution",
      subtitle: "- Kaggle",
      logo_path: "kaggle-logo.svg",
      certificate_link:
        "https://www.kaggle.com/learn/certification/hulkpham/intro-to-deep-learning",
      alt_name: "deeplearning.ai",
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
      title: "MongoDB for SQL Experts",
      subtitle: "- MongoDB",
      logo_path: "mongodb-logo.png",
      certificate_link:
        "https://learn.mongodb.com/c/7AuGc49SRJaxggMsO6Y-wQ",
      alt_name: "MongoDB",
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
      title: "Building Systems with the ChatGPT API",
      subtitle: "- Deeplearning.ai",
      logo_path: "deep_learning_ai_logo.png",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/be21006c-3bcf-439e-9819-cba170bd5bb4?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "white",
    },
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
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
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
