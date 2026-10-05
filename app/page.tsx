"use client";
import { FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
export default function Home() {
const [chatOpen, setChatOpen] = useState(false);
const [message, setMessage] = useState("");
const [reply, setReply] = useState("");
const [loading, setLoading] = useState(false);

const amnaInfo = `
Name: Amina Eman

Professional Title:
AI Automation & Generative AI Developer | Full-Stack Web Developer

Education:
Bachlors in computer science from University of Agriculture Faisalabad


Location:
Gujranwala, Pakistan | Faisalabad, Pakistan

Skills:
Python, Java, JavaScript, HTML, CSS, Generative AI, Prompt Engineering,
AI Automation, AI Chatbots, AI APIs, React, Next.js, FastAPI, Streamlit,
Tailwind CSS, REST APIs, Git, GitHub, VS Code, API Integration, Deployment

Training:
Generative AI Development Mastery (Beginner to Advanced)
SoftCr8ors

Projects:
AI Email Assistant
AI Quiz Generator
AI Content Generator
Personal AI Developer Portfolio

Contact:
Email: aminaeman280@gmail.com
LinkedIn: https://www.linkedin.com/in/amina-eman-bab75727
GitHub: https://github.com/AminaEman-hub
WhatsApp: https://wa.me/923448063007

Portfolio:
Amina's portfolio showcases her AI, Generative AI, automation,
and full-stack web development projects.

When asked about contact details, provide the available email,
LinkedIn, GitHub, and WhatsApp information above.
`;
  async function sendMessage(question?: string) {
    const userMessage = typeof question === "string" ? question : message;

    if (!userMessage.trim() || loading) return;

    setLoading(true);
    setReply("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          amnaInfo,
        }),
      });

      const data = await response.json();

      setReply(data.reply);
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      setReply("Sorry, I couldn't process your question right now.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="min-h-screen bg-[#faf8ff] text-gray-900">

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-purple-100 bg-[#faf8ff]/95 px-6 py-5 backdrop-blur md:px-10">
        <h2 className="text-2xl font-bold text-purple-700">
         *Amina Eman*
        </h2>

        <div className="flex flex-wrap justify-end gap-4 text-sm font-medium md:gap-8">
          <a href="#home">Home</a>

<a href="#about">About</a>

<a href="#skills">Skills</a>

<a href="#projects">Projects</a>

<a href="#certifications">Certifications</a>

<a
  href="/Amina_Eman_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</a>

<a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 font-medium text-purple-600">
          Hello, I'm Amina Eman 👋
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          AI Automation &
          <span className="block text-purple-700">
            Generative AI Developer
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Building practical AI-powered applications
          and modern web experiences.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-purple-700 px-7 py-3 font-medium text-white transition hover:bg-purple-800"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-purple-700 px-7 py-3 font-medium text-purple-700 transition hover:bg-purple-100"
          >
            Contact Me
          </a>
          <a
  href="/Amina_Eman_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-purple-700 px-7 py-3 font-medium text-purple-700 transition hover:bg-purple-100"
>
  Download Resume ↓
</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center font-semibold text-purple-600">
            GET TO KNOW ME
          </p>

          <h2 className="mb-12 text-center text-4xl font-bold">
            About Me
          </h2>

          <div className="rounded-3xl bg-[#faf8ff] p-8 md:p-12">
            <h3 className="mb-5 text-2xl font-bold text-purple-700">
              AI Automation & Generative AI Developer
            </h3>

            <p className="mb-5 leading-8 text-gray-600">
              I’m an AI Automation & Generative AI Developer
              specializing in building intelligent, scalable, and
              user-focused digital solutions. I transform ideas
              and business requirements into practical AI-powered
              applications using Python, Generative AI, prompt
              engineering, FastAPI, Streamlit, and modern web
              technologies.
            </p>

            <p className="mb-5 leading-8 text-gray-600">
              My work focuses on developing AI chatbots, automation
              systems, intelligent content tools, document-based AI
              solutions, and custom web applications designed to
              improve efficiency and simplify complex workflows.
              I combine technical development with a strong
              understanding of user needs to create solutions that
              are both functional and intuitive.
            </p>

            <p className="leading-8 text-gray-600">
              I’m passionate about emerging AI technologies and
              continuously explore new ways to integrate intelligent
              automation into modern digital products. My goal is
              simple: build reliable AI solutions that solve real
              problems, create measurable value, and deliver a
              smooth experience for the people who use them.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center font-semibold text-purple-600">
            WHAT I WORK WITH
          </p>

          <h2 className="mb-4 text-center text-4xl font-bold">
            Skills & Expertise
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center leading-7 text-gray-600">
            A practical technology stack focused on AI development,
            intelligent automation, and modern web applications.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* Generative AI */}
            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                🤖
              </div>
              <h3 className="mb-3 text-xl font-bold">Generative AI</h3>
              <p className="mb-4 text-sm leading-6 text-gray-600">
                Building practical AI-powered solutions using
                modern Generative AI technologies.
              </p>
              <p className="font-medium text-purple-700">
                LLMs • AI Applications • AI Automation
              </p>
            </div>

            {/* Python */}
            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                🐍
              </div>
              <h3 className="mb-3 text-xl font-bold">Python Development</h3>
              <p className="mb-4 text-sm leading-6 text-gray-600">
                Developing automation tools, AI applications,
                APIs, and backend solutions with Python.
              </p>
              <p className="font-medium text-purple-700">
                Python • APIs • Automation
              </p>
            </div>

            {/* AI Automation */}
            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                ⚡
              </div>
              <h3 className="mb-3 text-xl font-bold">AI Automation</h3>
              <p className="mb-4 text-sm leading-6 text-gray-600">
                Designing intelligent workflows that automate
                repetitive tasks and improve productivity.
              </p>
              <p className="font-medium text-purple-700">
                Workflows • Automation • AI Agents
              </p>
            </div>

            {/* FastAPI & Streamlit */}
            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                🚀
              </div>
              <h3 className="mb-3 text-xl font-bold">FastAPI & Streamlit</h3>
              <p className="mb-4 text-sm leading-6 text-gray-600">
                Creating fast APIs and interactive AI applications
                for practical real-world use cases.
              </p>
              <p className="font-medium text-purple-700">
                FastAPI • Streamlit • REST APIs
              </p>
            </div>

            {/* Web Development */}
            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                💻
              </div>
              <h3 className="mb-3 text-xl font-bold">
                Modern Web Development
              </h3>
              <p className="mb-4 text-sm leading-6 text-gray-600">
                Building responsive and modern web interfaces
                using current frontend technologies.
              </p>
              <p className="font-medium text-purple-700">
                React • Next.js • JavaScript • Tailwind CSS
              </p>
            </div>

            {/* Prompt Engineering */}
            <div className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                ✨
              </div>
              <h3 className="mb-3 text-xl font-bold">
                Prompt Engineering
              </h3>
              <p className="mb-4 text-sm leading-6 text-gray-600">
                Designing structured prompts to improve AI
                outputs, workflows, and application performance.
              </p>
              <p className="font-medium text-purple-700">
                Prompt Design • LLM Workflows • AI Optimization
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24 bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center font-semibold text-purple-600">
            MY RECENT WORK
          </p>

          <h2 className="mb-4 text-center text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mb-14 max-w-2xl text-center leading-7 text-gray-600">
            Exploring AI through practical applications,
            intelligent tools, and modern digital solutions.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* AI Email Assistant */}
            <div className="flex flex-col rounded-2xl border border-purple-100 bg-[#faf8ff] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-3xl">
                📧
              </div>

              <h3 className="mb-3 text-xl font-bold">
                AI Email Assistant
              </h3>

              <p className="mb-5 flex-1 leading-7 text-gray-600">
                An AI-powered application designed to generate
                professional email drafts and simplify everyday
                email writing tasks.
              </p>

              <p className="mb-6 text-sm font-medium text-purple-700">
                Python • Generative AI • Streamlit
              </p>

              <a
  href="https://github.com/AminaEman-hub/ai-email-assistant"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
</a>

<a
  href="https://ai-email-assistant-ckntajvappbxsnprk7eub2d.streamlit.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-purple-700 px-5 py-3 text-center font-medium text-white transition hover:bg-purple-800"
>
  Live Demo ↗
</a>
            </div>

            {/* AI Quiz Generator */}
            <div className="flex flex-col rounded-2xl border border-purple-100 bg-[#faf8ff] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-3xl">
                📝
              </div>

              <h3 className="mb-3 text-xl font-bold">
                AI Quiz Generator
              </h3>

              <p className="mb-5 flex-1 leading-7 text-gray-600">
                An interactive AI application that helps
                generate quizzes and makes learning and
                knowledge assessment more accessible.
              </p>

              <p className="mb-6 text-sm font-medium text-purple-700">
                Python • Generative AI • Streamlit
              </p>

              <a
                href="https://aiquizgenerator-hmx3psyxgdwokrbzcdshmm.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-purple-700 px-5 py-3 text-center font-medium text-white transition hover:bg-purple-800"
              >
                Live Demo ↗
              </a>
            </div>

            {/* AI Content Generator */}
            <div className="flex flex-col rounded-2xl border border-purple-100 bg-[#faf8ff] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-3xl">
                ✨
              </div>

              <h3 className="mb-3 text-xl font-bold">
                AI Content Generator
              </h3>

              <p className="mb-5 flex-1 leading-7 text-gray-600">
                An AI-powered content creation tool designed
                to assist users in generating engaging and
                structured written content.
              </p>

              <p className="mb-6 text-sm font-medium text-purple-700">
                Python • Generative AI • Streamlit
              </p>

              <a
  href="https://ai-content-generator-kaiexgvreqpephwda6pc9h.streamlit.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-purple-700 px-5 py-3 text-center font-medium text-white transition hover:bg-purple-800"

>
  Live Demo ↗
</a>
            </div>

          </div>
        </div>
      </section>
      {/* Tech Stack */}
<section id="skills" className="scroll-mt-24 px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
      <p className="mb-3 font-semibold text-purple-600">
        TECHNOLOGIES I WORK WITH
      </p>

      <h2 className="mb-5 text-4xl font-bold">
        My Tech Stack
      </h2>

      <p className="mx-auto max-w-2xl leading-7 text-gray-600">
        A growing collection of technologies and tools I use
        to build AI-powered applications and modern web experiences.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      
      {/* AI & Generative AI */}
      <div className="rounded-2xl border border-purple-100 bg-[#faf8ff] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
          🤖
        </div>

        <h3 className="mb-4 text-xl font-bold">
          AI & Generative AI
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "Generative AI",
            "Prompt Engineering",
            "AI Automation",
            "AI Chatbots",
            "AI APIs",
            "LLM Applications",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Programming */}
      <div className="rounded-2xl border border-purple-100 bg-[#faf8ff] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
          💻
        </div>

        <h3 className="mb-4 text-xl font-bold">
          Programming
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "Python",
            "Java",
            "JavaScript",
            "HTML",
            "CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Web Development */}
      <div className="rounded-2xl border border-purple-100 bg-[#faf8ff] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
          🌐
        </div>

        <h3 className="mb-4 text-xl font-bold">
          Web Development
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "FastAPI",
            "Streamlit",
            "Tailwind CSS",
            "REST APIs",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Development */}
      <div className="rounded-2xl border border-purple-100 bg-[#faf8ff] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
          🛠️
        </div>

        <h3 className="mb-4 text-xl font-bold">
          Tools & Development
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "Git",
            "GitHub",
            "VS Code",
            "API Integration",
            "Deployment",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
{/* Learning & Certification */}
<section id="certifications" className="scroll-mt-24 px-6 py-20">
  <div className="mx-auto max-w-5xl">

    {/* Section Heading */}
    <div className="mb-12 text-center">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-3 w-3 rounded-sm bg-purple-600"></span>

        <h2 className="text-4xl font-bold tracking-wide text-purple-600">
          Learning & Certification
        </h2>

        <span className="h-3 w-3 rounded-sm bg-purple-600"></span>
      </div>
    </div>

    {/* Certification Card */}
    <div className="mx-auto max-w-4xl">
      <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8">

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-purple-600">
          Professional Training
        </p>

        <h3 className="mb-2 text-2xl font-bold text-gray-900">
          Generative AI Development Mastery
        </h3>

        <p className="mb-4 font-medium text-gray-700">
          SoftCr8ors
        </p>

        <p className="leading-7 text-gray-600">
          Successfully completed a three-month Generative AI Training
          Program focused on Generative AI, AI-powered web applications,
          AI chatbots, AI APIs, prompt engineering, Git & GitHub,
          project development, and application deployment.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Generative AI",
            "Prompt Engineering",
            "AI APIs",
            "AI Chatbots",
            "Git & GitHub",
            "FastAPI",
            "Streamlit",
            "AI Applications",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href="/softcr8ors-certificate.jpeg.jpeg"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700"
        >
          View Certificate ↗
        </a>

      </div>
    </div>

  </div>
