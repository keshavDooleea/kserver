import { BaseController } from "./base.controller";
import { EmailController } from "./email.controller";

export class ApiController extends BaseController {
  constructor() {
    super();
    this.defineEndpoints();
  }

  // add every endpoint
  private defineEndpoints = () => {
    this.router.use("/emails", new EmailController().getRouter());
  };
}
