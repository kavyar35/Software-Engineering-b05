import { useState } from 'react';

export default function FoodDonationForm({ onSuccess }: { onSuccess?: () => void }) {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    if (!foodName || !quantity || !expiryDate) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('/api/food', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ foodName, quantity, expiryDate }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Failed to donate food');
      } else {
        setSuccess('Food donated successfully!');
        setFoodName('');
        setQuantity('');
        setExpiryDate('');
        if (onSuccess) onSuccess();
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}
      {success && <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">{success}</div>}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Food Name</label>
        <input
          type="text"
          value={foodName}
          onChange={e => setFoodName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
        <input
          type="text"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
        <input
          type="date"
          value={expiryDate}
          onChange={e => setExpiryDate(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50"
      >
        {loading ? 'Donating...' : 'Donate Food'}
      </button>
    </form>
  );
}
