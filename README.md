# AgentForce ADK Awesome-  The Agent Development Kit Examples

<br/>

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/212582904?s=200" alt="AgentForce Logo" width="200" height="200">
  
  <br/> <br/>

  <p><strong>Awesome AgentForce ADK Examples - try the agentic typescript library</strong></p>

  <br/>

  <p>
    <a href="#quick-start">Quick Start</a> •
    <a href="#basic-agents">Basic Agents</a> •
    <a href="#skill-agents">Skill Agents</a> •
    <a href="#tool-agents">Tool Agents</a>
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

Current Version: 0.10.2

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
.env

# This will help you control the verbosity of logs.
LOG_LEVEL=DEBUG

# Replace the placeholder with your actual API key.
OPENROUTER_API_KEY=sk-or-v1-your-api-key

# ASSETS: Skills, Prompts, Templates, etc. for the agent (optional)
AGENT_ASSETS_PATH=assets/
``` 

<br/>
<br/>

## Basic Agents

**Minimal Agent**: A simple agent that demonstrates basic AgentForce ADK functionality and installation verification.
```bash
bun minimal-agent
```

**Basic Agent**: An agent that showcases how to create and configure an agent with a system prompt and user prompt using the default Ollama provider.
```bash
bun basic-agent
```  

**OpenRouter Agent**: An agent that uses the OpenRouter API to generate pirate-themed responses, demonstrating external API integration.
```bash
bun openrouter-agent
```

**File Agent**: An agent that generates API documentation and saves it to a file, showcasing file output capabilities.
```bash
bun file-agent
```

<br/>

## Skill Agents

**Product Owner Agent**: An agent that demonstrates skill-based functionality using the Product Owner skill set for Agile environments.
```bash
bun product-owner-agent
```

<br/>

## Tool Agents

**Simple Tool Agent**: A basic file management assistant that demonstrates tool usage with file system operations.
```bash
bun simple-tool-agent
```

**OS Tool Agent**: An agent that executes system commands (like 'ls -la') and formats the output as JSON, demonstrating OS interaction capabilities.
```bash
bun os-tool-agent
```

**OpenRouter Tool Use Agent**: A sophisticated agent that uses OpenRouter with tool calling capabilities to create file structures and ASCII trees.
```bash
bun openrouter-tool-use-agent
```
