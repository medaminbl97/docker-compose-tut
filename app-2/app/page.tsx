import React from "react";

export default async function Home() {
  // Simulate async data fetch
  const data = await Promise.resolve("Welcome to App2!");

  return (
    <main className="p-8 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700">{data}</h1>
      <p className="mt-4">This is a server component demo.</p>
    </main>
  );
}
