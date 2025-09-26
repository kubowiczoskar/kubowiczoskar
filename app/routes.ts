import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("projects/tradeapp", "routes/projects/tradeapp/index.jsx"),
    route("projects/secondproj", "routes/projects/secondproj/index.jsx"),
] satisfies RouteConfig;

    
