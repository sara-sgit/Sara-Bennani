import USTHB from "../images/im.png";  
import alg from "../images/ag.png";  
import motor from "../images/motor.png";  
import data from "../images/data.jpg";  
import sq from "../images/sq.png";  



export const Bio = {
  name: "Sara Bennani",
  roles: [
    "Data Analyst",
    
  ],
  description: `Data-driven analyst specializing in data cleaning, analysis, and delivering clear, actionable insights. Skilled in SQL, Power BI, Excel, Python, and machine learning tools, with a strong focus on solving complex problems and transforming data into impactful business decisions. Committed to continuous learning and passionate about sharing knowledge through my YouTube channel, Sara's Data Path.`,
    github:"https://github.com/sara-sgit",
  resume:
    "https://drive.google.com/file/d/1hcYqFM51D881kI8-xZFcdMZKTQxv1vIN/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/sarabennani-/",

  Youtube:"https://www.youtube.com/@SarasDataPath", 
  

};

export const skills = [
  {
    title: "Python",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    skills: [
      {
        name: "Numpy",
        image:
          "https://numpy.org/images/logo.svg",
      },
      {
        name: "Pandas",
        image:
         "https://pandas.pydata.org/static/img/pandas.svg",
      },
      {
        name: "Matplotlib",
        image:
          "https://matplotlib.org/stable/_static/logo_light.svg",
      },
      {
        name: "Seaborn",
        image:
          "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
      },
  
    ],
  },
  {
    title: "Power BI",
    image:
          "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    skills: [
      {
        name: "🔧 Power Query",
      
      },
      {
        name: "📊 Data Visualization",
       
        
      },
      {
        name: "📈 Interactive Dashboards",
        
      },

    ],
  },
  {
    title: "SQL",
    image:sq,
   
    skills: [
     
      {
        name: "🔗Aggregation and Joins",
        
      },
      {
        name: "🔍Data extraction",
        
      },

      {
        name: "🔄Data transformation",
       
      },
      {
        name: "📊Data analysis",
        
      },
      
    ],
  },

  {
    title: "Excel",
    image:"https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg"
    ,
   
    skills: [
   
      {
        name: "📊 Pivot Tables",
       
      },
      {
        name: "🔧 Power Query",
       
      },
      {
        name: "🧩 Power Pivot",
        
      },
    

      {
        name: "📈 Advanced Charting",
        
      },
      {
        name: "✅ Data Validation",
        
      }, 
 
      
    ],
  },

  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Tenserflow",
        image:
          "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
      },
      {
        name: "Keras",
        image:
          "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
      },
      {
        name: "Jupyter",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
      },
      {
        name: "Google Colab",
        
      },
      {
        name: "Sk Learn Kit",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
      },
    ],
  },
  { 
  title: "Others",
  skills: [
      
    {
      name: "Streamlit",
      image: "https://avatars.githubusercontent.com/u/45109972?s=400&amp;v=4",
    },
    {
      name: "Git",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gcK7Go3mcVhvMExOd9mEr1cOzS1Il6AvIw&s",
    },
  
    {
      name: "HTML/CSS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Gl0_f_zrUvfXl_xpS2TwbiEthGY1DyuCN8hqSMQk6XjpMZjV7HCcJQAfWsnvo1WI3GM&usqp=CAU",
    },
    {
      name: "Microsoft Office",
      image: "https://brandlogos.net/wp-content/uploads/2020/03/Microsoft-Office-logo.png",
    },
    {
      name: "PyCharm",
      image: "https://ih1.redbubble.net/image.4735353426.0956/st,small,507x507-pad,600x600,f8f8f8.jpg",
    },
    {
      name: "Gradio",
      image: "https://www.gradio.app/_app/immutable/assets/gradio.CHB5adID.svg",
    },
 
 
 
],
},
];

export const experiences = [
  {
    id: 0,
    img:motor, // Replace with your own image URL
    role: "System Engineer",
    company: "Motorola Solutions",
    date: "Nov 2023 - Jul 2024",
    descPoints: [
      "Spearheaded the design and development of communication system (LMR) solutions and services",
      "Crafted clear and concise system documentation and equipment lists using relevant tools and processes",
      "Delivered compelling presentations of technical solutions",
      "Collaborated with project managers to ensure smooth tracking of project progress, decisions, and changes"
    ],
    skills: [
      "System Design",
      "Documentation",
      "Technical Presentations",
      "Project Management",
      "Vendor Management"
    ],
  },
  {
    id: 1,
    img:USTHB,
    role: "Deep Learning Research Intern",
    company: "Université des Sciences et de la Technologie 'Houari Boumediène'",
    date: "Feb 2023 - Jul 2023",
    descPoints: [
      "Trained deep learning models (VGG, ResNet, DenseNet) for plant disease classification",
      "Utilized feature selection methods (PCA, Relief-F, RFE) to select relevant deep features",
      "Fused the outputs of VGG, ResNet, and DenseNet models to improve classification performance",
      "Applied machine learning algorithms (SVM, Random Forest) for classification",
      "Enhanced accuracy and robustness of the classification system through model fusion"
    ]
,    
    skills: [
      "Deep Learning",
      "TensorFlow",
      "Machine Learning",
      "Data Fusion",
      "Feature Selection",
      "Python",
      "Scikit-learn",
      "Streamlit",
      "NumPy"
    ],
    doc: "https://www.researchgate.net/publication/372482211_Promotion_Juillet_2023", // Replace with your own link
  },
  {
    id: 2,
    img: alg,
    role: "Network Engineer Intern",
    company: "Algérie Telecom",
    date: "Aug 2022 - Sep 2022",
    descPoints: [
      "Configured different types of VPN between Fortigate and FortiClient",
      "Learned about network architecture and how to design secure networks using Fortigate"
    ],
    skills: [
      "VPN Configuration",
      "Network Architecture",
      "Fortigate",
      "Networking"
    ],
  },

];

