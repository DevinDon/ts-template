export function hello(name: string): string {
  return `Hello, ${name}!`;
}

export async function asyncHello(name: string): Promise<string> {
  return `Hello, ${name}!`;
}
