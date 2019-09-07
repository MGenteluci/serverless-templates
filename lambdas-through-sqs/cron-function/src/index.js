const AWS = require('aws-sdk');
const SQS = new AWS.SQS({ apiVersion: '2012-11-05' });

const { SQS_QUEUE_NAME } = process.env;

exports.handler = async() => {
  const message = { currentDate: new Date() };

  await SQS.sendMessage({
    QueueUrl: SQS_QUEUE_NAME,
    MessageBody: JSON.stringify(message)
  }).promise();
};
