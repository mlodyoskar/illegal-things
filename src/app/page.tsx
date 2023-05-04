import kv from "@vercel/kv";
import { FormEvent } from "react";
import { Form } from "./Form";

const getSomeDataFromRedis = async () => {
 return await kv.get("a");
};

export default async function Home() {
 const data = await getSomeDataFromRedis();
 return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
   {JSON.stringify(data, null, 2)}
   <Form />
  </main>
 );
}
