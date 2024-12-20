import { useState } from 'react';
import { TelegramUser } from '@/types/telegram';
import TelegramAuth from '@/components/TelegramAuth';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const [user, setUser] = useState<TelegramUser | null>(null);

  const handleAuth = (telegramUser: TelegramUser) => {
    setUser(telegramUser);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      {!user ? (
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold mb-6">Welcome to UZG Clicker</h1>
          <TelegramAuth onAuth={handleAuth} />
        </div>
      ) : (
        <Dashboard user={user} />
      )}
    </main>
  );
}