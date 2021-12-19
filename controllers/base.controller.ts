import express, { Router } from "express";

export abstract class BaseController {
  protected router: Router;

  constructor() {
    this.router = express.Router();
  }

  protected abstract setEndpoints(): void;

  getRouter = () => this.router;
}
