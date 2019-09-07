exports.handler = event => {
  const events = event.Records.map(event => JSON.parse(event.body));

  console.log('Received events: ', events);
};
