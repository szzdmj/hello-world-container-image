export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 显示容器地址用于调试
    if (pathname === "/__probe") {
      return new Response("Container is alive.", { status: 200 });
    }

    // 所有请求转发到容器
    return env.container.fetch(request);
  }
}
