import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Minishell() {
  
    const location = useLocation();
  
    useEffect(() => {
      if (location.state?.scrollTo) {
        setTimeout(() => {
          document.getElementById(location.state.scrollTo)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }, [location]);
  return (
    <div className="min-h-screen flex justify-center px-4 py-10" id="mins">
      
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-md">

        <h1 className="text-4xl font-bold mb-2">Minishell</h1>

        <a
          href="https://github.com/Cyrilange/minishell"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-sm"
        >
          https://github.com/Cyrilange/minishell
        </a>

        <p className="mt-4 text-gray-700">
          A minimal Unix shell written in C, developed as part of the 42 curriculum.
          This project recreates core shell behavior: parsing, execution, and process management.
        </p>

        <hr className="my-6" />

        <h2 className="text-2xl font-semibold mb-3">🚀 Features</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          <li>External command execution</li>
          <li>Built-ins (echo, cd, pwd, export, unset, env, exit)</li>
          <li>Environment variables</li>
          <li>Pipes (|)</li>
          <li>Redirections (&gt;, &gt;&gt;, &lt;)</li>
          <li>Signal handling (Ctrl+C, Ctrl+D, Ctrl+\)</li>
          <li>Exit status ($?)</li>
          <li>Parsing & tokenization</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">🛠️ Installation</h2>

        <pre className="bg-gray-600 p-3 rounded overflow-x-auto text-sm">
{`git clone https://github.com/Cyrilange/minishell
cd minishell
make`}
        </pre>

        <h2 className="text-2xl font-semibold mt-6 mb-3">▶️ Usage</h2>

        <pre className="bg-gray-600 p-3 rounded text-sm">
{`./minishell
minishell$ echo Hello World
Hello World`}
        </pre>

        <h2 className="text-2xl font-semibold mt-6 mb-3">🔧 Makefile</h2>

        <pre className="bg-gray-600 p-3 rounded text-sm">
{`make        # build
make re     # rebuild
make clean  # object files
make fclean # full clean`}
        </pre>

        <h2 className="text-2xl font-semibold mt-6 mb-3">🧠 How it works</h2>

        <ol className="list-decimal pl-6 space-y-2 text-gray-800">
          <li><b>Input</b> — read from terminal</li>
          <li><b>Parsing</b> — tokenize commands, pipes, redirections</li>
          <li><b>Execution</b> — fork + execve for external commands</li>
          <li><b>Pipes & redirects</b> — file descriptor handling</li>
          <li><b>Signals</b> — Ctrl+C / Ctrl+D handling</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6 mb-3">🎯 Goals</h2>

        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          <li>Understand Unix shell internals</li>
          <li>Master processes (fork, execve, wait)</li>
          <li>Work with file descriptors</li>
          <li>Build a parser from scratch</li>
          <li>Handle Unix signals properly</li>
        </ul>

      </div>
    </div>
  );
}