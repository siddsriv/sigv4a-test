# SigV4a JavaScript Implementation Test Repository

This repository contains test applications demonstrating the use of the pure JavaScript implementation of AWS Signature Version 4A (SigV4a) in both Node.js and browser environments. SigV4a is required for services that use multi-region endpoints, such as S3 Multi-Region Access Points (MRAP).

**Important:** The `@smithy/signature-v4a` and `@aws-sdk/signature-v4-multi-region` packages are currently not published to npm. The setup instructions below require you to have local checkouts of the `smithy-typescript` and `aws-sdk-js-v3` repositories to build and pack these dependencies.

## Prerequisites

- Node.js 18 or later
- Git
- Local clones of the following repositories:
    - `smithy-typescript` (containing `@smithy/signature-v4a`, PR: https://github.com/smithy-lang/smithy-typescript/pull/1319)
    - `aws-sdk-js-v3` (containing `@aws-sdk/signature-v4-multi-region`, PR: https://github.com/aws/aws-sdk-js-v3/pull/6267)
- AWS account with S3 Multi-Region Access Point (MRAP) configured ([Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPointRequests.html))
- AWS credentials with access to the S3 MRAP

## Building Local Dependencies

Before setting up the Node.js or Browser examples, you need to build and pack the required SigV4a packages:

1.  **Build `smithy-typescript`:**
    ```bash
    # Navigate to your local smithy-typescript repository clone
    cd /path/to/your/smithy-typescript
    # Install dependencies (if not already done)
    yarn install
    # Build the packages
    yarn build
    # Navigate to the signature-v4a package
    cd packages/signature-v4a
    # Create the tarball (.tgz file)
    npm pack
    # Note the full path to the generated .tgz file (e.g., /path/to/your/smithy-typescript/packages/signature-v4a/smithy-signature-v4a-*.tgz)
    ```

2.  **Build `aws-sdk-js-v3`:**
    ```bash
    # Navigate to your local aws-sdk-js-v3 repository clone
    cd /path/to/your/aws-sdk-js-v3
    # Install dependencies (if not already done)
    yarn install
    # Build the packages 
    yarn build:all
    # Navigate to the signature-v4-multi-region package
    cd packages/signature-v4-multi-region
    # Create the tarball (.tgz file)
    npm pack
    # Note the full path to the generated .tgz file (e.g., /path/to/your/aws-sdk-js-v3/packages/signature-v4-multi-region/aws-sdk-signature-v4-multi-region-*.tgz)
    ```

## Node.js Example

### Setup

1.  Navigate to the node directory:
    ```console
    cd node
    ```

2.  Install base dependencies:
    ```console
    npm install
    ```

3.  Install the packed local dependencies (replace paths with the actual paths to your generated `.tgz` files):
    ```console
    npm install /path/to/your/smithy-typescript/packages/signature-v4a/smithy-signature-v4a-*.tgz /path/to/your/aws-sdk-js-v3/packages/signature-v4-multi-region/aws-sdk-signature-v4-multi-region-*.tgz
    ```
    *(This command adds the local packages to your `package.json` and `package-lock.json`)*

4.  Set environment variables/credentials:
    ```console
    export AWS_ACCESS_KEY_ID=your_access_key
    export AWS_SECRET_ACCESS_KEY=your_secret_key
    export AWS_SESSION_TOKEN=your_session_token  # If using temporary credentials
    export S3_MRAP_ARN=your_mrap_arn             # ARN of your Multi-Region Access Point
    ```

5.  Run the example:
    ```console
    node index.js
    ```

## Browser Example

### Setup

1.  Navigate to the browser directory:
    ```console
    cd browser
    ```

2.  Install base dependencies:
    ```console
    npm install
    ```

3.  Install the packed local dependencies (replace paths with the actual paths to your generated `.tgz` files):
    ```console
    npm install /path/to/your/smithy-typescript/packages/signature-v4a/smithy-signature-v4a-*.tgz /path/to/your/aws-sdk-js-v3/packages/signature-v4-multi-region/aws-sdk-signature-v4-multi-region-*.tgz
    ```
    *(This command adds the local packages to your `package.json` and `package-lock.json`)*

4.  Edit `src/config.js` to set your AWS credentials and S3 MRAP ARN.

5.  Build the application:
    ```console
    npm run build
    ```

6.  Start the development server:
    ```console
    npm run serve
    ```

Open your browser and navigate to `http://localhost:8080`

This example uses the JavaScript-based SigV4a implementation that works in browsers.

### Notes About Implementation

- Both Node.js and browser examples use the pure JavaScript implementation (`@smithy/signature-v4a`) installed from local builds.
- Both examples use S3 Multi-Region Access Point as the test case.
- The actual package code is **not** included in this repository; it must be built and installed locally using the steps above.

## Note
The `node_modules` directory and `package-lock.json` has siddsriv's locally packed packages as per the steps above, if that works for you.