// src/data/projects.ts - Updated with more descriptive content
export const projects = [
  {
    title: "Stayora",
    description:
      "Multi-role rental platform with role-based dashboards for Guest, Host, and Admin, and a full reservation lifecycle.",
    images: [
      "/stayora/dashboard.png",
      "/stayora/property-detail.png",
      "/stayora/checkout-page.png",
      "/stayora/payment-page.png",
      "/stayora/host-dashboard.png",
      "/stayora/admin-dashboard.png",
    ],
    imageAlt: "Stayora - Rental platform preview",
    points: [
      'Role-based dashboards with <strong class="text-[#ededef] font-semibold">RBAC</strong> across Guest, Host, and Admin.',
      '<strong class="text-[#ededef] font-semibold">Conflict-free reservation engine</strong> with real-time availability validation — zero double-bookings.',
      'Scoped <strong class="text-[#ededef] font-semibold">chat system</strong> limited to active reservation participants.',
      "Centralized admin dashboard for moderation, cutting dispute resolution time by 40%.",
      '<strong class="text-[#ededef] font-semibold">JWT authentication</strong>, protected routes, and <strong class="text-[#ededef] font-semibold">Cloudinary</strong> for media storage.',
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Daksh-Vasala/Stayora",
    liveDemoUrl: "https://stayora-frontend.onrender.com/",
  },
  {
    title: "Scatch",
    description:
      "Full-stack e-commerce platform covering the complete purchase flow, with separate user and admin roles.",
    images: [
      "/scatch/dashboard.png",
      "/scatch/checkout-page.png",
      "/scatch/admin-dashboard.png",
      "/scatch/admin-product.png",
      "/scatch/admin-product-detail.png",
    ],
    imageAlt: "Scatch - E-commerce platform preview",
    points: [
      '<strong class="text-[#ededef] font-semibold">JWT authentication</strong> with distinct user and admin roles.',
      'Cart management, product filtering, and order processing built on <strong class="text-[#ededef] font-semibold">REST APIs</strong>.',
      'Input <strong class="text-[#ededef] font-semibold">validation</strong> and error handling across auth, product, and order endpoints.',
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Daksh-Vasala/Scatch",
    liveDemoUrl: undefined,
  },
  {
    title: "AI Component Generator",
    description:
      "AI-powered UI component generator that converts natural language descriptions into production-ready HTML code using Google Gemini AI, with live preview and export capabilities.",
    images: [
      "/ai-comp/dashboard.png",
      "/ai-comp/code.png",
      "/ai-comp/preview.png",
    ],
    imageAlt: "AI Component Generator - AI-powered UI code generator preview",
    points: [
      'Generates <strong class="text-[#ededef] font-semibold">production-ready HTML code</strong> from natural language prompts using Google Gemini AI.',
      'Multi-framework support with <strong class="text-[#ededef] font-semibold">framework selection</strong> (React, Vue, Angular, etc.) for tailored code generation.',
      '<strong class="text-[#ededef] font-semibold">Monaco Editor integration</strong> with syntax highlighting and <strong class="text-[#ededef] font-semibold">live iframe preview</strong> for instant code visualization.',
      'Export utilities including <strong class="text-[#ededef] font-semibold">copy to clipboard</strong>, <strong class="text-[#ededef] font-semibold">download as HTML</strong>, and <strong class="text-[#ededef] font-semibold">open preview in new tab</strong>.',
      'Dark-themed <strong class="text-[#ededef] font-semibold">responsive interface</strong> with split-panel layout, toast notifications, and loading states.',
    ],
    tags: [
      "React.js",
      "Google Gemini AI",
      "Monaco Editor",
      "Tailwind CSS",
      "react-toastify",
      "react-icons",
    ],
    githubUrl: "https://github.com/Daksh-Vasala/AI-component-generator",
    liveDemoUrl: undefined,
  },
];
