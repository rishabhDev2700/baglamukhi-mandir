import { getPayloadClient } from '@/lib/payload';
import { notFound } from 'next/navigation';
import { RenderBlocks } from '@/components/application/render-blocks';
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

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <article className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-red-600 font-main text-center">
          {page.title}
        </h1>
        <RenderBlocks blocks={page.layout as any} />
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
