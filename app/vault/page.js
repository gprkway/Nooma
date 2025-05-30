'use client';

export default function Vault() {
  return (
    <main className="min-h-screen bg-black text-white pt-6">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-light mb-8">
          Your Vault
        </h2>
        
        {/* Placeholder for vault content */}
        <div className="space-y-4">
          <div className="p-6 bg-white/5 rounded-lg border border-white/10">
            <p className="text-gray-400">Your saved readings and insights will appear here</p>
          </div>
        </div>
      </div>
    </main>
  );
} 