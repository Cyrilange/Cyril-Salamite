import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "Blockchain Support Service",
    company: "Binance",
    period: "Dec 2022 – Dec 2023",
    desc: "Handled blockchain-related customer issues, transactions, and technical troubleshooting in a fast-paced environment.",
    tags: ["Blockchain", "Web3", "Support"],
    type: "work",
  },
  {
    title: "Mobile Frontend Developer",
    company: "AISpeak",
    period: "Apr 2025 – Sep 2025",
    desc: "Developed and improved mobile UI using modern frontend technologies, focusing on performance and user experience.",
    tags: ["React Native", "Mobile", "UI/UX"],
    type: "work",
  },
  {
    title: "Data Annotation",
    company: "TransPerfect",
    period: "Jun 2025 – Present",
    desc: "Worked on data labeling and analysis tasks to support AI model training and improvement.",
    tags: ["AI", "Data", "Analysis"],
    type: "work",
  },
];

const projects = [
  {
    title: "Minishell",
    company: "42 Project",
    period: "C",
    desc: "Built a Unix shell in C, implementing command parsing, process management, and built-in commands.",
    tags: ["C", "Unix", "Shell"],
    type: "project",
    link: "https://github.com/Cyrilange/minishell",
  },
  {
    title: "Tokenizer",
    company: "42 Project",
    period: "solidity",
    desc: "Developed a token with the ERC20 standart protocole.",
    tags: ["solidity", "foundry", "wallet", "react"],
    type: "project",
    link: "https://github.com/Cyrilange/Tokenizer",
  },
  {
    title: "ft_irc",
    company: "42 Project",
    period: "C++",
    desc: "Implemented an IRC server in C++ following RFC standards, handling multiple clients and command parsing.",
    tags: ["C++", "Networking", "RFC"],
    type: "project",
    link: "https://github.com/Cyrilange/ft_irc",
  },
  {
    title: "Transcendence",
    company: "42 Project",
    period: "Full-Stack",
    desc: "Full-stack web application built with React, Node.js (Express), and Docker, featuring real-time interactions.",
    tags: ["React", "Node.js", "Docker"],
    type: "project",
    link: "https://github.com/Cyrilange/Transcendence",
  },
];

function Card({ item, index }: { item: typeof experiences[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isRight = index % 2 === 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateX(0) translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: isRight ? "translateX(60px) translateY(20px)" : "translateX(-60px) translateY(20px)",
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
        display: "flex",
        justifyContent: isRight ? "flex-end" : "flex-start",
        marginBottom: "48px",
        padding: "0 16px",
      }}
    >
       <a
        href={(item as any).link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
      <div
        style={{
          width: "min(480px, 100%)",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,204,0,0.15)",
          borderRadius: "16px",
          padding: "28px",
          position: "relative",
          backdropFilter: "blur(8px)",
          transition: "border-color 0.3s, transform 0.3s",
          cursor: item.type === "project" ? "pointer" : "default",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,204,0,0.5)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,204,0,0.15)";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        }}
      >
       
        <div style={{
          position: "absolute",
          top: 0,
          [isRight ? "right" : "left"]: 0,
          width: "3px",
          height: "100%",
          background: "linear-gradient(180deg, #ffcc00, transparent)",
          borderRadius: isRight ? "0 16px 16px 0" : "16px 0 0 16px",
        }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", flexWrap: "wrap", gap: "8px" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#fff" }}>
              {item.title}
            </h3>
            <span style={{ fontSize: "13px", color: "#ffcc00", fontWeight: 600 }}>
              {item.company}
            </span>
          </div>
          <span style={{
            fontSize: "11px",
            color: "#777",
            background: "rgba(255,255,255,0.05)",
            padding: "4px 10px",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            whiteSpace: "nowrap",
          }}>
            {item.period}
          </span>
        </div>

        <p style={{ margin: "12px 0", fontSize: "14px", color: "#aaa", lineHeight: 1.6 }}>
          {item.desc}
        </p>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "16px" }}>
          {item.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: "11px",
              color: "#ffcc00",
              background: "rgba(255,204,0,0.08)",
              border: "1px solid rgba(255,204,0,0.2)",
              padding: "3px 10px",
              borderRadius: "20px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      </a>
    </div>
  );
}

export default function Resume() {
  return (
    <section style={{ padding: "80px 0", maxWidth: "900px", margin: "0 auto" }}>

      
      <div style={{ textAlign: "center", marginBottom: "64px", padding: "0 16px" }}>
        <span style={{
          fontSize: "11px",
          letterSpacing: "0.3em",
          color: "#ffcc00",
          textTransform: "uppercase",
          fontWeight: 700,
        }}>
          Career
        </span>
        <h2 style={{
          fontSize: "clamp(32px, 6vw, 52px)",
          fontWeight: 800,
          margin: "12px 0 0",
          color: "#fff",
          letterSpacing: "-0.03em",
        }}>
          Experience
        </h2>
      </div>

      
      {experiences.map((item, i) => (
        <Card key={item.title} item={item} index={i} />
      ))}

      
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        margin: "48px 16px",
      }}>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,204,0,0.15)" }} />
        <span style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#ffcc00", textTransform: "uppercase", fontWeight: 700 }}>
          Projects
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,204,0,0.15)" }} />
      </div>

    
      {projects.map((item, i) => (
        <Card key={item.title} item={item} index={i} />
      ))}

    </section>
  );
}