import { useState } from 'react';
import { CreditCard, Smartphone, Building2, Wallet, ShieldCheck, Truck, ChevronRight, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [emiMonths, setEmiMonths] = useState('6');

  // Mock cart items
  const cartItems = [
    { name: 'NVIDIA GeForce RTX 4090', price: 155900, quantity: 1 },
    { name: 'Intel Core i9-14900K', price: 52999, quantity: 1 },
    { name: 'ASUS ROG MAXIMUS Z790 HERO', price: 52999, quantity: 1 },
    { name: 'Corsair Vengeance DDR5 32GB', price: 12999, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = Math.round(subtotal * 0.18);
  const shipping = 0; // Free shipping
  const grandTotal = subtotal + gst + shipping;

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const calculateEMI = (months: string) => {
    const principal = grandTotal;
    const rate = 0.12 / 12; // 12% annual interest
    const n = parseInt(months);
    const emi = principal * rate * Math.pow(1 + rate, n) / (Math.pow(1 + rate, n) - 1);
    return Math.round(emi);
  };

  const emiOptions = [
    { months: '3', interest: '0%', label: 'No Cost EMI' },
    { months: '6', interest: '0%', label: 'No Cost EMI' },
    { months: '9', interest: '12%', label: 'Standard EMI' },
    { months: '12', interest: '12%', label: 'Standard EMI' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/50">
              <Check className="w-5 h-5" />
            </div>
            <span className="text-sm">Cart</span>
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-green-500 to-violet-600"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/50">
              <span className="text-sm">2</span>
            </div>
            <span className="text-sm bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Checkout</span>
          </div>
          <div className="flex-1 h-0.5 bg-zinc-800"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
              <span className="text-sm text-zinc-600">3</span>
            </div>
            <span className="text-sm text-zinc-600">Payment</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Delivery Information */}
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border-zinc-800/50 p-6 shadow-xl">
            <h2 className="text-xl mb-6 flex items-center gap-2">
              <Truck className="w-5 h-5 text-violet-400" />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Delivery Information</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  placeholder="Enter first name"
                  className="bg-zinc-800 border-zinc-700 mt-2"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  placeholder="Enter last name"
                  className="bg-zinc-800 border-zinc-700 mt-2"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-zinc-800 border-zinc-700 mt-2"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  placeholder="+91 98765 43210"
                  className="bg-zinc-800 border-zinc-700 mt-2"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  placeholder="Street address"
                  className="bg-zinc-800 border-zinc-700 mt-2"
                />
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  placeholder="City"
                  className="bg-zinc-800 border-zinc-700 mt-2"
                />
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  placeholder="State"
                  className="bg-zinc-800 border-zinc-700 mt-2"
                />
              </div>
              <div>
                <Label htmlFor="pincode">PIN Code *</Label>
                <Input
                  id="pincode"
                  placeholder="400001"
                  className="bg-zinc-800 border-zinc-700 mt-2"
                />
              </div>
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  value="India"
                  disabled
                  className="bg-zinc-800 border-zinc-700 mt-2"
                />
              </div>
            </div>
          </Card>

          {/* Payment Method */}
          <Card className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border-zinc-800/50 p-6 shadow-xl">
            <h2 className="text-xl mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-violet-400" />
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Payment Method</span>
            </h2>

            <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-zinc-800">
                <TabsTrigger value="upi" className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  UPI
                </TabsTrigger>
                <TabsTrigger value="card" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Cards
                </TabsTrigger>
                <TabsTrigger value="netbanking" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Net Banking
                </TabsTrigger>
                <TabsTrigger value="emi" className="flex items-center gap-2">
                  <Wallet className="w-4 h-4" />
                  EMI
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upi" className="mt-6">
                <div className="space-y-4">
                  <p className="text-sm text-zinc-400">
                    Pay securely using UPI ID or QR code. Supports all major UPI apps.
                  </p>
                  
                  <RadioGroup defaultValue="upi-id">
                    <div className="flex items-center space-x-3 p-4 border border-zinc-800 rounded-lg hover:border-purple-600 transition-colors">
                      <RadioGroupItem value="upi-id" id="upi-id" />
                      <Label htmlFor="upi-id" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <span>Enter UPI ID</span>
                          <Badge variant="outline" className="border-green-700 text-green-400">Instant</Badge>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-zinc-800 rounded-lg hover:border-purple-600 transition-colors">
                      <RadioGroupItem value="qr" id="qr" />
                      <Label htmlFor="qr" className="flex-1 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <span>Scan QR Code</span>
                          <Badge variant="outline" className="border-green-700 text-green-400">Instant</Badge>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  <div>
                    <Label htmlFor="upi-input">UPI ID</Label>
                    <Input
                      id="upi-input"
                      placeholder="yourname@upi"
                      className="bg-zinc-800 border-zinc-700 mt-2"
                    />
                  </div>

                  <div className="flex gap-3 text-sm text-zinc-400">
                    <div className="flex-1 text-center p-3 bg-zinc-800 rounded">
                      <div className="text-2xl mb-1">📱</div>
                      <div>Google Pay</div>
                    </div>
                    <div className="flex-1 text-center p-3 bg-zinc-800 rounded">
                      <div className="text-2xl mb-1">💳</div>
                      <div>PhonePe</div>
                    </div>
                    <div className="flex-1 text-center p-3 bg-zinc-800 rounded">
                      <div className="text-2xl mb-1">🔵</div>
                      <div>Paytm</div>
                    </div>
                    <div className="flex-1 text-center p-3 bg-zinc-800 rounded">
                      <div className="text-2xl mb-1">🏦</div>
                      <div>BHIM</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="card" className="mt-6">
                <div className="space-y-4">
                  <p className="text-sm text-zinc-400 mb-4">
                    We accept all major credit and debit cards. Your payment information is secure and encrypted.
                  </p>

                  <div>
                    <Label htmlFor="card-number">Card Number *</Label>
                    <Input
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      className="bg-zinc-800 border-zinc-700 mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="card-name">Name on Card *</Label>
                    <Input
                      id="card-name"
                      placeholder="CARDHOLDER NAME"
                      className="bg-zinc-800 border-zinc-700 mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date *</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        className="bg-zinc-800 border-zinc-700 mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        type="password"
                        maxLength={3}
                        className="bg-zinc-800 border-zinc-700 mt-2"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <div className="w-12 h-8 bg-zinc-800 rounded flex items-center justify-center">
                      <span className="text-xs">VISA</span>
                    </div>
                    <div className="w-12 h-8 bg-zinc-800 rounded flex items-center justify-center">
                      <span className="text-xs">MC</span>
                    </div>
                    <div className="w-12 h-8 bg-zinc-800 rounded flex items-center justify-center">
                      <span className="text-xs">AMEX</span>
                    </div>
                    <div className="w-12 h-8 bg-zinc-800 rounded flex items-center justify-center">
                      <span className="text-xs">💳</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="netbanking" className="mt-6">
                <div className="space-y-4">
                  <p className="text-sm text-zinc-400 mb-4">
                    Select your bank to continue with Net Banking payment.
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Bank', 'Other Banks'].map((bank) => (
                      <button
                        key={bank}
                        className="p-4 border border-zinc-800 rounded-lg hover:border-purple-600 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-zinc-400" />
                          </div>
                          <span className="text-sm">{bank}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="emi" className="mt-6">
                <div className="space-y-4">
                  <div className="p-4 bg-purple-950/30 border border-purple-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Wallet className="w-5 h-5 text-purple-400" />
                      <span>EMI Options Available</span>
                    </div>
                    <p className="text-sm text-zinc-400">
                      Convert your purchase into easy monthly installments. Available for orders above ₹10,000.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {emiOptions.map((option) => {
                      const emi = calculateEMI(option.months);
                      return (
                        <button
                          key={option.months}
                          onClick={() => setEmiMonths(option.months)}
                          className={`w-full p-4 border-2 rounded-lg transition-all ${
                            emiMonths === option.months
                              ? 'border-purple-600 bg-purple-600/10'
                              : 'border-zinc-800 hover:border-zinc-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-left">
                              <div className="mb-1">
                                {option.months} Months EMI
                                <Badge variant="outline" className="ml-2 border-pink-700 text-pink-400">
                                  {option.label}
                                </Badge>
                              </div>
                              <div className="text-sm text-zinc-400">
                                {option.interest} interest • {formatPrice(emi)}/month
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl text-green-400">{formatPrice(emi)}</div>
                              <div className="text-xs text-zinc-500">per month</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="text-sm text-zinc-400">
                    * EMI calculations are approximate. Final amount may vary based on your bank's processing.
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        {/* Order Summary - Sticky Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900/50 border-zinc-800/50 p-6 sticky top-24 shadow-2xl shadow-violet-900/10">
            <h3 className="text-xl mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Order Summary</h3>

            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex gap-3 pb-4 border-b border-zinc-800 last:border-0">
                  <div className="w-16 h-16 bg-zinc-800 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm mb-1 line-clamp-2">{item.name}</div>
                    <div className="text-xs text-zinc-400">Qty: {item.quantity}</div>
                    <div className="text-sm text-green-400 mt-1">{formatPrice(item.price)}</div>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6 bg-zinc-800" />

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">GST (18%)</span>
                <span>{formatPrice(gst)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Shipping</span>
                <span className="text-green-400">FREE</span>
              </div>
            </div>

            <Separator className="my-6 bg-zinc-800" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-xl">Grand Total</span>
              <span className="text-2xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {formatPrice(grandTotal)}
              </span>
            </div>

            {paymentMethod === 'emi' && (
              <div className="mb-6 p-4 bg-gradient-to-br from-violet-950/30 to-fuchsia-950/30 border border-violet-800/50 rounded-lg shadow-lg">
                <div className="text-sm text-zinc-300 mb-1">EMI per month</div>
                <div className="text-xl bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {formatPrice(calculateEMI(emiMonths))}
                </div>
                <div className="text-xs text-zinc-500 mt-1">for {emiMonths} months</div>
              </div>
            )}

            <Button className="w-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-[1.02] transition-all mb-3">
              Complete Purchase
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>

            <div className="text-center text-xs text-zinc-500">
              <ShieldCheck className="w-4 h-4 inline mr-1" />
              Secure checkout powered by SSL encryption
            </div>

            <Separator className="my-6 bg-zinc-800" />

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-zinc-400">
                <Check className="w-4 h-4 text-green-500" />
                <span>Free shipping across India</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Check className="w-4 h-4 text-green-500" />
                <span>7 days easy returns</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Check className="w-4 h-4 text-green-500" />
                <span>1 year warranty included</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
