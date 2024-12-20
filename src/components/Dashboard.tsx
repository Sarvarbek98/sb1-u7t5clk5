import { TelegramUser } from '@/types/telegram';
import { useGameStore } from '@/lib/store';
import CoinDisplay from './CoinDisplay';

interface Props {
  user: TelegramUser;
}

export default function Dashboard({ user }: Props) {
  const { points, incrementPoints } = useGameStore();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 mb-6">
        {user.photo_url && (
          <img
            src={user.photo_url}
            alt={user.first_name}
            className="w-16 h-16 rounded-full"
          />
        )}
        <div>
          <h2 className="text-xl font-bold">{user.first_name}</h2>
          {user.username && <p className="text-gray-600">@{user.username}</p>}
        </div>
      </div>

      <div className="text-center mb-8">
        <CoinDisplay />
        <p className="text-2xl font-bold mt-4">{points} Points</p>
      </div>

      <button
        onClick={incrementPoints}
        className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Click to Earn Points!
      </button>
    </div>
  );
}