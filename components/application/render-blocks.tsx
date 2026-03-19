import React from 'react';
import { serializeLexicalToHtml } from '@/lib/richtext';
import Image from 'next/image';
import Link from 'next/link';
import { Card as UICard, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface BlockProps {
  blockType: string;
  [key: string]: any;
}

export const RenderBlocks: React.FC<{ blocks?: BlockProps[] | null }> = ({ blocks }) => {
  if (!blocks) return null;

  return (
    <div className="flex flex-col gap-12">
      {blocks.map((block, index) => {
        const { blockType } = block;

        switch (blockType) {
          case 'richText':
            return (
              <div 
                key={index}
                className="prose prose-lg max-w-none text-gray-700
                           prose-headings:text-red-500 prose-headings:font-main
                           prose-strong:text-gray-900 prose-a:text-red-400 hover:prose-a:text-red-500"
                dangerouslySetInnerHTML={{ __html: serializeLexicalToHtml(block.content) }}
              />
            );

          case 'card':
            return (
              <UICard key={index} className="overflow-hidden border-red-100 transition-all hover:shadow-lg">
                {block.image && (
                  <div className="relative h-64 w-full">
                    <Image 
                      src={block.image.url} 
                      alt={block.image.alt || block.title} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-main text-red-600">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {block.description && (
                    <p className="text-gray-600 mb-4">{block.description}</p>
                  )}
                  {block.link && (
                    <Link 
                      href={block.link} 
                      className="text-red-500 font-bold hover:underline inline-flex items-center"
                    >
                      Learn More →
                    </Link>
                  )}
                </CardContent>
              </UICard>
            );

          case 'columns':
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {block.columns?.map((col: any, colIdx: number) => (
                  <div 
                    key={colIdx}
                    className="prose prose-sm max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: serializeLexicalToHtml(col.content) }}
                  />
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
