"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  position: string;
  scale: number;
};

const leadership: TeamMember[] = [
  {
    name: "Koushik Sekhar",
    role: "Founder and Managing Partner",
    image: "/team/hq-koushik.jpeg",
    linkedin: "https://www.linkedin.com/in/koushik-sekhar-9b6913163",
    position: "50% 38%",
    scale: 1.02,
  },
  {
    name: "Snehali M. Khamkar",
    role: "Co Founder and General Partner",
    image: "/team/hq-snehali.jpeg",
    linkedin: "https://www.linkedin.com/in/snehali-khamkar-011a55166",
    position: "50% 38%",
    scale: 1.15,
  },
  {
    name: "Maneesh Srivastava",
    role: "Co Founder and General Partner",
    image: "/team/hq-maneesh.jpeg",
    linkedin: "https://www.linkedin.com/in/maneeshsrivastav",
    position: "50% 45%",
    scale: 1.16,
  },
  {
    name: "Goutham Sekhar",
    role: "Chief Technology Officer",
    image: "/team/hq-goutham.jpeg",
    linkedin: "https://www.linkedin.com/in/gouthamsekhar",
    position: "50% 43%",
    scale: 1.08,
  },
  {
    name: "Arvind Subramanian",
    role: "Co Founder and Chief Strategy Officer",
    image: "/team/hq-arvind.jpeg",
    linkedin: "https://www.linkedin.com/in/arvindsubramaniam",
    position: "50% 42%",
    scale: 1.16,
  },
  {
    name: "Rohit Mohan",
    role: "Co Founder and General Partner",
    image: "/team/hq-rohit.jpeg",
    linkedin: "https://www.linkedin.com/in/rohit-mohan-43274011a",
    position: "50% 38%",
    scale: 1.12,
  },
];

const advisors: TeamMember[] = [
  {
    name: "Amit Singal",
    role: "Advisor to the Board",
    image: "/team/hq-amit.jpeg",
    linkedin: "https://www.linkedin.com/in/amitsingalca/",
    position: "50% 32%",
    scale: 1.06,
  },
  {
    name: "Amrish Krishnan",
    role: "Advisor to the Board and Head of Investment Banking",
    image: "/team/hq-amrish.jpg",
    linkedin: "https://www.linkedin.com/in/amrish-krishnan",
    position: "50% 32%",
    scale: 1,
  },
  {
    name: "Mandeep Singh",
    role: "Advisor to the Board",
    image: "/team/hq-mandeep.jpeg",
    linkedin: "https://www.linkedin.com/in/mandeepmsingh",
    position: "50% 38%",
    scale: 1.12,
  },
  {
    name: "Raj Kapoor",
    role: "Advisor to the Board",
    image: "/team/hq-raj.jpeg",
    linkedin: "https://www.linkedin.com/in/indieblock",
    position: "50% 40%",
    scale: 1.12,
  },
];

function MemberCard({ member, index, className = "" }: { member: TeamMember; index: number; className?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
      whileHover={{ y: -4 }}
      className={`group rounded-[2rem] border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-white/[0.04] p-3 pb-6 shadow-[0_18px_55px_-40px_rgba(15,23,42,0.45)] transition-colors hover:border-[#C9A14A]/45 ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-[#E9E5DD] dark:bg-slate-800 mb-5">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          style={{ objectPosition: member.position, transform: `scale(${member.scale})` }}
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.04] bg-gradient-to-t from-black/20 via-transparent to-white/[0.03]" aria-hidden="true" />
      </div>
      <div className="flex items-start justify-between gap-4 px-2">
        <div>
          <h3 className="text-2xl font-serif text-slate-900 dark:text-slate-100 mb-2">{member.name}</h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{member.role}</p>
        </div>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${member.name} on LinkedIn`}
          className="w-11 h-11 shrink-0 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-[#9A762A] dark:hover:text-[#C9A14A] hover:border-[#C9A14A] transition-colors"
        >
          <span aria-hidden="true" className="text-sm font-bold">in</span>
        </a>
      </div>
    </motion.article>
  );
}

export default function TeamPage() {
  return (
    <div className="relative min-h-[80vh] pt-16 pb-32">
      <div className="fixed inset-0 pointer-events-none transition-colors duration-700 -z-10 bg-gradient-to-br from-[#F5F3EF] via-white to-[#EAE7E1] dark:from-[#05070D] dark:via-[#080A12] dark:to-black" />

      <main className="px-6 md:px-10 max-w-6xl mx-auto w-full relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-xs text-[#9A762A] dark:text-[#C9A14A] tracking-[4px] uppercase mb-5 font-bold">Team</p>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 dark:text-slate-100 mb-6">
            Experience behind every partnership
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Operators, investors, and advisors working together to help ambitious founders build enduring companies.
          </p>
        </motion.header>

        <section aria-labelledby="leadership-heading" className="mb-28">
          <div className="mb-10 max-w-2xl">
            <h2 id="leadership-heading" className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-3">
              Leadership
            </h2>
            <p className="text-slate-600 dark:text-slate-400">Founders, partners, and technology leadership.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {leadership.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </section>

        <section aria-labelledby="advisors-heading">
          <div className="mb-10 max-w-2xl">
            <h2 id="advisors-heading" className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-slate-100 mb-3">
              Advisors
            </h2>
            <p className="text-slate-600 dark:text-slate-400">Specialist guidance across strategy, technology, and investment banking.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisors.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} className={index === advisors.length - 1 ? "lg:col-start-2" : ""} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
