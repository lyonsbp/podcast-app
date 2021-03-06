const CONSTANTS = require('./helpers/app.constants')

exports.settings = {
  searchProvider: CONSTANTS.SEARCH_PROVIDER,
  index: CONSTANTS.AZURE_SEARCH_INDEX_NAME,
  searchEndpoint: CONSTANTS.AZURE_SEARCH_ENDPOINT,
  apiKey: CONSTANTS.AZURE_SEARCH_ADMIN_API_KEY,
  version: CONSTANTS.AZURE_SEARCH_API_VERSION
}
