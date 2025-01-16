import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { DoneCallback, Job } from "npm:bull";

const SMTP_CONFIG = {
  connection: {
    hostname: "smtp.gmail.com",
    port: 465,
    tls: true,
    auth: {
      username: "pkytsky@gmail.com",
      password: "palh mkuu svli qvfb",
    },
  },
};

interface EmailOptions {
  to: string;
  subject: string;
  content: string;
  htmlContent?: string|undefined;
}



async function sendEmail({ to, subject, content, htmlContent = undefined }: EmailOptions) {
    console.log("creating client")
    const client = new SMTPClient(SMTP_CONFIG);
    console.log("client connected",client)
    const toReturn =  await client.send({
        from: SMTP_CONFIG.connection.auth.username,
        to,
        subject,
        content,
        html: htmlContent,
        priority:"high"
    });
    console.log("sent mail")
    await client.close();
    return toReturn
}

export default function (job:Job, done:DoneCallback) {
    const jobData = job.data.obj.data
    console.log({jobData});
    (async()=>{
        try {
            const payload = {
                to: jobData.to,
                subject: jobData.subject,
                content: jobData.content || undefined,
                htmlContent: jobData.htmlContent || undefined,
              }
            await sendEmail(payload);
            done(null,{
                content: jobData.content || undefined,
                htmlContent: jobData.htmlContent || undefined,
                subject: jobData.subject,
                to: jobData.to,
              })
        } catch (error) {
            done(error as Error,null)
        }
    })()
}