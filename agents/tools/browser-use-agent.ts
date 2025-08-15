import { 
  AgentForceAgent, 
  type AgentConfig,
  type ModelConfig
} from "@agentforce/adk";

const config: AgentConfig = {
  name: "OpenRouterToolUseAgent",
  tools: ["browser_use", "fs_write_file"]
};

const modelConfig: ModelConfig = {
  temperature: 0.7,
  maxTokens: 8192,
  maxToolRounds: 10,
};

const OpenRouterToolUseAgent = new AgentForceAgent(config)
  .useLLM("openrouter", "openai/gpt-5-mini", modelConfig)
  .systemPrompt(`
    You are a helpful file system assistant that can use tools to answer user questions 
    about downloaded web content. Use the available tools to explore the web and provide detailed,`
  )
  .prompt(`
    Use my browser to search for "latest AI news" on https://www.google.com/search?q=latest+AI+news . 
    Create a Markdown overview with Title, Description and URL.
    After that, write the output to a file named "outputs/agents/tools/browser-use-agent.md".
    After all Close the browser.
  `);

await OpenRouterToolUseAgent.getResponse();
