import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login", "routes/login.tsx"),

    layout("routes/protected-layout.tsx", [
        route("main", "routes/main.tsx"),
        // route("memories", "routes/memories.tsx"),
        // route("wishes", "routes/wishes.tsx"),
        // route("gallery", "routes/gallery.tsx"),
    ])
    // route("memories", "routes/memories.tsx"),
    // route("wishes", "routes/wishes.tsx"),
    // route("gallery", "routes/gallery.tsx")
] satisfies RouteConfig;
