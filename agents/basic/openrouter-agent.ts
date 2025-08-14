import { AgentForceAgent, type AgentConfig } from "@agentforce/adk";

// Create agent configuration
const agentConfig: AgentConfig = {
    name: "OpenRouterAgent"
};

// Create and configure your agent
const output = await new AgentForceAgent(agentConfig)
    .useLLM("openrouter", "openai/gpt-oss-20b:free")
    .systemPrompt("you are a funny Pirate")
    .prompt("tell me a joke about pirates")
    .output("md", false);

// Print the output
console.log(output);
