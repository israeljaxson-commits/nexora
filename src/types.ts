export interface Platform {
  id: string;
  name: string;
  icon: string;
  price: number;
  available: number;
  category: 'social' | 'ecommerce' | 'utility' | 'other';
  color: string;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

export interface ActiveNumber {
  id: string;
  platform: Platform;
  country: Country;
  phoneNumber: string;
  secondsLeft: number;
  status: 'waiting' | 'received' | 'expired';
  sms: Array<{
    id: string;
    sender: string;
    message: string;
    code: string;
    receivedAt: string;
  }>;
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'purchase' | 'refund' | 'payout';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface Wallet {
  balance: number;
  currency: string;
  recentTransactions: Transaction[];
}

export interface Referral {
  code: string;
  url: string;
  count: number;
  earnings: number;
  withdrawn: number;
}
