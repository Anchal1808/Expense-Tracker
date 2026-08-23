import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  Plus,
  Minus,
  User,
  LogOut,
  ChevronDown,
  X,
  ShoppingBag,
  Utensils,
  Car,
  Home,
  Film,
  HeartPulse,
  MoreHorizontal,
  Edit2,
  DollarSign,
} from "lucide-react";

/* =========================================================
   HELPERS
========================================================= */

const formatINR = (n) =>
  `₹${Math.abs(Number(n) || 0).toLocaleString("en-IN")}`;

/* =========================================================
   SMALL UI PRIMITIVES
========================================================= */

function GlassCard({ className = "", children }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}

function StatCard({ label, value, icon: Icon, tint, sub }) {
  return (
    <GlassCard className="p-5 sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold text-white sm:text-[26px]">
            {formatINR(value)}
          </p>
          {sub && <p className="mt-1 text-xs text-gray-500">{sub}</p>}
        </div>
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${tint}1A` }}
        >
          <Icon size={20} style={{ color: tint }} />
        </div>
      </div>
    </GlassCard>
  );
}

/* =========================================================
   EXPENSE BAR CHART (dependency-free SVG)
========================================================= */

function ExpenseChart({ data }) {
  const max = Math.max(...data.map((d) => d.amount), 1);

  return (
    <GlassCard className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">Expense Chart</h3>
        <span className="text-xs text-gray-500">Last 6 months</span>
      </div>

      <div className="flex h-52 items-end justify-between gap-3 sm:gap-5">
        {data.map((d) => {
          const heightPct = Math.max((d.amount / max) * 100, 6);
          const isLatest = d === data[data.length - 1];
          return (
            <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
              <div className="relative flex h-40 w-full items-end justify-center">
                <div
                  className="w-full max-w-[34px] rounded-t-lg transition-all duration-300"
                  style={{
                    height: `${heightPct}%`,
                    background: isLatest
                      ? "linear-gradient(180deg,#fb923c,#f97316)"
                      : "rgba(255,255,255,0.10)",
                    boxShadow: isLatest ? "0 8px 24px rgba(249,115,22,0.35)" : "none",
                  }}
                />
              </div>
              <span
                className={`text-[11px] font-medium ${
                  isLatest ? "text-orange-400 font-bold" : "text-gray-500"
                }`}
              >
                {d.month}
              </span>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}

/* =========================================================
   CATEGORY DONUT (CSS conic-gradient)
========================================================= */

const CATEGORY_COLORS = {
  Food: "#f97316",
  Shopping: "#a855f7",
  Travel: "#38bdf8",
  Housing: "#34d399",
  Bills: "#fbbf24",
  Entertainment: "#f472b6",
  Health: "#ec4899",
  Other: "#94a3b8",
};

function CategoryChart({ categories }) {
  const total = categories.reduce((s, c) => s + c.value, 0);

  if (total === 0 || categories.length === 0) {
    return (
      <GlassCard className="p-6 flex flex-col justify-between">
        <h3 className="text-base font-semibold text-white mb-6">
          Category-wise Expenses
        </h3>
        <div className="flex flex-col items-center justify-center py-10 text-gray-500 text-sm">
          <p>No expenses recorded yet</p>
        </div>
      </GlassCard>
    );
  }

  const stops = categories.reduce(
    ({ parts, cumulative }, category) => {
      const start = (cumulative / total) * 360;
      const nextCumulative = cumulative + category.value;
      const end = (nextCumulative / total) * 360;
      const color = CATEGORY_COLORS[category.label] || "#f97316";

      return {
        parts: [...parts, `${color} ${start}deg ${end}deg`],
        cumulative: nextCumulative,
      };
    },
    { parts: [], cumulative: 0 }
  ).parts;

  return (
    <GlassCard className="p-6">
      <h3 className="mb-6 text-base font-semibold text-white">
        Category-wise Expenses
      </h3>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
        <div
          className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full shadow-lg"
          style={{ background: `conic-gradient(${stops.join(",")})` }}
        >
          <div className="flex h-[70%] w-[70%] flex-col items-center justify-center rounded-full bg-[#0D1226]">
            <span className="text-[11px] text-gray-500">Total</span>
            <span className="text-lg font-bold text-white">
              {formatINR(total)}
            </span>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2">
          {categories.map((c) => (
            <div key={c.label} className="flex items-center gap-2.5">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: CATEGORY_COLORS[c.label] || "#f97316" }}
              />
              <span className="flex-1 truncate text-xs text-gray-300">
                {c.label}
              </span>
              <span className="text-xs font-semibold text-white">
                {formatINR(c.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

/* =========================================================
   RECENT TRANSACTIONS
========================================================= */

const CATEGORY_ICON = {
  Food: Utensils,
  Shopping: ShoppingBag,
  Travel: Car,
  Housing: Home,
  Bills: Home,
  Entertainment: Film,
  Health: HeartPulse,
  Income: TrendingUp,
};

function RecentTransactions({ transactions }) {
  const sorted = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <GlassCard className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-white">
            Recent Expenses
          </h3>
          <p className="text-xs text-gray-500">Latest outgoings</p>
        </div>
        <span className="text-xs text-gray-400">
          {sorted.length} total
        </span>
      </div>

      {sorted.length === 0 ? (
        <div className="py-8 text-center text-sm text-gray-500">
          No expenses recorded yet. Click Add Expense to record a transaction.
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-white/[0.06] max-h-[380px] overflow-y-auto pr-1">
          {sorted.slice(0, 10).map((t) => {
            const Icon = CATEGORY_ICON[t.category] || MoreHorizontal;
            const displayAmount = Number(t.amount) || 0;

            return (
              <div
                key={t._id || Math.random()}
                className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                  <Icon
                    size={17}
                    className="text-orange-400"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">
                    {t.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t.category || "Expense"} ·{" "}
                    {new Date(t.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <span className="shrink-0 text-sm font-semibold text-gray-200">
                  -{formatINR(displayAmount)}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </GlassCard>
  );
}

/* =========================================================
   MONTHLY BUDGET (FIXED & ENHANCED)
========================================================= */

function MonthlyBudget({ budget, onEditBudget }) {
  const limit = Number(budget?.limit) || 0;
  const spent = Number(budget?.spent) || 0;
  const hasLimit = limit > 0;

  const pct = hasLimit ? Math.min((spent / limit) * 100, 100) : 0;
  const over = hasLimit && spent > limit;
  const remaining = hasLimit ? Math.max(limit - spent, 0) : 0;
  const overAmount = hasLimit && over ? spent - limit : 0;

  return (
    <GlassCard className="p-6 flex flex-col justify-between">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">Monthly Budget</h3>
            <p className="text-xs text-gray-500">Current Month</p>
          </div>
          <button
            onClick={onEditBudget}
            className="flex items-center gap-1 text-xs font-medium text-orange-400 hover:text-orange-300 transition bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 px-3 py-1.5 rounded-lg"
          >
            <Edit2 size={12} />
            {hasLimit ? "Edit Budget" : "Set Budget"}
          </button>
        </div>

        {!hasLimit ? (
          <div className="py-6 text-center">
            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-3">
              <PiggyBank size={24} />
            </div>
            <p className="text-sm font-medium text-white">No Monthly Budget Set</p>
            <p className="text-xs text-gray-400 mt-1 mb-4">
              Set a monthly spending limit to track and avoid overspending.
            </p>
            <button
              onClick={onEditBudget}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-lg shadow-orange-500/20 transition"
            >
              <Plus size={14} />
              Set Monthly Limit
            </button>
          </div>
        ) : (
          <>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs text-gray-400">Spending Progress</span>
              <span
                className={`text-xs font-semibold ${
                  over ? "text-red-400" : "text-gray-300"
                }`}
              >
                {pct.toFixed(0)}% used
              </span>
            </div>

            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${pct}%`,
                  background: over
                    ? "linear-gradient(90deg,#f87171,#ef4444)"
                    : "linear-gradient(90deg,#fb923c,#f97316)",
                }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-gray-300">
                {formatINR(spent)}{" "}
                <span className="text-gray-500 text-xs">of {formatINR(limit)}</span>
              </span>
              <span
                className={`font-semibold text-xs px-2 py-0.5 rounded-full ${
                  over
                    ? "bg-red-500/15 text-red-400 border border-red-500/20"
                    : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                }`}
              >
                {over ? `Over by ${formatINR(overAmount)}` : `${formatINR(remaining)} left`}
              </span>
            </div>
          </>
        )}
      </div>
    </GlassCard>
  );
}

