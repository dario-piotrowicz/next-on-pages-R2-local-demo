/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const { setupDevBindings } = require('@cloudflare/next-on-pages/dev-bindings');

setupDevBindings({
    r2Buckets: ['MY_R2'],
});
