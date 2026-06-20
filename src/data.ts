import { Platform, Country } from './types';

export const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦', dialCode: '+27' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬', dialCode: '+234' },
  { code: 'GH', name: 'Ghana', flag: '🇬🇭', dialCode: '+233' },
  { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', dialCode: '+55' },
];

export const PLATFORMS: Platform[] = [
  { id: 'whatsapp', name: 'WhatsApp', icon: 'MessageSquare', price: 750, available: 1420, category: 'social', color: 'from-emerald-500 to-teal-600' },
  { id: 'telegram', name: 'Telegram', icon: 'Send', price: 600, available: 980, category: 'social', color: 'from-sky-400 to-blue-500' },
  { id: 'instagram', name: 'Instagram', icon: 'Instagram', price: 450, available: 1150, category: 'social', color: 'from-pink-500 to-rose-500' },
  { id: 'facebook', name: 'Facebook', icon: 'Facebook', price: 400, available: 850, category: 'social', color: 'from-blue-600 to-indigo-700' },
  { id: 'tiktok', name: 'TikTok', icon: 'Music', price: 500, available: 670, category: 'social', color: 'from-zinc-900 to-zinc-950 border border-zinc-700' },
  { id: 'signal', name: 'Signal', icon: 'ShieldCheck', price: 300, available: 410, category: 'social', color: 'from-blue-500 to-sky-600' },
  { id: 'twitter', name: 'X (Twitter)', icon: 'Twitter', price: 350, available: 520, category: 'social', color: 'from-neutral-800 to-neutral-900' },
  { id: 'google', name: 'Google Workspace', icon: 'Mail', price: 550, available: 1890, category: 'ecommerce', color: 'from-red-500 to-amber-500' },
  { id: 'openai', name: 'OpenAI / ChatGPT', icon: 'Cpu', price: 850, available: 1250, category: 'ecommerce', color: 'from-emerald-600 to-teal-800' },
  { id: 'discord', name: 'Discord', icon: 'MessageCircle', price: 250, available: 730, category: 'social', color: 'from-indigo-500 to-violet-600' },
];

export const FAQ_ITEMS = [
  {
    question: 'How do virtual numbers for verification work?',
    answer: 'Once you select a service (like WhatsApp) and a country, we generate a temporary phone number for you. You enter this number into WhatsApp, and the system sends the SMS verification code. This code appears on your dashboard instantly. The number stays active for up to 10 minutes, of which you only pay for successful verifications.',
  },
  {
    question: 'Am I charged if I do not receive an SMS?',
    answer: 'No. We follow a strict no-delivery, no-charge policy. If a verification code is not received during the activation window, your wallet is refunded automatically.',
  },
  {
    question: 'Can I use these numbers to pay digital utility bills?',
    answer: 'Our main numbers are optimized for SMS verifications. For utility payments, airtime recharges, and data subscription bundles, you can specify your direct local operator details in our comprehensive utilities tab. This operates in a separate gateway connected to multiple international servers.',
  },
  {
    question: 'How secure is the NEXORA wallet?',
    answer: 'Extremely secure. All wallet actions, deposits, and transaction outputs are processed through bank-grade transit protocols, secure APIs, and dynamic 256-bit encryption blocks. Users remain anonymous throughout the verification run.',
  },
  {
    question: 'Is there a limit to referrals?',
    answer: 'There are zero limits to referral commissions. You earn a persistent 5% cash-back credit on every deposit or verification bundle purchased by users who sign up through your dynamic referral URL.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'Digital Marketer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'NEXORA has completely transformed our advertising operations. Generating multiple Telegram and WhatsApp business accounts takes literally seconds compared to buying physical SIM cards.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Security Consultant',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'For private testing of client authentication loops, dynamic numbers are absolute gold. The "No SMS, no fee" policy makes debugging cost-effective and clean.',
    rating: 5,
  },
  {
    name: 'Amara Nwosu',
    role: 'E-commerce Merchant',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    content: 'The combined wallet system makes this so original. I load funds once and purchase both virtual SMS tokens and direct international airtime with no overhead delay.',
    rating: 5,
  },
  {
    name: 'Niklas Weber',
    role: 'Freelance Architect',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    content: 'Great UI and UX. Many virtual number platforms feel unreliable, but NEXORA is polished, professional, and fast.',
    rating: 5,
  },
];
