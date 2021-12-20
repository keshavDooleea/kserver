import { IEmail } from "../intefaces/email.interface";

export class EmailService {
  sendEmail = async (emailData: IEmail): Promise<string> => {
    console.log("sending email", emailData);
    return "heyy";
  };
}
