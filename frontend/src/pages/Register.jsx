import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  X,
} from "lucide-react";

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

    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Registration failed.");
      return;
    }

    alert("Account created successfully!");

    navigate("/login");

  } catch (error) {
    console.error(error);
    alert("Server error. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#070B18] via-[#0B1020] to-[#0D1226]">

      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div className="absolute inset-0">

        {/* Purple glow */}
        <div className="absolute -left-40 bottom-[-100px] h-[550px] w-[550px] rounded-full bg-purple-700/25 blur-[170px]" />

        {/* Orange glow */}
        <div className="absolute -right-32 top-20 h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[160px]" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[150px]" />

      </div>

      {/* =========================
          DARK OVERLAY
      ========================== */}

      <div className="absolute inset-0 bg-[#050817]/35 backdrop-blur-[3px]" />

      {/* =========================
          CLOSE BUTTON
      ========================== */}

      <Link
        to="/"
        className="absolute right-6 top-7 z-30 flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-orange-400 sm:right-10 md:right-14"
      >
        <X size={19} />
        Close
      </Link>

      {/* =========================
          MAIN CONTAINER
      ========================== */}

      <div className="relative z-20 flex min-h-screen items-center justify-center px-5 py-24 sm:px-8 md:px-12 lg:px-20">

        {/* =========================
            REGISTER CARD
        ========================== */}

        <div
          className="
            w-full
            max-w-[540px]
            min-h-[580px]
            rounded-[32px]
            border
            border-white/10
            bg-[#101625]/95
            px-8
            py-10
            shadow-[0_30px_100px_rgba(0,0,0,0.55)]
            backdrop-blur-2xl
             !p-12
            flex
            flex-col
          "
        >

          {/* =========================
              HEADER
          ========================== */}

          <div className="mb-8 text-center">

            {/* Logo */}

            <div className="mb-6 flex items-center justify-center gap-2">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 shadow-lg shadow-orange-500/25">
                <span className="text-base font-bold text-white">
                  $
                </span>
              </div>

              <h1 className="text-[28px] font-bold leading-none text-white">
                Spend<span className="text-orange-500">Wise</span>
              </h1>

            </div>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Create Account
            </h2>

            {/* <p className="mt-2 text-sm text-gray-400">
              Start managing your expenses with SpendWise
            </p> */}

          </div>

          {/* =========================
              FORM
          ========================== */}

          <form
            onSubmit={handleSubmit}
            // className="flex flex-col gap-5"
             className="flex flex-1 flex-col gap-5"
          >

            {/* NAME */}

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Full Name
              </label>

              <div
                className="
                  flex
                  h-[54px]
                  items-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  transition
                  focus-within:border-orange-500/70
                  focus-within:bg-white/[0.06]
                  focus-within:ring-2
                  focus-within:ring-orange-500/10
                "
              >

                <User
                  size={19}
                  className="shrink-0 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    ml-3
                    w-full
                    bg-transparent
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-500
                  "
                />

              </div>

            </div>

            {/* EMAIL */}

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address
              </label>

              <div
                className="
                  flex
                  h-[54px]
                  items-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  transition
                  focus-within:border-orange-500/70
                  focus-within:bg-white/[0.06]
                  focus-within:ring-2
                  focus-within:ring-orange-500/10
                "
              >

                <Mail
                  size={19}
                  className="shrink-0 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    ml-3
                    w-full
                    bg-transparent
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-500
                  "
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Password
              </label>

              <div
                className="
                  flex
                  h-[54px]
                  items-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  transition
                  focus-within:border-orange-500/70
                  focus-within:bg-white/[0.06]
                  focus-within:ring-2
                  focus-within:ring-orange-500/10
                "
              >

                <Lock
                  size={19}
                  className="shrink-0 text-gray-500"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    ml-3
                    w-full
                    bg-transparent
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-500
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="ml-3 shrink-0 text-gray-500 transition hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* CONFIRM PASSWORD */}

            <div>

              <label className="mb-2 block text-sm font-medium text-gray-300">
                Confirm Password
              </label>

              <div
                className="
                  flex
                  h-[54px]
                  items-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  transition
                  focus-within:border-orange-500/70
                  focus-within:bg-white/[0.06]
                  focus-within:ring-2
                  focus-within:ring-orange-500/10
                "
              >

                <Lock
                  size={19}
                  className="shrink-0 text-gray-500"
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  className="
                    ml-3
                    w-full
                    bg-transparent
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-500
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="ml-3 shrink-0 text-gray-500 transition hover:text-white"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* REGISTER BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
                mt-1
                flex
                h-[56px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-orange-500
                font-semibold
                text-white
                shadow-lg
                shadow-orange-500/20
                transition
                hover:bg-orange-600
                hover:shadow-orange-500/30
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >

              {loading ? "Creating Account..." : "Create Account"}

              {!loading && <ArrowRight size={18} />}

            </button>

          </form>

          {/* =========================
              LOGIN
          ========================== */}

          <p className="mt-7 text-center text-sm text-gray-500">

            Already have an account?{" "}

            <Link
              to="/login"
              className="font-semibold text-orange-500 transition hover:text-orange-400"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </main>
  );
}

export default Register;