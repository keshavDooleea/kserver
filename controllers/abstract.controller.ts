import express, { Router } from "express";

export abstract class AbstractController {
  protected router: Router;

  constructor() {
    this.router = express.Router();
  }

  abstract setEndpoints(): void;

  getRouter = () => this.router;
}
