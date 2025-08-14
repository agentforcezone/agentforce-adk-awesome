    import { AgentForceAgent } from '@agentforce/adk';

    // Create agent configuration
    const agentConfig = {
      name: "BasicAgent"
    };

    // Create and configure your agent
    const agent = new AgentForceAgent(agentConfig)
      // Default Provider and Model used ollama/gemma3:4b if not specified
      .systemPrompt("You are a helpful AI assistant specialized in TypeScript development")
      .prompt("Hello! Can you help me understand TypeScript interfaces?");

    // Generate response
    const textResponse = await agent.output("md");
    console.log("Agent Response:", textResponse);