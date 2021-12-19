export class EmailService {
  sendEmail = async (): Promise<string> => {
    console.log("sending email");
    return "heyy";
  };
}
