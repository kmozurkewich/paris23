# AvidK - Web3 IoT and Identity PoC

This project was done for Ethglobal Paris 23 by [Anne](https://github.com/annejungers) and [Karl](https://github.com/kmozurkewich).

The purpose of this app is to demonstrate a use-case that integrates Vehicles, Web3 Digital Identity and Web3 messaging.  We wanted to take events from a connected vehicle (diagnotics, postiion, etc.) and orchestrate the data one-chain when a critical event occured.  We explored:
* proxitimy of other vehicles
* accident/crash events
* attestation of device messages on-chain
* reputation-based digital identity 

Initially we focused on the data and events from the devices, later focusing on building-up a digital identity for the driver that would be affected based on attested events from the devices.(this social credit score except based on driving habbits) - we discussed counterparites to the asset(banks, insurance prviders) being able to offer the driver better treatement if good behavior was certified over a period of time.

<br>

The goal was to get a working demo within 36 hours, however, we fell short.


## Technologies used:
- [x] [PolygonID](https://polygon.technology/polygon-id)
- [x] [Dock](https://www.dock.io/)
- [x] [Push Protocol](https://www.push.org)
- [x] [Chat-GPT](https://platform.openai.com/overview)
- [x] [Smartcar](https://www.smartcar.com)

<br>

While the app is incomplete, we were able to explore integrations of the above technologies.  What we learned:

* Polygon ID is strict with schemas.  We ran into inconsistencies with generating Verifieable Credentials (VCs) - the Issuer would often error-out when trying to issue the claim to the PolygonID wallet.  We suspect there were issues processing the attributes on the schema which we made custom to represent a vehicle
* Dock has a nice interface for generating DIDs and VCs against Polygon.  We ran into issues with their mobile wallet and credentials all being expired regardless if any expiration date was set.
* Push is interesting for various messaging items in web3 - they appear to run their own network of nodes for messaging (L2-like) and require you open a channel on mainnet with their tokens (on creation). 

All-in-all it was a great experience - we were able to explore  new technologies and how we could integrate them for practical use.  We may explore this application in-the-future.

<br><br>

---
<br>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
