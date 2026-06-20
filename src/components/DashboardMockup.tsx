import React, { useState, useEffect } from 'react';
import { 
  Wallet, DollarSign, Smartphone, MessageSquareCode, PhoneCall, Wifi, 
  Tv, Award, RefreshCw, Copy, Check, Users, ArrowUpRight, ArrowDownLeft, Clock, Info, ShieldCheck, Mail, Send, Instagram, Facebook, Music, Cpu, MessageCircle, Twitter 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PLATFORMS, COUNTRIES } from '../data';
import { Platform, Country, ActiveNumber, Transaction } from '../types';

interface DashboardMockupProps {
  initialTab?: string;
  onShowNotification: (cfg: { title: string; message: string; type: 'success' | 'info' }) => void;
}

export default function DashboardMockup({ initialTab = 'sms', onShowNotification }: DashboardMockupProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [balance, setBalance] = useState(15000.00);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedNum, setCopiedNum] = useState<string | null>(null);

  // Referral states
  const [referralsCount, setReferralsCount] = useState(14);
  const [referralsTotalEarned, setReferralsTotalEarned] = useState(45500.00);
  const [referralsWithdrawable, setReferralsWithdrawable] = useState(12500.00);

  // Lists of transactions
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 'TX-901', type: 'deposit', amount: 20000.00, description: 'Wallet Deposit (Card)', date: 'Today, 10:22 AM', status: 'completed' },
    { id: 'TX-902', type: 'purchase', amount: 750.00, description: 'WhatsApp Verification (+44)', date: 'Today, 08:31 AM', status: 'completed' },
    { id: 'TX-903', type: 'purchase', amount: 600.00, description: 'Telegram Verification (+1)', date: 'Yesterday, 04:15 PM', status: 'completed' },
    { id: 'TX-904', type: 'payout', amount: 10000.00, description: 'Referrals Reward withdrawal', date: 'Yesterday, 09:10 AM', status: 'completed' },
  ]);

  // SMS Generator Active Number states
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(PLATFORMS[0]);
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [activeNumber, setActiveNumber] = useState<ActiveNumber | null>(null);
  const [generating, setGenerating] = useState(false);
  const [smsTimer, setSmsTimer] = useState<NodeJS.Timeout | null>(null);

  // Utility states
  const [utilityPhone, setUtilityPhone] = useState('08023456789');
  const [utilityAmount, setUtilityAmount] = useState('5000.00');
  const [utilityProvider, setUtilityProvider] = useState('Vodafone');
  const [meterNumber, setMeterNumber] = useState('14920492104');
  const [tvSmartCard, setTvSmartCard] = useState('10493019482');
  const [recharging, setRecharging] = useState(false);

  // Handle Initial Tab Change
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Adjust price based on country dial code multiplier (e.g. US is 1.0, UK is 1.15)
  const getAdjustedPrice = (basePrice: number, countryCode: string) => {
    let multiplier = 1.0;
    if (countryCode === 'GB') multiplier = 1.15;
    if (countryCode === 'ZA') multiplier = 1.25;
    if (countryCode === 'DE') multiplier = 1.20;
    if (countryCode === 'FR') multiplier = 1.10;
    if (countryCode === 'NG') multiplier = 0.90;
    if (countryCode === 'IN') multiplier = 0.85;
    multiplier = parseFloat(multiplier.toFixed(2));
    return parseFloat((basePrice * multiplier).toFixed(2));
  };

  const getLucideIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquareCode className="w-4 h-4 text-emerald-500 shrink-0" />;
      case 'Send': return <Send className="w-4 h-4 text-sky-500 shrink-0" />;
      case 'Instagram': return <Instagram className="w-4 h-4 text-pink-500 shrink-0" />;
      case 'Facebook': return <Facebook className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'Music': return <Music className="w-4 h-4 text-zinc-900 shrink-0" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />;
      case 'Twitter': return <Twitter className="w-4 h-4 text-neutral-800 shrink-0" />;
      case 'Mail': return <Mail className="w-4 h-4 text-red-500 shrink-0" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-teal-600 shrink-0" />;
      case 'MessageCircle': return <MessageCircle className="w-4 h-4 text-indigo-500 shrink-0" />;
      default: return <MessageSquareCode className="w-4 h-4 text-gray-500 shrink-0" />;
    }
  };

  // Timer run loop for temporary number countdown
  useEffect(() => {
    let interval: any = null;
    if (activeNumber && activeNumber.secondsLeft > 0 && activeNumber.status === 'waiting') {
      interval = setInterval(() => {
        setActiveNumber(prev => {
          if (!prev) return null;
          if (prev.secondsLeft <= 1) {
            clearInterval(interval);
            onShowNotification({
              title: 'Verification Expired',
              message: 'Your temporary security number lock has lapsed with empty inputs. Balance restored.',
              type: 'info'
            });
            return { ...prev, secondsLeft: 0, status: 'expired' };
          }
          return { ...prev, secondsLeft: prev.secondsLeft - 1 };
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeNumber]);

  // Fund Wallet Modal Simulator
  const handleFundWallet = () => {
    setBalance(prev => prev + 10000.00);
    const txId = 'TX-' + Math.floor(Math.random() * 900 + 100);
    const newTx: Transaction = {
      id: txId,
      type: 'deposit',
      amount: 10000.00,
      description: 'Wallet Deposit (Visa Gateway)',
      date: 'Just now',
      status: 'completed'
    };
    setTransactions(prev => [newTx, ...prev]);
    onShowNotification({
      title: 'Wallet Funded Successfully',
      message: 'Deposit of ₦10,000.00 cleared immediately. Your current balance has updated.',
      type: 'success'
    });
  };

  // Generate Virtual Number
  const handleGenerateNumber = () => {
    const cost = getAdjustedPrice(selectedPlatform.price, selectedCountry.code);
    if (balance < cost) {
      onShowNotification({
        title: 'Insufficient Balance',
        message: 'Fund your virtual wallet with our simulation deposit button to unlock active lines.',
        type: 'info'
      });
      return;
    }

    setGenerating(true);
    // Simulate generation latency
    setTimeout(() => {
      // Create random number
      const randomBody = Math.floor(Math.random() * 9000000 + 1000000);
      const fakeNumber = `${selectedCountry.dialCode} ${Math.floor(Math.random() * 900 + 100)}-${randomBody.toString().slice(0,4)}`;
      
      const newActive: ActiveNumber = {
        id: 'SEC-' + Math.floor(Math.random() * 9000 + 1000),
        platform: selectedPlatform,
        country: selectedCountry,
        phoneNumber: fakeNumber,
        secondsLeft: 600, // 10 minutes
        status: 'waiting',
        sms: []
      };

      setActiveNumber(newActive);
      setGenerating(false);

      onShowNotification({
        title: `Gateway Secured (+${selectedCountry.dialCode})`,
        message: `Your temporary verification line is now active. Input this number into ${selectedPlatform.name} app.`,
        type: 'success'
      });
    }, 850);
  };

  // Simulate Incoming SMS
  const handleSimulateIncomingSms = () => {
    if (!activeNumber || activeNumber.status !== 'waiting') return;

    const cost = getAdjustedPrice(activeNumber.platform.price, activeNumber.country.code);
    
    // Simulate SMS arrival
    const code = Math.floor(Math.random() * 900000 + 100000).toString();
    const smsId = 'SMS-' + Math.floor(Math.random() * 9000 + 1000);
    const receivedSms = {
      id: smsId,
      sender: activeNumber.platform.name,
      message: `Your ${activeNumber.platform.name} secure register verification security code is ${code}. Ref: VI-${Math.floor(Math.random() * 90000)}. Do not share.`,
      code: code,
      receivedAt: 'Just now'
    };

    setActiveNumber(prev => {
      if (!prev) return null;
      return {
        ...prev,
        status: 'received',
        sms: [receivedSms]
      };
    });

    // Deduct charges
    setBalance(prev => parseFloat((prev - cost).toFixed(2)));

    // Log transaction
    const txId = 'TX-' + Math.floor(Math.random() * 900 + 100);
    const newTx: Transaction = {
      id: txId,
      type: 'purchase',
      amount: cost,
      description: `${activeNumber.platform.name} SMS Token Delivered`,
      date: 'Just now',
      status: 'completed'
    };
    setTransactions(prev => [newTx, ...prev]);

    onShowNotification({
      title: 'SMS Verification Code Delivered!',
      message: `Secured target code: ${code}. Copied to clipboard.`,
      type: 'success'
    });
  };

  const handleCancelLine = () => {
    setActiveNumber(null);
    onShowNotification({
      title: 'Activation Cancelled',
      message: 'Pending digital gateway lock released. No charge applied.',
      type: 'info'
    });
  };

  // Process Utility Top up
  const handleProcessUtility = (type: 'airtime' | 'data' | 'bills', item: string) => {
    const cost = parseFloat(utilityAmount);
    if (balance < cost) {
      onShowNotification({
        title: 'Insufficient Funds',
        message: 'Top-up your virtual wallet prior to initiating cellular recharge modules.',
        type: 'info'
      });
      return;
    }

    setRecharging(true);
    setTimeout(() => {
      setBalance(prev => parseFloat((prev - cost).toFixed(2)));
      
      const txId = 'TX-' + Math.floor(Math.random() * 900 + 100);
      const newTx: Transaction = {
        id: txId,
        type: 'purchase',
        amount: cost,
        description: `${item} (${type === 'bills' ? 'Utility Account' : utilityPhone})`,
        date: 'Just now',
        status: 'completed'
      };

      setTransactions(prev => [newTx, ...prev]);
      setRecharging(false);

      onShowNotification({
        title: 'Payment Confirmed',
        message: `${item} request of ₦${parseFloat(utilityAmount).toLocaleString(undefined, { minimumFractionDigits: 2 })} completed successfully via multi-server gateway.`,
        type: 'success'
      });
    }, 1200);
  };

  // Process Withdraw Referral Balances
  const handleWithdrawReferrals = () => {
    if (referralsWithdrawable <= 0) {
      onShowNotification({
        title: 'No Balance Available',
        message: 'Your invite payout balances require dynamic accruals from active referrals.',
        type: 'info'
      });
      return;
    }

    const value = referralsWithdrawable;
    setReferralsWithdrawable(0);
    setBalance(prev => prev + value);

    const txId = 'TX-' + Math.floor(Math.random() * 900 + 100);
    const newTx: Transaction = {
      id: txId,
      type: 'payout',
      amount: value,
      description: 'Withdrew Referral Earnings to main Wallet',
      date: 'Just now',
      status: 'completed'
    };
    setTransactions(prev => [newTx, ...prev]);

    onShowNotification({
      title: 'Payout Success',
      message: `₦${value.toLocaleString(undefined, { minimumFractionDigits: 2 })} transferred from Referral Ledger to accessible Wallet balance.`,
      type: 'success'
    });
  };

  const copyRefLink = () => {
    setCopiedLink(true);
    navigator.clipboard.writeText('https://nexora.com/ref?code=VERIFY-ISRAEL-5');
    setTimeout(() => setCopiedLink(false), 2000);
    onShowNotification({
      title: 'Link Copied',
      message: 'Referral URL captured to clipboards. Send to peers to lock 5% cashback rewards.',
      type: 'success'
    });
  };

  const copyPhoneNumber = (num: string) => {
    setCopiedNum(num);
    navigator.clipboard.writeText(num.replace(/\s/g, ''));
    setTimeout(() => setCopiedNum(null), 2000);
  };

  const minutes = Math.floor((activeNumber?.secondsLeft || 0) / 60);
  const seconds = (activeNumber?.secondsLeft || 0) % 60;
  const timerString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <section id="app-preview" className="py-20 md:py-28 bg-transparent text-white relative overflow-hidden">
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/5 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/5 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="dashboard-preview-header">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Interactive Safe Environment
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-4 uppercase">
            Try the Live Dashboard Simulator
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-400">
            Experiment with virtual active lines! Fund wallet, generate temporary phone lines, trigger dynamic test messages, process utility bills, and request cash reward payouts in our safe live workspace.
          </p>
        </div>

        {/* Dashboard Grid System */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#0A0F1E]/80 border border-white/5 rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-md" 
          id="dashboard-container"
        >
          
          {/* LEFT: Sidebar Navigation Option List */}
          <div className="lg:col-span-3 space-y-2">
            <div className="p-4 bg-[#0B132B] border border-white/5 rounded-2xl mb-4">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-1">Your Virtual Ledger</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-display text-white tracking-tight">₦{balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <button
                  onClick={handleFundWallet}
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-sans font-extrabold text-[10px] uppercase tracking-wider px-3 py-2 rounded-xl flex items-center gap-1 shadow-md shadow-emerald-500/10 cursor-pointer active:scale-95 transition-all"
                  title="Simulate adding standard deposit funds"
                >
                  <Wallet className="w-3.5 h-3.5" />
                  + ₦10k
                </button>
              </div>
              <span className="text-[9px] text-slate-400 block mt-2 font-mono flex items-center gap-1 bg-[#060A13] p-1.5 rounded border border-white/5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                Wallet Online (Demo Mode)
              </span>
            </div>

            <div className="space-y-1.5" id="dashboard-sidebar-buttons">
              <button
                onClick={() => { setActiveTab('sms'); }}
                className={`w-full text-left px-4 py-3.5 rounded-xl font-sans font-bold text-[10px] uppercase tracking-wider flex items-center gap-3 transition-colors pointer-events-auto cursor-pointer ${
                  activeTab === 'sms' 
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/10' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <MessageSquareCode className="w-4.5 h-4.5" />
                SMS verification
              </button>

              <button
                onClick={() => { setActiveTab('airtime'); }}
                className={`w-full text-left px-4 py-3.5 rounded-xl font-sans font-bold text-[10px] uppercase tracking-wider flex items-center gap-3 transition-colors pointer-events-auto cursor-pointer ${
                  activeTab === 'airtime' 
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/10' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <PhoneCall className="w-4.5 h-4.5" />
                Buy Airtime / Data
              </button>

              <button
                onClick={() => { setActiveTab('bills'); }}
                className={`w-full text-left px-4 py-3.5 rounded-xl font-sans font-bold text-[10px] uppercase tracking-wider flex items-center gap-3 transition-colors pointer-events-auto cursor-pointer ${
                  activeTab === 'bills' 
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/10' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Tv className="w-4.5 h-4.5" />
                Utility Bill Payment
              </button>

              <button
                onClick={() => { setActiveTab('referrals'); }}
                className={`w-full text-left px-4 py-3.5 rounded-xl font-sans font-bold text-[10px] uppercase tracking-wider flex items-center gap-3 transition-colors pointer-events-auto cursor-pointer ${
                  activeTab === 'referrals' 
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/10' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Award className="w-4.5 h-4.5" />
                Referral Partner
              </button>
            </div>
          </div>

          {/* MAIN TAB CONTENT */}
          <div className="lg:col-span-9 bg-[#0B132B] border border-white/5 rounded-2xl p-4 sm:p-6 flex flex-col justify-between" id="dashboard-main-panel">
            
            <AnimatePresence mode="wait">
              {activeTab === 'sms' && (
                <motion.div
                  key="sms"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-lg font-bold font-display text-white">Temporary Verification Numbers</h3>
                      <p className="text-xs text-slate-400">Generate high-reliability secure virtual channels for verification SMS.</p>
                    </div>
                    <div className="bg-[#060A13] p-1.5 px-3 rounded-lg border border-white/5 text-[10px] uppercase font-mono tracking-widest text-sky-400 font-semibold self-start sm:self-auto">
                      Channel: Secured SMS Router V4
                    </div>
                  </div>

                  {activeNumber ? (
                    /* ACTIVE NUMBER LIVE SCREEN */
                    <div className="bg-[#060A13] border border-white/5 rounded-2xl p-6 relative overflow-hidden" id="active-phone-display">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-xl" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Left half: Active timer & Info */}
                        <div className="space-y-4">
                          <div>
                            <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">Assigned Temporary Line</span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xl sm:text-2xl font-mono font-bold text-white selection:bg-sky-500 selection:text-slate-950">{activeNumber.phoneNumber}</span>
                              <button
                                onClick={() => copyPhoneNumber(activeNumber.phoneNumber)}
                                className="p-2 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 rounded-lg cursor-pointer"
                                title="Copy Verification Number"
                              >
                                {copiedNum === activeNumber.phoneNumber ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-[#0B132B] border border-white/5 p-2.5 rounded-xl">
                              <span className="text-[9px] text-slate-500 block">Activation Channel</span>
                              <div className="flex items-center gap-1 mt-1 text-slate-200 font-medium text-xs">
                                {getLucideIcon(activeNumber.platform.icon)}
                                <span>{activeNumber.platform.name}</span>
                              </div>
                            </div>

                            <div className="bg-[#0B132B] border border-white/5 p-2.5 rounded-xl">
                              <span className="text-[9px] text-slate-500 block">Sms Gateway Location</span>
                              <span className="text-slate-200 font-semibold text-xs mt-1 block">
                                {activeNumber.country.flag} {activeNumber.country.name}
                              </span>
                            </div>
                          </div>

                          {/* Lock expiry timer */}
                          <div className="bg-[#0B132B] border border-white/5 p-3.5 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4.5 h-4.5 text-orange-400 shrink-0" />
                              <div>
                                <span className="text-[10px] text-slate-400 block font-semibold leading-none">Gateway TTL lock</span>
                                <span className="text-[9px] text-slate-500">Fully refundable if code is missing</span>
                              </div>
                            </div>
                            <span className={`text-base font-mono font-bold ${activeNumber.secondsLeft < 120 ? 'text-red-400 animate-pulse' : 'text-orange-400'}`}>
                              {timerString}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            {activeNumber.status === 'waiting' && (
                              <button
                                onClick={handleSimulateIncomingSms}
                                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-sans font-bold text-xs py-3 rounded-xl shadow-lg shadow-emerald-500/10 cursor-pointer active:scale-95 transition-all text-center"
                              >
                                📥 Simulate Incoming SMS Code
                              </button>
                            )}
                            <button
                              onClick={handleCancelLine}
                              className="px-4 py-3 bg-[#0B132B] hover:bg-white/5 border border-white/5 text-slate-350 font-sans font-medium text-xs rounded-xl cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>

                        {/* Right half: Incoming SMS Terminal */}
                        <div className="bg-[#0B132B] border border-white/5 rounded-xl p-4 flex flex-col justify-between min-h-48">
                          <div>
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block border-b border-white/5 pb-2 mb-3">
                              Sms Terminal Output Console
                            </span>
                            
                            {activeNumber.sms.length === 0 ? (
                              <div className="flex flex-col items-center justify-center py-8 text-center text-slate-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping mb-2" />
                                <p className="font-mono text-[10px]">Listening for {activeNumber.platform.name} SMS gateway transmission...</p>
                              </div>
                            ) : (
                              activeNumber.sms.map((msg) => (
                                <div key={msg.id} className="space-y-3">
                                  <div className="flex items-center justify-between text-[10px]">
                                    <span className="bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold font-mono">
                                      {msg.sender} (Verified Gateway)
                                    </span>
                                    <span className="text-slate-500">{msg.receivedAt}</span>
                                  </div>
                                  <p className="text-xs text-slate-300 font-mono bg-slate-950 p-3 rounded-lg border border-slate-800 leading-relaxed">
                                    {msg.message}
                                  </p>
                                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-center justify-between">
                                    <div>
                                      <span className="text-[8px] uppercase tracking-wider text-emerald-400 block font-bold">Extracted Verification PIN</span>
                                      <b className="text-sm font-mono text-white tracking-widest">{msg.code}</b>
                                    </div>
                                    <button 
                                      onClick={() => {
                                        navigator.clipboard.writeText(msg.code);
                                        onShowNotification({ title: 'Code Copied', message: 'Verification code saved.', type: 'success' });
                                      }}
                                      className="text-[10px] font-bold text-emerald-400 hover:underline cursor-pointer"
                                    >
                                      Copy Pin
                                    </button>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>

                          <p className="text-[9px] text-slate-550 italic font-mono text-center">
                            Standard security protocols active. Code expires in 5 minutes.
                          </p>
                        </div>

                      </div>
                    </div>
                  ) : (
                    /* SELECTION CONFIGURATION SCREEN */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Left: Platform choose & Country selection */}
                      <div className="space-y-4">
                        <div>
                          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">1. Select Target Digital Application</label>
                          <div className="relative">
                            <select
                              value={selectedPlatform.id}
                              onChange={(e) => {
                                const plat = PLATFORMS.find(p => p.id === e.target.value);
                                if (plat) setSelectedPlatform(plat);
                              }}
                              className="w-full bg-[#060A13] border border-white/5 rounded-xl px-4 py-3 text-slate-200 text-xs font-semibold focus:outline-hidden focus:border-sky-500 cursor-pointer appearance-none"
                            >
                              {PLATFORMS.map((p) => (
                                <option key={p.id} value={p.id} className="bg-[#0A0F1E] text-white">
                                  {p.name} (Base: ₦{p.price.toLocaleString()}/SMS)
                                </option>
                              ))}
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 rotate-90 text-[10px] pointer-events-none font-bold">➤</span>
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">2. Choose Server Country Gateway</label>
                          <div className="relative">
                            <select
                              value={selectedCountry.code}
                              onChange={(e) => {
                                const country = COUNTRIES.find(c => c.code === e.target.value);
                                if (country) setSelectedCountry(country);
                              }}
                              className="w-full bg-[#060A13] border border-white/5 rounded-xl px-4 py-3 text-slate-200 text-xs font-semibold focus:outline-hidden focus:border-sky-500 cursor-pointer"
                            >
                              {COUNTRIES.map((c) => (
                                <option key={c.code} value={c.code} className="bg-[#0A0F1E] text-white">
                                  {c.flag} {c.name} ({c.dialCode})
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Cost visual breakdown box */}
                        <div className="bg-[#060A13] border border-white/5 rounded-xl p-4 space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-400">Selected Line Charge:</span>
                            <span className="text-slate-200 font-mono font-bold">₦{getAdjustedPrice(selectedPlatform.price, selectedCountry.code).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} NGN</span>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-400">Carrier Verification Rate:</span>
                            <span className="text-emerald-400 font-semibold font-mono">99.8% Success</span>
                          </div>
                          <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2 mt-2">
                            <span className="text-slate-400">Deduction Method:</span>
                            <span className="text-[10px] text-slate-500">Pay on Code Delivery</span>
                          </div>
                        </div>

                        <button
                          onClick={handleGenerateNumber}
                          disabled={generating}
                          className="w-full bg-sky-500 hover:bg-sky-600 text-slate-950 font-sans font-bold text-xs py-3.5 rounded-xl shadow-lg shadow-sky-500/10 cursor-pointer active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-1.5"
                        >
                          {generating ? (
                            <>
                              <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                              Allocating secure endpoint...
                            </>
                          ) : (
                            <>
                              Secure Gateway Line (₦{getAdjustedPrice(selectedPlatform.price, selectedCountry.code).toLocaleString()})
                            </>
                          )}
                        </button>
                      </div>

                      {/* Right: Informative instructions card */}
                      <div className="bg-[#060A13] border border-white/5 rounded-2xl p-5 flex flex-col justify-between text-slate-400">
                        <div className="space-y-4">
                          <span className="text-[10px] text-sky-400 font-mono font-bold tracking-wider uppercase block bg-sky-500/5 px-2.5 py-1 rounded w-fit">
                            Simulator Instruction Panel
                          </span>
                          
                          <div className="space-y-3 text-xs leading-relaxed">
                            <p className="flex gap-2 text-slate-350">
                              <span className="text-sky-400 font-bold">1.</span>
                              Pick your target network above. We adjust pricing in real-time according to selected country gateways.
                            </p>
                            <p className="flex gap-2 text-slate-350">
                              <span className="text-sky-400 font-bold">2.</span>
                              Click "Secure Gateway Line". We generate a unique temporary virtual phone endpoint.
                            </p>
                            <p className="flex gap-2 text-slate-350">
                              <span className="text-sky-400 font-bold">3.</span>
                              Hit the Simulator button to mimic sending an authentication SMS, and look at the real-time Terminal!
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          <span>No SIM card or hardware required on site.</span>
                        </div>
                      </div>

                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'airtime' && (
                <motion.div
                  key="airtime"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-bold font-display text-white">Direct Dynamic Cellular Top-Up</h3>
                    <p className="text-xs text-slate-400">Recharge airtime rates and activate premium local data subscription packages across local operators.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 border border-slate-800 rounded-2xl p-5">
                    
                    {/* Airtime form */}
                    <div className="space-y-4">
                      <span className="text-xs text-indigo-400 font-semibold block border-b border-slate-800 pb-2 mb-2">Recharge Configurations</span>

                      <div>
                        <label className="text-[10px] font-bold text-slate-400 block mb-1">PHONE NUMBER</label>
                        <input
                          type="text"
                          value={utilityPhone}
                          onChange={(e) => setUtilityPhone(e.target.value)}
                          placeholder="e.g. +1 772-234-9041"
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-hidden"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] font-bold text-slate-400 block mb-1">OPERATOR</label>
                          <select
                            value={utilityProvider}
                            onChange={(e) => setUtilityProvider(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 text-xs focus:outline-hidden"
                          >
                            <option value="Vodafone">Vodafone</option>
                            <option value="T-Mobile">T-Mobile</option>
                            <option value="Airtel">Airtel</option>
                            <option value="MTN Network">MTN Network</option>
                            <option value="AT&T Mobile">AT&T Mobile</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-slate-400 block mb-1">AMOUNT (NGN)</label>
                          <select
                            value={utilityAmount}
                            onChange={(e) => setUtilityAmount(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 text-xs focus:outline-hidden"
                          >
                            <option value="2500.00">₦2,500.00 NGN</option>
                            <option value="5000.00">₦5,000.00 NGN</option>
                            <option value="10000.00">₦10,000.00 NGN</option>
                            <option value="20000.00">₦20,000.00 NGN</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleProcessUtility('airtime', `${utilityProvider} Airtime`)}
                          disabled={recharging}
                          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-sans font-bold text-xs py-3 rounded-xl disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          {recharging ? <RefreshCw className="w-4.5 h-4.5 animate-spin" /> : 'Buy Airtime'}
                        </button>
                        <button
                          onClick={() => handleProcessUtility('data', `${utilityProvider} 15GB Data Bundle`)}
                          disabled={recharging}
                          className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-slate-200 border border-zinc-700 font-sans font-bold text-xs py-3 rounded-xl disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          {recharging ? <RefreshCw className="w-4.5 h-4.5 animate-spin" /> : 'Buy Data'}
                        </button>
                      </div>
                    </div>

                    {/* Operator listings */}
                    <div className="space-y-4">
                      <span className="text-xs text-indigo-400 font-semibold block border-b border-slate-800 pb-2 mb-2">Available Operators Worldwide</span>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-900 border border-slate-800/80 p-3 rounded-xl flex items-center gap-2">
                          <span className="text-base">🇬🇧</span>
                          <span className="text-[10px] text-slate-300 font-medium">Vodafone UK</span>
                        </div>
                        <div className="bg-slate-900 border border-slate-800/80 p-3 rounded-xl flex items-center gap-2">
                          <span className="text-base">🇺🇸</span>
                          <span className="text-[10px] text-slate-300 font-medium">T-Mobile US</span>
                        </div>
                        <div className="bg-slate-900 border border-slate-800/80 p-3 rounded-xl flex items-center gap-2">
                          <span className="text-base">🇳🇬</span>
                          <span className="text-[10px] text-slate-300 font-medium">MTN Nigeria</span>
                        </div>
                        <div className="bg-slate-900 border border-slate-800/80 p-3 rounded-xl flex items-center gap-2">
                          <span className="text-base">🇿🇦</span>
                          <span className="text-[10px] text-slate-300 font-medium">Vodacom SA</span>
                        </div>
                      </div>

                      <div className="bg-slate-900 border border-slate-800/60 rounded-xl p-3 text-[11px] leading-relaxed text-slate-500">
                        <span className="font-semibold text-slate-400 block mb-1">Instant delivery guarantee:</span>
                        Airtime recharge modules process securely within 5 seconds on active mobile numbers globally. Transactions update in the ledger below automatically.
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {activeTab === 'bills' && (
                <motion.div
                  key="bills"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-bold font-display text-white">Secured Utility Payment Portal</h3>
                    <p className="text-xs text-slate-400">Initiate seamless and instant funding for prepaid utility electricity meters or premium digital TV providers.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                    
                    {/* Electricity Pay */}
                    <div className="space-y-4 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
                      <span className="text-xs font-semibold text-yellow-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                        Electricity Bill Payment
                      </span>

                      <div className="space-y-3">
                        <div>
                          <label className="text-[10px] text-slate-400 block mb-1">PREPAID METER ID</label>
                          <input
                            type="text"
                            value={meterNumber}
                            onChange={(e) => setMeterNumber(e.target.value)}
                            placeholder="e.g. 1409-4820-194"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-hidden font-mono"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-slate-400 block mb-1">PRESET TOKENS AMOUNT</label>
                          <select
                            value={utilityAmount}
                            onChange={(e) => setUtilityAmount(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 text-xs focus:outline-hidden cursor-pointer"
                          >
                            <option value="10000.00">₦10,000.00 NGN Power Block</option>
                            <option value="20000.00">₦20,000.00 NGN Power Block</option>
                            <option value="50000.00">₦5,0000.00 NGN Power Block</option>
                          </select>
                        </div>

                        <button
                          onClick={() => handleProcessUtility('bills', `Electricity prepaid token (Meter: ${meterNumber})`)}
                          disabled={recharging}
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-sans font-bold text-xs py-3 rounded-xl disabled:opacity-50 cursor-pointer active:scale-95 transition-all flex items-center justify-center gap-1"
                        >
                          {recharging ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Pay Electricity Meter'}
                        </button>
                      </div>
                    </div>

                    {/* TV Subscription */}
                    <div className="space-y-4">
                      <span className="text-xs font-semibold text-violet-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        Television Premium renewal
                      </span>

                      <div className="space-y-3">
                        <div>
                          <label className="text-[10px] text-slate-400 block mb-1">SMART CARD NUMBER / BOX ID</label>
                          <input
                            type="text"
                            value={tvSmartCard}
                            onChange={(e) => setTvSmartCard(e.target.value)}
                            placeholder="e.g. 104-9301-948"
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-hidden font-mono"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] text-slate-400 block mb-1">TV PACKAGE / PROVIDER</label>
                          <select
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 text-xs focus:outline-hidden cursor-pointer"
                          >
                            <option value="DSTV Compact">DSTV Premium Package (₦20,000.00/mo)</option>
                            <option value="StarTimes Nova">StarTimes Nova Super Package (₦12,000.00/mo)</option>
                            <option value="Gotv Max">Gotv Max Ultra Package (₦8,000.00/mo)</option>
                          </select>
                        </div>

                        <button
                          onClick={() => handleProcessUtility('bills', `TV subscription (Box Card: ${tvSmartCard})`)}
                          disabled={recharging}
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-sans font-bold text-xs py-3 rounded-xl disabled:opacity-50 cursor-pointer active:scale-95 transition-all flex items-center justify-center gap-1"
                        >
                          {recharging ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Renew Premium Package'}
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {activeTab === 'referrals' && (
                <motion.div
                  key="referrals"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-bold font-display text-white">Invited Associates Referral Matrix</h3>
                    <p className="text-xs text-slate-400">Share your referral links with peers, friends, or associates to earn 5% cash-back on every single verification purchase they complete.</p>
                  </div>

                  {/* Referral Statistics Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="referral-statistics-panel">
                    <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl relative">
                      <span className="text-[9px] text-slate-500 font-bold block">TOTAL ASSOCIATES INVITED</span>
                      <span className="text-2xl font-bold font-display text-white mt-1 block">{referralsCount}</span>
                      <span className="text-[9px] text-slate-400 mt-1 block">🟢 6 active this week</span>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl">
                      <span className="text-[9px] text-slate-500 font-bold block">CUMULATIVE EARNINGS</span>
                      <span className="text-2xl font-bold font-display text-white mt-1 block">₦{referralsTotalEarned.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      <span className="text-[9px] text-slate-400 mt-1 block">Paid out to date</span>
                    </div>

                    <div className="bg-slate-950 border border-indigo-900 p-4 rounded-xl bg-gradient-to-tr from-indigo-950/40 to-transparent">
                      <span className="text-[9px] text-indigo-400 font-bold block">WITHDRAWABLE REWARDS</span>
                      <span className="text-2xl font-bold font-display text-emerald-400 mt-1 block">₦{referralsWithdrawable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      
                      <button
                        onClick={handleWithdrawReferrals}
                        className="mt-3.5 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-sans font-bold text-[10px] py-1.5 rounded-lg active:scale-95 transition-all text-center cursor-pointer block"
                      >
                        Withdraw rewards → Wallet
                      </button>
                    </div>
                  </div>

                  {/* Referral URL Area */}
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Your dynamic associate URL link</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        readOnly
                        value="https://nexora.com/ref?code=VERIFY-ISRAEL-5"
                        className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-400 focus:outline-hidden select-all"
                      />
                      <button
                        onClick={copyRefLink}
                        className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white px-4 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                      >
                        {copiedLink ? <Check className="w-4 h-4 text-emerald-400 animate-pulse" /> : <Copy className="w-4 h-4" />}
                        <span>Copy URL</span>
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-relaxed font-sans">
                      *Earnings are converted directly to active NGN credits inside your wallet upon withdrawal. There is no minimum payout ceiling, and recharges occur instantly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* LOWER PORTION: LIVE RECENT TRANSACTIONS LEDGER */}
            <div className="mt-8 border-t border-slate-800 pt-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Dynamic Wallet Transactions Ledger</span>
                <span className="text-[9px] text-emerald-450 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  SYSTEM ACTIVE
                </span>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1" id="transactions-ledger-container">
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex justify-between items-center bg-slate-950 border border-slate-850 p-3 rounded-xl transition-all"
                    style={{ contentVisibility: 'auto' }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                        tx.type === 'deposit' 
                          ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' 
                          : tx.type === 'payout'
                          ? 'bg-indigo-500/5 border-indigo-500/20 text-indigo-400'
                          : 'bg-indigo-500/5 border-indigo-500/10 text-indigo-300'
                      }`}>
                        {tx.type === 'deposit' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-200 block">{tx.description}</span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-[9px] font-mono text-slate-500">{tx.id}</span>
                          <span className="text-[9px] text-slate-500 leading-none">•</span>
                          <span className="text-[9px] text-slate-550">{tx.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`text-xs font-mono font-bold block ${
                        tx.type === 'deposit' || tx.type === 'payout' ? 'text-emerald-455' : 'text-slate-300'
                      }`}>
                        {tx.type === 'deposit' || tx.type === 'payout' ? '+' : '-'}₦{tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                      <span className="text-[9px] text-emerald-400 block mt-0.5 font-medium">Completed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
