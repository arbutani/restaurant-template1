"use client";

import React, { useState } from "react";
import Link from "next/link";

const sidebarLinks = [
  { label: "Overview", icon: "📊", id: "overview" },
  { label: "Orders", icon: "🛒", id: "orders" },
  { label: "Menu", icon: "📋", id: "menu" },
  { label: "Reservations", icon: "📅", id: "reservations" },
  { label: "Staff", icon: "👥", id: "staff" },
  { label: "Analytics", icon: "📈", id: "analytics" },
  { label: "Settings", icon: "⚙️", id: "settings" },
];

const orders = [
  { id: "#ORD-001", customer: "Rahul Sharma", items: 3, amount: "$145.00", status: "Completed", time: "2 min ago" },
  { id: "#ORD-002", customer: "Priya Patel", items: 2, amount: "$89.50", status: "Pending", time: "5 min ago" },
  { id: "#ORD-003", customer: "Amit Kumar", items: 5, amount: "$278.00", status: "Completed", time: "12 min ago" },
  { id: "#ORD-004", customer: "Sneha Reddy", items: 1, amount: "$65.00", status: "Cancelled", time: "18 min ago" },
  { id: "#ORD-005", customer: "Vikram Singh", items: 4, amount: "$196.00", status: "Preparing", time: "25 min ago" },
  { id: "#ORD-006", customer: "Ananya Gupta", items: 2, amount: "$78.00", status: "Pending", time: "30 min ago" },
];

const reservations = [
  { name: "Rohit Mehta", guests: 4, time: "7:00 PM", table: "T-5", status: "Confirmed" },
  { name: "Kavita Nair", guests: 2, time: "7:30 PM", table: "T-3", status: "Confirmed" },
  { name: "Suresh Rao", guests: 6, time: "8:00 PM", table: "T-8", status: "Pending" },
  { name: "Meera Joshi", guests: 3, time: "8:30 PM", table: "T-2", status: "Confirmed" },
  { name: "Arjun Das", guests: 8, time: "9:00 PM", table: "VIP-1", status: "Confirmed" },
];

const menuItems = [
  { name: "Truffle Arancini", category: "Starters", price: "$18", available: true },
  { name: "Tuna Tartare", category: "Starters", price: "$22", available: true },
  { name: "Burrata Caprese", category: "Starters", price: "$16", available: true },
  { name: "Wagyu Beef Tenderloin", category: "Main Course", price: "$65", available: true },
  { name: "Pan-Seared Salmon", category: "Main Course", price: "$38", available: false },
  { name: "Lobster Risotto", category: "Main Course", price: "$48", available: true },
  { name: "Lamb Rack", category: "Main Course", price: "$45", available: true },
  { name: "Chocolate Lava Cake", category: "Desserts", price: "$16", available: true },
  { name: "Crème Brûlée", category: "Desserts", price: "$14", available: true },
  { name: "Aged Negroni", category: "Drinks", price: "$18", available: true },
  { name: "Saffron Spritz", category: "Drinks", price: "$15", available: true },
];

const staffMembers = [
  { name: "Chef Arjun Mehta", role: "Executive Chef", shift: "Evening", status: "On Duty" },
  { name: "Chef Priya Kapoor", role: "Sous Chef", shift: "Evening", status: "On Duty" },
  { name: "Rohan Desai", role: "Head Waiter", shift: "Evening", status: "On Duty" },
  { name: "Anjali Menon", role: "Sommelier", shift: "Evening", status: "On Duty" },
  { name: "Vikram Joshi", role: "Pastry Chef", shift: "Afternoon", status: "Off Duty" },
  { name: "Neha Gupta", role: "Hostess", shift: "Evening", status: "On Duty" },
  { name: "Karan Malhotra", role: "Bartender", shift: "Evening", status: "On Duty" },
  { name: "Sanya Reddy", role: "Line Cook", shift: "Evening", status: "On Duty" },
];

const statusColors: Record<string, string> = {
  Completed: "bg-green-500/10 text-green-400 border-green-500/20",
  Pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Cancelled: "bg-red-500/10 text-red-400 border-red-500/20",
  Preparing: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Confirmed: "bg-green-500/10 text-green-400 border-green-500/20",
  "On Duty": "bg-green-500/10 text-green-400 border-green-500/20",
  "Off Duty": "bg-white/10 text-white/40 border-white/10",
};

const stats = [
  { label: "Total Orders", value: "1,284", change: "+12.5%", icon: "🛒", up: true },
  { label: "Revenue", value: "$24,520", change: "+8.2%", icon: "💰", up: true },
  { label: "Active Tables", value: "18/24", change: "75%", icon: "🪑", up: true },
  { label: "Avg Rating", value: "4.9", change: "+0.1", icon: "⭐", up: true },
];

