"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const companies = [
  { name: "Samaaro", sector: "Enterprise SaaS and MarTech", description: "An event marketing and attribution platform that helps enterprise teams plan, promote, run, and measure events as a growth channel.", image: "/portfolio/samaaro.webp", href: "https://samaaro.com/" },
  { name: "DeepTechGenie", sector: "Deep Technology, AI, and Smart Retail", description: "Builds enterprise solutions using artificial intelligence, IoT, computer vision, and edge intelligence, including the Zer0Que autonomous checkout platform.", image: "/portfolio/deeptechgenie-logo.png", href: "https://deeptechgenie.com/" },
  { name: "FarmDidi", sector: "Food and Rural Enterprise", description: "A food company that works with rural women entrepreneurs to create trusted regional products while building sustainable livelihoods.", image: "/portfolio/farmdidi.png", href: "https://www.farmdidi.com/" },
  { name: "Kreo", sector: "Consumer Technology", description: "An Indian consumer technology brand creating purpose built electronics and accessories for gamers, creators, and modern workspaces.", image: "/portfolio/kreo.jpg", href: "https://kreo-tech.com/" },
];

export default function PortfolioPage() {
  return (
    <div className="relative min-h-[80vh] pt-16 pb-32">
      <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-br from-[#F5F3EF] via-white to-[#EAE7E1] dark:from-[#05070D] dark:via-[#080A12] dark:to-black" />
      <main className="px-6 md:px-10 max-w-6xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
          <p className="text-xs text-[#9A762A] dark:text-[#C9A14A] tracking-[4px] uppercase mb-5 font-bold">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-slate-900 dark:text-slate-100">Companies building what comes next</h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">We back focused teams solving meaningful problems with technology, insight, and disciplined execution.</p>
        </motion.header>
        <section aria-labelledby="portfolio-companies" className="mb-24">
          <h2 id="portfolio-companies" className="sr-only">Portfolio companies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <motion.article key={company.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="p-8 md:p-10 border border-slate-200 dark:border-slate-800 rounded-3xl bg-white/70 dark:bg-white/5 flex flex-col">
                <div className="relative w-48 h-24 mb-8"><Image src={company.image} alt={`${company.name} logo`} fill sizes="192px" className="object-contain object-left" /></div>
                <p className="text-[#9A762A] dark:text-[#C9A14A] text-xs font-bold uppercase tracking-[0.18em] mb-3">{company.sector}</p>
                <h3 className="text-3xl md:text-4xl font-serif mb-4 text-slate-900 dark:text-slate-100">{company.name}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">{company.description}</p>
                <a href={company.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${company.name} website`} className="mt-8 inline-flex items-center gap-2 min-h-11 text-sm font-semibold hover:text-[#9A762A] dark:hover:text-[#C9A14A]">Visit company website <ArrowUpRight size={16} aria-hidden="true" /></a>
              </motion.article>
            ))}
          </div>
        </section>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <section><h2 className="text-2xl font-light mb-6">Investment philosophy</h2><p className="text-lg mb-6">We construct portfolios, not collections.</p><p className="text-gray-600 dark:text-gray-400 mb-4">Every investment is evaluated on</p><ul className="text-gray-600 dark:text-gray-400 leading-loose list-disc pl-5"><li>Asymmetric upside</li><li>Capital efficiency</li><li>Founder and market alignment</li></ul></section>
          <section><h2 className="text-2xl font-light mb-6">Governance</h2><p className="text-lg mb-6">We stay involved.</p><ul className="text-gray-600 dark:text-gray-400 leading-loose list-disc pl-5 mb-6"><li>Board participation</li><li>Monthly reporting</li><li>Quarterly reviews</li></ul><p className="text-gray-600 dark:text-gray-400">Capital is deployed with discipline.<br />Follow on investments are earned, not assumed.</p></section>
        </div>
      </main>
    </div>
  );
}
