import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, X } from "lucide-react";
import BrandLogo from "../components/BrandLogo";

function GoogleIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed.");
        return;
      }

      alert("Account created successfully! Please sign in.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    alert("Google authentication setup is in progress. Please register using email & password.");
  };

  return (
    <main className="min-h-screen bg-[#090C15] text-slate-100 antialiased flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Header */}
      <div className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/">
          <BrandLogo size="md" />
        </Link>

        <Link
          to="/"
          className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          <X size={15} />
          Back to Home
        </Link>
      </div>

      {/* Main Form Center */}
      <div className="flex-1 flex items-center justify-center px-5 py-8">
        <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-[#0E1322] p-7 sm:p-9 shadow-xl shadow-black/40">
          
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Create an account
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Start tracking expenses with zero friction
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            
            {/* Name Field */}
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">
                Full Name
              </label>
              <div className="flex h-11 items-center rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500/30 transition-all">
                <User size={16} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Anchal Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="ml-2.5 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">
                Email Address
              </label>
              <div className="flex h-11 items-center rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500/30 transition-all">
                <Mail size={16} className="text-slate-400 shrink-0" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ml-2.5 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">
                Password
              </label>
              <div className="flex h-11 items-center rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500/30 transition-all">
                <Lock size={16} className="text-slate-400 shrink-0" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={6}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="ml-2.5 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">
                Confirm Password
              </label>
              <div className="flex h-11 items-center rounded-xl border border-slate-700 bg-slate-900/60 px-3.5 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500/30 transition-all">
                <Lock size={16} className="text-slate-400 shrink-0" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="ml-2.5 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-semibold text-slate-950 transition-colors disabled:opacity-50 text-sm shadow-sm"
            >
              <span>{loading ? "Creating Account..." : "Create Free Account"}</span>
              <ArrowRight size={15} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-5 flex items-center justify-center">
            <div className="w-full border-t border-slate-800" />
            <span className="absolute bg-[#0E1322] px-3 text-[11px] font-medium uppercase tracking-wider text-slate-500">
              or continue with
            </span>
          </div>

          {/* Google Sign Up Button */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="flex h-11 w-full items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-600 font-medium text-slate-200 transition-colors text-sm"
          >
            <GoogleIcon />
            <span>Sign up with Google</span>
          </button>

          {/* Switch to Login */}
          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors ml-1"
              >
                Sign in
              </Link>
            </p>
          </div>

        </div>
      </div>

      {/* Simple Footer */}
      <div className="py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SpendWise. Encrypted & Secure.
      </div>

    </main>
  );
}

export default Register;