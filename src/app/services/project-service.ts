import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    projects = [
      {
    slug: 'cartflow-ecommerce',
    title: 'CartFlow E-Commerce Platform – Angular, ASP.NET Core, SQL Server',
    imgUrl: 'assets/img/CartFlow-Ecommerce_System  – Angular  ASP.NET Core  SQL Server.png',
    summary: 'A full-stack e-commerce system handling products, categories, carts, and checkout flows with clean architecture.',
    overview: 'CartFlow was built to simulate a real-world online store with admin management, user carts, and order processing.',
    problem:  'E-commerce systems often suffer from tightly coupled APIs, fragile cart logic, and unmaintainable growth.',
    solution: 'Designed a clear separation between API layers, business rules, and frontend state management.',
   images: [
          "assets/img/cartflow-1.png",
          "assets/img/cartflow-2.png",
          "assets/img/cartflow-3.png",
        "assets/img/cartflow-4.png",
       ],
    roles: ['Admin', 'Customer'],
    features: [
      'Product and category management',
      'Shopping cart system',
      'Checkout flow',
      'Admin approvals and management'
    ],
    architecture: [
      'Layered backend architecture',
      'Stateless REST APIs',
      'Angular SPA with isolated features'
    ],
    techStack: [
      'Angular',
      'SCSS',
      'ASP.NET Core Web API',
      'SQL Server',
      'Azure App Service',
      'GitHub Actions CI/CD'
    ],
    challenges: [
      {
        problem: 'Keeping cart logic predictable',
        solution: 'Centralized cart service and strict API boundaries'
      }
    ],
    outcomes: [
      'Stable cart and checkout flows',
      'Readable and extendable codebase',
      'Consistent deployment via CI/CD'
    ],
    liveDemo: 'https://cartflowsystem.netlify.app/',
    github: 'https://github.com/nsmthethwa44/CartFlow_Ecommerce_System-Angular-ASP.NET-Core-SQL-Server'
  },
      {
    slug: 'real-estate-system',
    title: 'Real Estate Transaction Management System – Angular, ASP.NET Core, SQL Server',
    imgUrl: 'assets/img/EstateFlow System – Angular, ASP.NET Core, SQL Server.png',
    summary: 'A role-based platform enabling admins, sellers, and buyers to manage properties, offers, and transactions through structured workflows.',
    overview: 'The system was designed to handle real-world real estate workflows including listing approvals, offer tracking, and deal lifecycle management.',
    problem:'Most real estate platforms fail due to tightly coupled business logic, poor role separation, and fragile approval workflows.',
    solution: 'Implemented a layered architecture with explicit role-based flows, isolating business logic from data access and UI concerns.',
     images: [
          "assets/img/estateflow-1.png",
          "assets/img/estateflow-2.png",
          "assets/img/estateflow-3.png",
        "assets/img/estateflow-4.png",
       ],
    roles: ['Admin', 'Seller', 'Buyer'],
    features: [
      'Role-based dashboards',
      'Property listing approval workflow',
      'Offer submission and tracking',
      'User and role management',
      'Analytics and reporting'
    ],
    architecture: [
      'Controller → Service → Repository pattern',
      'DTO-based API contracts',
      'Role-based route guards in Angular'
    ],
    techStack: [
      'Angular',
      'SCSS',
      'ASP.NET Core Web API',
      'SQL Server',
      'Azure App Service',
      'GitHub Actions CI/CD'
    ],
    challenges: [
      {
        problem: 'Managing offer state transitions across multiple roles',
        solution: 'Centralized business rules inside service layer'
      },
      {
        problem: 'Avoiding EF Core query pitfalls',
        solution: 'Explicit includes, DTO projection, controlled repository access'
      }
    ],
    outcomes: [
      'Predictable transaction workflows',
      'Clean and maintainable backend',
      'Production-ready deployment pipeline'
    ],
    liveDemo: 'https://estateflowsystem.netlify.app/',
    github: 'https://github.com/nsmthethwa44/EstateFlowSystem'
  },
  {
      slug: 'healthcare-appointment-booking-system',
      title: 'Healthcare Appointment Booking System – Angular, ASP.NET Core, SQL Server',
       imgUrl: 'assets/img/HealthCare_Appointment_System – Angular  ASP.NET Core  SQL Server.png',
      summary: 'A role-based healthcare scheduling platform that streamlines appointment booking for patients, schedule management for doctors, and administrative oversight through a clean, secure architecture.',
      overview: 'This project addresses inefficiencies in traditional healthcare scheduling systems that rely on phone calls, spreadsheets, or disconnected tools. The system provides a centralized, role-aware platform that is predictable, secure, and extensible.',
      problem: [
        'Double bookings and scheduling conflicts',
        'Limited visibility into doctor availability',
        'Manual administrative processes',
        'Poor separation of user responsibilities'
      ],
      solution: [
        'Patients book and manage appointments online',
        'Doctors control availability and view assigned appointments',
        'Admins manage users, roles, and reports',
        'JWT-secured APIs with strict role-based access control'
      ],
       images: [
          "assets/img/hcs-1.png",
          "assets/img/hcs-2.png",
          "assets/img/hcs-3.png",
        "assets/img/hcs-4.png",
       ],
      keyFeatures: [
        'Role-based dashboards (Patient, Doctor, Admin)',
        'Secure authentication using JWT',
        'Appointment booking and management',
        'Doctor availability and schedule control',
        'Patient appointment history',
        'Administrative reporting and oversight'
      ],
      architecture: [
        'Controller → Service → Repository pattern',
        'DTO-based API contracts',
        'Role-Based Access Control (RBAC)',
        'Entity Framework Core with controlled querying',
        'Clear separation of UI, business logic, and data access'
      ],
      techStack: [
        'Angular',
        'SCSS',
        'ASP.NET Core Web API',
        'SQL Server',
        'JWT Authentication',
        'Role-Based Access Control (RBAC)'
      ],
      challenges: [
        {
          challenge: 'Preventing scheduling conflicts across multiple roles',
          solution: 'Centralized appointment validation enforced within the service layer'
        },
        {
          challenge: 'Managing authorization complexity',
          solution: 'Strict RBAC policies applied at API and route levels'
        }
      ],
      outcome: [
        'Predictable and conflict-free appointment scheduling',
        'Clear role separation with secure access control',
        'Maintainable codebase aligned with SOLID principles',
        'Ready for future extensions (notifications, payments, telehealth)'
      ],
      liveDemo: 'https://happy-ground-0a36d730f.3.azurestaticapps.net/',
    github: 'https://github.com/nsmthethwa44/HCBS-Angular-ASP.NET-Core-SQL-Server'
    },
     {
      slug: 'car-auction-system',
      title: 'Car Auction System – Angular, ASP.NET Core, SQL Server',
       imgUrl: 'assets/img/Car_Auction_System  – Angular  ASP.NET Core  SQL Server.png',
      summary: 'A role-based car auction platform that enables vehicle owners to host auctions and bidders to place and track bids through a secure, well-structured web application.',
      overview: 'This project models a real-world auction system where timing, bid validation, and access control are critical. The system enforces strict business rules to prevent invalid bidding while maintaining predictable auction behavior.',
      problem: [
        'Unclear bidding rules',
        'Invalid or conflicting bids',
        'Poor role separation',
        'Tight coupling between UI, business logic, and data access'
      ],
      solution: [
        'Car owners manage vehicles and auction lifecycles',
        'Bidders place and track bids securely',
        'Business rules enforced centrally within the service layer',
        'JWT authentication and RBAC ensure only permitted actions are allowed'
      ],
       images: [
          "assets/img/cas-1.png",
          "assets/img/cas-2.png",
          "assets/img/cas-3.png",
          "assets/img/cas-4.png",
    ],
      keyFeatures: [
        'Role-based authentication and authorization',
        'Vehicle listing and auction creation',
        'Bid placement with strict validation rules',
        'Auction lifecycle tracking',
        'Real-time or near-real-time bid updates',
        'Secure API-driven communication'
      ],
      architecture: [
        'Controller → Service → Repository pattern',
        'DTO-based API contracts',
        'Centralized bid validation logic',
        'Clean separation of UI, business logic, and persistence',
        'Designed to support real-time updates without tight coupling'
      ],
      techStack: [
        'Angular',
        'SCSS',
        'ASP.NET Core Web API (.NET 8)',
        'SQL Server',
        'JWT Authentication',
        'Role-Based Access Control (RBAC)'
      ],
      challenges: [
        {
          challenge: 'Preventing invalid or conflicting bids',
          solution: 'Centralized bidding rules enforced in the service layer'
        },
        {
          challenge: 'Managing auction state changes',
          solution: 'Explicit auction lifecycle handling with controlled state transitions'
        }
      ],
      outcome: [
        'Predictable and secure auction behavior',
        'Clear role separation and access control',
        'Maintainable and scalable backend architecture',
        'Foundation ready for payments, notifications, and admin monitoring'
      ],
     liveDemo: 'https://carauctionsystem.netlify.app/',
    github: 'https://github.com/nsmthethwa44/CAS-Angular-ASP.NET-Core-SQL-Server' ,
    },
{
  "slug": "taskflow-task-manager",
  "title": "TaskFlow – Task Manager Dashboard (Angular, ASP.NET Core, SQL Server)",
  "imgUrl": "assets/img/taskflow-task-manager.png",
  "summary": "A full-stack task management system that helps users organize tasks by categories, track progress, and visualize productivity through dashboards.",
  "overview": "TaskFlow was built to model a real-world personal productivity system with structured task creation, categorization, and data-driven dashboards backed by a clean backend architecture.",
  "problem": "Many task managers lack clear structure, become cluttered over time, and provide little insight into progress or workload distribution.",
  "solution": "Designed a category-driven task system with a dashboard-first experience, backed by a layered API architecture that cleanly separates business logic from data access and UI concerns.",
  "images": [
    "assets/img/taskflow-1.png",
    "assets/img/taskflow-2.png",
    "assets/img/taskflow-3.png",
    "assets/img/taskflow-4.png"
  ],
  "roles": ["User"],
  "features": [
    "Task creation and management",
    "Category-based task organization",
    "Dashboard with bar, pie, and sparkline statistics",
    "Progress and completion tracking"
  ],
  "architecture": [
    "Controller → Service → Repository pattern",
    "Centralized business logic layer",
    "DTO-driven REST APIs",
    "Frontend-backend separation"
  ],
  "techStack": [
    "Angular",
    "SCSS",
    "ASP.NET Core Web API",
    "SQL Server",
    "RESTful APIs",
    "GitHub"
  ],
  "challenges": [
    {
      "problem": "Handling empty dashboards and charts for new users",
      "solution": "Implemented safe empty-state logic with conditional chart rendering and placeholder UI"
    },
    {
      "problem": "Avoiding tightly coupled task and category logic",
      "solution": "Separated responsibilities using services and repositories with clear boundaries"
    }
  ],
  "outcomes": [
    "Clear and intuitive task organization",
    "Stable and maintainable backend structure",
    "Dashboard that scales as user data grows"
  ],
  "liveDemo": "https://taskflowsystem.netlify.app/",
  "github": "https://github.com/nsmthethwa44/TaskFlow_Task_Manager-Angular-ASP.NET-Core-SQL-Server"
},

  ]

}
