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
  Completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Cancelled: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  Preparing: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Confirmed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "On Duty": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Off Duty": "bg-white/5 text-white/30 border-white/5",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2.5xl">{stat.icon}</span>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  stat.up ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-xs text-white/30">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 glass-card-strong rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-white/[0.05] flex items-center justify-between">
            <h3 className="font-semibold text-white text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Recent Orders
            </h3>
            <button className="text-xs text-gold hover:underline">View All →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.05]">
                  <th className="text-left text-white/25 font-medium px-5 py-4">Order ID</th>
                  <th className="text-left text-white/25 font-medium py-4">Customer</th>
                  <th className="text-left text-white/25 font-medium py-4">Items</th>
                  <th className="text-left text-white/25 font-medium py-4">Amount</th>
                  <th className="text-left text-white/25 font-medium py-4">Status</th>
                  <th className="text-left text-white/25 font-medium py-4">Time</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-5 py-4 text-white font-medium">{order.id}</td>
                    <td className="py-4 text-white/60">{order.customer}</td>
                    <td className="py-4 text-white/60">{order.items}</td>
                    <td className="py-4 text-gold font-semibold">{order.amount}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border ${statusColors[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 text-white/30 text-xs">{order.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card-strong rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-white/[0.05] flex items-center justify-between">
            <h3 className="font-semibold text-white text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Tonight&apos;s Reservations
            </h3>
            <button className="text-xs text-gold hover:underline">View All →</button>
          </div>
          <div className="divide-y divide-white/[0.03]">
            {reservations.map((res) => (
              <div
                key={res.name}
                className="px-5 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-white">{res.name}</p>
                  <p className="text-xs text-white/30 mt-0.5">
                    {res.guests} guests · {res.table}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gold font-medium">{res.time}</p>
                  <span
                    className={`inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${statusColors[res.status]}`}
                  >
                    {res.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { label: "Popular Dish", value: "Wagyu Beef Tenderloin", sub: "Ordered 47 times today", icon: "🥩" },
          { label: "Peak Hour", value: "8:00 PM - 9:30 PM", sub: "85% table occupancy", icon: "⏰" },
          { label: "Chef Special", value: "Saffron Lobster Risotto", sub: "Limited availability", icon: "🦞" },
        ].map((card, i) => (
          <div
            key={card.label}
            className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2.5xl">{card.icon}</span>
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
    <div className="glass-card-strong rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-white/[0.05]">
        <h3 className="font-semibold text-white text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
          All Orders
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.05]">
              <th className="text-left text-white/25 font-medium px-5 py-4">Order ID</th>
              <th className="text-left text-white/25 font-medium py-4">Customer</th>
              <th className="text-left text-white/25 font-medium py-4">Items</th>
              <th className="text-left text-white/25 font-medium py-4">Amount</th>
              <th className="text-left text-white/25 font-medium py-4">Status</th>
              <th className="text-left text-white/25 font-medium py-4">Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-5 py-4 text-white font-medium">{order.id}</td>
                <td className="py-4 text-white/60">{order.customer}</td>
                <td className="py-4 text-white/60">{order.items}</td>
                <td className="py-4 text-gold font-semibold">{order.amount}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-4 text-white/30 text-xs">{order.time}</td>
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
    <div className="glass-card-strong rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-white/[0.05]">
        <h3 className="font-semibold text-white text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
          Menu Items
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.05]">
              <th className="text-left text-white/25 font-medium px-5 py-4">Item</th>
              <th className="text-left text-white/25 font-medium py-4">Category</th>
              <th className="text-left text-white/25 font-medium py-4">Price</th>
              <th className="text-left text-white/25 font-medium py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr
                key={item.name}
                className="border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-5 py-4 text-white font-medium">{item.name}</td>
                <td className="py-4 text-white/60">{item.category}</td>
                <td className="py-4 text-gold font-semibold">{item.price}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                      item.available
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-rose-500/10 text-rose-400 border-rose-500/20"
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {reservations.map((res) => (
        <div key={res.name} className="glass-card rounded-2xl p-6 hover-lift">
          <div className="flex items-center justify-between mb-5">
            <p className="font-semibold text-white">{res.name}</p>
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${statusColors[res.status]}`}
            >
              {res.status}
            </span>
          </div>
          <div className="space-y-3 text-sm">
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {staffMembers.map((member) => (
        <div key={member.name} className="glass-card rounded-2xl p-6 hover-lift">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold font-bold text-xl">
              {member.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-white">{member.name}</p>
              <p className="text-xs text-white/40">{member.role}</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm pt-4 border-t border-white/[0.05]">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {[
          { label: "Weekly Revenue", value: "$24,520", change: "+12.5%", icon: "💰" },
          { label: "Avg Order Value", value: "$72.30", change: "+5.8%", icon: "🧾" },
          { label: "Table Turnover", value: "3.2x", change: "+0.4", icon: "🔄" },
          { label: "Customer Return", value: "68%", change: "+3.2%", icon: "🔁" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="glass-card rounded-2xl p-6 hover-lift animate-fade-in-up opacity-0"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2.5xl">{stat.icon}</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-white/30 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-semibold text-white text-lg mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Revenue by Category
          </h3>
          <div className="space-y-5">
            {[
              { name: "Main Course", value: "$12,450", percent: 51 },
              { name: "Starters", value: "$5,200", percent: 21 },
              { name: "Drinks", value: "$4,370", percent: 18 },
              { name: "Desserts", value: "$2,500", percent: 10 },
            ].map((cat) => (
              <div key={cat.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/60">{cat.name}</span>
                  <span className="text-gold font-medium">{cat.value}</span>
                </div>
                <div className="w-full h-2.5 bg-white/[0.05] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-1000"
                    style={{ width: `${cat.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-semibold text-white text-lg mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Peak Hours
          </h3>
          <div className="space-y-4">
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
                <div className="flex-1 h-3 bg-white/[0.05] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      hour.occupancy > 80 ? "bg-rose-500/60" : hour.occupancy > 60 ? "bg-amber-500/60" : "bg-emerald-500/60"
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
      <div className="glass-card-strong rounded-2xl p-8">
        <h3 className="font-semibold text-white text-lg mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Restaurant Details
        </h3>
        <div className="space-y-5">
          {[
            { label: "Restaurant Name", value: "Saffron & Spice" },
            { label: "Address", value: "123 Gourmet Avenue, Bandra West, Mumbai 400050" },
            { label: "Phone", value: "+91 22 4567 8901" },
            { label: "Email", value: "reservations@saffronandspice.com" },
          ].map((field) => (
            <div key={field.label}>
              <label className="text-[11px] text-white/30 uppercase tracking-wider mb-2 block font-medium">
                {field.label}
              </label>
              <input
                type="text"
                defaultValue={field.value}
                className="input-field"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card-strong rounded-2xl p-8">
        <h3 className="font-semibold text-white text-lg mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Operating Hours
        </h3>
        <div className="space-y-4">
          {[
            { day: "Tuesday - Thursday", hours: "6:00 PM - 10:00 PM" },
            { day: "Friday - Saturday", hours: "6:00 PM - 11:00 PM" },
            { day: "Sunday", hours: "5:00 PM - 9:00 PM" },
            { day: "Monday", hours: "Closed" },
          ].map((schedule) => (
            <div key={schedule.day} className="flex items-center justify-between py-3 border-b border-white/[0.05] last:border-0">
              <span className="text-white/60 text-sm">{schedule.day}</span>
              <span className="text-white text-sm font-medium">{schedule.hours}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="px-8 py-4 btn-primary text-base">
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
        className={`fixed lg:sticky top-0 left-0 h-screen bg-dark-card border-r border-white/[0.05] transition-all duration-400 z-40 flex flex-col ${
          sidebarOpen ? "w-72" : "w-20"
        } ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/[0.05]">
          {sidebarOpen && (
            <Link href="/" className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="gradient-text">S&S</span>
              <span className="text-white/30 text-xs ml-2 font-normal">Dashboard</span>
            </Link>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-9 h-9 rounded-xl bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            {sidebarOpen ? "←" : "→"}
          </button>
        </div>

        <nav className="flex-1 py-5 px-3 space-y-1.5">
          {sidebarLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActive(link.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                active === link.id
                  ? "bg-gold/10 text-gold font-medium"
                  : "text-white/40 hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              <span className="text-xl w-6 text-center">{link.icon}</span>
              {sidebarOpen && <span>{link.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/[0.05]">
          <Link
            href="/"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-white/40 hover:text-gold hover:bg-white/[0.03] transition-all ${
              !sidebarOpen ? "justify-center" : ""
            }`}
          >
            <span className="text-xl w-6 text-center">🏠</span>
            {sidebarOpen && <span>Back to Site</span>}
          </Link>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <header className="sticky top-0 z-30 bg-dark/80 backdrop-blur-2xl border-b border-white/[0.05] px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-white/50 hover:bg-white/[0.06]"
              >
                ☰
              </button>
              <div>
                <h1 className="text-2xl font-bold text-white capitalize" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {active}
                </h1>
                <p className="text-xs text-white/30">Welcome back, Chef Arjun</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors relative">
                🔔
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full" />
              </button>
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold text-sm font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          <ActiveContent />
        </div>
      </main>
    </div>
  );
}