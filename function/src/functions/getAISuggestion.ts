import {
    app,
    HttpRequest,
    HttpResponseInit,
    InvocationContext,
  } from "@azure/functions";
  
  import OpenAI from "openai";
  
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  export async function getAISuggestion(
    request: HttpRequest,
    context: InvocationContext
  ): Promise<HttpResponseInit> {
    try {
      const term = request.query.get("term");
      if (!term) {
        return { status: 400, body: "Missing term parameter" };
      }
  
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a digital video assistant working for services such as Netflix, Disney Plus & Amazon Prime Video. Your job is to provide suggestions based on the videos the user specifies. Provide an quirky breakdown of what the user should watch next! It should only list the names of the films after the introduction. Keep the response short and sweet! Always list at least 3 films as suggestions. If the user mentions a genre, you should provide a suggestion based on that genre.`,
          },
          {
            role: "user",
            content: `I like: ${term}`,
          },
        ],
      });
  
      return { body: completion.choices[0].message.content || "No Suggestion" };
    } catch (error) {
      context.log(`Error processing request: ${error}`);
  
      if (error.response && error.response.status) {
        const statusCode = error.response.status;
        let errorMessage = "An error occurred";
  
        switch (statusCode) {
          case 401:
            if (error.response.data && error.response.data.detail) {
              errorMessage = error.response.data.detail;
            } else {
              errorMessage = "Invalid Authentication";
            }
            break;
          case 403:
            errorMessage = "Country, region, or territory not supported";
            break;
          case 429:
            errorMessage = "Rate limit reached for requests";
            break;
          case 500:
            errorMessage = "The server had an error while processing your request";
            break;
          case 503:
            errorMessage = "The engine is currently overloaded, please try again later";
            break;
          default:
            break;
        }
  
        return { status: statusCode, body: errorMessage };
      } else {
        return { status: 500, body: "Internal Server Error" };
      }
    }
  }
  
  app.http("getAISuggestion", {
    methods: ["GET"],
    authLevel: "anonymous",
    handler: getAISuggestion,
  });
  getAISuggestion