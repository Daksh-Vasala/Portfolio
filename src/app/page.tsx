// src/app/page.tsx (updated container widths)
import Link from "next/link";
import { Mail, Phone, User, Briefcase } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import ProjectList from "@/components/ProjectList";
import SkillsSection from "@/components/SkillsSection";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section id="top" className="py-30 md:py-24">
        <div className="container max-w-180 mx-auto px-6">
          <p className="font-mono text-[13.5px] font-medium text-[#5b8cff] tracking-[0.04em] uppercase mb-5 reveal">
            MERN Stack Developer
          </p>
          <h1 className="text-[clamp(32px,5vw,46px)] font-bold leading-[1.2] tracking-[-0.02em] mb-5.5 text-[#ededef] reveal">
            Building secure, scalable full-stack web applications.
          </h1>
          <p className="text-[18px] leading-[1.65] text-[#a1a1a8] max-w-[60ch] mb-9 reveal">
            MERN Stack Developer focused on REST APIs, authentication, scalable
            backend architecture, and modern frontend development. Final-year
            Computer Engineering student actively seeking Full Stack, Backend,
            and SDE-1 opportunities.
          </p>
          <div className="flex gap-3 flex-wrap mb-10 reveal">
            <Link
              className="inline-flex items-center justify-center gap-2 px-5.5 py-3 rounded-lg text-[15px] font-semibold bg-[#ededef] text-[#0a0a0b] hover:opacity-90 transition-opacity"
              href="/resume/Daksh-resume.pdf"
              target="_blank"
              rel="noopener"
            >
              <User size={18} />
              Resume
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 px-5.5 py-3 rounded-lg text-[15px] font-semibold border border-[#232327] text-[#ededef] hover:border-[#3a3a42] hover:bg-[#111113] transition-colors"
              href="#projects"
            >
              <Briefcase size={18} />
              View Projects
            </Link>
          </div>
          <div className="font-mono text-[13.5px] text-[#6b6b72] flex items-center gap-2 flex-wrap reveal">
            <Link
              href="mailto:vasaladaksh5@gmail.com"
              className="hover:text-[#a1a1a8] transition-colors inline-flex items-center gap-1.5"
            >
              <Mail size={14} />
              vasaladaksh5@gmail.com
            </Link>
            <span className="text-[#3a3a42]">·</span>
            <Link
              href="tel:+919099245006"
              className="hover:text-[#a1a1a8] transition-colors inline-flex items-center gap-1.5"
            >
              <Phone size={14} />
              +91 90992 45006
            </Link>
            <span className="text-[#3a3a42]">·</span>
            <span>Ahmedabad, Gujarat, India</span>
            <span className="text-[#3a3a42]">·</span>
            <Link
              href="https://github.com/Daksh-Vasala"
              target="_blank"
              rel="noopener"
              className="hover:text-[#a1a1a8] transition-colors inline-flex items-center gap-1.5"
            >
              <GitHubIcon size={14} />
              GitHub
            </Link>
            <span className="text-[#3a3a42]">·</span>
            <Link
              href="https://linkedin.com/in/daksh-vasala"
              target="_blank"
              rel="noopener"
              className="hover:text-[#a1a1a8] transition-colors inline-flex items-center gap-1.5"
            >
              <LinkedInIcon size={14} />
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-24 border-t border-[#232327]">
        <div className="container max-w-275 mx-auto px-6">
          <h2 className="text-[28px] font-bold tracking-[-0.01em] mb-3 text-[#ededef] reveal">
            Featured Projects
          </h2>
          <p className="text-[16.5px] text-[#a1a1a8] max-w-[56ch] mb-12 reveal">
            A closer look at what I&lsquo;ve built end-to-end — architecture,
            auth, and the details that make an app production-ready.
          </p>
          <ProjectList projects={projects} />
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="py-24 border-t border-[#232327]">
        <div className="container max-w-180 mx-auto px-6">
          <h2 className="text-[28px] font-bold tracking-[-0.01em] mb-3 text-[#ededef] reveal">
            Experience
          </h2>
          <div className="reveal">
            <div className="flex items-baseline justify-between gap-4 flex-wrap mb-4.5 pb-4.5 border-b border-[#232327]">
              <div>
                <h3 className="text-[19px] font-bold m-0 mb-1">
                  MERN Stack Intern
                </h3>
                <p className="text-[15px] text-[#a1a1a8] m-0">
                  Royal Technosoft Pvt. Ltd. — Ahmedabad, Gujarat
                </p>
              </div>
              <span className="font-mono text-[13.5px] text-[#6b6b72] whitespace-nowrap">
                Jan 2026 – Apr 2026
              </span>
            </div>
            <ul className="m-0 pl-5 text-[15.5px] text-[#a1a1a8] list-disc">
              <li className="mb-2.5">
                Developed a{" "}
                <strong className="text-[#ededef] font-semibold">
                  multi-role rental platform
                </strong>{" "}
                supporting Guest, Host, and Admin workflows with{" "}
                <strong className="text-[#ededef] font-semibold">RBAC</strong>.
              </li>
              <li className="mb-2.5">
                Designed{" "}
                <strong className="text-[#ededef] font-semibold">
                  REST APIs
                </strong>{" "}
                for authentication, listings, and user management using{" "}
                <strong className="text-[#ededef] font-semibold">
                  Node.js
                </strong>
                ,{" "}
                <strong className="text-[#ededef] font-semibold">
                  Express.js
                </strong>
                , and{" "}
                <strong className="text-[#ededef] font-semibold">
                  MongoDB
                </strong>{" "}
                — reduced response time by 25%.
              </li>
              <li className="mb-2.5">
                Engineered a conflict-free reservation system with availability
                validation, eliminating 100% of double-booking errors.
              </li>
              <li className="mb-2.5">
                Implemented{" "}
                <strong className="text-[#ededef] font-semibold">
                  JWT + session authentication
                </strong>
                , protected routes, authorization middleware, and{" "}
                <strong className="text-[#ededef] font-semibold">
                  Cloudinary
                </strong>{" "}
                integration.
              </li>
              <li className="mb-2.5">
                Built responsive UI components using{" "}
                <strong className="text-[#ededef] font-semibold">
                  React.js
                </strong>{" "}
                and{" "}
                <strong className="text-[#ededef] font-semibold">
                  Tailwind CSS
                </strong>{" "}
                — improved page load speed by 30%.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="py-18 border-t border-[#232327]">
        <div className="container max-w-180 mx-auto px-6">
          <h2 className="text-[28px] font-bold tracking-[-0.01em] mb-3 text-[#ededef] reveal">
            Skills
          </h2>
          <SkillsSection categories={skillCategories} />
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="py-18 border-t border-[#232327]">
        <div className="container max-w-180 mx-auto px-6">
          <h2 className="text-[28px] font-bold tracking-[-0.01em] mb-3 text-[#ededef] reveal">
            Education
          </h2>
          <div className="flex items-baseline justify-between gap-4 flex-wrap reveal">
            <div>
              <h3 className="text-[18px] font-bold m-0 mb-1">
                B.E. Computer Engineering
              </h3>
              <p className="text-[15px] text-[#a1a1a8] m-0">
                Government Engineering College, Modasa — CGPA 7.22/10
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section
        id="contact"
        className="py-24 border-t border-[#232327] text-center"
      >
        <div className="container max-w-180 mx-auto px-6">
          <h2 className="text-[30px] font-bold tracking-[-0.01em] m-0 mb-3.5 reveal">
            Let&apos;s build something together.
          </h2>
          <p className="text-[16.5px] text-[#a1a1a8] m-0 mb-8 reveal">
            I&apos;m actively looking for Full Stack Developer, Backend
            Developer, and SDE-1 roles. Feel free to reach out.
          </p>
          <div className="flex justify-center gap-3 flex-wrap reveal">
            <Link
              className="inline-flex items-center justify-center gap-2 px-5.5 py-3 rounded-lg text-[15px] font-semibold bg-[#ededef] text-[#0a0a0b] hover:opacity-90 transition-opacity"
              href="mailto:vasaladaksh5@gmail.com"
            >
              <Mail size={18} />
              Email Me
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 px-5.5 py-3 rounded-lg text-[15px] font-semibold border border-[#232327] text-[#ededef] hover:border-[#3a3a42] hover:bg-[#111113] transition-colors"
              href="https://linkedin.com/in/daksh-vasala"
              target="_blank"
              rel="noopener"
            >
              <LinkedInIcon size={18} />
              LinkedIn
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 px-5.5 py-3 rounded-lg text-[15px] font-semibold border border-[#232327] text-[#ededef] hover:border-[#3a3a42] hover:bg-[#111113] transition-colors"
              href="https://github.com/Daksh-Vasala"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon size={18} />
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
