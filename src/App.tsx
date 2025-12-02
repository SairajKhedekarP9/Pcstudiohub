import { useState, useEffect } from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  User,
  Heart,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";
import Homepage from "./components/Homepage";
import ProductListing from "./components/ProductListing";
import PCBuilder from "./components/PCBuilder";
import Checkout from "./components/Checkout";
import Deals from "./components/Deals";
import Support from "./components/Support";

type Page =
  | "home"
  | "products"
  | "builder"
  | "checkout"
  | "deals"
  | "support";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [cartCount, setCartCount] = useState(0);
  const [builderItems, setBuilderItems] = useState<any[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Update document class for dark mode
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getNavLinkClass = (page: Page) => {
    const isActive = currentPage === page;
    const baseClass = "transition-colors";
    if (isActive) {
      return `${baseClass} text-violet-600 dark:text-violet-400 font-medium`;
    }
    return `${baseClass} text-zinc-900 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/98 dark:bg-zinc-900/98 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50 shadow-xl shadow-purple-900/10 transition-colors">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="py-2 text-sm border-b border-zinc-200 dark:border-zinc-800/50 flex justify-between items-center">
            <div className="flex gap-6">
              <span className="text-zinc-600 dark:text-zinc-400">
                📞 +91 7218426980
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">
                📧 support@pc-studio.in
              </span>
            </div>
            <div className="flex gap-4 text-zinc-600 dark:text-zinc-400">
              <span className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                Track Order
              </span>
              <span className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                Help
              </span>
            </div>
          </div>

          {/* Main Header */}
          <div className="py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <button
                onClick={() => navigateTo("home")}
                className="flex items-center gap-2 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-violet-500/50 transition-all">
                  <span className="text-xl">⚡</span>
                </div>
                <span className="text-2xl tracking-tight bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent font-bold">
                  PCStudio
                </span>
              </button>

              <nav className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => navigateTo("home")}
                  className={getNavLinkClass("home")}
                >
                  Home
                </button>
                <button
                  onClick={() => navigateTo("products")}
                  className={getNavLinkClass("products")}
                >
                  Products
                </button>
                <button
                  onClick={() => navigateTo("builder")}
                  className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all group text-white"
                >
                  <span className="relative z-10">
                    PC Builder
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button
                  onClick={() => navigateTo("deals")}
                  className={getNavLinkClass("deals")}
                >
                  Deals
                </button>
                <button
                  onClick={() => navigateTo("support")}
                  className={getNavLinkClass("support")}
                >
                  Support
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 dark:text-zinc-500" />
                <Input
                  placeholder="Search for products..."
                  className="pl-10 bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 focus:border-violet-600 dark:focus:border-violet-500 text-zinc-900 dark:text-white placeholder:text-zinc-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-700 dark:text-zinc-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
                onClick={toggleTheme}
                title={
                  isDarkMode
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"
                }
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-zinc-700 dark:text-zinc-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors"
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <User className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                onClick={() => navigateTo("checkout")}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-gradient-to-r from-fuchsia-600 to-pink-600 animate-pulse text-white border-0">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-zinc-700 dark:text-zinc-300"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentPage === "home" && (
          <Homepage navigateTo={navigateTo} />
        )}
        {currentPage === "products" && (
          <ProductListing addToCart={addToCart} />
        )}
        {currentPage === "builder" && (
          <PCBuilder
            builderItems={builderItems}
            setBuilderItems={setBuilderItems}
          />
        )}
        {currentPage === "checkout" && <Checkout />}
        {currentPage === "deals" && (
          <Deals addToCart={addToCart} />
        )}
        {currentPage === "support" && <Support />}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-20 transition-colors">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4 text-zinc-900 dark:text-white font-bold">
                PCStudio
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                India's trusted destination for PC components
                and custom builds since 2020.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm text-zinc-900 dark:text-zinc-400 font-semibold">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm text-zinc-900 dark:text-zinc-400 font-semibold">
                Support
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    Warranty
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm text-zinc-900 dark:text-zinc-400 font-semibold">
                Payment Methods
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                UPI • Cards • EMI • Net Banking
              </p>
              <div className="mt-4 flex gap-2">
                <div className="w-12 h-8 bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center text-xs text-zinc-600 dark:text-zinc-400">
                  ₹
                </div>
                <div className="w-12 h-8 bg-zinc-200 dark:bg-zinc-800 rounded flex items-center justify-center text-xs text-zinc-600 dark:text-zinc-400">
                  🔒
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
            <p>© 2025 PCStudio India. All rights reserved. </p>
          </div>
        </div>
      </footer>
    </div>
  );
}