/* =========================================================
   BUDGET MODAL
========================================================= */

function BudgetModal({ currentLimit, onClose, onSuccess }) {
  const [amount, setAmount] = useState(currentLimit ? String(currentLimit) : "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const limitNum = Number(amount);

    if (isNaN(limitNum) || limitNum < 0) {
      alert("Please enter a valid positive budget amount");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/budget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          monthlyLimit: limitNum,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to save budget");
        return;
      }

      onSuccess(data.budget);
      onClose();
    } catch (error) {
      console.error("Set budget error:", error);
      alert("Failed to save budget. Please check connection.");
    } finally {
      setLoading(false);
    }
  };

  const quickAmounts = [10000, 25000, 50000, 100000];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-5">
      <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#101625]/95 p-7 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl animate-in fade-in duration-200">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Set Monthly Budget</h3>
          <button
            onClick={onClose}
            className="text-gray-500 transition hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Monthly Spending Limit
            </label>
            <div className="flex h-[52px] items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 focus-within:border-orange-500/70 focus-within:ring-2 focus-within:ring-orange-500/10">
              <span className="text-gray-500">₹</span>
              <input
                type="number"
                required
                min="1"
                placeholder="e.g. 30000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="ml-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          <div>
            <span className="text-xs text-gray-400 mb-2 block">Quick Select</span>
            <div className="grid grid-cols-4 gap-2">
              {quickAmounts.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setAmount(String(q))}
                  className="rounded-lg border border-white/10 bg-white/[0.03] py-1.5 text-xs font-medium text-gray-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300 transition"
                >
                  ₹{(q / 1000).toFixed(0)}k
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex h-[52px] w-full items-center justify-center rounded-xl bg-orange-500 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:opacity-50"
          >
            {loading ? "Saving Budget..." : "Save Monthly Budget"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* =========================================================
   ADD TRANSACTION MODAL (shared for income / expense)
========================================================= */

function TransactionModal({ mode, onClose, onSuccess }) {
  const isIncome = mode === "income";
  const [amount, setAmount] = useState("");
  const [label, setLabel] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("Food");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");

    if (mode === "income") {
      try {
        const response = await fetch("http://localhost:5000/api/income", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: label,
            amount: Number(amount),
            description: note,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          alert(data.message || "Failed to add income");
          return;
        }

        onSuccess();
        onClose();
      } catch (error) {
        console.error("Error adding income:", error);
        alert("Something went wrong adding income");
      } finally {
        setLoading(false);
      }
      return;
    }

    // Expense Mode
    try {
      const response = await fetch("http://localhost:5000/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: label,
          amount: Number(amount),
          category,
          description: note,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to add expense");
        return;
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error adding expense:", error);
      alert("Something went wrong adding expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-5">
      <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#101625]/95 p-7 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl animate-in fade-in duration-200">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">
            Add {isIncome ? "Income" : "Expense"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 transition hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Amount
            </label>
            <div className="flex h-[52px] items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 focus-within:border-orange-500/70 focus-within:ring-2 focus-within:ring-orange-500/10">
              <span className="text-gray-500">₹</span>
              <input
                type="number"
                required
                min="0.01"
                step="any"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="ml-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Title
            </label>
            <div className="flex h-[52px] items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 focus-within:border-orange-500/70 focus-within:ring-2 focus-within:ring-orange-500/10">
              <input
                type="text"
                required
                placeholder={isIncome ? "e.g. Salary, Freelance" : "e.g. Lunch, Groceries"}
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          {!isIncome && (
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Category
              </label>
              <div className="flex h-[52px] items-center rounded-xl border border-white/10 bg-white/[0.04] px-4">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-transparent text-sm text-white outline-none cursor-pointer"
                >
                  <option value="Food" className="bg-[#101625] text-white">Food</option>
                  <option value="Travel" className="bg-[#101625] text-white">Travel</option>
                  <option value="Shopping" className="bg-[#101625] text-white">Shopping</option>
                  <option value="Bills" className="bg-[#101625] text-white">Bills</option>
                  <option value="Entertainment" className="bg-[#101625] text-white">Entertainment</option>
                  <option value="Health" className="bg-[#101625] text-white">Health</option>
                  <option value="Other" className="bg-[#101625] text-white">Other</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Note (optional)
            </label>
            <div className="flex h-[52px] items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 focus-within:border-orange-500/70 focus-within:ring-2 focus-within:ring-orange-500/10">
              <input
                type="text"
                placeholder="Add notes or tags"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex h-[52px] w-full items-center justify-center rounded-xl bg-orange-500 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : `Save ${isIncome ? "Income" : "Expense"}`}
          </button>
        </form>
      </div>
    </div>
  );
}

/* =========================================================
   PROFILE MENU
========================================================= */

function ProfileMenu({ userName, userEmail }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 transition hover:bg-white/[0.07] hover:border-white/20"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 font-bold text-xs text-white shadow-md shadow-orange-500/20">
          {getInitials(userName)}
        </div>
        <span className="hidden text-sm font-semibold text-gray-200 sm:block max-w-[140px] truncate">
          {userName || "My Profile"}
        </span>
        <ChevronDown size={15} className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] z-40 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#101625]/95 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl animate-in fade-in duration-150">
          <div className="px-4 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Signed in as</p>
            <p className="text-sm font-bold text-white truncate mt-0.5">{userName || "User"}</p>
            {userEmail && (
              <p className="text-xs text-gray-400 truncate mt-0.5">{userEmail}</p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MAIN DASHBOARD
========================================================= */

function Dashboard() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(null); // "expense" | "income" | null
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [budget, setBudget] = useState(null);
  const [userName, setUserName] = useState("User");
  const [userEmail, setUserEmail] = useState("");

  // Load cached user name on initial mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.name) setUserName(parsed.name);
        if (parsed?.email) setUserEmail(parsed.email);
      }
    } catch {
      // ignore
    }
  }, []);

  // Fetch all dashboard data & user profile
  const fetchDashboardData = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      // 1. Fetch user profile
      const userRes = await fetch("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (userRes.ok) {
        const userData = await userRes.json();
        if (userData?.name) {
          setUserName(userData.name);
          setUserEmail(userData.email || "");
          localStorage.setItem("user", JSON.stringify(userData));
        }
      }

      // 2. Fetch expenses
      const expRes = await fetch("http://localhost:5000/api/expenses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (expRes.ok) {
        const expData = await expRes.json();
        setExpenses(Array.isArray(expData) ? expData : []);
      }

      // 3. Fetch income
      const incRes = await fetch("http://localhost:5000/api/income", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (incRes.ok) {
        const incData = await incRes.json();
        setIncome(Array.isArray(incData) ? incData : []);
      }

      // 4. Fetch budget
      const budRes = await fetch("http://localhost:5000/api/budget", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (budRes.ok) {
        const budData = await budRes.json();
        setBudget(budData);
      } else {
        setBudget(null);
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    }
  }, [navigate]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  // Calculations
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + (Number(expense.amount) || 0),
    0
  );

  const totalIncome = income.reduce(
    (sum, item) => sum + (Number(item.amount) || 0),
    0
  );

  const totalBalance = totalIncome - totalExpenses;
  const totalSavings = Math.max(totalIncome - totalExpenses, 0);

  // Current Month's Expenses (Used for Monthly Budget comparison)
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const currentMonthExpenses = expenses
    .filter((expense) => {
      const expenseDate = new Date(expense.date);
      return (
        expenseDate.getMonth() === currentMonth &&
        expenseDate.getFullYear() === currentYear
      );
    })
    .reduce((sum, expense) => sum + (Number(expense.amount) || 0), 0);

  // Last 6 months expense data for bar chart
  const monthlyExpenses = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (5 - i));

    const month = date.toLocaleString("en-IN", { month: "short" });
    const monthNumber = date.getMonth();
    const year = date.getFullYear();

    const amount = expenses
      .filter((expense) => {
        const expenseDate = new Date(expense.date);
        return (
          expenseDate.getMonth() === monthNumber &&
          expenseDate.getFullYear() === year
        );
      })
      .reduce((sum, expense) => sum + (Number(expense.amount) || 0), 0);

    return {
      month,
      amount,
    };
  });

  // Category-wise expense grouping
  const categoryExpenses = expenses.reduce((acc, expense) => {
    const category = expense.category || "Other";
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += Number(expense.amount) || 0;
    return acc;
  }, {});

  const categories = Object.entries(categoryExpenses).map(([label, value]) => ({
    label,
    value,
  }));

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#070B18] via-[#0B1020] to-[#0D1226]">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 bottom-[-100px] h-[550px] w-[550px] rounded-full bg-purple-700/20 blur-[170px]" />
        <div className="absolute -right-32 top-20 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-8 md:px-10">
        {/* TOP BAR */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/25">
              <span className="text-lg font-bold text-white">$</span>
            </Link>
            <div>
              <h1 className="text-xl font-bold leading-none text-white">
                Spend<span className="text-orange-500">Wise</span>
              </h1>
              <p className="mt-1 text-xs text-gray-400">
                Welcome back, {userName} 👋
              </p>
            </div>
          </div>

          <ProfileMenu userName={userName} userEmail={userEmail} />
        </div>

        {/* SUMMARY CARDS */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Balance"
            value={totalBalance}
            icon={Wallet}
            tint="#f97316"
          />
          <StatCard
            label="Total Income"
            value={totalIncome}
            icon={TrendingUp}
            tint="#34d399"
          />
          <StatCard
            label="Total Expenses"
            value={totalExpenses}
            icon={TrendingDown}
            tint="#f87171"
          />
          <StatCard
            label="Savings"
            value={totalSavings}
            icon={PiggyBank}
            tint="#a855f7"
          />
        </div>

        {/* CHARTS */}
        <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ExpenseChart data={monthlyExpenses} />
          <CategoryChart categories={categories} />
        </div>

        {/* QUICK ACTIONS */}
        <div className="mb-6 flex flex-wrap gap-3">
          <button
            onClick={() => setModal("expense")}
            className="flex h-11 items-center gap-2 rounded-xl bg-orange-500 px-5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            <Minus size={16} />
            Add Expense
          </button>
          <button
            onClick={() => setModal("income")}
            className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-gray-200 transition hover:bg-white/[0.08]"
          >
            <Plus size={16} />
            Add Income
          </button>
          <button
            onClick={() => setBudgetModalOpen(true)}
            className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-gray-200 transition hover:bg-white/[0.08]"
          >
            <Edit2 size={15} />
            {budget?.monthlyLimit ? "Update Budget" : "Set Monthly Budget"}
          </button>
        </div>

        {/* TRANSACTIONS + BUDGET */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentTransactions transactions={expenses} />
          </div>
          <MonthlyBudget
            budget={{
              limit: Number(budget?.monthlyLimit) || 0,
              spent: currentMonthExpenses,
            }}
            onEditBudget={() => setBudgetModalOpen(true)}
          />
        </div>
      </div>

      {/* MODALS */}
      {modal && (
        <TransactionModal
          mode={modal}
          onClose={() => setModal(null)}
          onSuccess={fetchDashboardData}
        />
      )}

      {budgetModalOpen && (
        <BudgetModal
          currentLimit={budget?.monthlyLimit || ""}
          onClose={() => setBudgetModalOpen(false)}
          onSuccess={(newBudget) => {
            setBudget(newBudget);
            fetchDashboardData();
          }}
        />
      )}
    </main>
  );
}

export default Dashboard;
