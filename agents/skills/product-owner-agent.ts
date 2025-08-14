import { AgentForceAgent, type AgentConfig } from "@agentforce/adk";

const agentConfig: AgentConfig = {
    name: "ProductOwnerAgent",
    // default for the skill loader is ./skills/[skillName].md
    // use the "bun init-skills" command to create a basic skills directory with AgentForce skills
    // loads the skill assets from .env (if set) or you can specify a path directly
    // e.g. assets/skills/product-owner.md
    skills: ["product-owner"]
};

const output = await new AgentForceAgent(agentConfig)
    .useLLM("ollama", "gemma3:4b")
    .systemPrompt(`You are a Product Owner in an Agile environment.`)    
    .prompt("What is your name and what are the key features of the Product Owner role in Agile?")
    .getResponse();

// Print the output (Optional)
console.log(output);
