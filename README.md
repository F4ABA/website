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

Follow these steps to deploy to production:
1. Create a copy of `dummyawsconfig.js` and name it `awsconfig.js`. It should be located at the root level, just like `dummyawsconfig.js` is.
2. Log into the Amazon AWS console and visit [this page](https://console.aws.amazon.com/iam/home?region=us-east-2#/users/Developer?section=security_credentials).
3. Click "Create Access Key" and copy/paste the key and secret into your awsconfig.js file.
4. Whenever you want to deploy to production, run the following:
  ```
  gulp build
  gulp deploy
  ```
5. Once deployed, the CloudFront cache must be invalidated before new changes will show on the production site. You can do this [here](https://console.aws.amazon.com/cloudfront/home?region=us-east-2#distribution-settings:E264GKACJBWA14). Click "Invalidations", then "Create Invalidation", and enter `/*` to clear all files from the cache.

**Notes**

The `awsconfig.js` file is excluded from git tracking for security reasons (via the `.gitignore` file). Do not track any files that have your AWS credentials in them.

`gulp build` compiles templates and copies files from `/src` into `/dist`

`gulp deploy` uploads contents of the `/dist` folder to S3

Deploy will not work unless a configuration file named `awsconfig.js` is placed in the root folder (same level as this README). Look at `dummyawsconfig.js` for format.
