import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Pretty Pauline',

  projectId: '9usdxwfh',
  dataset: 'nails',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
