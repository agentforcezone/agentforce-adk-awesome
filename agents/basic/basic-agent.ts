    import { AgentForceAgent } from '@agentforce/adk';

    // Create and configure your agent
    const agent = new AgentForceAgent({ name: "BasicAgent" })
      // Default Provider and Model used ollama/gemma3:4b if not specified
      .systemPrompt("You are a helpful AI assistant specialized in TypeScript development")
      .prompt("Hello! Can you help me understand TypeScript interfaces?");

    // Generate response
    const agentResponse = await agent.getResponse();
    console.log("Agent Response:", agentResponse);