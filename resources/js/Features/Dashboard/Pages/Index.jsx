<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Billix | Overview</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container": "#e5eeff",
                        "primary": "#4648d4",
                        "primary-container": "#6063ee",
                        "tertiary": "#006b2d",
                        "on-secondary-fixed": "#001a42",
                        "on-secondary-fixed-variant": "#004395",
                        "surface-tint": "#494bd6",
                        "on-primary-container": "#fffbff",
                        "on-tertiary-container": "#f7fff3",
                        "surface-container-high": "#dce9ff",
                        "tertiary-container": "#00873b",
                        "primary-fixed-dim": "#c0c1ff",
                        "on-background": "#0b1c30",
                        "outline-variant": "#c7c4d7",
                        "surface-variant": "#d3e4fe",
                        "inverse-surface": "#213145",
                        "secondary": "#0058be",
                        "surface": "#f8f9ff",
                        "surface-dim": "#cbdbf5",
                        "surface-bright": "#f8f9ff",
                        "on-primary-fixed-variant": "#2f2ebe",
                        "on-tertiary": "#ffffff",
                        "error": "#ba1a1a",
                        "secondary-fixed-dim": "#adc6ff",
                        "on-error": "#ffffff",
                        "on-tertiary-fixed": "#002109",
                        "surface-container-low": "#eff4ff",
                        "secondary-fixed": "#d8e2ff",
                        "on-primary-fixed": "#07006c",
                        "on-error-container": "#93000a",
                        "on-tertiary-fixed-variant": "#005321",
                        "primary-fixed": "#e1e0ff",
                        "tertiary-fixed-dim": "#4ae176",
                        "secondary-container": "#2170e4",
                        "inverse-primary": "#c0c1ff",
                        "error-container": "#ffdad6",
                        "surface-container-highest": "#d3e4fe",
                        "on-surface": "#0b1c30",
                        "on-secondary": "#ffffff",
                        "outline": "#767586",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary-container": "#fefcff",
                        "background": "#f8f9ff",
                        "tertiary-fixed": "#6bff8f",
                        "on-primary": "#ffffff",
                        "inverse-on-surface": "#eaf1ff",
                        "on-surface-variant": "#464554"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "section-gap": "2rem",
                        "container-padding": "1.5rem",
                        "card-padding": "1.25rem",
                        "sidebar-width": "260px",
                        "gutter": "1.5rem"
                    },
                    "fontFamily": {
                        "body-sm": ["Inter"],
                        "label-caps": ["Inter"],
                        "display": ["Inter"],
                        "body-lg": ["Inter"],
                        "label-muted": ["Inter"],
                        "headline-md": ["Inter"]
                    },
                    "fontSize": {
                        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "display": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "label-muted": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                        "headline-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}]
                    }
                },
            },
        }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-surface">
