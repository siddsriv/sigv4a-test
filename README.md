# SigV4a JavaScript Implementation Test Repository

This repository contains test applications demonstrating the use of the pure JavaScript implementation of AWS Signature Version 4A (SigV4a) in both Node.js and browser environments. SigV4a is required for services that use multi-region endpoints, such as S3 Multi-Region Access Points (MRAP).

## Prerequisites

- Node.js 18 or later
- AWS account with S3 Multi-Region Access Point configured ([Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRequests.html))
- AWS credentials with access to the S3 MRAP

## Node.js Example

### Setup

1. Navigate to the node directory:
   ```console
   cd node
   ```
2. Install dependencies:
  ```console
  npm install
  ```

3. Set environment variables/credentials
   ```console
   export AWS_ACCESS_KEY_ID=your_access_key
   export AWS_SECRET_ACCESS_KEY=your_secret_key
   export AWS_SESSION_TOKEN=your_session_token  # If using temporary credentials
   export S3_MRAP_ARN=your_mrap_arn  # ARN of your Multi-Region Access Point
   ```

4. Run the example
   ```console
   node index.js
   ```

## Browser Example

### Setup

1. Navigate to the browser directory:
```console
cd browser
```

2. Install dependencies:
```console
npm install
```

3. Edit src/config.js to set your AWS credentials and S3 MRAP ARN.

4. Build the application:
```console
npm run build
```

5. Start the development server:
```console
npm run server
```

Open your browser and navigate to http://localhost:8080

This example uses the JavaScript-based SigV4a implementation that works in browsers.

### Notes About Implementation

- Both Node.js and browser examples use the pure JavaScript implementation (@smithy/signature-v4a)
- Both examples use S3 Multi-Region Access Point as the test case
- We're including the local packages in the repository for convenience