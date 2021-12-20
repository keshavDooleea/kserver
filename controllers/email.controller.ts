import { Request, Response } from "express";
import { HTTP_CODE } from "../lib/http-code.lib";
import { EmailService } from "../services/email.service";
import { AbstractController } from "./abstract.controller";

declare module "express-session" {
  interface Session {
    visitedHosts: string[]; // hods every url which user has visited
  }
}

export class EmailController extends AbstractController {
  private emailService: EmailService;

  constructor() {
    super();
    this.emailService = new EmailService();
    this.setEndpoints();
  }

  setEndpoints = (): void => {
    this.router.get("/me", async (request: Request, response: Response) => {
      const { host } = request.headers;

      if (!request.session.visitedHosts) {
        request.session.visitedHosts = [];
      }

      console.log("current hosts:", request.session.visitedHosts);

      if (request.session.visitedHosts.includes(host)) {
        response.status(HTTP_CODE.CREATED).send("Request already made and email already sent");
        return;
      }

      request.session.visitedHosts.push(host);
      const email: string = await this.emailService.sendEmail();
      response.status(HTTP_CODE.OK).json({ yo: request.session.visitedHosts, email });
    });
  };
}
