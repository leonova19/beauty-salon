import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Glowstudio',

  projectId: 'aot591jy',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
import blockContent from './schemaTypes/blockContent'
import service from './schemaTypes/service'

export const schema = {
  types: [service, blockContent],
}