function OverviewContent() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="glass-card rounded-2xl p-5 hover-lift animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.up ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-white/30 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 glass-card rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-white/5 flex items-center justify-between">
            <h3 className="font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Recent Orders
            </h3>
            <button className="text-xs text-gold hover:underline">View All →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left text-white/30 font-medium px-5 py-3">Order ID</th>
                  <th className="text-left text-white/30 font-medium py-3">Customer</th>
                  <th className="text-left text-white/30 font-medium py-3">Items</th>
                  <th className="text-left text-white/30 font-medium py-3">Amount</th>
                  <th className="text-left text-white/30 font-medium py-3">Status</th>
                  <th className="text-left text-white/30 font-medium py-3">Time</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-5 py-3 text-white font-medium">{order.id}</td>
                    <td className="py-3 text-white/60">{order.customer}</td>
                    <td className="py-3 text-white/60">{order.items}</td>
                    <td className="py-3 text-gold font-semibold">{order.amount}</td>
                    <td className="py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 text-white/30 text-xs">{order.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-white/5 flex items-center justify-between">
            <h3 className="font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tonight&apos;s Reservations
            </h3>
            <button className="text-xs text-gold hover:underline">View All →</button>
          </div>
          <div className="divide-y divide-white/5">
            {reservations.map((res) => (
              <div
                key={res.name}
                className="px-5 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-white">{res.name}</p>
                  <p className="text-xs text-white/30 mt-0.5">
                    {res.guests} guests &middot; {res.table}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gold font-medium">{res.time}</p>
                  <span
                    className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${statusColors[res.status]}`}
                  >
                    {res.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: "Popular Dish", value: "Wagyu Beef Tenderloin", sub: "Ordered 47 times today", icon: "🥩" },
          { label: "Peak Hour", value: "8:00 PM - 9:30 PM", sub: "85% table occupancy", icon: "⏰" },
          { label: "Chef Special", value: "Saffron Lobster Risotto", sub: "Limited availability", icon: "🦞" },
        ].map((card, i) => (
          <div
            key={card.label}
            className="glass-card rounded-2xl p-5 hover-lift animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{card.icon}</span>
              <span className="text-xs text-white/30 uppercase tracking-wider">{card.label}</span>
            </div>
            <p className="text-lg font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              {card.value}
            </p>
            <p className="text-xs text-white/30 mt-1">{card.sub}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function OrdersContent() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-white/5">
        <h3 className="font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          All Orders
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-white/30 font-medium px-5 py-3">Order ID</th>
              <th className="text-left text-white/30 font-medium py-3">Customer</th>
              <th className="text-left text-white/30 font-medium py-3">Items</th>
              <th className="text-left text-white/30 font-medium py-3">Amount</th>
              <th className="text-left text-white/30 font-medium py-3">Status</th>
              <th className="text-left text-white/30 font-medium py-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-5 py-3 text-white font-medium">{order.id}</td>
                <td className="py-3 text-white/60">{order.customer}</td>
                <td className="py-3 text-white/60">{order.items}</td>
                <td className="py-3 text-gold font-semibold">{order.amount}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-3 text-white/30 text-xs">{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MenuContent() {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-white/5">
        <h3 className="font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          Menu Items
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-white/30 font-medium px-5 py-3">Item</th>
              <th className="text-left text-white/30 font-medium py-3">Category</th>
              <th className="text-left text-white/30 font-medium py-3">Price</th>
              <th className="text-left text-white/30 font-medium py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr
                key={item.name}
                className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-5 py-3 text-white font-medium">{item.name}</td>
                <td className="py-3 text-white/60">{item.category}</td>
                <td className="py-3 text-gold font-semibold">{item.price}</td>
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      item.available
                        ? "bg-green-500/10 text-green-400 border-green-500/20"
                        : "bg-red-500/10 text-red-400 border-red-500/20"
                    }`}
                  >
                    {item.available ? "Available" : "Unavailable"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ReservationsContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reservations.map((res) => (
        <div key={res.name} className="glass-card rounded-2xl p-5 hover-lift">
          <div className="flex items-center justify-between mb-4">
            <p className="font-semibold text-white">{res.name}</p>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[res.status]}`}
            >
              {res.status}
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-white/40">Time</span>
              <span className="text-gold font-medium">{res.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Guests</span>
              <span className="text-white">{res.guests}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Table</span>
              <span className="text-white">{res.table}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StaffContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {staffMembers.map((member) => (
        <div key={member.name} className="glass-card rounded-2xl p-5 hover-lift">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-lg">
              {member.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-white">{member.name}</p>
              <p className="text-xs text-white/40">{member.role}</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/40">Shift: {member.shift}</span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[member.status]}`}
            >
              {member.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function AnalyticsContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: "Weekly Revenue", value: "$24,520", change: "+12.5%", icon: "💰" },
          { label: "Avg Order Value", value: "$72.30", change: "+5.8%", icon: "🧾" },
          { label: "Table Turnover", value: "3.2x", change: "+0.4", icon: "🔄" },
          { label: "Customer Return", value: "68%", change: "+3.2%", icon: "🔁" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="glass-card rounded-2xl p-5 hover-lift animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/10 text-green-400">
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-white/30 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Revenue by Category
          </h3>
          <div className="space-y-4">
            {[
              { name: "Main Course", value: "$12,450", percent: 51 },
              { name: "Starters", value: "$5,200", percent: 21 },
              { name: "Drinks", value: "$4,370", percent: 18 },
              { name: "Desserts", value: "$2,500", percent: 10 },
            ].map((cat) => (
              <div key={cat.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/60">{cat.name}</span>
                  <span className="text-gold font-medium">{cat.value}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-1000"
                    style={{ width: `${cat.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Peak Hours
          </h3>
          <div className="space-y-3">
            {[
              { time: "6:00 PM", occupancy: 45 },
              { time: "7:00 PM", occupancy: 72 },
              { time: "8:00 PM", occupancy: 95 },
              { time: "9:00 PM", occupancy: 88 },
              { time: "10:00 PM", occupancy: 60 },
              { time: "11:00 PM", occupancy: 30 },
            ].map((hour) => (
              <div key={hour.time} className="flex items-center gap-4">
                <span className="text-sm text-white/40 w-20">{hour.time}</span>
                <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      hour.occupancy > 80 ? "bg-red-500/60" : hour.occupancy > 60 ? "bg-yellow-500/60" : "bg-green-500/60"
                    }`}
                    style={{ width: `${hour.occupancy}%` }}
                  />
                </div>
                <span className="text-sm text-white/60 w-12 text-right">{hour.occupancy}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsContent() {
  return (
    <div className="max-w-2xl space-y-6">
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Restaurant Details
        </h3>
        <div className="space-y-4">
          {[
            { label: "Restaurant Name", value: "Saffron & Spice" },
            { label: "Address", value: "123 Gourmet Avenue, Bandra West, Mumbai 400050" },
            { label: "Phone", value: "+91 22 4567 8901" },
            { label: "Email", value: "reservations@saffronandspice.com" },
          ].map((field) => (
            <div key={field.label}>
              <label className="text-xs text-white/40 uppercase tracking-wider mb-1 block">
                {field.label}
              </label>
              <input
                type="text"
                defaultValue={field.value}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Operating Hours
        </h3>
        <div className="space-y-3">
          {[
            { day: "Tuesday - Thursday", hours: "6:00 PM - 10:00 PM" },
            { day: "Friday - Saturday", hours: "6:00 PM - 11:00 PM" },
            { day: "Sunday", hours: "5:00 PM - 9:00 PM" },
            { day: "Monday", hours: "Closed" },
          ].map((schedule) => (
            <div key={schedule.day} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
              <span className="text-white/60 text-sm">{schedule.day}</span>
              <span className="text-white text-sm font-medium">{schedule.hours}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="px-6 py-3 bg-gold text-dark font-semibold rounded-xl hover:bg-gold-light transition-all duration-300">
        Save Changes
      </button>
    </div>
  );
}

const tabContent: Record<string, () => React.ReactNode> = {
  overview: OverviewContent,
  orders: OrdersContent,
  menu: MenuContent,
  reservations: ReservationsContent,
  staff: StaffContent,
  analytics: AnalyticsContent,
  settings: SettingsContent,
};

export default function Dashboard() {
  const [active, setActive] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const ActiveContent = tabContent[active] || OverviewContent;

  return (
    <div className="min-h-screen bg-dark flex">
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen bg-dark-card border-r border-white/5 transition-all duration-300 z-40 flex flex-col ${
          sidebarOpen ? "w-64" : "w-20"
        } ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="p-5 flex items-center justify-between border-b border-white/5">
          {sidebarOpen && (
            <Link href="/" className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="gradient-text">S&S</span>
              <span className="text-white/40 text-xs ml-2 font-normal">Dashboard</span>
            </Link>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors text-sm"
          >
            {sidebarOpen ? "←" : "→"}
          </button>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActive(link.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                active === link.id
                  ? "bg-gold/10 text-gold font-medium"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              {sidebarOpen && <span>{link.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <Link
            href="/"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/40 hover:text-gold hover:bg-white/5 transition-all ${
              !sidebarOpen ? "justify-center" : ""
            }`}
          >
            <span className="text-lg">🏠</span>
            {sidebarOpen && <span>Back to Site</span>}
          </Link>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <header className="sticky top-0 z-30 bg-dark/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60"
              >
                ☰
              </button>
              <div>
                <h1 className="text-xl font-bold capitalize" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {active}
                </h1>
                <p className="text-xs text-white/30">Welcome back, Chef Arjun</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors relative">
                🔔
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <ActiveContent />
        </div>
      </main>
    </div>
  );
}
