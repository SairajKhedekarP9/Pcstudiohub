import { ArrowRight, Shield, Truck, Headphones, Award, Cpu, MonitorPlay } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface HomepageProps {
  navigateTo: (page: 'home' | 'products' | 'builder' | 'checkout') => void;
}

export default function Homepage({ navigateTo }: HomepageProps) {
  const categories = [
    {
      name: 'Graphics Cards',
      icon: '🎮',
      image: 'gaming computer graphics',
      products: '150+ Models',
      startingPrice: '₹15,999',
    },
    {
      name: 'Processors',
      icon: '⚙️',
      image: 'computer processor cpu',
      products: '80+ Models',
      startingPrice: '₹8,499',
    },
    {
      name: 'Motherboards',
      icon: '🔌',
      image: 'computer motherboard',
      products: '120+ Models',
      startingPrice: '₹6,999',
    },
    {
      name: 'Gaming Monitors',
      icon: '🖥️',
      image: 'gaming monitor rgb',
      products: '90+ Models',
      startingPrice: '₹11,999',
    },
  ];

  const featuredBuilds = [
    {
      name: 'Entry Gaming PC',
      price: '₹45,999',
      specs: 'RTX 4060 • Ryzen 5 5600 • 16GB RAM',
      savings: 'Save ₹5,000',
    },
    {
      name: 'Performance Build',
      price: '₹89,999',
      specs: 'RTX 4070 Ti • i5-13600K • 32GB RAM',
      savings: 'Save ₹8,000',
    },
    {
      name: 'Ultimate Gaming',
      price: '₹1,89,999',
      specs: 'RTX 4090 • i9-14900K • 64GB RAM',
      savings: 'Save ₹15,000',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-50 via-violet-50 to-fuchsia-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-violet-950/50 transition-colors">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhjNWNmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-fuchsia-600/5 to-cyan-600/5"></div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30 rounded-full mb-6 shadow-lg shadow-violet-500/10">
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent text-sm font-medium">✨ New PC Builder 3.0 Now Live</span>
              </div>
              <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-zinc-900 via-violet-700 to-fuchsia-700 dark:from-white dark:via-violet-200 dark:to-fuchsia-200 bg-clip-text text-transparent font-bold tracking-tight">
                Build Your Dream PC Online
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                India's most advanced PC configurator with real-time compatibility checking. 
                Choose from 1000+ components with transparent pricing in ₹.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-105 text-lg px-8 transition-all text-white border-0"
                  onClick={() => navigateTo('builder')}
                >
                  Start Building <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-violet-500 dark:hover:border-violet-500 text-lg transition-all text-zinc-900 dark:text-white"
                  onClick={() => navigateTo('products')}
                >
                  Browse Components
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span>10,000+ Builds Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-fuchsia-500 rounded-full animate-pulse shadow-lg shadow-violet-500/50"></div>
                  <span>Expert Support</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 blur-3xl opacity-20 rounded-full animate-pulse"></div>
              <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50 rounded-2xl p-8 shadow-2xl transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-zinc-600 dark:text-zinc-400">Featured Build</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-fuchsia-600/20 to-pink-600/20 border border-fuchsia-500/30 text-fuchsia-600 dark:text-fuchsia-400 rounded-full text-sm shadow-lg font-medium">Hot Deal</span>
                </div>
                <h3 className="text-2xl mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent font-bold">Ultimate Gaming Rig</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">RTX 4090 • i9-14900K • 64GB DDR5</p>
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-4xl bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent font-bold">₹1,89,999</span>
                  <span className="text-xl text-zinc-500 line-through mb-1">₹2,04,999</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 hover:shadow-xl hover:shadow-violet-500/50 transition-all text-white border-0">
                  View Configuration
                </Button>
                <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-700">
                  <div>
                    <div className="text-2xl mb-1 text-zinc-900 dark:text-white font-bold">4K</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">Gaming Ready</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-1 text-zinc-900 dark:text-white font-bold">165Hz</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">Supported</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-1 text-zinc-900 dark:text-white font-bold">RGB</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">Sync Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-zinc-100 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-600/20 rounded-lg flex items-center justify-center transition-colors">
                <Truck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Free Shipping</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">All India Delivery</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-600/20 rounded-lg flex items-center justify-center transition-colors">
                <Shield className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Secure Payment</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">UPI, Cards, EMI</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-600/20 rounded-lg flex items-center justify-center transition-colors">
                <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">3 Year Warranty</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">On Select Products</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-600/20 rounded-lg flex items-center justify-center transition-colors">
                <Headphones className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">24/7 Support</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">Expert Assistance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl mb-2 font-bold text-zinc-900 dark:text-white">Shop by Category</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Explore our extensive range of PC components</p>
          </div>
          <Button variant="outline" className="border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white" onClick={() => navigateTo('products')}>
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-purple-600 dark:hover:border-purple-600 transition-all cursor-pointer overflow-hidden group shadow-md hover:shadow-xl"
              onClick={() => navigateTo('products')}
            >
              <div className="aspect-square bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 font-semibold text-zinc-900 dark:text-white">{category.name}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">{category.products}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 dark:text-purple-400 font-medium">Starting at {category.startingPrice}</span>
                  <ArrowRight className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Builds */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-3 font-bold text-zinc-900 dark:text-white">Pre-Configured Gaming PCs</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Expertly curated builds optimized for performance. Save time and money with our ready-to-ship configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBuilds.map((build, index) => (
            <Card key={index} className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-purple-600 dark:hover:border-purple-600 transition-all overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-zinc-100 dark:from-purple-950 dark:to-zinc-900 relative">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-pink-600 text-white rounded-full text-sm font-medium">
                    {build.savings}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <MonitorPlay className="w-20 h-20 text-purple-400/50" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 font-semibold text-zinc-900 dark:text-white">{build.name}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">{build.specs}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl text-green-600 dark:text-green-400 font-bold">{build.price}</span>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-500 text-white border-0">
                    Buy Now
                  </Button>
                  <Button variant="outline" className="border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white">
                    Customize
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-100 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-3 font-bold text-zinc-900 dark:text-white">Why Choose PCStudio?</h2>
            <p className="text-zinc-600 dark:text-zinc-400">India's most trusted PC building platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/20">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 font-semibold text-zinc-900 dark:text-white">Real-Time Compatibility</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Our advanced PC Builder instantly checks component compatibility, ensuring your build works perfectly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-500/20">
                <span className="text-2xl text-white font-bold">₹</span>
              </div>
              <h3 className="text-xl mb-2 font-semibold text-zinc-900 dark:text-white">Transparent Pricing</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                All prices in Indian Rupees with GST included. No hidden charges. What you see is what you pay.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 font-semibold text-zinc-900 dark:text-white">Expert Support</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Get assistance from our team of PC building experts via chat, phone, or email. We're always here to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}