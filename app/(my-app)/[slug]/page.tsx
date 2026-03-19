import { getPayloadClient } from '@/lib/payload';
import { notFound } from 'next/navigation';
import { serializeLexicalToHtml } from '@/lib/richtext';
import { Page as PayloadPage } from '@/payload-types';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!docs || docs.length === 0) {
    notFound();
  }

  const page = docs[0] as PayloadPage;
  const contentHtml = serializeLexicalToHtml(page.content);

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-red-600 font-main">
          {page.title}
        </h1>
        <div 
          className="prose prose-lg max-w-none text-gray-700
                     prose-headings:text-red-500 prose-headings:font-main
                     prose-strong:text-gray-900 prose-a:text-red-400 hover:prose-a:text-red-500"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: 'pages',
    limit: 1000,
  });

  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}
