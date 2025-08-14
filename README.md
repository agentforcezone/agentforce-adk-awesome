# AgentForce ADK Awesome-  The Agent Development Kit Examples

<br/>

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/212582904?s=200" alt="AgentForce Logo" width="200" height="200">
  
  <br/> <br/>

  <p><strong>Awesome AgentForce ADK Examples - try the agentic typescript library</strong></p>

  <br/>

  <p>
    <a href="#quick-start">Quick Start</a> •
    <a href="#example-agents">Examples Agents</a> •
    <a href="#skill-agents">Skills Agents</a> 
  </p>
  <p> visit also the </p>
  <p> 
  <a href="https://docs.agentforce.zone">The AgentForceZone Documentation Page </a>
  </p>
</div>

<br/>

<br/>

## We are in Beta!

This project is in early development and is not yet production-ready. It is intended for testing and experimentation only. Use at your own risk. 

Current Version: 0.9.0

<br/>

## Overview

This repository contains examples of how to use the AgentForce ADK (Agent Development Kit) to create and manage AI agents in TypeScript. The examples demonstrate various features of the ADK, including agent creation, configuration, and interaction.

### Quick Start

1. **Clone the repository**:

    ```bash
    git clone https://github.com/agentforcezone/agentforce-adk-awesome.git
    cd agentforce-adk-awesome
    ```

2. **Install dependencies**:

    ```bash
    bun i
    ```      

3. **Initialize skills (optional)**:

    Copy the default Agentforce skills to your local project:

    ```bash
    bun init-skills
    ```

    This will copy the skills from `node_modules/@agentforce/adk/lib/_assets/skills` to `./skills` directory.

4. **Run the minimal agent example**:
   
    All examples can be executed using the `bun` script commands. For example, to run the minimal agent example, use:

    ```bash
    bun minimal-agent
    ```

### Env File Setup

To run the examples, you need to set up your environment variables. Create a `.env` file in the root directory of the project from the `env.example` file.

and add your API keys and configuration settings. For example:

```env
LOG_LEVEL=DEBUG
OPENROUTER_API_KEY=sk-or-v1-your-api-key
``` 

<br/>
<br/>

## Example Agents

**Minimal Agent**: A simple agent that demonstrates basic functionality.
```bash
bun minimal-agent
```

**Basic Agent**: An agent that showcases how to create and configure an agent with a system prompt and a user prompt.
```bash
bun basic-agent
```  

**OpenRouter Agent**: An agent that uses the OpenRouter API to generate responses based on a system prompt and a user prompt.
```bash
bun openrouter-agent
```

**File Agent**: An agent that generates API documentation and saves it to a file.
```bash
bun file-agent
```

<br/>

## Skill Agents

**Product Owner Agent**: An agent that demonstrates the skills of a Product Owner, including backlog
```bash
bun product-owner-agent
```
