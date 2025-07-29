// src/index.ts
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    return env.container.fetch(request);
  },
};

export interface Env {
  container: Fetcher;
}
