// api.js
const servers = [
    { id: 1, name: "Authentication API" },
    { id: 2, name: "Main Database" },
    { id: 3, name: "Payment Gateway" },
    { id: 4, name: "Storage Bucket" }
];

// Returns the basic list of servers
export function getServers() {
    return servers;
}

// Simulates pinging a specific server over the network
export async function pingServer(server) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 500 + 200; // Network latency (200ms - 700ms)
        
        setTimeout(() => {
            const isOnline = Math.random() > 0.15; // 85% chance of success, 15% chance of crash
            
            if (isOnline) {
                resolve({ ...server, status: "ONLINE", timestamp: new Date() });
            } else {
                reject(new Error(JSON.stringify({ ...server, status: "OFFLINE", timestamp: new Date() })));
            }
        }, delay);
    });
}