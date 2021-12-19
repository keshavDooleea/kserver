import { BaseController } from "./base.controller";
import { EmailController } from "./email.controller";

export class ApiController extends BaseController {
  constructor() {
    super();
  }

  // sets every endpoint
  protected setEndpoints = (): void => {
    this.router.use("/emails", new EmailController().getRouter());
  };
}
