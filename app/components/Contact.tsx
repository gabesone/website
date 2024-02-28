"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // function handleSubmit() {}

  // TODO: change [p, button] tags and insert handleSubmit after purchasing a domain
  return (
    <form id="contact" className="space-x-[2%] w-full">
      <h2 className="text-2xl p-4 font-semibold my-4">
        If you want to send me a message
      </h2>
      <div className="inline-block w-[48%] mb-4">
        {" "}
        <label htmlFor="name" className="block my-2 font-semibold">
          Name
        </label>
        <input
          className="inline-block h-9 w-[96%] py-0 px-2 rounded bg-white shadow outline-none contrast-more:border-slate-400 border-none focus-visible:outline-offset-0 focus-within:outline-gray-500/70 hover:shadow-md"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="given-name"
          required
          placeholder="Bertha Erland"
        />
      </div>
      <div className="inline-block w-[48%] mb-4">
        <label htmlFor="email" className="block my-2 font-semibold">
          Email
        </label>
        <input
          className="inline-block h-9 w-[96%] py-0 px-2 rounded bg-white shadow outline-none contrast-more:border-slate-400 border-none focus-visible:outline-offset-0 focus-within:outline-gray-500/70 hover:shadow-md"
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="example@domain.com"
        />
      </div>

      <label htmlFor="subject" className="block my-2 font-semibold">
        Subject
      </label>
      <input
        className="block h-9 w-[96%] mb-5 py-0 px-2 rounded bg-white shadow outline-none contrast-more:border-slate-400 border-none focus-visible:outline-offset-0 focus-within:outline-gray-500/70 hover:shadow-md"
        id="subject"
        type="text"
        name="subject"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
        autoComplete="off"
        required
        placeholder="What do you think of online education?"
      />

      <label htmlFor="message" className="block my-2 font-semibold">
        Message
      </label>
      <textarea
        className="flex h-auto w-[96%] py-2 px-2 rounded bg-white shadow outline-none contrast-more:border-slate-400 border-none focus-visible:outline-offset-0 focus-within:outline-gray-500/70 hover:shadow-md"
        name="message"
        id="message"
        rows={4}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        autoComplete="off"
        required
        placeholder="I was thinking..."
      ></textarea>

      <p className="my-4 text-sm">Why is the contact form disabled?</p>

      <button
        type="submit"
        className="bg-black border-spacing-3 rounded-md p-2 text-white hover:bg-gray-500/70 mb-4"
        onClick={(event) => {
          event.preventDefault();

          setName("");
          setEmail("");
          setSubject("");
          setMessage("");

          toast.info(
            "I don't actually have a domain yet, as you can see it is hosted for free on vercel.",
            { duration: 6000 }
          );
        }}
      >
        Show me why?
      </button>
    </form>
  );
}
