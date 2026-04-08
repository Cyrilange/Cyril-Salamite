import { useEffect, useRef, useState } from "react";

interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
}

function Resume() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/experiences")
      .then(res => res.json())
      .then(data => setExperiences(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="experience-container">
      {experiences.map((exp, index) => (
        <ResumeItem key={exp.id} exp={exp} index={index} />
      ))}
    </section>
  );
}

function ResumeItem({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && ref.current) {
            ref.current.classList.add(index % 2 === 0 ? "show-right" : "show-left");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [index]);

  return (
    <div ref={ref} className={`experience ${index % 2 === 0 ? "right" : "left"}`}>
      <div className="content">
        <h2>{exp.title}</h2>
        <h3>{exp.company}</h3>
        <p>{exp.date}</p>
        <p>{exp.description}</p>
      </div>
    </div>
  );
}

export default Resume;