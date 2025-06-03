import React from "react";

export default async function AdminPage() {
    // Simulate fetching admin data
    const adminData = await Promise.resolve({
        users: 42,
        sales: 1234,
        messages: 7,
    });

    return (
        <main className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard - App1</h1>
            <div className="space-y-4 text-gray-700">
                <p><strong>Total Users:</strong> {adminData.users}</p>
                <p><strong>Total Sales:</strong> ${adminData.sales}</p>
                <p><strong>Unread Messages:</strong> {adminData.messages}</p>
            </div>
        </main>
    );
}
