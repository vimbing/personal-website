"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import githubIcon from "../../public/github-logo.svg"
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function TerminalBlinker() {
  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => setHidden(prev => !prev), 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className={`w-[2.5rem] mx-3 h-[4rem] ${hidden ? "bg-transparent" : "bg-purple-200"}`}></div>
}

function TerminalText({ text }: { text: string, }) {
  const [renderedText, setRenderedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (renderedText.length == text.length) return;
      setRenderedText(prev => text.slice(0, prev.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [renderedText]);

  return <div className="flex">
    <p className="text-5xl tracking-widest">{renderedText}</p>
    <TerminalBlinker />
  </div>
}

export default function Home() {
  return (
    <div className={`p-5 md:p-[5rem] min-w-screen min-h-screen flex flex-col items-center justify-center gap-y-5 ${geistMono.className} text-purple-300`}>
      <div className="flex flex-col">
        <TerminalText text="bmbng _" />
      </div>

      <div>
        <p className="text-md border p-3" >
          I am a highly motivated person interested in software development, especially in web scraping and automating. I started my programming journey when I was 15 by contributing to the sneaker botting community and taking part in an arms race of the sneaker bot market. I also love to self-host software, develop my own solutions for all kinds of problems, and learn how to build various projects from scratch.
        </p>
      </div>

      <div className="w-full flex flex-col">
        <a target="_blank" className="underline" href="https://github.com/vimbing">{">"} github</a>
        <p>{">"} jakubbubak9@gmail.com</p>
      </div>
    </div>
  );
}
