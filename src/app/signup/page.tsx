"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/signup", user);
      console.log(response.data);
      router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2 text-black">
      <h1 className="text-white">{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <label htmlFor="username" className="text-white">
        Username
      </label>
      <input
        className="p-2 bg-white border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 placeholder-gray-400"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
      />

      <label htmlFor="email" className="text-white">
        Email
      </label>
      <input
        className="p-2 bg-white border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 placeholder-gray-400"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <label htmlFor="password" className="text-white">
        Password
      </label>
      <input
        className="p-2 bg-white border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 placeholder-gray-400"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button
        onClick={onSignup}
        className="p-2 text-white border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 cursor-pointer"
      >
        {buttonDisable ? "Enter all details" : "Signup"}
      </button> 
      <Link href="/login" className="text-white">
        Visit Login Now
      </Link>
    </div>
  );
}
