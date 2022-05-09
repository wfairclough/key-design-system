declare let window: any;

export namespace Logger {
  export function create(context: string): Console {
    window.logOn = window?.location?.hostname === 'localhost';
    const handler: ProxyHandler<Console> = {
      get: function (target: Console, p: string | symbol, receiver: any) {
        receiver = receiver;
        if (['log',  'error',  'warn',  'debug'].some(fn => fn === p)) {
          if (!window?.logOn) {
            return () => {};
          }
          return (message: any, ...args: any[]) => {
            target[p](`[${context}] ${message}`, ...args);
          };
        }
        return target[p];
      }
    };
    
    const logger = new Proxy(console, handler);
    return logger;
  }
}

