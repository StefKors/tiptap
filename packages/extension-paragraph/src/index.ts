import { Command, createNode } from '@tiptap/core'
// import ParagraphComponent from './paragraph.vue'

const Paragraph = createNode({
  name: 'paragraph',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      { tag: 'p' },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['p', HTMLAttributes, 0]
  },

  addCommands() {
    return {
      paragraph: (): Command => ({ commands }) => {
        return commands.toggleBlockType('paragraph', 'paragraph')
      },
    }
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Alt-0': () => this.editor.commands.paragraph(),
    }
  },
})

export default Paragraph

declare module '@tiptap/core' {
  interface AllExtensions {
    Paragraph: typeof Paragraph,
  }
}
