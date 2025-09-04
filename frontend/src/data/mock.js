export const mockData = {
  personal: {
    name: "Atharva Salunke",
    title: "Data and ML Engineer",
    location: "Blacksburg, VA",
    email: "atharva.p.salunke@gmail.com",
    phone: "+1 540-934-8370",
    linkedin: "https://www.linkedin.com/in/atharva-salunke/",
    github: "https://github.com/atharvasalunke",
    photo: "home.jpeg",
    heroTitle: "Hey there! I'm Atharva and I'm a Data and ML Engineer from Virginia.",
    heroDescription: "With experience spanning machine learning, data engineering, and full-stack development, I specialize in building scalable AI solutions and robust data pipelines that drive business value.",
    aboutDescription: "I'm a passionate Data and ML Engineer and proud Virginia Tech Hokie currently pursuing my Master's in Computer Engineering at Virginia Tech. With a strong background in machine learning, data engineering, and cloud platforms, I love solving complex problems and building systems that make a real impact. My experience spans from optimizing LLM-based systems at Zof AI to designing real-time ETL pipelines at Citibank through LTIMindtree."
  },
  workExperience: [
    {
      company: "Zof AI Inc.",
      position: "Machine Learning Intern",
      location: "San Francisco, CA",
      period: "June 2025 - Aug 2025",
      responsibilities: [
        "Engineered FastAPI microservice reducing LLM test generation latency by 60%",
        "Automated 80% of compliance workflows using multi-agent orchestration",
        "Built secure CI/CD pipeline improving deployment efficiency by 40%"
      ]
    },
    {
      company: "Virginia Tech",
      position: "Graduate Research Assistant",
      location: "Blacksburg, VA",
      period: "Aug 2024 - May 2025",
      responsibilities: [
        "Developed cloud-native yield forecasting platform using time series analysis",
        "Integrated LLaMA 3 chatbot reducing manual triage time by 70%",
        "Collaborated across Engineering, Agriculture, and Product teams"
      ]
    },
    {
      company: "LTIMindtree (Citibank)",
      position: "Data Engineer II",
      location: "Mumbai, India",
      period: "Oct 2021 - Jul 2024",
      responsibilities: [
        "Built real-time ETL pipelines processing millions of transactions daily for fraud detection",
        "Improved pipeline efficiency by 40% and reduced incident resolution time by 50%",
        "Led cross-team root cause analysis and implemented preventive measures"
      ]
    },
    {
      company: "LTIMindtree (Citibank)",
      position: "Software Development Engineer",
      location: "Mumbai, India",
      period: "Jun 2021 - Oct 2021",
      responsibilities: [
        "Scaled data warehouse capacity by 10x using Apache Spark + Kafka",
        "Reduced reconciliation report runtime from 2 hours to 10 minutes",
        "Automated batch workflows enhancing compliance reporting speed"
      ]
    }
  ],
  
  projects: [
    {
      title: "AI-Driven Traffic Management",
      category: "Machine Learning, Full-Stack",
      description: "Real-time traffic optimization system using computer vision",
      image: "https://images.unsplash.com/photo-1511363814364-47316c275e25?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHx0cmFmZmljJTIwbWFuYWdlbWVudCUyMEFJfGVufDB8fHx8MTc1NDc4MDI3OHww&ixlib=rb-4.1.0&q=85",
      fullDescription: "Built a full-stack YOLOv8 (PyTorch) traffic control platform with Flask backend and Angular frontend, applying recommender system logic to dynamically prioritize routes, reducing simulated congestion by 35%. The system uses real-time computer vision to analyze traffic patterns and optimize signal timing.",
      technologies: ["Python", "PyTorch", "YOLOv8", "Flask", "Angular", "Computer Vision"]
    },
    {
      title: "Credit Card Fraud Detection",
      category: "Data Engineering, ML",
      description: "Cloud-native ETL pipeline with fraud detection capabilities",
      image: "https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw2fHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3NTQ3ODAzMDN8MA&ixlib=rb-4.1.0&q=85",
      fullDescription: "Developed a comprehensive cloud-native ETL pipeline in Azure Data Factory with fraud detection using PCA + Random Forest achieving 94% recall. Integrated classification trees and unsupervised learning to identify high-risk transaction clusters in real-time, processing millions of transactions daily.",
      technologies: ["Python", "Azure Data Factory", "Random Forest", "PCA", "SQL", "Apache Spark"]
    }
  ],
  
  services: [
    {
      title: "Machine Learning Engineering",
      description: "I develop end-to-end ML solutions from data preprocessing to model deployment. Specializing in deep learning, computer vision, and NLP applications with experience in PyTorch, TensorFlow, and cloud-based ML services for scalable production systems."
    },
    {
      title: "Data Engineering",
      description: "I design and build robust data pipelines using modern technologies like Apache Spark, Kafka, and cloud platforms. From real-time streaming to batch processing, I ensure data quality, reliability, and scalability for enterprise applications."
    },
    {
      title: "Full-Stack Development",
      description: "I create comprehensive web applications with modern frameworks and cloud infrastructure. From responsive frontends to scalable backends, I focus on performance, security, and user experience while integrating ML capabilities seamlessly."
    }
  ],
  
  skills: {
    "Programming Languages": ["Python", "SQL", "C++", "Java", "Scala", "JavaScript"],
    "Machine Learning": ["PyTorch", "TensorFlow", "Scikit-learn", "Computer Vision", "NLP", "Time Series"],
    "Data Engineering": ["Apache Spark", "Kafka", "Airflow", "ETL", "Data Pipelines", "Stream Processing"],
    "Cloud Platforms": ["Azure", "AWS", "Databricks", "Kubernetes", "Docker", "CI/CD"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Hive", "HBase", "Redis"]
  },
  
  education: {
    degree: "Master of Science in Computer Engineering",
    school: "Virginia Tech",
    period: "Aug 2024 - May 2026",
    gpa: "3.83/4.0"
  },
  
  certifications: [
    "Databricks Certified Spark Developer (Apache Spark 3.0)"
  ]
};