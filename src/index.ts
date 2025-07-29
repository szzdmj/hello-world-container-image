export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    return await env.container.fetch(request);
  }
};
