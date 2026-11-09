 "use client";

import { useState } from "react";
import { ArrowUpRight, ShieldCheck, Zap, ChartNoAxesCombined, Menu, X, ChevronDown, Check, Globe2, LockKeyhole, Headphones } from "lucide-react";

const standard = [
  { size: "$10K", price: "$89", label: "Starter" },
  { size: "$25K", price: "$189", label: "Rising" },
  { size: "$50K", price: "$289", label: "Popular" },
  { size: "$100K", price: "$499", label: "Pro" },
  { size: "$200K", price: "$999", label: "Elite" },
];
const instant = [
  { size: "$5K", price: "$99" },
  { size: "$10K", price: "$189" },
  { size: "$25K", price: "$399" },
  { size: "$50K", price: "$699" },
  { size: "$100K", price: "$1,299" },
];

export default function Home() {
  const [tab, setTab] = useState<"standard" | "instant">("standard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const plans = tab === "standard" ? standard : instant;

  return (
    <main>
      <div className="announcement">APEXFUND IS IN DEVELOPMENT <span>·</span> PRE-LAUNCH PREVIEW</div>
      <header className="nav wrap">
        <a className="brand" href="#"><span className="brand-mark">A</span><span>APEX<span className="gold">FUND</span></span></a>
        <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
          <a href="#programs" onClick={() => setMobileOpen(false)}>Programs</a>
          <a href="#how" onClick={() => setMobileOpen(false)}>How it works</a>
          <a href="#rules" onClick={() => setMobileOpen(false)}>Trading rules</a>
          <a href="#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
        </nav>
        <div className="nav-actions">
          <button className="lang" onClick={() => setLang(lang === "EN" ? "FR" : lang === "FR" ? "AR" : "EN")}><Globe2 size={15}/>{lang}<ChevronDown size={13}/></button>
          <a className="login" href="#dashboard">Log in</a>
          <a className="btn btn-small" href="#programs">Get started <ArrowUpRight size={15}/></a>
        </div>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> BUILT FOR DISCIPLINED TRADERS</div>
          <h1>Your strategy.<br/><span className="gradient">Your next level.</span></h1>
          <p className="hero-text">Put your trading skills to the test. Choose a trading program, follow a clear risk framework, and work toward performance rewards.</p>
          <div className="hero-buttons"><a className="btn" href="#programs">Explore programs <ArrowUpRight size={17}/></a><a className="text-link" href="#how">See how it works <span>→</span></a></div>
          <div className="hero-proof"><div className="proof-icon"><ShieldCheck size={18}/></div><div><b>Rules before rewards</b><small>Transparent objectives and risk parameters</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="orb orb-one"/><div className="orb orb-two"/>
          <div className="terminal">
            <div className="terminal-top"><div className="dots"><i/><i/><i/></div><span>APEX PERFORMANCE</span><span className="live"><b/> SIMULATED</span></div>
            <div className="terminal-body">
              <div className="terminal-label">ACCOUNT OVERVIEW <span>DEMO PREVIEW</span></div>
              <div className="balance">$52,480.00</div><div className="positive">+$2,480.00 <span>+4.96%</span></div>
              <div className="chart">
                <div className="chart-grid"><i/><i/><i/><i/></div>
                <svg viewBox="0 0 520 170" preserveAspectRatio="none" aria-label="Illustrative performance chart"><defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#d9b66b" stopOpacity=".25"/><stop offset="100%" stopColor="#d9b66b" stopOpacity="0"/></linearGradient></defs><path d="M0 135 C25 125 35 142 58 118 S95 122 112 98 S150 110 172 84 S205 96 225 73 S260 95 282 61 S315 82 338 55 S370 73 392 42 S430 57 452 31 S490 45 520 12 L520 170 L0 170Z" fill="url(#area)"/><path d="M0 135 C25 125 35 142 58 118 S95 122 112 98 S150 110 172 84 S205 96 225 73 S260 95 282 61 S315 82 338 55 S370 73 392 42 S430 57 452 31 S490 45 520 12" fill="none" stroke="#d9b66b" strokeWidth="3" strokeLinecap="round"/></svg>
              </div>
              <div className="chart-foot"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div>
              <div className="stats-row"><div><small>PROFIT TARGET</small><b>8.0%</b></div><div><small>MAX DAILY LOSS</small><b>5.0%</b></div><div><small>TRADING DAYS</small><b>08</b></div></div>
            </div>
          </div>
          <div className="floating-card"><span className="float-icon"><ChartNoAxesCombined size={17}/></span><div><small>PERFORMANCE STATUS</small><b>On track</b></div><span className="float-check"><Check size={14}/></span></div>
        </div>
      </section>

      <section className="trust-strip"><div className="wrap trust-inner"><span><ShieldCheck/> Clear trading objectives</span><span><Zap/> Standard & Instant paths</span><span><LockKeyhole/> Risk-first framework</span><span><Headphones/> Trader support</span></div></section>

      <section className="section wrap" id="programs">
        <div className="section-heading"><div><div className="eyebrow">FIND YOUR PATH</div><h2>Choose your <span className="gold">program.</span></h2><p>Start with a structured evaluation or explore an instant simulated account.</p></div><div className="switcher"><button className={tab === "standard" ? "selected" : ""} onClick={() => setTab("standard")}>2-Step Challenge</button><button className={tab === "instant" ? "selected" : ""} onClick={() => setTab("instant")}><Zap size={14}/> Instant</button></div></div>
        <div className="program-note">{tab === "standard" ? "Two-stage evaluation · Illustrative proposed launch pricing" : "Instant simulated account · Illustrative proposed launch pricing"}</div>
        <div className="plans">
          {plans.map((p, i) => <article className={`plan ${i === 2 && tab === "standard" ? "featured" : ""}`} key={p.size}>
            {i === 2 && tab === "standard" && <div className="popular">MOST POPULAR</div>}
            <div className="plan-top"><span className="plan-label">{("label" in p) ? p.label : "INSTANT"}</span><span className="plan-size">{p.size}</span></div>
            <div className="plan-price">{p.price}<small> / one-time</small></div>
            <div className="plan-divider"/>
            {(tab === "standard" ? ["Phase 1 target: 8%", "Phase 2 target: 5%", "Daily loss limit: 5%", "Maximum loss: 10%", "80% proposed reward split"] : ["No evaluation phase", "No profit target", "Daily loss limit: 3%", "Maximum loss: 6%", "80% proposed reward split"]).map(x => <div className="feature" key={x}><Check size={15}/>{x}</div>)}
            <a className={i === 2 && tab === "standard" ? "btn plan-btn" : "btn btn-outline plan-btn"} href="#dashboard">View details <ArrowUpRight size={15}/></a>
          </article>)}
        </div>
        <p className="disclaimer">All programs, prices and objectives shown are draft concepts for this preview. No real account, trading service, or payout is currently offered.</p>
      </section>

      <section className="how-section" id="how"><div className="wrap section"><div className="section-heading centered"><div className="eyebrow">A CLEAR PROCESS</div><h2>Three steps. <span className="gold">One focus.</span></h2><p>Keep the process simple and the expectations transparent.</p></div><div className="steps"><div className="step"><span>01</span><div className="step-icon"><Globe2/></div><h3>Choose a program</h3><p>Select the account concept and review its objectives and restrictions.</p></div><div className="step"><span>02</span><div className="step-icon"><ChartNoAxesCombined/></div><h3>Trade with discipline</h3><p>Use a supported trading environment and stay within the risk parameters.</p></div><div className="step"><span>03</span><div className="step-icon"><ShieldCheck/></div><h3>Review performance</h3><p>Eligible simulated performance is reviewed under published program terms.</p></div></div></div></section>

      <section className="section wrap rules" id="rules"><div className="rules-copy"><div className="eyebrow">TRANSPARENCY FIRST</div><h2>Know the rules.<br/><span className="gold">Own your process.</span></h2><p>Every program should explain its objectives, loss calculations, trading restrictions, review process, and reward conditions before a trader joins.</p><a className="text-link" href="#faq">Read the program FAQ →</a></div><div className="rules-card"><div className="rule-line"><span>2-Step phase 1 target</span><b>8%</b></div><div className="rule-line"><span>2-Step phase 2 target</span><b>5%</b></div><div className="rule-line"><span>Daily loss limit (draft)</span><b>5%</b></div><div className="rule-line"><span>Maximum loss (draft)</span><b>10%</b></div><div className="rule-line"><span>Proposed reward split</span><b>80%</b></div><small>Illustrative draft only — final rules require legal, platform and risk validation.</small></div></section>

      <section className="dashboard-preview" id="dashboard"><div className="wrap dashboard-inner"><div><div className="eyebrow">TRADER AREA PREVIEW</div><h2>Your trading journey,<br/><span className="gold">in one place.</span></h2><p>A future secure portal for account status, performance, objectives, identity checks and payout requests.</p><a className="btn" href="#faq">Explore the preview <ArrowUpRight size={16}/></a></div><div className="mini-dashboard"><div className="mini-head"><span>MY DASHBOARD</span><span className="demo-tag">SAMPLE DATA</span></div><div className="mini-welcome">Welcome back, Trader</div><div className="mini-grid"><div><small>ACCOUNT SIZE</small><b>$50,000</b></div><div><small>STATUS</small><b className="gold">Evaluation</b></div><div><small>NET P&L</small><b>+$1,240</b></div><div><small>OBJECTIVE</small><b>2.48%</b></div></div><div className="progress-label"><span>Profit target progress</span><b>31%</b></div><div className="progress"><i/></div><div className="mini-foot">Illustrative interface · Not connected to a trading account</div></div></div></section>

      <section className="section wrap faq" id="faq"><div className="section-heading centered"><div className="eyebrow">NEED TO KNOW</div><h2>Frequently asked <span className="gold">questions.</span></h2></div><div className="faq-list"><details><summary>Is ApexFund currently accepting traders?<ChevronDown/></summary><p>No. This is a development preview. Registration, checkout, live trading and payouts are not enabled.</p></details><details><summary>Does the preview connect to MetaTrader 5?<ChevronDown/></summary><p>Not yet. A real MT5 connection requires an approved broker or platform provider, server credentials, API or bridge access, and a tested risk engine.</p></details><details><summary>Are the prices and rules final?<ChevronDown/></summary><p>No. All displayed prices and rules are proposed examples and must be validated against operating costs, legal requirements and risk modelling.</p></details><details><summary>Will Instant Funding be available?<ChevronDown/></summary><p>It is part of the product concept. The exact model, eligibility, drawdown rules and reward terms must be approved before launch.</p></details></div></section>

      <footer><div className="wrap footer-main"><a className="brand" href="#"><span className="brand-mark">A</span><span>APEX<span className="gold">FUND</span></span></a><p>Built around discipline, transparency and thoughtful risk management.</p><div className="footer-links"><a href="#programs">Programs</a><a href="#rules">Trading rules</a><a href="#faq">FAQ</a></div></div><div className="wrap footer-bottom"><span>© 2026 ApexFund concept. All rights reserved.</span><span>Development preview · No financial services offered</span></div></footer>
    </main>
  );
}
