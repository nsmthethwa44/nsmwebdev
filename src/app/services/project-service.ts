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
    liveDemo: 'https://example.com',
    github: 'https://github.com/example'
  },
      {
    slug: 'real-estate-system',
    title: 'Real Estate Transaction Management System – Angular, ASP.NET Core, SQL Server',
    imgUrl: 'assets/img/EstateFlow System – Angular, ASP.NET Core, SQL Server.png',
    summary: 'A role-based platform enabling admins, sellers, and buyers to manage properties, offers, and transactions through structured workflows.',
    overview: 'The system was designed to handle real-world real estate workflows including listing approvals, offer tracking, and deal lifecycle management.',
    problem:'Most real estate platforms fail due to tightly coupled business logic, poor role separation, and fragile approval workflows.',
    solution: 'Implemented a layered architecture with explicit role-based flows, isolating business logic from data access and UI concerns.',
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
    liveDemo: 'https://example.com',
    github: 'https://github.com/example'
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
      iveDemo: 'https://example.com',
    github: 'https://github.com/example'
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
     iveDemo: 'https://example.com',
    github: 'https://github.com/example'
    },



// {
//   id: 2,
//   title: 'Healthcare Appointment Booking System – Angular, ASP.NET Core, SQL Server',
//   category: "Healthcare Management",
//   shortDesc: 'A full-stack web application for booking and managing healthcare appointments, built with ASP.NET Core Web API, Angular, and SQL Server.',
//   imgUrl: 'assets/img/HealthCare_Appointment_System – Angular  ASP.NET Core  SQL Server.png',
//   desc: 'This healthcare platform allows patients to book appointments, doctors to manage schedules, and administrators to oversee users and reporting. Built with ASP.NET Core Web API, Angular, and SQL Server, it applies SOLID principles, JWT authentication, and role-based access control (RBAC) to ensure scalability, maintainability, and secure role-specific actions. The system improves transparency, reduces scheduling conflicts, and streamlines healthcare communication in a centralized, digital platform.',
//   liveDemo: "https://happy-ground-0a36d730f.3.azurestaticapps.net/",
//   images: {
//           img1: "assets/img/hcs-1.png",
//           img2: "assets/img/hcs-2.png",
//           img3: "assets/img/hcs-3.png",
//           img4: "assets/img/hcs-4.png",
//       },
//   gitHubLink: "https://github.com/nsmthethwa44/HCBS-Angular-ASP.NET-Core-SQL-Server",
//   vidUrl: "https://youtu.be/GueNLZ4QtII",
//   theProblem: "Healthcare appointment booking often relies on outdated or manual methods, leading to double bookings, poor communication, and wasted time for both patients and providers.",
//   theSolution: "The Healthcare Appointment Booking System digitizes scheduling by allowing patients to book online, doctors to manage availability, and administrators to oversee the platform with secure, role-based access.",
//   theBenefits: "Reduces scheduling conflicts, improves communication, and provides a secure, scalable, and transparent platform for managing appointments across patients, doctors, and administrators."
// },
//  {
//   id: 3,
//   title: 'Car Auction System – Angular, ASP.NET Core, SQL Server',
//    category: "Car Management",
//   shortDesc: 'A full-stack car auction platform that enables car owners to list vehicles and bidders to place and track real-time bids using Angular, ASP.NET Core, and SQL Server.',
//   imgUrl: 'assets/img/Car_Auction_System  – Angular  ASP.NET Core  SQL Server.png',
//   desc: 'A complete full-stack web application built with ASP.NET Core Web API, Angular, and SQL Server that provides a platform for listing, bidding, and managing car auctions in real-time. The system follows clean architecture and SOLID principles to maintain separation of concerns across services, repositories, and controllers. Secure JWT authentication and role-based access control (RBAC) ensure that car owners, bidders, and administrators interact with the platform according to their permissions. This structured architecture ensures scalability, maintainability, and clarity in user workflows.',
//   liveDemo: 'https://carauctionsystem.netlify.app/',
//    images: {
//           img1: "assets/img/cas-1.png",
//           img2: "assets/img/cas-2.png",
//           img3: "assets/img/cas-3.png",
//           img4: "assets/img/cas-4.png",
//       },
//   gitHubLink: 'https://github.com/nsmthethwa44/CAS-Angular-ASP.NET-Core-SQL-Server',
//   vidUrl: 'https://youtu.be/cImsZSIdlCM',
//   theProblem: 'Traditional vehicle auction processes are often inefficient, opaque, and require in-person attendance. Buyers may not have clear visibility on car details, and sellers cannot easily track bidding activity or manage car listings. This results in limited participation, slower sales cycles, and difficulty maintaining transparent pricing.',
//   theSolution: 'The Car Auction System digitizes the auction process by allowing car owners to register and list vehicles while bidders can browse available cars and place bids in real-time. The system manages the entire bidding lifecycle, ensuring accuracy, transparency, and efficiency. Administrators can manage users, listings, and auction settings from a centralized dashboard.',
//   theBenefits: 'Buyers get transparent, real-time updates on bidding status and vehicle details. Sellers gain wider reach and better control over their listings. Administrators benefit from structured oversight, improved security, and reduced manual workload. The system modernizes the auction experience with improved accessibility, accountability, and data-driven decision-making.'
// },



  ]

}
