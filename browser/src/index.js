import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
// Import JavaScript SigV4a implementation for browsers
import '@smithy/signature-v4a';
import { config } from './config';

async function testS3MRAP() {
  try {
    // Create S3 client with multi-region configuration
    const client = new S3Client({
      region: '*',  // Multi-region request
      credentials: config.credentials,
    });

    // Use with a Multi-Region Access Point
    const command = new ListObjectsV2Command({
      Bucket: config.mrapArn,
    });

    const outputEl = document.getElementById('output');
    outputEl.innerHTML = 'Sending request to S3 MRAP using JS SigV4a implementation...';
    
    const response = await client.send(command);
    outputEl.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
    
    return response;
  } catch (error) {
    const outputEl = document.getElementById('output');
    outputEl.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    console.error('Error:', error);
    throw error;
  }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', () => {
  testS3MRAP();
});