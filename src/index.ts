export const VERSION = '1.0.0';

export class App {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  start(): void {
    console.log(`${this.name} v${VERSION} started`);
  }
  
  stop(): void {
    console.log(`${this.name} stopped`);
  }
}

export function main(): void {
  const app = new App('TeaSol');
  app.start();
}

if (require.main === module) {
  main();
}
