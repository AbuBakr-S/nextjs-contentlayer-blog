/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,  // ! removes console logs from dev and build. Set to false in dev
    }
};

module.exports = withContentlayer({ ...nextConfig });