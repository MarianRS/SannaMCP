# **PRD — Sanna MCP Documentation**

Updated draft v0.2

Customer-facing documentation

## **1. Product overview**

**Product:** Sanna MCP Documentation

**Platform:** Web documentation

**Integration:** Sanna × Claude

**Primary audience:** Sanna customers and accountants.

**Purpose:** Create a simple, structured and accessible documentation experience that explains how Sanna customers and accountants can connect and use Sanna MCP with Claude.

The documentation should make the integration understandable, guide users through the available setup process and clearly explain the functionality available through Sanna MCP.

The experience should be technically accurate without requiring users to have a developer background.

## **2. Problem statement**

Users need a clear and reliable resource to understand and configure the Sanna MCP integration with Claude.

Technical documentation can be intimidating for users without development experience. Unclear instructions, unfamiliar terminology and poorly structured information create unnecessary friction.

The opportunity is to create documentation that makes connecting Sanna to Claude straightforward, with clear instructions and an intuitive information hierarchy.

## **3. Product goals**

| Goal            | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| Clarity         | Explain Sanna MCP in simple, understandable language.         |
| Accessibility   | Make documentation accessible to non-technical users.         |
| Easy onboarding | Guide users through the connection process.                   |
| Discoverability | Make available functionality easy to understand and find.     |
| Usability       | Present instructions and code snippets in a practical format. |
| Consistency     | Create a coherent visual and navigation system.               |

## **4. Target audience**

**Primary audience: Sanna customers and accountants.**

Users may have different levels of technical knowledge. The documentation should therefore prioritize accessibility and practical instructions over technical explanations.

The experience should accommodate users who:

- Want to understand what Sanna MCP enables.
- Want to connect their Sanna account to Claude.
- Want to understand what they can do with the integration.
- Need help following setup instructions.
- Need to troubleshoot connection or usage issues.

## **5. Scope**

In scope

- Sanna MCP documentation.
- Claude integration instructions.
- Setup and configuration guidance based on the supplied HTML.
- Explanation of available functionality.
- Usage examples supported by the source material.
- Troubleshooting information available in the source material.
- Responsive documentation website.
- Visual alignment with Sanna's existing brand.

Out of scope

- Documentation for other AI clients.
- General MCP developer documentation.
- API documentation unrelated to the integration.
- New MCP functionality or features.
- Assumed technical capabilities not documented in the source material.
- Marketing landing pages or unrelated Sanna product documentation.

## **6. Information architecture**

Proposed documentation structure:

**SANNA MCP DOCUMENTATION**

**01 — Introduction**

Overview of Sanna MCP, its purpose and capabilities.

**02 — Getting started**

Requirements and information needed before connecting.

**03 — Connect to Claude**

Setup instructions, configuration and connection process.

**04 — Available functionality**

Overview of the tools and functionality provided by Sanna MCP.

**05 — Usage examples**

Examples of how to interact with Sanna through Claude.

**06 — Troubleshooting**

Known issues and solutions.

*Note: This is the proposed information architecture. Final page names and content will be validated against the HTML source.*

## **7. Core user journeys**

### **Journey A — Understanding Sanna MCP**

1. User arrives at the documentation.
2. Reads the introduction.
3. Understands what the integration enables.
4. Explores the available functionality.
5. Proceeds to the connection instructions.

### **Journey B — Connecting Sanna to Claude**

1. User opens Getting Started.
2. Reviews the requirements.
3. Navigates to Connect to Claude.
4. Follows the provided instructions.
5. Completes the connection process.
6. Starts using the available functionality.

### **Journey C — Finding functionality**

1. User navigates to Available Functionality.
2. Finds the relevant tool or capability.
3. Reads its description and instructions.
4. Uses the provided examples in Claude.

### **Journey D — Troubleshooting**

1. User encounters an issue.
2. Opens Troubleshooting.
3. Finds the relevant problem.
4. Follows the documented solution.

## **8. Functional requirements**

| ID    | Requirement                           | Priority             |
| ----- | ------------------------------------- | -------------------- |
| FR-01 | Clear documentation landing page      | Must                 |
| FR-02 | Persistent sidebar navigation         | Must                 |
| FR-03 | Logical page hierarchy                | Must                 |
| FR-04 | Clear step-by-step instructions       | Must                 |
| FR-05 | Code blocks with copy functionality   | Must, where relevant |
| FR-06 | Responsive desktop and mobile layouts | Must                 |
| FR-07 | Consistent typography and spacing     | Must                 |
| FR-08 | Clear active navigation states        | Must                 |
| FR-09 | Previous / next page navigation       | Should               |
| FR-10 | Search functionality                  | Could                |
| FR-11 | Dark mode                             | Could                |

