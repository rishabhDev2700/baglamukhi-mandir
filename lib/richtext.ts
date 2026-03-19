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
  if (node.type === 'link' && node.children) {
    const childrenHtml = node.children.map(convertNodeToHtml).join('');
    return `<a href="${(node as any).fields?.url || ''}" target="${(node as any).fields?.newTab ? '_blank' : '_self'}" class="text-red-500 hover:underline">${childrenHtml}</a>`;
  }
  if (node.type === 'upload' && (node as any).value) {
    const media = (node as any).value;
    const url = typeof media === 'object' ? media.url : '';
    const alt = typeof media === 'object' ? media.alt : '';
    if (url) {
      return `<img src="${url}" alt="${alt}" class="my-8 rounded-lg shadow-md w-full h-auto" />`;
    }
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
