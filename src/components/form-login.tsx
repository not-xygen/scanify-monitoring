"use client";

import { FormEvent } from "react";

import { useRouter } from "next/navigation";

export function FormLogin() {
  const { replace } = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    replace("/admin");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-8 w-1/2">
      <div className="flex flex-col gap-2">
        <label>Email</label>
        <input
          className="border rounded-lg px-4 py-2"
          type="email"
          placeholder="Masukkan email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Password</label>
        <input
          className="border rounded-lg px-4 py-2"
          placeholder="Masukkan password"
        />
      </div>
      <input
        type="submit"
        value="Masuk"
        className="py-2 w-full bg-scanify-red rounded-lg mt-4 text-scanify-white font-bold"
      />
    </form>
  );
}
