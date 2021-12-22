import { Request, Response } from "express";
import { IEmail } from "../intefaces/email.interface";
import { HTTP_CODE } from "../lib/http-code.lib";
import { EmailService } from "../services/email.service";
import { AbstractController } from "./abstract.controller";

declare module "express-session" {
  interface Session {
    visitedHosts: string[]; // holds every url which user has visited
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
    this.router.post("/visitor", async (request: Request, response: Response) => {
      const { host } = request.headers;
      const ipAddress = request.headers["x-forwarded-for"] || request.socket.remoteAddress;
      const { body } = request;

      if (!request.session.visitedHosts) {
        request.session.visitedHosts = [];
      }

      console.log("body:", body);
      console.log("current hosts:", request.session.visitedHosts);

      if (request.session.visitedHosts.includes(host)) {
        response.send("Request already made and email already sent");
        // response.status(HTTP_CODE.CREATED).send("Request already made and email already sent");
        return;
      }

      request.session.visitedHosts.push(host);
      const emailData: IEmail = {
        ip: ipAddress[0],
        host,
      };
      const email: string = await this.emailService.sendEmail(emailData);
      response.json({ yo: request.session.visitedHosts, email });
      // response.status(HTTP_CODE.OK).json({ yo: request.session.visitedHosts, email });
    });
  };
}
