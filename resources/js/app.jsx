import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./${name}.jsx`,
            import.meta.glob('./**/*.jsx'),
        ),

    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});