## Overview
> *Simple portfoilo website written in NextJS. Integrates with AWS, third-party API and use OAuth for Authorization*

![Architecture](docs/UML.svg)

## How it works
1. During build time, SSG content is generated. During this phase, third-party API is called with quote for `/about` section. This content is behaving as static html with all the benefits - SEO-friendly, works with slow clients or disabled JS
2. `/api` section allows client to sign-in (with Github or Google) and on successfull authentication will retrieve DynamoDB contents via backend API. This section use SSR - code is pre-rendered on server and later rehydrated client side

## Deployments 
1. Local development possible by running `yarn dev`
2. Push to `integration` branch deploys to [prod](http://www.psimon.cz) instance
3. Push to `dev` branch deploys to [dev](about-me-tawny.vercel.app) instance

## Tech used
* NextJS 12, Next Auth
* React styled with Tailwind
* AWS-sdk, DynamoDB
* GitHub and Google for authentication
* Vercel for deployment
* Jest for testing
* React-json-view for cv.json
* Drawio for UML diagram
* Kanye West REST API for quote of the day

## Getting Started
Just run

`yarn dev`

...and visit local dev server running at [localhost:3000](localhost:3000)

## Deploy on AWS
...is done by AWS Cloudformation. Resources are specified in `template.yaml`.

Sample deployment:
```
sam deploy --region eu-central-1 \
    --stack-name about-me-dev  \
    --capabilities CAPABILITY_AUTO_EXPAND \
    --force-upload \
    --no-confirm-changeset \
    --s3-bucket <DEPLOYMENT BUCKET> \
    --s3-prefix  <DEPLOYMENT BUCKET PREFIX> \
    --parameter-overrides "ParameterKey=Environment,ParameterValue=<dev|integration>"
```
