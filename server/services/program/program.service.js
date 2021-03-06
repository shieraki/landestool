// Initializes the `program` service on path `/program`
const createService = require('feathers-mongoose')
const createModel = require('../../models/program.model')
const hooks = require('./program.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'program',
    Model,
    paginate
  }
  // Initialize our service with any options it requires
  app.use('/program', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('program')

  service.hooks(hooks)
}
