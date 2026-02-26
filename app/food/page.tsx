import Navbar from '@/components/Navbar';
import FoodDonationForm from '@/components/FoodDonationForm';
import FoodList from '@/components/FoodList';
import { useState } from 'react';

export default function FoodDonationPage() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Donate Food</h1>
        <FoodDonationForm onSuccess={() => setRefresh(r => !r)} />
        <h2 className="text-2xl font-semibold mt-12 mb-4">Available Food Donations</h2>
        {/* Key prop on FoodList to force re-fetch on donation */}
        <FoodList key={refresh ? 'refresh1' : 'refresh0'} />
      </div>
    </div>
  );
}
