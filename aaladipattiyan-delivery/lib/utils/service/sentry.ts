import * as Sentry from "@sentry/react-native";

// Sentry Handler
export const initSentry = () => {
  console.log("Initializing Sentry");
  // if (!SENTRY_DSN) return;
  Sentry.init({
    dsn: "https://4724a5602f63054da8d14f83e62a0eee@o4510514913083392.ingest.us.sentry.io/4510514962038784",
    environment: "development",
    debug: false,
    // enableTracing: false, // Disables tracing completely
    tracesSampleRate: 0.3, // Prevents sampling any traces
  });
};
