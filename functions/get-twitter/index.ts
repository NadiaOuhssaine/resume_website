import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from "axios";

const twitterapikey = process.env.TWITTER_API_KEY;


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const url = (req.query.url)
    let responseMessage



  async function getUser() {
    try {
      const res = await axios.get(`${url}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${twitterapikey}`
          }
      })
        responseMessage = await res.data;
    } catch (err) {
        responseMessage  = await err;

    }
  }

  await getUser()
    context.res = {
        body: responseMessage
    };



};



export default httpTrigger;

