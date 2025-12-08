import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    projects = [
  {
  id: 1,
  title: "Real Estate System – Angular, ASP.NET Core, SQL Server",
  category: "Real Estate Management",
  shortDesc: "A full-stack real estate management platform enabling admins, sellers, and buyers to efficiently manage property listings, offers, and deals using Angular, ASP.NET Core, and SQL Server.",
  imgUrl: "assets/img/EstateFlow System – Angular, ASP.NET Core, SQL Server.png",
  desc: "EstateFlow is a comprehensive real estate management system built with ASP.NET Core Web API, Angular 20, and SQL Server. The platform provides a seamless workflow for managing property listings, offers, approvals, and closed deals. Designed using clean architecture and SOLID principles, EstateFlow ensures maintainability, scalability, and clear separation of concerns across services, repositories, and controller layers. With robust authentication and role-based access control (RBAC), admins, sellers, and buyers interact with the system through tailored dashboards and permissions. This architecture supports an efficient, secure, and modern approach to real estate operations.",
  liveDemo: "https://estateflowsystem.netlify.app/",
  images: {
    img1: "assets/img/estateflow-1.png",
    img2: "assets/img/estateflow-2.png",
    img3: "assets/img/estateflow-3.png",
    img4: "assets/img/estateflow-4.png"
  },
  gitHubLink: "https://github.com/nsmthethwa44/EstateFlowSystem",
  vidUrl: "https://youtu.be/yourEstateFlowVideo",
  theProblem: "Managing real estate listings, offers, and deals is often fragmented across multiple systems or offline processes. Sellers struggle to track offers efficiently, buyers lack transparency on property details and offer status, and admins face difficulty overseeing approvals and user activity. This leads to inefficiency, delayed transactions, miscommunication, and limited visibility for all parties involved.",
  theSolution: "EstateFlow centralizes the entire real estate workflow into one unified platform. Sellers can easily submit and manage property listings, buyers can browse available properties and place offers, and admins can approve listings, monitor activity, and oversee platform analytics. With real-time offer tracking, structured deal management, and automated notifications, EstateFlow modernizes the real estate transaction lifecycle for speed, clarity, and efficiency.",
  theBenefits: "Buyers gain greater transparency and faster access to property details and offer outcomes. Sellers get streamlined listing management and better control over incoming offers. Admins benefit from a centralized dashboard that reduces manual oversight and improves operational clarity. Overall, EstateFlow enhances accessibility, accountability, and decision-making across the entire real estate ecosystem."
},
{
  id: 2,
  title: 'Healthcare Appointment Booking System – Angular, ASP.NET Core, SQL Server',
  category: "Healthcare Management",
  shortDesc: 'A full-stack web application for booking and managing healthcare appointments, built with ASP.NET Core Web API, Angular, and SQL Server.',
  imgUrl: 'assets/img/HealthCare_Appointment_System – Angular  ASP.NET Core  SQL Server.png',
  desc: 'This healthcare platform allows patients to book appointments, doctors to manage schedules, and administrators to oversee users and reporting. Built with ASP.NET Core Web API, Angular, and SQL Server, it applies SOLID principles, JWT authentication, and role-based access control (RBAC) to ensure scalability, maintainability, and secure role-specific actions. The system improves transparency, reduces scheduling conflicts, and streamlines healthcare communication in a centralized, digital platform.',
  liveDemo: "https://happy-ground-0a36d730f.3.azurestaticapps.net/",
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
},
 {
  id: 3,
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



  ]

}
