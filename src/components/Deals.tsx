import { useState, useEffect } from 'react';
import { Timer, ShoppingCart, Tag, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface DealsProps {
  addToCart: () => void;
}

export default function Deals({ addToCart }: DealsProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev; // Timer finished
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const deals = [
    {
      id: 1,
      name: "RTX 4070 Ti Gaming OC",
      originalPrice: 84999,
      price: 76499,
      image: "🎮",
      discount: 10,
      claimed: 65
    },
    {
      id: 2,
      name: "Samsung 980 PRO 1TB NVMe",
      originalPrice: 12999,
      price: 8499,
      image: "💾",
      discount: 35,
      claimed: 82
    },
    {
      id: 3,
      name: "Corsair RM850e 850W Gold",
      originalPrice: 11999,
      price: 9499,
      image: "⚡",
      discount: 21,
      claimed: 45
    },
    {
      id: 4,
      name: "Lian Li O11 Dynamic Evo",
      originalPrice: 14999,
      price: 12499,
      image: "🖥️",
      discount: 17,
      claimed: 28
    },
    {
      id: 5,
      name: "Ryzen 7 7800X3D",
      originalPrice: 38999,
      price: 33999,
      image: "⚙️",
      discount: 13,
      claimed: 91
    },
    {
      id: 6,
      name: "G.Skill Trident Z5 RGB 32GB",
      originalPrice: 13999,
      price: 10999,
      image: "🧠",
      discount: 21,
      claimed: 55
    }
  ];

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 p-8 mb-12 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full mb-4 border border-white/30">
              <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-medium">Flash Sale Ends In</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Mega Gaming Sale</h1>
            <p className="text-violet-100 text-lg max-w-lg">
              Grab up to 40% off on premium PC components. Limited stock available for these exclusive deals.
            </p>
          </div>

          <div className="flex gap-4 items-center bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">{formatTime(timeLeft.hours)}</div>
              <div className="text-xs text-violet-200 uppercase tracking-wider">Hours</div>
            </div>
            <div className="text-2xl text-white/50 font-light">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">{formatTime(timeLeft.minutes)}</div>
              <div className="text-xs text-violet-200 uppercase tracking-wider">Mins</div>
            </div>
            <div className="text-2xl text-white/50 font-light">:</div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-1">{formatTime(timeLeft.seconds)}</div>
              <div className="text-xs text-violet-200 uppercase tracking-wider">Secs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <Card key={deal.id} className="group relative overflow-hidden bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-violet-500 dark:hover:border-violet-500 transition-all hover:shadow-xl">
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-red-500 hover:bg-red-600 text-white border-0">
                -{deal.discount}% OFF
              </Badge>
            </div>
            
            <div className="p-6">
              <div className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center text-6xl mb-6 group-hover:scale-105 transition-transform duration-300">
                {deal.image}
              </div>
              
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {deal.name}
              </h3>
              
              <div className="flex items-end gap-2 mb-4">
                <span className="text-2xl font-bold text-zinc-900 dark:text-white">{formatPrice(deal.price)}</span>
                <span className="text-sm text-zinc-500 line-through mb-1">{formatPrice(deal.originalPrice)}</span>
              </div>

              <div className="space-y-3">
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-orange-500 h-full rounded-full"
                    style={{ width: `${deal.claimed}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>{deal.claimed}% Claimed</span>
                  <span className="text-red-500 font-medium">Hurry up!</span>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white border-0"
                  onClick={addToCart}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-16 bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-8 text-center border border-zinc-200 dark:border-zinc-800">
        <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Tag className="w-8 h-8 text-violet-600 dark:text-violet-400" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Never Miss a Deal</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-md mx-auto">
          Subscribe to our newsletter and get early access to flash sales and exclusive discounts.
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <Button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
