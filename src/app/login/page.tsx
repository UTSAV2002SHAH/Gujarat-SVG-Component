"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/login", user);
      console.log(response.data);
      toast.success("Login successful");
      router.push("/profile");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2 text-white">
      <h1>Login</h1>
      <hr />

      <label htmlFor="email">Email</label>
      <input
        className="p-2 bg-white text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 placeholder-gray-400"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="p-2 bg-white text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 placeholder-gray-400"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button
        onClick={onLogin}
        className="p-2 text-white border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 cursor-pointer"
      >
        Login
      </button>
      <Link href="/signup" className="text-white">
        Visit SignUp Now
      </Link>
    </div>
  );
}
