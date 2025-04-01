// Import AWS SDK components
const { S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');
// Import JavaScript SigV4a implementation
require('@smithy/signature-v4a');

async function testS3MRAP() {
  try {
    // Create S3 client with multi-region configuration
    const client = new S3Client({
      region: '*',  // Multi-region request
    });

    // Use with a Multi-Region Access Point
    const command = new ListObjectsV2Command({
      Bucket: "arn here",  // ARN of your MRAP
    });

    console.log('Sending request to S3 MRAP using JS SigV4a implementation...');
    const response = await client.send(command);
    console.log('Response:', JSON.stringify(response, null, 2));
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

testS3MRAP();