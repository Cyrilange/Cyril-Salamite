import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function IrcServ() {
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
    <div className="min-h-screen flex justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-8" id="irc">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-2">IRC Server (ft_irc)</h1>

        <a
          href="https://github.com/Cyrilange/ft_irc"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline text-sm"
        >
          https://github.com/Cyrilange/ft_irc
        </a>

        {/* DESCRIPTION */}
        <p className="mt-4 text-gray-700">
          This project is an IRC server implemented in C++98 using network sockets.
          It allows multiple clients to connect, communicate in channels, and exchange
          messages in real time following the IRC protocol.
        </p>

        <p className="mt-3 text-gray-700">
          The goal is to understand low-level networking, event-driven programming,
          and client-server architecture.
        </p>

        <hr className="my-6" />

        {/* INSTRUCTIONS */}
        <h2 className="text-2xl font-semibold mb-3">🛠️ Instructions</h2>

        <p className="text-gray-700 mb-3">
          Run the server:
        </p>

        <pre className="bg-gray-700 p-3 rounded text-sm overflow-x-auto">
{`./ircserv [port] [password]`}
        </pre>

        <p className="mt-3 text-gray-700">
          Connect using:
        </p>

        <pre className="bg-gray-100 p-3 rounded text-sm">
{`nc localhost 6667`}
        </pre>

        <p className="mt-3 text-gray-700">
          Then authenticate:
        </p>

        <pre className="bg-gray-700 p-3 rounded text-sm">
{`PASS password
NICK your_nick
USER guest 0 * :YourName`}
        </pre>

        {/* FEATURES */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">🚀 Features</h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Multi-client support</li>
          <li>Channels (JOIN, PART)</li>
          <li>Private messages (PRIVMSG)</li>
          <li>Operator system</li>
          <li>Channel modes (i, t, k, o, l)</li>
          <li>Invite system</li>
          <li>Bot integration</li>
        </ul>

        {/* COMMANDS */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">📡 Commands</h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li><b>JOIN</b> — join a channel</li>
          <li><b>PART</b> — leave a channel</li>
          <li><b>PRIVMSG</b> — send message</li>
          <li><b>TOPIC</b> — view/change topic</li>
          <li><b>KICK</b> — remove user</li>
          <li><b>INVITE</b> — invite user</li>
          <li><b>MODE</b> — change channel modes</li>
          <li><b>QUIT</b> — disconnect</li>
        </ul>

        {/* BOT */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">🤖 Bot</h2>

        <p className="text-gray-700 mb-2">
          Available commands:
        </p>

        <pre className="bg-gray-700 p-3 rounded text-sm">
{`!time
!help
!joke
!quote
!channel
!hi
!list`}
        </pre>

        <p className="mt-3 text-gray-700">
          The bot uses random messages stored in a vector (push_back) and returns randomized responses.
        </p>

        {/* LEARNING */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">🧠 Learning Objectives</h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Socket programming (TCP/IP)</li>
          <li>Client-server architecture</li>
          <li>Non-blocking I/O (poll)</li>
          <li>IRC protocol parsing</li>
          <li>Event-driven systems</li>
          <li>Memory & resource management</li>
          <li>C++98 OOP design</li>
        </ul>

        {/* RESOURCES */}
        <h2 className="text-2xl font-semibold mt-6 mb-3">📚 Resources</h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Network programming videos (sockets, TCP/UDP)</li>
          <li>RFC 1459 IRC protocol</li>
          <li>RFC 2812</li>
          <li>Client-server architecture guides</li>
        </ul>

      </div>
    </div>
  );
}