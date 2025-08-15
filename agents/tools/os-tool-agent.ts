import { AgentForceAgent, type AgentConfig } from "@agentforce/adk";

const agentConfig: AgentConfig = {
    name: "OsToolAgent",
    tools: ["os_exec", "fs_write_file"]
};

const output = await new AgentForceAgent(agentConfig)
    .useLLM("ollama", "gpt-oss:20b")
    .systemPrompt("You are a file management assistant.")
    .prompt(`
        please execute the command 'ls -la' in the current directory 
        and summarize the output as pretty JSON.
        finaly save the output to a file named 'outputs/agents/tools/os-tool-agent-output.json'`)
    .output("json");

// Print the output
console.log(output);