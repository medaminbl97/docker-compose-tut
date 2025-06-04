"use client"
import { useState } from 'react';

export default function UserForm() {
    const [value, setValue] = useState('');
    const [response, setResponse] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/v1/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value }),
        });

        const data = await res.json();
        setResponse(data.message || 'No message returned');
    };

    return (
        <div className="p-8 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Submit a Value</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter a value"
                    className="border p-2 w-full"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
            {response && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-800">
                    {response}
                </div>
            )}
        </div>
    );
}
