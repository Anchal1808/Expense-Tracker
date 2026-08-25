import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import {
  Wallet,
  TrendingUp,
  ArrowDownRight,
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
} from "lucide-react";

/* =========================================================
   HELPERS
========================================================= */

const formatINR = (n) =>
  `₹${Math.abs(Number(n) || 0).toLocaleString("en-IN")}`;

/* =========================================================
   UI PRIMITIVES (Linear / Mercury Minimalist)
========================================================= */

function SurfaceCard({ className = "", children }) {
  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-[#0E1322] shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function StatCard({ label, value, icon: Icon, tint, sub }) {
  return (
    <SurfaceCard className="p-5 sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {label}
          </p>
          <p className="mt-2 text-2xl sm:text-[26px] font-bold text-white tracking-tight">
            {formatINR(value)}
          </p>
          {sub && <p className="mt-1 text-xs text-slate-400">{sub}</p>}
        </div>
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 border border-slate-700"
        >
          <Icon size={18} style={{ color: tint }} />
        </div>
      </div>
    </SurfaceCard>
  );
}

/* =========================================================
   EXPENSE BAR CHART (Clean SVG)
========================================================= */

function ExpenseChart({ data }) {
  const max = Math.max(...data.map((d) => d.amount), 1);

  return (
    <SurfaceCard className="p-6 flex flex-col justify-between">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-white">Expense Velocity</h3>
          <p className="text-xs text-slate-400 mt-0.5">Last 6 months spending</p>
        </div>
        <span className="text-xs font-medium text-slate-400">Monthly breakdown</span>
      </div>

      <div className="flex h-48 items-end justify-between gap-3 sm:gap-4 pt-2 border-b border-slate-800 pb-2">
        {data.map((d) => {
          const heightPct = Math.max((d.amount / max) * 100, 6);
          const isLatest = d === data[data.length - 1];
          return (
            <div key={d.month} className="flex flex-1 flex-col items-center gap-2 h-full justify-end">
              <div className="relative flex h-36 w-full items-end justify-center">
                <div
                  className={`w-full max-w-[32px] rounded-t-md transition-all duration-200 ${
                    isLatest
                      ? "bg-emerald-500 shadow-sm"
                      : "bg-slate-700/60 hover:bg-slate-700"
                  }`}
                  style={{ height: `${heightPct}%` }}
                />
              </div>
              <span
                className={`text-[11px] ${
                  isLatest ? "text-emerald-400 font-semibold" : "text-slate-400"
                }`}
              >
                {d.month}
              </span>
            </div>
          );
        })}
      </div>
    </SurfaceCard>
  );
}

/* =========================================================
   CATEGORY DONUT (CSS Conic-Gradient)
========================================================= */

const CATEGORY_COLORS = {
  Food: "#F97316",
  Shopping: "#A855F7",
  Travel: "#38BDF8",
  Housing: "#34D399",
  Bills: "#FBBF24",
  Entertainment: "#F472B6",
  Health: "#EC4899",
  Other: "#94A3B8",
};

function CategoryChart({ categories }) {
  const total = categories.reduce((s, c) => s + c.value, 0);

  if (total === 0 || categories.length === 0) {
    return (
      <SurfaceCard className="p-6 flex flex-col justify-between">
        <h3 className="text-base font-semibold text-white mb-2">
          Category Distribution
        </h3>
        <div className="flex flex-col items-center justify-center py-12 text-slate-400 text-sm">
          <p>No expenses recorded yet</p>
        </div>
      </SurfaceCard>
    );
  }

  const stops = categories.reduce(
    ({ parts, cumulative }, category) => {
      const start = (cumulative / total) * 360;
      const nextCumulative = cumulative + category.value;
      const end = (nextCumulative / total) * 360;
      const color = CATEGORY_COLORS[category.label] || "#94A3B8";

      return {
        parts: [...parts, `${color} ${start}deg ${end}deg`],
        cumulative: nextCumulative,
      };
    },
    { parts: [], cumulative: 0 }
  ).parts;

  return (
    <SurfaceCard className="p-6">
      <div className="mb-6">
        <h3 className="text-base font-semibold text-white">
          Category Distribution
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">Where your money goes</p>
      </div>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
        <div
          className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full"
          style={{ background: `conic-gradient(${stops.join(",")})` }}
        >
          <div className="flex h-[72%] w-[72%] flex-col items-center justify-center rounded-full bg-[#0E1322]">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider">Total</span>
            <span className="text-sm font-bold text-white">
              {formatINR(total)}
            </span>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
          {categories.map((c) => (
            <div key={c.label} className="flex items-center gap-2">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: CATEGORY_COLORS[c.label] || "#94A3B8" }}
              />
              <span className="flex-1 truncate text-xs text-slate-300">
                {c.label}
              </span>
              <span className="text-xs font-semibold text-white">
                {formatINR(c.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SurfaceCard>
  );
}

/* =========================================================
   RECENT EXPENSES
========================================================= */

const CATEGORY_ICON = {
  Food: Utensils,
  Shopping: ShoppingBag,
  Travel: Car,
  Housing: Home,
  Bills: Home,
  Entertainment: Film,
  Health: HeartPulse,
};

function RecentTransactions({ transactions }) {
  const sorted = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <SurfaceCard className="p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-white">
            Recent Expenses
          </h3>
          <p className="text-xs text-slate-400">Latest outgoings</p>
        </div>
        <span className="text-xs text-slate-400">
          {sorted.length} total
        </span>
      </div>

      {sorted.length === 0 ? (
        <div className="py-8 text-center text-sm text-slate-400">
          No expenses recorded yet. Click Add Expense to record a transaction.
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-slate-800/80 max-h-[380px] overflow-y-auto pr-1">
          {sorted.slice(0, 10).map((t) => {
            const Icon = CATEGORY_ICON[t.category] || MoreHorizontal;
            const displayAmount = Number(t.amount) || 0;

            return (
              <div
                key={t._id || Math.random()}
                className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                  <Icon size={16} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">
                    {t.title}
                  </p>
                  <p className="text-xs text-slate-400">
                    {t.category || "Expense"} ·{" "}
                    {new Date(t.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </div>

                <span className="shrink-0 text-sm font-semibold text-slate-200">
                  -{formatINR(displayAmount)}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </SurfaceCard>
  );
}

/* =========================================================
   MONTHLY BUDGET (Clean & Focused)
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
    <SurfaceCard className="p-6 flex flex-col justify-between">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-white">Monthly Budget</h3>
            <p className="text-xs text-slate-400">Current calendar month</p>
          </div>
          <button
            onClick={onEditBudget}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Edit2 size={12} />
            {hasLimit ? "Edit Budget" : "Set Budget"}
          </button>
        </div>

        {!hasLimit ? (
          <div className="py-6 text-center">
            <div className="flex h-11 w-11 mx-auto items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-slate-400 mb-3">
              <PiggyBank size={20} />
            </div>
            <p className="text-sm font-medium text-white">No Monthly Limit Set</p>
            <p className="text-xs text-slate-400 mt-1 mb-4">
              Set a monthly spending limit to keep your budget on track.
            </p>
            <button
              onClick={onEditBudget}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-colors shadow-sm"
            >
              <Plus size={14} />
              Set Monthly Limit
            </button>
          </div>
        ) : (
          <>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs text-slate-400">Spending Progress</span>
              <span
                className={`text-xs font-semibold ${
                  over ? "text-rose-400" : "text-slate-300"
                }`}
              >
                {pct.toFixed(0)}% used
              </span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  over ? "bg-rose-500" : "bg-emerald-500"
                }`}
                style={{ width: `${pct}%` }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-slate-300">
                {formatINR(spent)}{" "}
                <span className="text-slate-500 text-xs">of {formatINR(limit)}</span>
              </span>
              <span
                className={`font-semibold text-xs px-2.5 py-1 rounded-md ${
                  over
                    ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                    : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                }`}
              >
                {over ? `Over by ${formatINR(overAmount)}` : `${formatINR(remaining)} left`}
              </span>
            </div>
          </>
        )}
      </div>
    </SurfaceCard>
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

      const response = await fetch("https://expense-tracker-9qyd.onrender.com/api/budget", {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs px-5">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-[#0E1322] p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Set Monthly Budget</h3>
          <button
            onClick={onClose}
            className="text-slate-400 transition hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-300">
              Monthly Spending Target
            </label>
            <div className="flex h-11 items-center rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 focus-within:border-emerald-500">
              <span className="text-slate-400 text-sm">₹</span>
              <input
                type="number"
                required
                min="1"
                placeholder="e.g. 30000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="ml-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <div>
            <span className="text-xs text-slate-400 mb-1.5 block">Quick Select</span>
            <div className="grid grid-cols-4 gap-2">
              {quickAmounts.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setAmount(String(q))}
                  className="rounded-lg border border-slate-700 bg-slate-800/40 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-600 hover:bg-slate-800 transition"
                >
                  ₹{(q / 1000).toFixed(0)}k
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex h-11 w-full items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 font-semibold text-slate-950 transition-colors disabled:opacity-50 text-sm"
          >
            {loading ? "Saving..." : "Save Monthly Budget"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* =========================================================
   ADD TRANSACTION MODAL
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
        const response = await fetch("https://expense-tracker-9qyd.onrender.com/api/income", {
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
      const response = await fetch("https://expense-tracker-9qyd.onrender.com/api/expenses", {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs px-5">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-[#0E1322] p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">
            Add {isIncome ? "Income" : "Expense"}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 transition hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-300">
              Amount
            </label>
            <div className="flex h-11 items-center rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 focus-within:border-emerald-500">
              <span className="text-slate-400 text-sm">₹</span>
              <input
                type="number"
                required
                min="0.01"
                step="any"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="ml-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-300">
              Title / Description
            </label>
            <div className="flex h-11 items-center rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 focus-within:border-emerald-500">
              <input
                type="text"
                required
                placeholder={isIncome ? "e.g. Monthly Salary, Freelance" : "e.g. Grocery, Electricity Bill"}
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          {!isIncome && (
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-300">
                Category
              </label>
              <div className="flex h-11 items-center rounded-xl border border-slate-700 bg-slate-900/60 px-3.5">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-transparent text-sm text-white outline-none cursor-pointer"
                >
                  <option value="Food" className="bg-[#0E1322] text-white">Food</option>
                  <option value="Travel" className="bg-[#0E1322] text-white">Travel</option>
                  <option value="Shopping" className="bg-[#0E1322] text-white">Shopping</option>
                  <option value="Bills" className="bg-[#0E1322] text-white">Bills</option>
                  <option value="Entertainment" className="bg-[#0E1322] text-white">Entertainment</option>
                  <option value="Health" className="bg-[#0E1322] text-white">Health</option>
                  <option value="Other" className="bg-[#0E1322] text-white">Other</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-300">
              Note (optional)
            </label>
            <div className="flex h-11 items-center rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 focus-within:border-emerald-500">
              <input
                type="text"
                placeholder="Add optional notes"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex h-11 w-full items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 font-semibold text-slate-950 transition-colors disabled:opacity-50 text-sm"
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
        className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-[#0E1322] px-3.5 py-2 transition hover:bg-slate-800/80 hover:border-slate-700"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 font-bold text-xs text-emerald-400">
          {getInitials(userName)}
        </div>
        <span className="hidden text-sm font-medium text-slate-200 sm:block max-w-[140px] truncate">
          {userName || "My Profile"}
        </span>
        <ChevronDown size={14} className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] z-40 w-56 overflow-hidden rounded-xl border border-slate-800 bg-[#0E1322] shadow-2xl">
          <div className="px-4 py-3 border-b border-slate-800 bg-slate-900/30">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Signed in as</p>
            <p className="text-sm font-semibold text-white truncate mt-0.5">{userName || "User"}</p>
            {userEmail && (
              <p className="text-xs text-slate-400 truncate mt-0.5">{userEmail}</p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 px-4 py-2.5 text-xs font-medium text-rose-400 hover:bg-rose-500/10 transition-colors"
          >
            <LogOut size={14} />
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
      const userRes = await fetch("https://expense-tracker-9qyd.onrender.com/api/auth/me", {
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
      const expRes = await fetch("https://expense-tracker-9qyd.onrender.com/api/expenses", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (expRes.ok) {
        const expData = await expRes.json();
        setExpenses(Array.isArray(expData) ? expData : []);
      }

      // 3. Fetch income
      const incRes = await fetch("https://expense-tracker-9qyd.onrender.com/api/income", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (incRes.ok) {
        const incData = await incRes.json();
        setIncome(Array.isArray(incData) ? incData : []);
      }

      // 4. Fetch budget
      const budRes = await fetch("https://expense-tracker-9qyd.onrender.com/api/budget", {
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
    <main className="min-h-screen bg-[#090C15] text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950 pb-16">
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 md:px-10">
        
        {/* TOP BAR */}
        <div className="mb-8 flex items-center justify-between pb-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Link to="/">
              <BrandLogo size="md" showText={false} />
            </Link>
            <div>
              <h1 className="text-lg font-bold leading-none text-white">
                Spend<span className="text-emerald-400">Wise</span>
              </h1>
              <p className="mt-1 text-xs text-slate-400">
                Welcome back, {userName} 👋
              </p>
            </div>
          </div>

          <ProfileMenu userName={userName} userEmail={userEmail} />
        </div>

        {/* SUMMARY METRIC CARDS */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Balance"
            value={totalBalance}
            icon={Wallet}
            tint="#10B981"
          />
          <StatCard
            label="Total Income"
            value={totalIncome}
            icon={TrendingUp}
            tint="#10B981"
          />
          <StatCard
            label="Total Expenses"
            value={totalExpenses}
            icon={ArrowDownRight}
            tint="#F43F5E"
          />
          <StatCard
            label="Net Savings"
            value={totalSavings}
            icon={PiggyBank}
            tint="#38BDF8"
          />
        </div>

        {/* CHARTS */}
        <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ExpenseChart data={monthlyExpenses} />
          <CategoryChart categories={categories} />
        </div>

        {/* QUICK ACTIONS */}
        <div className="mb-6 flex flex-wrap gap-2.5">
          <button
            onClick={() => setModal("expense")}
            className="flex h-10 items-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 text-xs sm:text-sm font-semibold text-slate-950 transition-colors shadow-sm"
          >
            <Minus size={15} />
            Add Expense
          </button>
          <button
            onClick={() => setModal("income")}
            className="flex h-10 items-center gap-1.5 rounded-xl border border-slate-800 bg-[#0E1322] hover:bg-slate-800 px-4 text-xs sm:text-sm font-medium text-slate-200 transition-colors"
          >
            <Plus size={15} />
            Add Income
          </button>
          <button
            onClick={() => setBudgetModalOpen(true)}
            className="flex h-10 items-center gap-1.5 rounded-xl border border-slate-800 bg-[#0E1322] hover:bg-slate-800 px-4 text-xs sm:text-sm font-medium text-slate-200 transition-colors"
          >
            <Edit2 size={13} />
            {budget?.monthlyLimit ? "Update Budget" : "Set Monthly Budget"}
          </button>
        </div>

        {/* RECENT EXPENSES + MONTHLY BUDGET */}
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
