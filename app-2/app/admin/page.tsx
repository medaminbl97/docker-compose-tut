import React from "react";

export default async function AdminPage() {
    // Simulate fetching admin data
    const adminData = await Promise.resolve({
        users: 27,
        sales: 987,
        tickets: 3,
    });

    return (
        <main className="min-h-screen bg-green-50 p-8">
            <h1 className="text-3xl font-bold mb-6 text-green-700">Admin Dashboard - App2</h1>
            <div className="space-y-4 text-green-900">
                <p><strong>Total Users:</strong> {adminData.users}</p>
                <p><strong>Total Sales:</strong> ${adminData.sales}</p>
                <p><strong>Open Tickets:</strong> {adminData.tickets}</p>
            </div>
        </main>
    );
}
