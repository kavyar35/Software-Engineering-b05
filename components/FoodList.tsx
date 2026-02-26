import { useEffect, useState } from 'react';

export default function FoodList() {
  const [foods, setFoods] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/food')
      .then(res => res.json())
      .then(data => {
        setFoods(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading available food...</div>;

  if (!foods.length) return <div>No food donations available.</div>;

  return (
    <div className="space-y-4">
      {foods.map(food => (
        <div key={food.id} className="border rounded-lg p-4 bg-white shadow">
          <div className="font-bold text-lg">{food.foodName}</div>
          <div>Quantity: {food.quantity}</div>
          <div>Expiry Date: {food.expiryDate}</div>
        </div>
      ))}
    </div>
  );
}
