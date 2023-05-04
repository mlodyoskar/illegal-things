"use client";

import { FormEvent } from "react";
import kv from "@vercel/kv";

export const Form = () => {
 const addDataToRedis = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  await kv.set("a", 123);
 };
 return (
  <form onSubmit={addDataToRedis}>
   <input />
   <button>Send</button>
  </form>
 );
};
