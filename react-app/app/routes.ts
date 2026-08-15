import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("main", "routes/main.tsx"),
    // route("memories", "routes/memories.tsx"),
    // route("wishes", "routes/wishes.tsx"),
    // route("gallery", "routes/gallery.tsx")
] satisfies RouteConfig;
