// Type-safe Token from OWJA/IOC, https://github.com/owja/ioc

export const isSymbol = (t: unknown): t is symbol => typeof t == 'symbol';

declare const dependencyMarker: unique symbol;
export interface Token<Dep> {
  type: symbol;
  [dependencyMarker]: Dep;
}

// tokens
export type MaybeToken<Dep = unknown> = Token<Dep> | symbol;

export const token = <Dep>(name: string) => ({ type: Symbol(name) } as Token<Dep>);

// export const stringifyToken = (token: MaybeToken): string => !isSymbol(token) ? `Token(${token.type.toString()})` : token.toString();

// export const getType = (token: MaybeToken): symbol => (!isSymbol(token) ? token.type : token);


