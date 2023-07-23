import { NextResponse } from 'next/server'
import  * as PushAPI from "@pushprotocol/restapi";
const { Configuration, OpenAIApi } = require("openai");
const ethers = require('ethers');



 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  
  const id = searchParams.get('addr')
  const question = searchParams.get('question')



   // create signer for txs
  const PK = '';   // pub
  const Pkey = ``;   // priv
  const signer = new ethers.Wallet(PK);


  const apiResponse = await PushAPI.payloads.sendNotification({
    signer: signer,
    type: 3, // target
    identityType: 2, // direct payload
    notification: {
      title: '[Tesla Sentry] - Incident new notif',
      body: '[Tesla Sentry] - Proximity Event Detected'
    },
    payload: {
      title: '[Tesla Sentry] - Incident Recorded',
      body: `eminem`,
      cta: '',
      img: 'https://www.youtube.com/watch?v=zR6fAZ_2aL0'
    },
    recipients: 'eip155:5:0x3648e81C87ACaEae180Bb0A0086A1040896d7E14', // recipient address
    channel: 'eip155:5:0x1eAFe23834C9B1519b3E23A850211f3D751D7B54', // your channel address
    env: 'staging'
  });

  const fetchNotifs = async() => {
      const notifications = await PushAPI.user.getFeeds({
          user: 'eip155:5:' + searchParams.get('addr'), // user address in CAIP-10        
          env: 'staging'
      });
  
      
      return notifications;
  }
  
  const resp = await fetchNotifs();

 

  const configuration = new Configuration({
      organization: "",
      apiKey: "",
  });

  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [ {"role": "system", "content": ""}, 
                {role: "user", content: question}],
  });


  console.log(completion.data.choices[0].message);

  return NextResponse.json(completion.data.choices[0].message);


}