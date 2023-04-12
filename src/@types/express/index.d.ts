// Extend Express Request interface with user property
declare namespace Express {
  export interface Request {
    user: string;
  }
}
