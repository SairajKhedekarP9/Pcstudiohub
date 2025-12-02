import { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Search,
  HelpCircle,
  AlertCircle,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit/debit cards (Visa, Mastercard, Rupay), UPI (Google Pay, PhonePe, Paytm), Net Banking, and EMI options on select credit cards.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Orders are typically processed within 24 hours. Standard shipping across India takes 3-5 business days. Express delivery is available in select metro cities (1-2 business days).",
    },
    {
      question: "Do you offer warranty on custom builds?",
      answer:
        "Yes! All individual components come with their respective manufacturer warranties (usually 3-5 years). Additionally, we provide a 1-year service warranty on the assembly of custom PCs built by our team.",
    },
    {
      question: "Can I return a product if I change my mind?",
      answer:
        "We have a 7-day return policy for unopened and sealed products. For opened products, returns are only accepted in case of manufacturing defects or DOA (Dead on Arrival) units.",
    },
    {
      question: "Is technical support free?",
      answer:
        "Yes, lifetime technical support is free for all PCs purchased from PCStudio. You can reach out to our team for troubleshooting or upgrade advice.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
          How can we help you?
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          Search our help center or contact our support team for
          assistance with your order, product queries, or
          technical issues.
        </p>

        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <Input
            className="pl-12 h-12 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-lg shadow-lg focus-visible:ring-violet-500 text-zinc-900 dark:text-white"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Options */}
        <Card className="p-6 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-violet-500 dark:hover:border-violet-500 transition-all group cursor-pointer">
          <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Phone className="w-6 h-6 text-violet-600 dark:text-violet-400" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
            Phone Support
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
            Speak directly to our support team for urgent
            queries.
          </p>
          <div className="text-violet-600 dark:text-violet-400 font-bold">
            +91 7218426980
          </div>
          <div className="text-xs text-zinc-500 mt-1">
            Mon-Sat, 9am - 8pm IST
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-fuchsia-500 dark:hover:border-fuchsia-500 transition-all group cursor-pointer">
          <div className="w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Mail className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
            Email Us
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
            Send us a detailed message and we'll get back to
            you.
          </p>
          <div className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">
            support@pc-studio.in
          </div>
          <div className="text-xs text-zinc-500 mt-1">
            Response within 24 hours
          </div>
        </Card>

        <Card className="p-6 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all group cursor-pointer">
          <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
            Live Chat
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
            Chat with our virtual assistant or a live agent.
          </p>
          <div className="text-cyan-600 dark:text-cyan-400 font-bold">
            Start Chat
          </div>
          <div className="text-xs text-zinc-500 mt-1">
            Available 24/7
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <Send className="w-6 h-6 text-violet-500" />
            Send us a Message
          </h2>
          <Card className="p-6 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300">
                  First Name
                </label>
                <Input
                  placeholder="John"
                  className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300">
                  Last Name
                </label>
                <Input
                  placeholder="Doe"
                  className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300">
                Email Address
              </label>
              <Input
                placeholder="john@example.com"
                className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white"
              />
            </div>
            <div className="space-y-2 mb-4">
              <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300">
                Subject
              </label>
              <Input
                placeholder="Order status query"
                className="bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white"
              />
            </div>
            <div className="space-y-2 mb-6">
              <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300">
                Message
              </label>
              <Textarea
                placeholder="Tell us how we can help..."
                className="min-h-[120px] bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white border-0 hover:shadow-lg hover:shadow-violet-500/25">
              Send Message
            </Button>
          </Card>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-fuchsia-500" />
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 px-4"
              >
                <AccordionTrigger className="text-zinc-900 dark:text-zinc-100 hover:text-violet-500 dark:hover:text-violet-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 dark:text-zinc-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 p-4 bg-violet-50 dark:bg-violet-900/10 rounded-lg border border-violet-200 dark:border-violet-800/30 flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-violet-900 dark:text-violet-100 mb-1">
                Looking for drivers?
              </h4>
              <p className="text-sm text-violet-700 dark:text-violet-300">
                You can download the latest drivers and manuals
                for your components from our{" "}
                <a href="#" className="underline font-medium">
                  Download Center
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}