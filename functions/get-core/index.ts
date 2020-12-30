import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import axios from "axios";

const coreapikey = process.env.CORE_API_KEY;


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const url = (req.query.url)
  let responseMessage

  const sendGetRequest = async () => {
    try {
      const res = await axios.get(`${url}&apiKey=${coreapikey}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
        responseMessage = await res.data;
    } catch (err) {
        console.error(err);
        responseMessage  = await err;
    }
};


await sendGetRequest()
  context.res = {
      // status: 200, /* Defaults to 200 */
      body: responseMessage
  };


};

export default httpTrigger;
