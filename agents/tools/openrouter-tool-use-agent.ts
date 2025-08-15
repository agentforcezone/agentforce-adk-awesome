import { 
  AgentForceAgent, 
  type AgentConfig,
  type ModelConfig
} from "@agentforce/adk";

const config: AgentConfig = {
  name: "OpenRouterToolUseAgent",
  tools: ["md_create_ascii_tree", "fs_write_file"]
};

const modelConfig: ModelConfig = {
  temperature: 0.7,
  maxTokens: 16384,
  maxToolRounds: 10, // Maximum number of tool use rounds
  //requestDelay: 5, // Wait 5 seconds between API calls to prevent rate limiting
};

// Create and configure your agent with OpenRouter
// Using a model that supports tool calling - try different models if this one doesn't work
const OpenRouterToolUseAgent = new AgentForceAgent(config)
  .useLLM("openrouter", "moonshotai/kimi-k2", modelConfig)
  .systemPrompt(`
    You are a helpful file system assistant that can use tools to answer user questions 
    about directories and files. Use the available tools to explore the file system and provide detailed, 
    accurate information.`
  )
  .prompt(`
    Please create a Fake yaml folder structure. 
    and then use the tool to create an ASCII tree representation of the folder structure.
    After that, write the output to a file named "outputs/agents/tools/openrouter-tool-use-agent.md".`)


await OpenRouterToolUseAgent.getResponse();

// Save to file
//await OpenRouterToolUseAgent.saveToFile("outputs/agents/tools/openrouter-tool-use-agent.md");
//console.log("\n✅ Response saved to: outputs/agents/tools/openrouter-tool-use-agent.md");
