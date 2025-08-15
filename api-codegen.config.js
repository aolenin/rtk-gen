const config = {
  schemaFile: 'openapi.yaml',        // твой YAML или JSON со схемой
  apiFile: './src/api/baseApi.ts',  // файл, где лежит пустой createApi без endpoints, тот api и поключаешь в редьюсеры
  outputFile: './src/api/generatedApi.ts', // куда писать сгенерённый код
  exportName: 'generatedApi',        // имя экспортируемого API
  hooks: true,                       // генерировать хуки (useXxxQuery)
};

module.exports = config;

