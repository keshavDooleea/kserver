import { AbstractController } from "./abstract.controller";
import { EmailController } from "./email.controller";

export class ApiController extends AbstractController {
  constructor() {
    super();
    this.setEndpoints();
  }

  // sets every endpoint
  setEndpoints = (): void => {
    this.router.use("/emails", new EmailController().getRouter());
  };
}
