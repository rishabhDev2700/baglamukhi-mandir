"use client"
import Image from 'next/image'
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel } from '@/components/application/carousel/carousel-base';
import { useEffect, useState } from 'react';

export type GalleryImageItem = {
  id: string;
  alt: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
};

export type GalleryImage = {
  image: GalleryImageItem;
};

export function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const galleryRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/api/globals/gallery?depth=2`);
        if (!galleryRes.ok) {
          throw new Error(`HTTP error! status: ${galleryRes.status}`);
        }
        const gallery = await galleryRes.json();

        const fetchedImages: GalleryImage[] = (gallery.images ?? [])
          .map((item: any) => {
            if (typeof item.image === 'string' || !item.image) {
              return null;
            }
            return {
              image: {
                id: item.image.id,
                alt: item.image.alt ?? '',
                url: item.image.url ?? '',
                filename: item.image.filename ?? '',
                mimeType: item.image.mimeType ?? '',
                filesize: item.image.filesize ?? 0,
                width: item.image.width ?? 0,
                height: item.image.height ?? 0,
                createdAt: item.image.createdAt ?? '',
                updatedAt: item.image.updatedAt ?? '',
              } as GalleryImageItem
            }
          }).filter((item: GalleryImage | null): item is GalleryImage => item !== null);
        setGalleryImages(fetchedImages);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Card className="p-8">
            <p>Loading gallery...</p>
          </Card>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Card className="p-8 text-red-500">
            <p>Error loading gallery: {error}</p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        {galleryImages.length > 0 ? (
          <Carousel.Root opts={{ loop: true }}>
            <Carousel.Content>
              {galleryImages.map((img, i) => (
                <Carousel.Item
                  key={img.image.id}
                  className="min-w-full h-[700px] relative flex items-center justify-center"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}${img.image.url}`}
                    loading="lazy"
                    alt={img.image.alt}
                    fill
                    quality={75}
                    className="object-contain rounded-lg"
                  />
                </Carousel.Item>
              ))}
            </Carousel.Content>

            <Carousel.PrevTrigger className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
              <ChevronLeft size={24} />
            </Carousel.PrevTrigger>

            <Carousel.NextTrigger className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
              <ChevronRight size={24} />
            </Carousel.NextTrigger>
          </Carousel.Root>
        ) : (
          <div className="text-center">
            <Card className="p-8">
              <p>No images to show in the gallery.</p>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

