const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Sample Calendev App',
      version: '1.0.0',
      description: 'This is sample server for testing Calendev App',
    },
    //testing in local
    host: `localhost:${process.env.PORT}`,
    basePath: '/',
  },
  apis: ['./api/routes/*.js', './swagger/*'],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
