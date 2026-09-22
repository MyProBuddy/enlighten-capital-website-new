export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 dark:border-white/5 px-6 md:px-10 py-12 text-sm text-center space-y-8 bg-white/30 dark:bg-black/30">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-500 dark:text-gray-400">
        <a href="https://platform.tracxn.com/a/d/company/680c4e4ddda3fe5886db2887/enlightencapital#a:about" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Tracxn</a>
        <a href="https://www.ynos.in/venture-capital/enlighten-capital-005853" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">YNOS</a>
        <a href="https://www.bwdisrupt.com/article/enlighten-angel-fund-rebrands-to-enlighten-capital-introduces-rs-200-crore-micro-vc-fund-543211" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">BW Disrupt</a>
        <a href="https://yourstory.com/2024/12/enlighten-angel-fund-rebrands-enlighten-capital-raises-rs-100-cr-micro-vc-fund" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">YourStory</a>
      </div>

      <div className="text-gray-400 dark:text-gray-600 text-xs font-light">
        © {new Date().getFullYear()} Enlighten Capital. All rights reserved.
      </div>
    </footer>
  );
}
