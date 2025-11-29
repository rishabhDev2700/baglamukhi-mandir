import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'
const nextConfig: NextConfig = {
  images:{unoptimized:true},
  reactCompiler:false
  /* config options here */
};

export default withPayload(nextConfig);
