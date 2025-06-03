import React from "react";

export default async function Home() {
  // Simulate async data fetch
  const data = await Promise.resolve("Welcome to App1!");

  return (
    <main className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700">{data}</h1>
      <p className="mt-4">This is a server component demo.</p>
    </main>
  );
}
