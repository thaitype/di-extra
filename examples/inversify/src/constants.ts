import { token } from "@di-extra/inversify";
import { DataService } from "./services/data-service";

export const TOKENS = {
  Option: Symbol.for('Option'),
  DataService: token<DataService>('DataService'),
};


console.log(`TOKENS.DataService: `, TOKENS.DataService);