import {NextConfig} from "next";

/** @type {import('next').NextConfig} */
const nextConfig:NextConfig= {
    // async rewrites() {
    //     return [
    //         {
    //             source: '/send-email',
    //             destination: 'http://localhost:8080/send-email',
    //         },
    //     ];
    // },
    typescript:{
        ignoreBuildErrors:true
    }
};

export default nextConfig;
