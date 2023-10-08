/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

import('@cloudflare/next-on-pages/dev-bindings').then(({setupDevBindings}) => {
    setupDevBindings({
        r2Buckets: ['MY_R2'],
    });
} )
