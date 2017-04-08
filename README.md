# website
Fight for Better website

### Setup

Dev site up at http://fightforbetter.s3-website-us-east-1.amazonaws.com/

Local setup with
```
npm install
npm start
```
running at http://localhost:3000

You can also watch files in the `/src` directory for changes and auto-compile into `/dist` with

```
gulp watch
```

### Deploy

Deploying to production is a 2-step process:
```
gulp build
gulp deploy
```

`gulp build` compiles templates and copies files from `/src` into `/dist`

`gulp deploy` uploads contents of the `/dist` folder to S3

**Note** deploy will not work unless a configuration file named `awsconfig.js` is placed in the root folder (same level as this README). Look at `dummyawsconfig.js` for format.