export const education = [
  {
    id: 0,
    img: data,
    
    school: "Datacamp — Online Learning Platform",
    date: "Aug 2024 - Apr 2025",
    desc: "I earned the Associate Data Analyst certification to validate my core data analysis skills. Throughout this program, I gained practical experience in SQL for data querying, Excel for data analysis, and Power BI for creating interactive dashboards and visualizing insights. The certification included a proctored exam that assessed both theoretical knowledge and hands-on problem-solving abilities.",
    degree: "Associate Data Analyst",
  },
  {
    id: 1,
    img: USTHB ,
    school: "Université des Sciences et de la Technologie 'Houari Boumediène'",
    date: "Apr 2019 - Apr 2025",
   
    desc: "As a graduate of USTHB in Networks and Telecommunications, I acquired knowledge in areas such as Object-Oriented Programming (OOP), Internet of Things (IoT), Artificial Intelligence (AI), IP routing, system administration, and reporting. This program provided me with the skills to approach complex technical challenges with a strong foundation in both theory and practical application.",
    degree: "Master of Science in Networking and Telecommunications",
  },
 
];

export const projects = [
 

  {
    id: 7,
    title: "Mobile Market Analysis",
    date: "April 2025",
    description:
      "This project presents a comprehensive analysis of the mobile phone market using Microsoft Excel, with advanced tools such as Power Query for efficient data preparation and transformation. The goal was to uncover how different smartphone specifications and regions impact pricing.",
    image:
      "https://github.com/sara-sgit/Mobile-Market-Analysis/blob/main/Mobile%20Market%20Analysis%20Dashboard.png?raw=true",
      tags: ["Excel",
        "Pivotables",
        "Data Analysis",
        "Data Visulaization","Power Query"],
    category: "Excel",
    github: "https://github.com/sara-sgit/Mobile-Market-Analysis",
   
  },
  {
    id: 8,
    title: "Bike Sales Analysis",
    date: "Feb 2025",
    description:
      "This project focuses on analyzing bike sales data across three regions to identify key factors influencing customer decisions to purchase a bike. The goal is to derive actionable insights to enhance sales, optimize logistics, and improve marketing strategies.",
    image:
      
      "https://github.com/sara-sgit/Bike_sales_Analysis/blob/main-1/Bike%20Sales%20Project.png?raw=true",
    tags: ["Excel",
      "Pivotables",
      "Data Analysis",
      "Data Visulaization","Power Query"],
    category: "Excel",
    github: "https://github.com/sara-sgit/Bike_sales_Analysis",

  },
  {
    id: 11,
    title: "Coffee Sales Analysis",
    date: "Jan 2025",
    description:
      "This project involves analyzing coffee sales data from three countries, all using USD as the currency. The objective was to extract actionable insights to improve product strategy, streamline logistics, and boost customer engagement. The entire analysis was performed using Excel.",
    image:
      "https://github.com/sara-sgit/Coffee_Sales_Analysis/blob/master/Coffee%20sales%20Analysis.png?raw=true",
    tags: [
      "Excel",
      "Pivotables",
      "Data Analysis",
      "Data Visulaization",
     
    ],
    category: "Excel",
    github: "https://github.com/sara-sgit/Coffee_Sales_Analysis/tree/master",
   

  },
  {
    id: 13,
    title: "PlantAI - Plant Disease Classification System",
    date: "Jul 2023",
    description:
      "PlantAI is an intelligent system that classifies tomato plant diseases from uploaded leaf images using advanced deep learning techniques. The system analyzes leaf patterns and symptoms to identify diseases.",
    image:
      "https://github.com/sara-sgit/Plant-Disease-Classification/blob/main/Home.PNG?raw=true",
    tags: [
      "Python",
      "Machine learning",
      "Deep learning",
      "Problem solving",
     
    ],
    category: "Machine Learning",
    github: "https://github.com/sara-sgit/Plant-Disease-Classification",
    member: [
      {

    name: "Sara Bennani",
   
    linkedin: "https://www.linkedin.com/in/sarabennani-/",
    github: "https://github.com/sara-sgit",
  },
  {
    name: "Faiza Akrib",
   
    linkedin: "https://www.linkedin.com/in/faiza-akrib/",
    
  },
],
   

  },
  
];

