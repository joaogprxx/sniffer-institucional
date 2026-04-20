# Sniffer — Creation Process

> How the project was conceived, built, and refined using a stack of generative AI tools.

---

## Context

Sniffer was born as a digital product project — a local discovery platform with three layers of experience (People, Business, and Corporate). The challenge was to go from a conceptual idea to a functional, visually polished landing page with clean code, without a traditional development team. The solution was to use a set of generative AI tools in a complementary way, each taking on a specific responsibility within the process.

---

## The Tools and Their Roles

### Google AI Studio
The starting point was **Google AI Studio**, used for conceptual exploration and idea generation. Before any line of code was written, the tool helped structure the product's value proposition, map the three target audiences (end user, local business, and corporation), and define the brand's language. AI Studio also supported the development of the differentiation logic between modules — what each layer should offer and how to communicate it distinctly yet coherently within a single visual identity.

### Google Stitch
**Google Stitch** came in during the design and visual prototyping phase. The tool was used to generate and iterate on visual components, section layouts, and the interface's visual identity before implementation. Stitch made it possible to validate design choices — such as the color palette (green `#3DDC84`, navy `#1A1A2E`, purple `#3D3C6E`), typographic hierarchy, and the structure of each page — quickly, without having to write any code.

### Claude & Claude Code
**Claude** (via chat and Claude Code) was the primary implementation tool. Building on the already-validated concepts and visuals, Claude Code translated everything into functional React + TypeScript code, making architectural decisions and writing the components for each module of the application:

- Project scaffolding with Vite + React 19 + Tailwind CSS v4
- Implementation of the three routes and distinct experiences (`/`, `/business`, `/corporate`)
- Page transition animations with Motion (smooth entry/exit between routes, scroll-responsive mascot)
- Fixed top toggle switcher with animated transition between modes
- Interactive cards with spotlight hover effect
- Responsive layout (mobile + desktop) for all three modules
- Google Gemini API integration for AI-powered features

The process with Claude Code was iterative — each section was built, reviewed, and refined in short cycles, with visual detail and interaction behavior adjustments made throughout.

### Antigravity
**Antigravity** complemented the process on the project management and organization side. The tool supported task structuring, prioritization of what to build at each stage, and context management throughout development — acting as a coordination layer that kept the project moving forward in an organized way, even without a dedicated human team.

---

## The Process in Stages

**1. Conceptualization**
Defining the core idea, the three audiences, and the value proposition of each module — done with the support of Google AI Studio for exploration and idea refinement.

**2. Design and Visuals**
Generating visual components, color palette, and layouts with Google Stitch. This stage ensured the visual direction was defined before implementation, saving rework cycles in code.

**3. Implementation**
Building the code with Claude Code, translating concepts and designs into functional React components with animations, responsiveness, and AI integration.

**4. Iteration and Refinement**
Review cycles across tools — visual adjustments, behavior fixes, UX detail additions (such as the mascot that follows the scroll or the light effect on card hover).

**5. Organization and Management**
Progress tracking and next-step structuring with Antigravity throughout the entire process.

---

## The Result

The project went from zero to a complete multi-module landing page with production-quality code. The main outcomes were:

**Execution speed** — What would normally take weeks of work with a design and development team was compressed into a few days, thanks to the complementarity of the AI tools used.

**Code quality** — The final stack (React 19, TypeScript, Vite, Tailwind CSS v4) is modern and maintainable. The code is typed, organized by modules, and ready to scale.

**Visual fidelity** — The delivered interface is polished, with fluid animations, consistent responsiveness, and a coherent design system across all three modules.

**Three distinct yet cohesive experiences** — Each module has its own visual identity (green for People, teal for Business, purple for Corporate) without losing the unity of the Sniffer brand.

**Native AI integration** — The application launches with the Google Gemini integration already structured, ready to power intelligent features such as recommendations, predictive analytics, and content personalization.

---

## Lessons Learned

Using multiple AI tools with well-defined responsibilities proved more effective than trying to use a single tool for everything. Each tool has a strong point — and the result was better precisely because each stage of the process used the most appropriate tool for that type of task.

The **concept → design → code → iteration** flow, even when executed by AI, requires human direction. The best decisions of the project — what to include, what to cut, how to communicate each module — were human choices that the tools helped execute with quality.

---

*Documentation generated on March 18, 2026.*
