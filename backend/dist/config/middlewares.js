"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:'],
                    'img-src': [
                        "'self'",
                        'data:',
                        'blob:',
                        'res.cloudinary.com',
                        'upload.wikimedia.org',
                        's3.amazonaws.com',
                        'strapi.io',
                        'cote.azureedge.net',
                        '*.core.windows.net',
                        'dl.airtable.com',
                    ],
                    'media-src': [
                        "'self'",
                        'data:',
                        'blob:',
                        'res.cloudinary.com',
                        'upload.wikimedia.org',
                        's3.amazonaws.com',
                        'strapi.io',
                        'cote.azureedge.net',
                        '*.core.windows.net',
                        'dl.airtable.com',
                    ],
                    'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net', 'editor.unlayer.com'],
                    'frame-src': ["'self'", 'editor.unlayer.com'],
                    'script-src-attr': [
                        "'self'",
                        "'unsafe-inline'",
                        'cdn.jsdelivr.net',
                        'editor.unilayer.com',
                    ],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    {
        name: 'strapi::favicon',
        config: {
            path: 'https://cote.azureedge.net/cote-strapi-uploads/undefined/assets/favicon_4cc365caaa.png?updated_at=2022-05-16T16:08:59.005Z',
        },
    },
    'strapi::public',
];
