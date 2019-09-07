exports.handler = async() => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Im a simple lambda function!' })
  };
};
