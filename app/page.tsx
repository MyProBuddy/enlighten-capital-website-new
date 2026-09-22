"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

function Sector({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-10 rounded-2xl bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/5 backdrop-blur-sm flex flex-col justify-center text-center h-full hover:border-[#C9A14A]/30 transition-colors group"
    >
      <h3 className="text-xl md:text-2xl font-serif mb-3 group-hover:text-[#C9A14A] transition-colors">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function ProfileLink({ name, domain, href }: { name: string; domain: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <Image
        src={`https://icons.duckduckgo.com/ip3/${domain}.ico`}
        alt={name}
        width={20}
        height={20}
        unoptimized
        className="object-contain"
      />
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{name}</span>
    </a>
  );
}

const pressReleases = [
  {
    publication: "YourStory",
    date: "December 2024",
    title: "Enlighten Angel Fund rebrands to Enlighten Capital, raises ₹100 Cr micro VC fund",
    href: "https://yourstory.com/2024/12/enlighten-angel-fund-rebrands-enlighten-capital-raises-rs-100-cr-micro-vc-fund",
  },
  {
    publication: "BW Disrupt",
    date: "December 2024",
    title: "Enlighten Angel Fund rebrands to Enlighten Capital and introduces a micro VC fund",
    href: "https://www.bwdisrupt.com/article/enlighten-angel-fund-rebrands-to-enlighten-capital-introduces-rs-200-crore-micro-vc-fund-543211",
  },
];

export default function Home() {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none transition-colors duration-700 -z-10 bg-gradient-to-br from-[#F5F3EF] via-white to-[#EAE7E1] dark:from-[#05070D] dark:via-[#080A12] dark:to-black" />

      {/* HERO */}
      <div className="relative px-6 md:px-10 py-32 md:py-48 max-w-6xl mx-auto z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[56px] md:text-[80px] lg:text-[110px] font-serif leading-[0.95] tracking-tight max-w-[1100px] text-slate-900 dark:text-slate-100"
        >
          We invest before the market understands the opportunity.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-12 max-w-2xl border-l-[3px] border-[#C9A14A] pl-8"
        >
          <strong className="text-slate-800 dark:text-slate-200 font-serif text-2xl md:text-3xl block mb-2">Seed to Series A</strong>
          <span className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">Disciplined entry. Structured governance. Lasting ownership.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16 flex flex-wrap gap-6"
        >
          <a
            href="https://dealroom.enlightencapital.in/#startup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C9A14A] hover:bg-[#b08d41] text-black px-12 py-5 rounded-md font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#C9A14A]/20"
          >
            Apply for Funding
          </a>
          <Link
            href="/portfolio"
            className="inline-block border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 px-12 py-5 rounded-md font-bold text-sm tracking-widest uppercase transition-all text-slate-900 dark:text-slate-100"
          >
            Explore Portfolio
          </Link>
        </motion.div>
      </div>

      {/* STORY */}
      <section className="px-6 md:px-10 pb-40 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 md:p-20 rounded-[2.5rem] bg-white/40 dark:bg-white/5 border border-slate-200 dark:border-slate-800 backdrop-blur-md grid md:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="text-xs text-[#C9A14A] uppercase tracking-[4px] mb-8 font-bold">What we do</h2>
            <p className="text-4xl md:text-5xl font-serif leading-tight text-slate-900 dark:text-slate-100">
              We partner with founders at inflection points—where capital, clarity, and conviction matter most.
            </p>
          </div>
          <div className="flex flex-col justify-center border-l border-slate-200 dark:border-slate-800 pl-8 md:pl-16">
            <p className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 font-serif leading-relaxed mb-8">
              We don’t chase momentum.<br />
              <strong className="text-[#C9A14A] font-normal">We underwrite it.</strong>
            </p>
            <div className="h-[2px] w-20 bg-[#C9A14A] rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* INVESTMENT FOCUS */}
      <section className="px-6 md:px-10 py-32 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif mb-6 text-slate-900 dark:text-slate-100"
          >
            Investment Focus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 text-xl font-light"
          >
            Concentrated conviction in transformative technology.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Sector title="Deep Tech" desc="Hard engineering and breakthroughs that solve fundamental problems." />
          <Sector title="Fintech" desc="Modern financial infrastructure and broader access to capital." />
          <Sector title="SaaS" desc="Enterprise software solutions with scalable unit economics." />
          <Sector title="Emerging" desc="Identifying and enabling new markets through technological shifts." />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[2.5rem] bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black border border-[#C9A14A]/20 text-center"
        >
          <p className="text-2xl text-slate-500 dark:text-slate-400 font-serif tracking-wide">
            <strong className="text-[#C9A14A] font-normal italic mr-2">India focused.</strong> Global ambition.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-10 py-32 max-w-6xl mx-auto relative z-10 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs text-[#C9A14A] uppercase tracking-[4px] mb-5 font-bold">Media coverage</p>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 dark:text-slate-100">Enlighten Capital in the news</h2>
          </div>
          <p className="max-w-md text-slate-500 dark:text-slate-400 leading-relaxed md:text-right">
            Independent coverage of our fund, strategy, and evolution.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {pressReleases.map((release) => (
            <a
              key={release.href}
              href={release.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 md:p-10 rounded-3xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-slate-800 hover:border-[#C9A14A]/60 transition-colors"
            >
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src={`https://icons.duckduckgo.com/ip3/${new URL(release.href).hostname}.ico`}
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                  className="object-contain"
                />
                <span className="text-sm font-bold text-[#C9A14A]">{release.publication}</span>
                <span className="text-sm text-slate-400">{release.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif leading-snug text-slate-900 dark:text-slate-100 group-hover:text-[#C9A14A] transition-colors">
                {release.title}
              </h3>
              <span className="inline-block mt-10 text-xs uppercase tracking-[3px] font-bold text-slate-500 dark:text-slate-400">
                Read coverage
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 max-w-6xl mx-auto text-center relative z-10 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-[5px] mb-16 font-bold">
          External profiles
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
          <ProfileLink name="Tracxn" domain="tracxn.com" href="https://platform.tracxn.com/a/d/company/680c4e4ddda3fe5886db2887/enlightencapital#a:about" />
          <ProfileLink name="YNOS" domain="ynos.in" href="https://www.ynos.in/venture-capital/enlighten-capital-005853" />
        </div>
      </section>
    </section>
  );
}
