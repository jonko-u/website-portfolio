import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemas/schema'
export default defineConfig({
  name: 'default',
  title: 'portfolio-jk-2-build',

  projectId: 'dswht0qm',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {types: schemaTypes,},
})