</section>

{/* Contact Placeholder */}
<section id="contact" className="scroll-mt-24 px-6 py-20">
  <div className="mx-auto max-w-4xl text-center">
    <p className="mb-3 font-semibold text-purple-600">
          </p>
          <h2 className="mb-5 text-4xl font-bold">
            Contact Me
          </h2>
          <p className="text-gray-600">
            Have a project idea or collaboration in mind?
            Let's connect and build something meaningful.
          </p>
          
<div className="mt-8 flex flex-wrap justify-center gap-4">
  <a
    href="https://www.linkedin.com/in/amina-eman-bab75727b"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl bg-[#805ac4] px-6 py-3 font-semibold text-white transition hover:bg-[#6c45b2]"
  >
    LinkedIn ↗
  </a>

  <a
    href="https://github.com/AminaEman-hub"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl border border-purple-200 bg-white px-6 py-3 font-semibold text-purple-700 transition hover:bg-purple-50"
  >
    GitHub ↗
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&to=aminaeman280@gmail.com"
    className="rounded-xl border border-purple-200 bg-white px-6 py-3 font-semibold text-purple-700 transition hover:bg-purple-50"
  >
     send Email  ✉
  </a>
</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-100 bg-white px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Amina Eman. All rights reserved.
      </footer>
     {/* Floating AI Chatbot */}

{chatOpen && (
  <div className="fixed bottom-28 left-7 z-50 w-80 overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-2xl">
    <div className="bg-purple-600 px-5 py-4 text-white">
      <h3 className="text-lg font-bold">Amina's AI Assistant 🤖</h3>
      <p className="text-sm text-purple-100">
        Ask me anything about Amina
      </p>
    </div>

    <div className="h-64 overflow-y-auto p-4">
      <div className="mb-4">
  <p className="mb-2 text-xs font-semibold text-gray-500">
    💡 You can ask:
  </p>

  <div className="flex flex-wrap gap-2">
    {[
      "What are Amina's skills?",
      "What projects has Amina built?",
      "What is Amina's education?",
      "What does Amina specialize in?",
      "How can I contact Amina?",
    ].map((question) => (
      <button
        key={question}
        type="button"
        onClick={() => sendMessage(question)}
        disabled={loading}
        className="rounded-full border border-purple-200 bg-purple-50 px-3 py-2 text-xs font-medium text-purple-700 transition hover:bg-purple-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {question}
      </button>
    ))}
  </div>
</div>
      <div 
    
      className="space-y-3 text-sm">
        <div className="rounded-xl bg-purple-50 p-3 text-gray-700">
          Hi! 👋 I'm Amna's AI Assistant.
          <br />
          <br />
          You can ask me about my skills, projects, education, and experience.
        </div>

        {reply && (
  <div className="rounded-xl bg-gray-100 p-3 text-gray-700">
    {reply}
  </div>
)}

{loading && (
  <div className="rounded-xl bg-purple-50 p-3 text-sm text-purple-700">
    🤖 Thinking... please wait
  </div>
)}
      </div>
    </div>

    <div className="border-t p-3">
      <input
        type="text"
        placeholder="Ask something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-purple-400"
      />

     <button
  type="button"
  onClick={() => sendMessage()}
  disabled={loading}
  className="mt-2 w-full rounded-lg bg-purple-600 px-4 py-2 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading ? "Processing..." : "Send"}
</button>
    </div>
  </div>
)}

<button
  type="button"
  aria-label="Open Amna's AI Assistant"
  onClick={() => setChatOpen(!chatOpen)}
  className="fixed bottom-7 left-7 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-purple-50 text-4xl shadow-lg transition hover:scale-110"
  style={{
    animation: "chatbotGlow 1.5s ease-in-out infinite",
  }}
>
  🤖
</button>
{/* Floating WhatsApp Button */}
<a
  href="https://wa.me/923448063007"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with me on WhatsApp"
  className="fixed bottom-7 right-7 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white text-3xl shadow-lg transition hover:scale-110"
  style={{
    animation: "whatsappGlow 1.5s ease-in-out infinite",
  }}
>
  <FaWhatsapp />
</a>

</main>
  );
}