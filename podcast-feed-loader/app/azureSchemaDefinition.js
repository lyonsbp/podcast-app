let settings = require('./azureSettings').settings

exports.synonymSchema = {
  name: 'synonyms',
  format: 'solr',
  synonyms: [
    'pwa, progressive web apps',
    '.net, dotnet, dot net',
    'RxJs, Reactive',
    'DSL, Domain Specific Language'
  ].join('\n')
}

exports.schemaDefinition = {
  name: settings.index,
  fields: [
    { name: 'id', type: 'Edm.String', searchable: false, filterable: false, retrievable: true, sortable: false, facetable: false, key: true },
    { name: 'podcastTitle', type: 'Edm.String', searchable: false, filterable: false, retrievable: true, sortable: false, facetable: true, key: false },
    { name: 'episodeTitle', type: 'Edm.String', searchable: true, filterable: false, retrievable: true, sortable: false, facetable: false, key: false, synonymMaps: [ 'synonyms' ] },
    { name: 'description', type: 'Edm.String', searchable: true, filterable: false, retrievable: true, sortable: false, facetable: false, key: false, synonymMaps: [ 'synonyms' ] },
    { name: 'published', type: 'Edm.DateTimeOffset', searchable: false, filterable: true, retrievable: true, sortable: true, facetable: false, key: false },
    { name: 'audioUrl', type: 'Edm.String', searchable: false, filterable: false, retrievable: true, sortable: false, facetable: false, key: false },
    { name: 'episode', type: 'Edm.String', searchable: false, filterable: false, retrievable: true, sortable: false, facetable: false, key: false },
    { name: 'season', type: 'Edm.String', searchable: false, filterable: false, retrievable: true, sortable: false, facetable: false, key: false },
    { name: 'episodeType', type: 'Edm.String', searchable: false, filterable: false, retrievable: true, sortable: false, facetable: false, key: false }
  ],
  scoringProfiles: [],
  defaultScoringProfile: null,
  corsOptions: null
}
