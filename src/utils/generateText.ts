import axios from "axios";

export default async function generateText(){
   let data = await axios.get('http://metaphorpsum.com/paragraphs/1');
   return Promise.resolve(data);
}