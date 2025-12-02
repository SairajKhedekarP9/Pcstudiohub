import { useState, useMemo } from 'react';
import { Filter, ChevronDown, Star, Heart, ShoppingCart, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';
import { graphicsCards } from '../data/components';

interface ProductListingProps {
  addToCart: () => void;
}

export default function ProductListing({ addToCart }: ProductListingProps) {
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSeries, setSelectedSeries] = useState<string[]>([]);
  const [selectedVRAM, setSelectedVRAM] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popularity');

  const products = graphicsCards.map((card, idx) => ({
    id: idx + 1,
    name: card.name,
    brand: card.brand,
    price: card.price,
    originalPrice: card.price + Math.round(card.price * (Math.random() * 0.1 + 0.05)),
    rating: 4.3 + Math.random() * 0.6,
    reviews: Math.floor(Math.random() * 500) + 50,
    inStock: Math.random() > 0.1,
    specs: card.specs,
    vram: card.vram,
    series: card.series,
    badge: idx < 5 ? ['Best Seller', 'Hot Deal', 'Popular', 'Value Pick', 'New'][idx % 5] : undefined,
  }));

  const brands = Array.from(new Set(graphicsCards.map(c => c.brand))).sort();
  const series = Array.from(new Set(graphicsCards.map(c => c.series))).sort();
  const vramOptions = Array.from(new Set(graphicsCards.map(c => `${c.vram}GB`))).sort((a, b) => 
    parseInt(a) - parseInt(b)
  );

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleSeries = (series: string) => {
    setSelectedSeries(prev =>
      prev.includes(series) ? prev.filter(s => s !== series) : [...prev, series]
    );
  };

  const toggleVRAM = (vram: string) => {
    setSelectedVRAM(prev =>
      prev.includes(vram) ? prev.filter(v => v !== vram) : [...prev, vram]
    );
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }

    // Filter by selected series
    if (selectedSeries.length > 0) {
      filtered = filtered.filter(p => selectedSeries.includes(p.series));
    }

    // Filter by selected VRAM
    if (selectedVRAM.length > 0) {
      filtered = filtered.filter(p => selectedVRAM.includes(`${p.vram}GB`));
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Keep original order
        break;
      default:
        // popularity
        filtered = [...filtered].sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return filtered;
  }, [products, priceRange, selectedBrands, selectedSeries, selectedVRAM, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
        Home / Products / <span className="text-zinc-900 dark:text-white font-medium">Graphics Cards</span>
      </div>

      {/* Page Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent font-bold">
            Graphics Cards
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">Showing {filteredProducts.length} of {products.length} products</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48 bg-white dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800/50 text-zinc-900 dark:text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800/50 p-6 sticky top-24 shadow-xl transition-colors">
            <div className="flex items-center justify-between mb-6">
              <h3 className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent font-bold">
                <Filter className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                Filters
              </h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300"
                onClick={() => {
                  setSelectedBrands([]);
                  setSelectedSeries([]);
                  setSelectedVRAM([]);
                  setPriceRange([0, 200000]);
                }}
              >
                Clear All
              </Button>
            </div>

            {/* Price Range Filter */}
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white">
                <span>Price Range</span>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 pb-6">
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={200000}
                    step={1000}
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <div className="px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-900 dark:text-zinc-200">
                      {formatPrice(priceRange[0])}
                    </div>
                    <span className="text-zinc-500">to</span>
                    <div className="px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-900 dark:text-zinc-200">
                      {formatPrice(priceRange[1])}
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Brand Filter */}
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white">
                <span>Brand</span>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 pb-6">
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center gap-2">
                      <Checkbox
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <label htmlFor={brand} className="text-sm cursor-pointer flex-1 text-zinc-700 dark:text-zinc-300">
                        {brand}
                      </label>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500">
                        ({brand === 'NVIDIA' ? '4' : brand === 'AMD' ? '2' : '0'})
                      </span>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Series Filter */}
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white">
                <span>Series</span>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 pb-6 max-h-48 overflow-y-auto">
                <div className="space-y-3">
                  {series.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <Checkbox 
                        id={s}
                        checked={selectedSeries.includes(s)}
                        onCheckedChange={() => toggleSeries(s)}
                      />
                      <label htmlFor={s} className="text-sm cursor-pointer flex-1 text-zinc-700 dark:text-zinc-300">
                        {s}
                      </label>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Stock Status */}
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white">
                <span>Availability</span>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 pb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="in-stock" defaultChecked />
                    <label htmlFor="in-stock" className="text-sm cursor-pointer text-zinc-700 dark:text-zinc-300">
                      In Stock
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="pre-order" />
                    <label htmlFor="pre-order" className="text-sm cursor-pointer text-zinc-700 dark:text-zinc-300">
                      Pre-Order
                    </label>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* VRAM Size */}
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 border-b border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white">
                <span>VRAM Size</span>
                <ChevronDown className="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 pb-6">
                <div className="space-y-3">
                  {vramOptions.map((size) => (
                    <div key={size} className="flex items-center gap-2">
                      <Checkbox 
                        id={size}
                        checked={selectedVRAM.includes(size)}
                        onCheckedChange={() => toggleVRAM(size)}
                      />
                      <label htmlFor={size} className="text-sm cursor-pointer text-zinc-700 dark:text-zinc-300">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800/50 p-12 text-center">
              <p className="text-zinc-500 dark:text-zinc-400 mb-4">No products found matching your filters.</p>
              <Button 
                variant="outline" 
                className="border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white"
                onClick={() => {
                  setSelectedBrands([]);
                  setSelectedSeries([]);
                  setSelectedVRAM([]);
                  setPriceRange([0, 200000]);
                }}
              >
                Clear All Filters
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800/50 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all overflow-hidden group"
                >
                  <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 z-10 bg-gradient-to-r from-fuchsia-600 to-pink-600 shadow-lg border-0 text-white">
                        {product.badge}
                      </Badge>
                    )}
                    <div className="absolute top-3 right-3 z-10">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
                      >
                        <Heart className="w-5 h-5" />
                      </Button>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-fuchsia-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                      🎮
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs border-violet-300 dark:border-violet-700 text-violet-600 dark:text-violet-400">
                        {product.brand}
                      </Badge>
                      {product.inStock && (
                        <Badge variant="outline" className="text-xs border-green-300 dark:border-green-700 text-green-600 dark:text-green-400">
                          <Check className="w-3 h-3 mr-1" />
                          In Stock
                        </Badge>
                      )}
                    </div>

                    <h3 className="mb-2 line-clamp-2 text-zinc-900 dark:text-white font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-fuchsia-600 dark:group-hover:from-violet-400 dark:group-hover:to-fuchsia-400 group-hover:bg-clip-text transition-all">
                      {product.name}
                    </h3>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3 line-clamp-1">{product.specs}</p>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">{product.rating.toFixed(1)}</span>
                      </div>
                      <span className="text-xs text-zinc-500">({product.reviews} reviews)</span>
                    </div>

                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-2xl bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent font-bold">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-sm text-zinc-500 line-through mb-1">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    {product.originalPrice && product.originalPrice > product.price && (
                      <div className="text-xs text-transparent bg-gradient-to-r from-fuchsia-600 to-pink-600 dark:from-fuchsia-400 dark:to-pink-400 bg-clip-text mb-3 font-medium">
                        Save {formatPrice(product.originalPrice - product.price)}
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-lg hover:shadow-violet-500/50 transition-all text-white border-0"
                        onClick={addToCart}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="icon" className="border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}