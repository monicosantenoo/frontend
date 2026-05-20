"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // SAVE TOKEN IN COOKIE
      document.cookie =
        `token=${res.data.token}; path=/`;

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      // REDIRECT
      router.push("/library");

    } catch (error) {

      console.log(error);

      alert(
        error?.response?.data?.msg ||
        "Login failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F1111] px-6">

      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl">

        {/* LOGO */}
        <div className="bg-black rounded-xl p-4 mb-8">
          <img
            src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo._CB611756372_.png"
            alt="Kindle"
            className="w-40 mx-auto"
          />
        </div>
        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-8 text-black">
          Sign In
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* EMAIL */}
          <div>

            <label className="block mb-2 font-medium text-black">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black text-black"
            />
          </div>

          {/* PASSWORD */}
          <div>

            <label className="block mb-2 font-medium text-black">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black text-black"
            />
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ff9900] hover:bg-[#e68a00] text-black font-semibold py-3 rounded-lg transition"
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>

        </form>
      </div>
    </div>
  );
}