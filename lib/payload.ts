import configPromise from '@payload-config';
import { getPayload } from 'payload';
import type { Payload } from 'payload';

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Args {
  initOptions?: Partial<Parameters<typeof getPayload>[0]>;
}

export const getPayloadClient = async (
  args: Args = {}
): Promise<Payload> => {
  const { initOptions } = args;

  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = getPayload({
      config: configPromise,
      ...(initOptions || {}),
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (e: unknown) {
    cached.promise = null;
    throw e;
  }

  return cached.client;
};