<div class="flex h-screen overflow-hidden">
{/* <!-- SideNavBar --> */}
<aside class="w-sidebar-width h-screen border-r border-outline-variant flex flex-col py-6 px-4 gap-4 bg-surface dark:bg-on-background shrink-0">
<div class="flex items-center gap-2 mb-2">
<span class="font-display text-display text-on-surface dark:text-inverse-on-surface tracking-tighter">BILLIX</span>
</div>
{/* <!-- Organization Selector --> */}
<div class="flex items-center justify-between p-3 bg-surface-container-lowest border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-[20px]">domain</span>
</div>
<div class="flex flex-col">
<span class="font-label-muted text-on-surface font-semibold">Test Org</span>
<span class="text-[10px] text-on-surface-variant">Workspace</span>
</div>
</div>
<span class="material-symbols-outlined text-on-surface-variant">expand_more</span>
</div>
<nav class="flex-1 space-y-1 mt-2 overflow-y-auto">
{/* <!-- Dashboard (Active) --> */}
<a class="flex items-center gap-3 py-2 px-3 bg-secondary-container/10 text-primary border border-primary-container rounded-lg transition-colors scale-95 duration-75" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-muted">Dashboard</span>
</a>
<a class="flex items-center gap-3 py-2 px-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#">
<span class="material-symbols-outlined">group</span>
<span class="font-label-muted">Users</span>
</a>
<div class="pt-4 pb-2 px-3">
<span class="font-label-caps text-on-surface-variant/60 text-[10px] uppercase tracking-wider">Invoicing</span>
</div>
<a class="flex items-center gap-3 py-2 px-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#">
<span class="material-symbols-outlined">request_quote</span>
<span class="font-label-muted">Quotes</span>
</a>
<a class="flex items-center gap-3 py-2 px-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#">
<span class="material-symbols-outlined">receipt</span>
<span class="font-label-muted">Invoices</span>
</a>
<a class="flex items-center gap-3 py-2 px-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#">
<span class="material-symbols-outlined">local_shipping</span>
<span class="font-label-muted">Delivery Notes</span>
</a>
<a class="flex items-center gap-3 py-2 px-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#">
<span class="material-symbols-outlined">article</span>
<span class="font-label-muted">Articles</span>
</a>
<div class="pt-4 pb-2 px-3">
<span class="font-label-caps text-on-surface-variant/60 text-[10px] uppercase tracking-wider">Clients</span>
</div>
<a class="flex items-center gap-3 py-2 px-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#">
<span class="material-symbols-outlined">person</span>
<span class="font-label-muted">Individuals</span>
</a>
<a class="flex items-center gap-3 py-2 px-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#">
<span class="material-symbols-outlined">domain</span>
<span class="font-label-muted">Companies</span>
</a>
<div class="pt-4 pb-2 px-3">
<span class="font-label-caps text-on-surface-variant/60 text-[10px] uppercase tracking-wider">System</span>
</div>
<a class="flex items-center gap-3 py-2 px-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#">
<span class="material-symbols-outlined">notifications</span>
<span class="font-label-muted">Reminders</span>
</a>
<a class="flex items-center gap-3 py-2 px-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#">
<span class="material-symbols-outlined">payments</span>
<span class="font-label-muted">Checks</span>
</a>
</nav>
</aside>
{/* <!-- Main Content Wrapper --> */}
<main class="flex-1 flex flex-col h-screen overflow-hidden">
{/* <!-- TopAppBar --> */}
<header class="h-16 w-full border-b border-outline-variant flex items-center justify-between px-gutter sticky top-0 z-40 bg-surface/80 backdrop-blur-md">
<div class="flex items-center gap-4 flex-1">
<h1 class="font-headline-md text-headline-md text-on-surface">Overview</h1>
<div class="relative max-w-md w-full ml-8 focus-within:ring-2 focus-within:ring-primary rounded-lg">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input class="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-4 py-2 text-body-sm focus:outline-none" placeholder="Search pages..." type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<button class="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-lg text-label-muted hover:bg-surface-container-low">
<span class="material-symbols-outlined text-[18px]">language</span>
<span>EN</span>
<span class="material-symbols-outlined text-[16px]">expand_more</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low text-on-surface-variant">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border border-outline-variant">
<img alt="User Profile" class="w-full h-full object-cover" data-alt="A clean, professional portrait of a business professional used as a user profile avatar in a high-end fintech application dashboard. The lighting is soft and centered, creating a trustworthy and accessible corporate aesthetic. The background is a minimalist, slightly blurred office setting with cool grey and indigo tones to match the modern brand identity. The overall style is sharp, bright, and highly professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWFfCFGHovwxgnT58JdjSXqlnmE91D6ytQLw0P0SFn-KV7Mdoi6xuk5X_liceYpVxOjW4vGPcThtyqr0iGT45136MKspviN5d33L_ZIe1qGOMeDJ9sk3j0lZlovjx0-ZLW-NCUNs-_C4NWh6NZOzdEPX9V7NZGUvhtIPy6onWWvBKZM6BjY-VOewH3ySteZPEItksSzJfIfSghpeVGFS_p1LmgjMCUptWHQKTyXV93GZ6jA37e_Ki_yKyQeLk_Lf56TFspLvEOfQg"/>
</button>
</div>
</header>
{/* <!-- Dashboard Content --> */}
<div class="flex-1 overflow-y-auto p-gutter bg-surface">
{/* <!-- Metric Cards Grid --> */}
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<!-- Total Revenue Card -->
<div class="bg-surface-container-lowest p-card-padding border border-outline-variant rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
<div class="flex justify-between items-start mb-4">
<span class="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider">Total Revenue</span>
<span class="flex items-center gap-1 text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full text-[10px] font-bold">
<span class="material-symbols-outlined text-[14px]">trending_up</span> +0.0%
                            </span>
</div>
<div class="mb-4">
<span class="font-display text-[28px] font-bold text-on-surface">0 MAD</span>
</div>
<div class="flex items-center gap-3 pt-4 border-t border-outline-variant/30">
<div class="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary text-[20px]">payments</span>
</div>
<span class="text-label-muted text-on-surface-variant">Lifetime paid earnings</span>
</div>
</div>
<!-- Pending Card -->
<div class="bg-surface-container-lowest p-card-padding border border-outline-variant rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
<div class="flex justify-between items-start mb-4">
<span class="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider">Pending</span>
</div>
<div class="mb-4">
<span class="font-display text-[28px] font-bold text-on-surface">0 MAD</span>
</div>
<div class="flex items-center gap-3 pt-4 border-t border-outline-variant/30">
<div class="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary text-[20px]">schedule</span>
</div>
<span class="text-label-muted text-on-surface-variant">Sent but not yet paid</span>
</div>
</div>
<!-- Clients Card -->
<div class="bg-surface-container-lowest p-card-padding border border-outline-variant rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
<div class="flex justify-between items-start mb-4">
<span class="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider">Clients</span>
<span class="flex items-center gap-1 text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full text-[10px] font-bold">
<span class="material-symbols-outlined text-[14px]">trending_up</span> +0.0%
                            </span>
