import { EditorState, LexicalEditor } from 'lexical';

interface RichTextNode {
  type: string;
  format?: number;
  text?: string;
  children?: RichTextNode[];
  tag?: string;
  // Add other properties that might be in your Lexical nodes, e.g., link, listType, etc.
}

function convertNodeToHtml(node: RichTextNode): string {
  if (node.type === 'text' && node.text) {
    let text = node.text;
    if (node.format && (node.format & 1)) text = `<strong>${text}</strong>`; // BOLD
    if (node.format && (node.format & 2)) text = `<em>${text}</em>`;       // ITALIC
    // Add more formats as needed (underline, strikethrough, code, etc.)
    return text;
  }
  if (node.type === 'paragraph' && node.children) {
    const childrenHtml = node.children.map(convertNodeToHtml).join('');
    return `<p>${childrenHtml}</p>`;
  }
  if (node.type === 'heading' && node.tag && node.children) {
    const childrenHtml = node.children.map(convertNodeToHtml).join('');
    return `<${node.tag}>${childrenHtml}</${node.tag}>`;
  }
  if (node.type === 'list' && node.tag && node.children) {
    const childrenHtml = node.children.map(convertNodeToHtml).join('');
    return `<${node.tag}>${childrenHtml}</${node.tag}>`;
  }
  if (node.type === 'listitem' && node.children) {
    const childrenHtml = node.children.map(convertNodeToHtml).join('');
    return `<li>${childrenHtml}</li>`;
  }
  // This is a basic serializer. For a full-featured one, you would need to handle
  // all Lexical node types (link, image, etc.)
  return '';
}

export function serializeLexicalToHtml(editorState: any): string {
  if (!editorState || !editorState.root || !editorState.root.children) {
    return '';
  }

  return editorState.root.children.map(convertNodeToHtml).join('');
}
