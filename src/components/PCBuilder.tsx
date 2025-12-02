import { useState, useMemo } from 'react';
import { CheckCircle2, AlertTriangle, ChevronRight, Cpu, MonitorPlay, HardDrive, Zap, Box, Fan, CircuitBoard, MemoryStick, X, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { processors, motherboards, graphicsCards, memory, storage, psus, cases, cooling } from '../data/components';
import type { Processor, Motherboard, GraphicsCard, Memory, Storage, PSU, Case, Cooling } from '../data/components';

interface BuilderItem {
  category: string;
  name: string;
  price: number;
  specs?: string;
  socket?: string;
  chipset?: string;
  wattage?: number;
  formFactor?: string;
  tdp?: number;
  memoryType?: string;
}

interface PCBuilderProps {
  builderItems: BuilderItem[];
  setBuilderItems: (items: BuilderItem[]) => void;
}

export default function PCBuilder({ builderItems, setBuilderItems }: PCBuilderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('processor');
  const [compatibilityIssues, setCompatibilityIssues] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [brandFilter, setBrandFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'processor', name: 'Processor', icon: Cpu, required: true },
    { id: 'motherboard', name: 'Motherboard', icon: CircuitBoard, required: true },
    { id: 'graphics', name: 'Graphics Card', icon: MonitorPlay, required: false },
    { id: 'memory', name: 'RAM', icon: MemoryStick, required: true },
    { id: 'storage', name: 'Storage', icon: HardDrive, required: true },
    { id: 'psu', name: 'Power Supply', icon: Zap, required: true },
    { id: 'case', name: 'Case', icon: Box, required: true },
    { id: 'cooling', name: 'Cooling', icon: Fan, required: false },
  ];

  const checkCompatibility = (newItem: BuilderItem, currentItems: BuilderItem[]) => {
    const issues: string[] = [];
    const allItems = [...currentItems.filter(i => i.category !== newItem.category), newItem];

    const processor = allItems.find(i => i.category === 'processor');
    const motherboard = allItems.find(i => i.category === 'motherboard');
    const graphics = allItems.find(i => i.category === 'graphics');
    const psu = allItems.find(i => i.category === 'psu');
    const caseItem = allItems.find(i => i.category === 'case');
    const ram = allItems.find(i => i.category === 'memory');

    // Check CPU and Motherboard socket compatibility
    if (processor && motherboard && processor.socket !== motherboard.socket) {
      issues.push(`⚠️ CPU socket ${processor.socket} incompatible with motherboard socket ${motherboard.socket}`);
    }

    // Check RAM and Motherboard memory type compatibility
    if (ram && motherboard && ram.memoryType !== motherboard.memoryType) {
      issues.push(`⚠️ RAM type ${ram.memoryType} incompatible with motherboard (requires ${motherboard.memoryType})`);
    }

    // Check PSU wattage
    if (psu && (graphics || processor)) {
      const totalTDP = (processor?.tdp || 0) + (graphics?.wattage || 0);
      const recommendedPSU = Math.ceil(totalTDP * 1.4);
      if (psu.wattage < recommendedPSU) {
        issues.push(`⚠️ PSU ${psu.wattage}W may be insufficient. Recommended: ${recommendedPSU}W+ for optimal performance`);
      }
    }

    // Check case and motherboard form factor
    if (caseItem && motherboard && caseItem.formFactor !== motherboard.formFactor && motherboard.formFactor === 'ATX') {
      // Most cases support ATX, so only warn on specific mismatches
    }

    return issues;
  };

  const getComponentData = (categoryId: string): any[] => {
    const selectedProcessor = builderItems.find(i => i.category === 'processor');
    const selectedMotherboard = builderItems.find(i => i.category === 'motherboard');

    switch (categoryId) {
      case 'processor':
        return processors;
      case 'motherboard':
        // Filter motherboards by CPU socket if CPU is selected
        if (selectedProcessor) {
          return motherboards.filter(mb => mb.socket === selectedProcessor.socket);
        }
        return motherboards;
      case 'graphics':
        return graphicsCards;
      case 'memory':
        // Filter RAM by motherboard memory type if motherboard is selected
        if (selectedMotherboard) {
          return memory.filter(m => m.type === selectedMotherboard.memoryType);
        }
        return memory;
      case 'storage':
        return storage;
      case 'psu':
        return psus;
      case 'case':
        return cases;
      case 'cooling':
        return cooling;
      default:
        return [];
    }
  };

  const getFilteredAndSortedComponents = useMemo(() => {
    let components = getComponentData(selectedCategory);

    // Apply search filter
    if (searchTerm) {
      components = components.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.specs?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply brand filter
    if (brandFilter !== 'all') {
      components = components.filter(c => c.brand === brandFilter);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        components = [...components].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        components = [...components].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        components = [...components].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order (popular)
        break;
    }

    return components;
  }, [selectedCategory, searchTerm, brandFilter, sortBy]);

  const getAvailableBrands = () => {
    const components = getComponentData(selectedCategory);
    const brands = new Set(components.map(c => c.brand).filter(Boolean));
    return Array.from(brands).sort();
  };

  const addComponent = (category: string, component: any) => {
    const newItem: BuilderItem = {
      category,
      name: component.name,
      price: component.price,
      specs: component.specs,
      socket: component.socket,
      chipset: component.chipset,
      wattage: component.wattage,
      formFactor: component.formFactor,
      tdp: component.tdp,
      memoryType: component.type || component.memoryType,
    };

    const issues = checkCompatibility(newItem, builderItems);
    setCompatibilityIssues(issues);

    const filteredItems = builderItems.filter(item => item.category !== category);
    setBuilderItems([...filteredItems, newItem]);
  };

  const removeComponent = (category: string) => {
    const newItems = builderItems.filter(item => item.category !== category);
    setBuilderItems(newItems);
    const issues = checkCompatibility({ category: '', name: '', price: 0 }, newItems);
    setCompatibilityIssues(issues);
  };

  const getTotalPrice = () => {
    return builderItems.reduce((sum, item) => sum + item.price, 0);
  };

  const getEstimatedWattage = () => {
    const cpuTDP = builderItems.find(i => i.category === 'processor')?.tdp || 0;
    const gpuWattage = builderItems.find(i => i.category === 'graphics')?.wattage || 0;
    return cpuTDP + gpuWattage + 100;
  };

  const getComponentByCategory = (categoryId: string) => {
    return builderItems.find(item => item.category === categoryId);
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const completionPercentage = (builderItems.filter(item => 
    categories.find(cat => cat.id === item.category)?.required
  ).length / categories.filter(cat => cat.required).length) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl mb-3 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">
          PC Builder Tool
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Build your custom PC with real-time compatibility checking. {getFilteredAndSortedComponents.length} components available in this category.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2 text-sm">
              <span>Build Progress</span>
              <span className="text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text">{Math.round(completionPercentage)}%</span>
            </div>
            <Progress value={completionPercentage} className="h-2 bg-zinc-800">
              <div 
                className="h-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 transition-all rounded-full"
                style={{ width: `${completionPercentage}%` }}
              />
            </Progress>
          </div>
        </div>
      </div>

      {/* Compatibility Alert */}
      {compatibilityIssues.length > 0 && (
        <Alert className="mb-6 bg-yellow-950/30 border-yellow-700/50 shadow-lg shadow-yellow-900/20">
          <AlertTriangle className="h-5 w-5 text-yellow-400" />
          <AlertDescription>
            <div className="ml-2">
              <div className="text-yellow-300 mb-2">Compatibility Issues Detected:</div>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {compatibilityIssues.map((issue, idx) => (
                  <li key={idx} className="text-yellow-200">{issue}</li>
                ))}
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {compatibilityIssues.length === 0 && builderItems.length > 0 && (
        <Alert className="mb-6 bg-green-950/30 border-green-700/50 shadow-lg shadow-green-900/20">
          <CheckCircle2 className="h-5 w-5 text-green-400" />
          <AlertDescription className="ml-2 text-green-300">
            ✓ All components are compatible! Your build is ready.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Category Selection */}
          <Card className="bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/50 border-zinc-200 dark:border-zinc-800/50 p-6 shadow-xl">
            <h3 className="mb-4 text-zinc-900 dark:text-white">Select Component Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                const isSelected = selectedCategory === category.id;
                const hasComponent = getComponentByCategory(category.id);
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? 'border-violet-500 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 shadow-lg shadow-violet-500/20'
                        : 'border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-violet-400' : 'text-zinc-500 dark:text-zinc-400'}`} />
                      {hasComponent && (
                        <CheckCircle2 className="w-4 h-4 text-green-500 dark:text-green-400" />
                      )}
                    </div>
                    <div className="text-left">
                      <div className="text-sm mb-1 text-zinc-900 dark:text-white">{category.name}</div>
                      {category.required && (
                        <Badge variant="outline" className="text-xs border-fuchsia-700 text-fuchsia-400">
                          Required
                        </Badge>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Filters and Search */}
          <Card className="bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/50 border-zinc-200 dark:border-zinc-800/50 p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <Input
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-zinc-100 dark:bg-zinc-800/50 border-zinc-300 dark:border-zinc-700/50 focus:border-violet-500 text-zinc-900 dark:text-white"
                />
              </div>
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger className="bg-zinc-100 dark:bg-zinc-800/50 border-zinc-300 dark:border-zinc-700/50">
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  {getAvailableBrands().map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-zinc-100 dark:bg-zinc-800/50 border-zinc-300 dark:border-zinc-700/50">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          {/* Component Selection */}
          <Card className="bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/50 border-zinc-200 dark:border-zinc-800/50 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-zinc-900 dark:text-white">{categories.find(c => c.id === selectedCategory)?.name || 'Select Category'}</h3>
              {getComponentByCategory(selectedCategory) && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  onClick={() => removeComponent(selectedCategory)}
                >
                  Clear Selection
                </Button>
              )}
            </div>

            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {getFilteredAndSortedComponents.map((component, idx) => {
                const isSelected = getComponentByCategory(selectedCategory)?.name === component.name;
                
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'border-violet-500 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 shadow-lg shadow-violet-500/10'
                        : 'border-zinc-200 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800/30'
                    }`}
                    onClick={() => addComponent(selectedCategory, component)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className={isSelected ? 'text-violet-400' : ''}>{component.name}</h4>
                          {isSelected && (
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-zinc-400 mb-2">{component.specs}</p>
                        <div className="flex gap-2 flex-wrap">
                          {component.socket && (
                            <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                              Socket: {component.socket}
                            </Badge>
                          )}
                          {component.chipset && (
                            <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                              {component.chipset}
                            </Badge>
                          )}
                          {component.wattage && (
                            <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                              {component.wattage}W
                            </Badge>
                          )}
                          {component.formFactor && (
                            <Badge variant="outline" className="text-xs border-zinc-700 text-zinc-400">
                              {component.formFactor}
                            </Badge>
                          )}
                          {component.type && (
                            <Badge variant="outline" className="text-xs border-cyan-700 text-cyan-400">
                              {component.type}
                            </Badge>
                          )}
                          {component.brand && (
                            <Badge variant="outline" className="text-xs border-fuchsia-700 text-fuchsia-400">
                              {component.brand}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                          {formatPrice(component.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Sticky Sidebar - Build Summary */}
        <div className="lg:col-span-1">
          <Card className="bg-gradient-to-br from-white via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900/50 border-zinc-200 dark:border-zinc-800/50 p-6 sticky top-24 shadow-2xl shadow-violet-900/10">
            <h3 className="mb-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">Build Summary</h3>

            <div className="space-y-4 mb-6">
              {categories.map((category) => {
                const component = getComponentByCategory(category.id);
                const Icon = category.icon;
                
                return (
                  <div key={category.id} className="pb-4 border-b border-zinc-200 dark:border-zinc-800/50 last:border-0">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        component 
                          ? 'bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 shadow-lg shadow-violet-500/10' 
                          : 'bg-zinc-200 dark:bg-zinc-800/50'
                      }`}>
                        <Icon className={`w-5 h-5 ${component ? 'text-violet-600 dark:text-violet-400' : 'text-zinc-400 dark:text-zinc-600'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{category.name}</div>
                        {component ? (
                          <>
                            <div className="text-sm mb-1 truncate text-zinc-900 dark:text-white">{component.name}</div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-transparent bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text">
                                {formatPrice(component.price)}
                              </span>
                              <button
                                onClick={() => removeComponent(category.id)}
                                className="text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </>
                        ) : (
                          <div className="text-sm text-zinc-400 dark:text-zinc-600">Not selected</div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {builderItems.length > 0 && (
              <div className="space-y-4">
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zinc-600 dark:text-zinc-400">Subtotal</span>
                    <span className="text-zinc-900 dark:text-white">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zinc-600 dark:text-zinc-400">GST (18%)</span>
                    <span className="text-zinc-900 dark:text-white">{formatPrice(Math.round(getTotalPrice() * 0.18))}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    <span>Est. Wattage</span>
                    <span className="text-cyan-600 dark:text-cyan-400">{getEstimatedWattage()}W</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-violet-200 dark:border-violet-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl text-zinc-900 dark:text-white">Total Price</span>
                    <span className="text-2xl bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                      {formatPrice(Math.round(getTotalPrice() * 1.18))}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 hover:shadow-lg hover:shadow-violet-500/50 transition-all text-white">
                  Add to Cart
                </Button>
                <Button variant="outline" className="w-full border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                  Save Configuration
                </Button>
              </div>
            )}

            {builderItems.length === 0 && (
              <div className="text-center text-zinc-500 dark:text-zinc-500 text-sm py-8">
                Start building your PC by selecting components from the categories above.
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
