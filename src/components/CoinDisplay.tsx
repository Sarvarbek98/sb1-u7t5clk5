export default function CoinDisplay() {
  return (
    <div className="relative w-24 h-24 mx-auto">
      <div className="absolute inset-0 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform">
        <span className="text-yellow-800 font-bold text-xl">UZG</span>
      </div>
    </div>
  );
}