## **9. Content requirements**

All content must originate from the supplied HTML or be derived directly from its information.

| Section                 | Content requirements                                     |
| ----------------------- | -------------------------------------------------------- |
| Introduction            | Explain Sanna MCP and its purpose.                       |
| Getting started         | Present documented prerequisites and requirements.       |
| Connect to Claude       | Explain the actual connection and configuration process. |
| Available functionality | Describe documented tools and capabilities.              |
| Usage examples          | Present examples from the source material.               |
| Troubleshooting         | Include documented issues and resolutions.               |

No technical details, capabilities, authentication methods or workflows should be invented.

## **10. UX and visual design requirements**

**Design direction:** Minimal, clean, structured and functional.

The documentation should feel like a natural extension of Sanna's existing website.

[Webpixels : Modern Docs Homepage by Webpixels on Dribbble](https://images.openai.com/static-rsc-4/5NMnXwAp0i-IGB7RQl1FjIsF4aMYTlZ7Jhj5LVnox9X2sOrpSGKF8hTCis-HB-1ssKQOfBEVwV0KValwM09FvN44yQv1Tyy9j9OLMdAH_HNPyuI4kX-u5P3d3DlIm9p_3BD6WKCAv-YPE8hpr2AKA7-wMt64HI8ikc7C4aDYZgY?purpose=inline)

**ReUI**

Reference for visual hierarchy, navigation and layout.

[API / Documentation • Material You (m3) • Design system by F e l i ✖︎ for Setproduct on Dribbble](https://images.openai.com/static-rsc-4/3gvsp4RUS2NGbKzsyu6ZpCmDkMIra6dliZ1I3wimghR7Z6WI6g34-TPxtiTQfqLoSJn-HN_Neav-Bh6lbe_bC1io87nxdbHZ4x1GG1Zgjh8vEpa5NF6GpxmRzailpdInprzIzBywhSnZij9Fupdee-db_KJkabG3WdnsGxrNTvo?purpose=inline)

**Massive**

Reference for technical content presentation and code blocks.

### **Design principles**

1. **Simplicity:** Avoid unnecessary visual complexity.
2. **Readability:** Clear typography, spacing and content hierarchy.
3. **Consistency:** Reusable components and predictable layouts.
4. **Practicality:** Instructions should be easy to follow and copy.
5. **Accessibility:** Technical information should be understandable to non-developers.

### **Interface requirements**

- Light theme as the primary experience.
- Sanna brand identity and visual language.
- Sidebar navigation on desktop.
- Responsive navigation on mobile.
- Clear page titles and section headings.
- Narrow reading column for explanatory content.
- Distinct styling for code and configuration snippets.
- Copy buttons where code snippets are provided.
- Clear links between related documentation pages.
- Consistent spacing and component styling.

## **11. Success criteria**

The documentation should be considered successful when:

- Users can understand the purpose of Sanna MCP.
- Users can locate the Claude connection instructions easily.
- Setup instructions are clear and followable.
- Available functionality is easy to discover.
- Technical information is accurate and consistent with the source.
- The documentation is visually consistent with Sanna's brand.
- The experience works across desktop and mobile.

## **12. Reference material and content constraints**

This project uses three explicitly defined reference sources.

| Source                                                                                                | Purpose                              |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Supplied HTML file                                                                                    | Technical and functional content     |
| [Sanna.no](https://www.sanna.no?utm_source=chatgpt.com)                                               | Brand identity and visual reference  |
| [ReUI documentation](https://reui.io/docs/lovable?utm_source=chatgpt.com)                             | Documentation UX and structure       |
| [Massive documentation](https://massive.com/docs/ai-tools/clients/claude-code?utm_source=chatgpt.com) | Technical documentation presentation |

**Content restriction:** No external technical content should be introduced. ReUI and Massive are design and presentation references only.

## **13. Open questions**

These will be resolved by reviewing the supplied HTML, not by making assumptions.

- What exact functionality does Sanna MCP expose?
- What are the documented connection and configuration steps?
- What prerequisites are specified?
- What usage examples are available?
- What troubleshooting information exists?
- Are there any distinctions between different types of Sanna users?

## **14. Project deliverables**

| Deliverable         | Description                                   |
| ------------------- | --------------------------------------------- |
| PRD                 | Product scope, goals and requirements         |
| Sitemap             | Final documentation hierarchy                 |
| Content structure   | Page-by-page content outline                  |
| UX/UI design        | Documentation interface and components        |
| Responsive design   | Desktop and mobile layouts                    |
| Final documentation | Complete content based on the supplied source |

**Recommended next step:** Upload the HTML reference. The next iteration should replace the generic content placeholders with the actual Sanna MCP functionality and produce a finalized sitemap and page-level specification.