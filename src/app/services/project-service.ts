import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    projects = [
    {
      id: 1,
      title: 'Child Development Tracking System – Angular, ASP.NET Core, SQL Server',
       category: "Management System",
      shortDesc: 'A full-stack web application built with ASP.NET Core Web API, Angular, and SQL Server that helps parents, teachers, and administrators track and support children’s developmental milestones in a structured, data-driven way.',
      imgUrl: 'assets/img/Child Development Tracking System – Angular  ASP.NET Core  SQL Server.png',
      desc: 'A full-stack web application built with ASP.NET Core Web API, Angular, and SQL Server, designed to help parents, teachers, and administrators track and support children’s developmental milestones in a structured, data-driven way. The backend follows SOLID principles to ensure maintainable and extensible architecture, while authentication and authorization are handled securely with JWT tokens and role-based access control (RBAC). This combination allows for scalable user management, transparent communication, and reliable insights, replacing scattered manual tracking with a centralized digital platform.',
      liveDemo: "#",
      images: {
          img1: "assets/img/cds-1.png",
          img2: "assets/img/cds-2.png",
          img3: "assets/img/cds-5.png",
          img4: "assets/img/cds-6.png",
      },
      gitHubLink: "https://github.com/nsmthethwa44/CDTS-Angular-ASP.NET-Core-SQL-Server",
      vidUrl: "https://youtu.be/nHuLfeYwWwA" ,
      theProblem: "Child development is often tracked informally through paper records, scattered notes, or memory. This fragmented approach leads to missed milestones, delayed interventions, poor communication between parents and teachers, and a lack of reliable data for administrators to analyze and improve programs.",
      theSolution: "The Child Development Tracking System provides a centralized digital platform where parents can monitor their child’s progress and receive timely updates, teachers can assign and record milestone achievements, and administrators can manage users, define milestones, and generate reports. This ensures that every child’s development is tracked consistently, transparently, and collaboratively.",
      theBenefits: "With this system, delays are flagged early through automated alerts, enabling timely intervention. Parents, teachers, and administrators work from a single, reliable source of truth, improving transparency and collaboration. Manual paperwork is replaced with structured digital records, making the process more efficient. The role-based design allows the platform to scale across schools and programs, while reports provide valuable insights for data-driven decision-making and program improvement.",
    },
 {
  id: 2,
  title: 'Car Auction System – Angular, ASP.NET Core, SQL Server',
   category: "Car Management",
  shortDesc: 'A full-stack car auction platform that enables car owners to list vehicles and bidders to place and track real-time bids using Angular, ASP.NET Core, and SQL Server.',
  imgUrl: 'assets/img/Car_Auction_System  – Angular  ASP.NET Core  SQL Server.png',
  desc: 'A complete full-stack web application built with ASP.NET Core Web API, Angular, and SQL Server that provides a platform for listing, bidding, and managing car auctions in real-time. The system follows clean architecture and SOLID principles to maintain separation of concerns across services, repositories, and controllers. Secure JWT authentication and role-based access control (RBAC) ensure that car owners, bidders, and administrators interact with the platform according to their permissions. This structured architecture ensures scalability, maintainability, and clarity in user workflows.',
  liveDemo: 'https://carauctionsystem.netlify.app/',
   images: {
          img1: "assets/img/cas-1.png",
          img2: "assets/img/cas-2.png",
          img3: "assets/img/cas-3.png",
          img4: "assets/img/cas-4.png",
      },
  gitHubLink: 'https://github.com/nsmthethwa44/CAS-Angular-ASP.NET-Core-SQL-Server',
  vidUrl: 'https://youtu.be/cImsZSIdlCM',
  theProblem: 'Traditional vehicle auction processes are often inefficient, opaque, and require in-person attendance. Buyers may not have clear visibility on car details, and sellers cannot easily track bidding activity or manage car listings. This results in limited participation, slower sales cycles, and difficulty maintaining transparent pricing.',
  theSolution: 'The Car Auction System digitizes the auction process by allowing car owners to register and list vehicles while bidders can browse available cars and place bids in real-time. The system manages the entire bidding lifecycle, ensuring accuracy, transparency, and efficiency. Administrators can manage users, listings, and auction settings from a centralized dashboard.',
  theBenefits: 'Buyers get transparent, real-time updates on bidding status and vehicle details. Sellers gain wider reach and better control over their listings. Administrators benefit from structured oversight, improved security, and reduced manual workload. The system modernizes the auction experience with improved accessibility, accountability, and data-driven decision-making.'
},
{
  id: 3,
  title: 'Portfolio Website – Angular',
  category: "Personal Website",
  shortDesc: 'A modern portfolio website built with Angular that showcases projects, skills, and experience in a clean, responsive layout with dynamic navigation and live project demos.',
  imgUrl: 'assets/img/Larger-Portfolio_Cover.png',
  desc: 'A modern portfolio website built with Angular, designed to showcase projects, skills, and professional experience in a clean, responsive layout. The site highlights featured projects with live demos and GitHub links, presents technical skills in a structured way, and provides a clear view of frontend and full-stack development capabilities. Built with modular Angular components and scalable architecture, it ensures maintainability and responsiveness across desktop, tablet, and mobile devices.',
  liveDemo: "https://nsmwebdev.netlify.app/",
  images: {
          img1: "assets/img/nsm-1.png",
          img2: "assets/img/nsm-2.png",
          img3: "assets/img/nsm-3.png",
          img4: "assets/img/nsm-4.png",
      },
  gitHubLink: "#",
  vidUrl: "https://youtu.be/1zLizV4hgT0",
  theProblem: "Static resumes and PDF portfolios often fail to demonstrate real, working projects, provide an interactive user experience, or allow easy content updates without rebuilding.",
  theSolution: "This portfolio website serves as a central hub for showcasing work and achievements, featuring project detail pages with images, descriptions, and links, while using modular Angular components for scalability and maintainability.",
  theBenefits: "The website provides professional presentation through an engaging UI, responsive design optimized for all devices, and a scalable structure built on Angular best practices that makes content updates and extensions easier.",
},
{
  id: 4,
  title: 'Healthcare Appointment Booking System – Angular, ASP.NET Core, SQL Server',
  category: "Healthcare Management",
  shortDesc: 'A full-stack web application for booking and managing healthcare appointments, built with ASP.NET Core Web API, Angular, and SQL Server.',
  imgUrl: 'assets/img/HealthCare_Appointment_System – Angular  ASP.NET Core  SQL Server.png',
  desc: 'This healthcare platform allows patients to book appointments, doctors to manage schedules, and administrators to oversee users and reporting. Built with ASP.NET Core Web API, Angular, and SQL Server, it applies SOLID principles, JWT authentication, and role-based access control (RBAC) to ensure scalability, maintainability, and secure role-specific actions. The system improves transparency, reduces scheduling conflicts, and streamlines healthcare communication in a centralized, digital platform.',
  liveDemo: "#",
  images: {
          img1: "assets/img/hcs-1.png",
          img2: "assets/img/hcs-2.png",
          img3: "assets/img/hcs-3.png",
          img4: "assets/img/hcs-4.png",
      },
  gitHubLink: "https://github.com/nsmthethwa44/HCBS-Angular-ASP.NET-Core-SQL-Server",
  vidUrl: "https://youtu.be/GueNLZ4QtII",
  theProblem: "Healthcare appointment booking often relies on outdated or manual methods, leading to double bookings, poor communication, and wasted time for both patients and providers.",
  theSolution: "The Healthcare Appointment Booking System digitizes scheduling by allowing patients to book online, doctors to manage availability, and administrators to oversee the platform with secure, role-based access.",
  theBenefits: "Reduces scheduling conflicts, improves communication, and provides a secure, scalable, and transparent platform for managing appointments across patients, doctors, and administrators."
}

  ]

}