</div>
<div class="mb-4">
<span class="font-display text-[28px] font-bold text-on-surface">0</span>
</div>
<div class="flex items-center gap-3 pt-4 border-t border-outline-variant/30">
<div class="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
<span class="material-symbols-outlined text-orange-500 text-[20px]">group</span>
</div>
<span class="text-label-muted text-on-surface-variant">0 Individuals, 0 Companies</span>
</div>
</div>
<!-- Delivery Notes Card -->
<div class="bg-surface-container-lowest p-card-padding border border-outline-variant rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
<div class="flex justify-between items-start mb-4">
<span class="font-label-caps text-on-surface-variant text-[11px] uppercase tracking-wider">Delivery Notes</span>
</div>
<div class="mb-4">
<span class="font-display text-[28px] font-bold text-on-surface">0</span>
</div>
<div class="flex items-center gap-3 pt-4 border-t border-outline-variant/30">
<div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
</div>
<span class="text-label-muted text-on-surface-variant">Total delivery notes created</span>
</div>
</div>
</div>
<!-- Secondary Row -->
<div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
<!-- Left Column: Invoices Overview (75%) -->
<div class="lg:col-span-3 bg-surface-container-lowest p-card-padding border border-outline-variant rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] min-h-[400px]">
<div class="flex justify-between items-center mb-6">
<div>
<h3 class="font-headline-md text-on-surface">Invoices Overview</h3>
<p class="font-label-caps text-on-surface-variant/70 text-[10px] uppercase">Showing total invoices for the last 30 days</p>
</div>
<button class="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-lg text-label-muted hover:bg-surface-container-low">
<span>30 DAYS</span>
<span class="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
<!-- Empty State Illustration -->
<div class="flex flex-col items-center justify-center h-[300px] border-2 border-dashed border-outline-variant/50 rounded-xl bg-surface-container-low/30">
<div class="relative mb-4">
<div class="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-outline text-[48px]">bar_chart_4_bars</span>
</div>
<div class="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary-container flex items-center justify-center border-4 border-surface-container-lowest">
<span class="material-symbols-outlined text-white text-[20px]">add</span>
</div>
</div>
<p class="font-body-lg text-on-surface-variant">No data available for the selected period</p>
<button class="mt-4 px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-container transition-colors">Create your first invoice</button>
</div>
</div>
<!-- Right Column: Invoice Status (25%) -->
<div class="lg:col-span-1 bg-surface-container-lowest p-card-padding border border-outline-variant rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col">
<div class="mb-8">
<h3 class="font-headline-md text-on-surface">Invoice Status</h3>
<p class="font-label-caps text-on-surface-variant/70 text-[10px] uppercase">Global Distribution</p>
</div>
<div class="flex-1 flex flex-col items-center justify-center">
<div class="relative w-48 h-48 mb-8 flex items-center justify-center">
<!-- Progress Circle Placeholder -->
<svg class="w-full h-full transform -rotate-90">
<circle class="text-surface-container-high" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-width="8"></circle>
<circle class="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-dasharray="552.92" stroke-dashoffset="552.92" stroke-width="8"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-label-caps text-on-surface-variant/60 uppercase">Total</span>
<span class="text-[32px] font-bold text-on-surface">0</span>
</div>
</div>
<div class="w-full space-y-3">
<div class="flex items-center justify-between text-body-sm">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-primary"></div>
<span class="text-on-surface-variant">Paid</span>
</div>
<span class="font-semibold">0%</span>
</div>
<div class="flex items-center justify-between text-body-sm">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-surface-container-high"></div>
<span class="text-on-surface-variant">Unpaid</span>
</div>
<span class="font-semibold">0%</span>
</div>
<div class="flex items-center justify-between text-body-sm">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-error-container"></div>
<span class="text-on-surface-variant">Overdue</span>
</div>
<span class="font-semibold">0%</span>
</div>
</div>
</div>
<!-- Windows Activation Mock -->
<div class="mt-8 pt-8 border-t border-outline-variant/30 opacity-40">
<p class="text-[12px] font-semibold text-on-surface-variant">Activer Windows</p>
<p class="text-[10px] text-on-surface-variant">Accédez aux paramètres pour activer Windows.</p>
</div>
</div>
</div>
</div>
</main>
</div>
</body></html>