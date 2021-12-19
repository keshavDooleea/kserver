import express, { Router } from "express";

export class BaseController {
  protected router: Router;

  constructor() {
    this.router = express.Router();
  }

  getRouter = () => this.router;
}
