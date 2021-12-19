export class EmailService {
  constructor() {}

  sendEmail = async (): Promise<string> => {
    console.log("sending email");
    return "heyy";
  };
}
