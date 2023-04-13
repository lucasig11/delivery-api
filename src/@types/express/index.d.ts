// Extend Express Request interface with user property
declare namespace Express {
  export interface Request {
    clientId: string;
    deliverymanId: string;
  }
}
