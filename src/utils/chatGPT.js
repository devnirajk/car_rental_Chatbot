import { OPENAI_API } from "./constant";
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: OPENAI_API, 
  dangerouslyAllowBrowser: true
});


export default openai;