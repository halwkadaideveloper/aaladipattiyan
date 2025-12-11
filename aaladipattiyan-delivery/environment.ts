import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import * as Updates from "expo-updates";
import { useContext } from "react";
import { ConfigurationContext } from "./lib/context/global/configuration.context";
const getEnvVars = (env = Updates.channel) => {
  const configuration = useContext(ConfigurationContext);
  if (__DEV__) {
    loadDevMessages();
    loadErrorMessages();
  }
  if (!__DEV__) {
    return {
      // GRAPHQL_URL: "https://enatega-multivendor.up.railway.app/graphql",
      // WS_GRAPHQL_URL: "wss://enatega-multivendor.up.railway.app/graphql",
      GRAPHQL_URL: "https://aaladipattiyan-api-production.up.railway.app/graphql",
      WS_GRAPHQL_URL: "wss://aaladipattiyan-api-production.up.railway.app/graphql",
      SENTRY_DSN:
        configuration?.riderAppSentryUrl ??
        "https://4724a5602f63054da8d14f83e62a0eee@o4510514913083392.ingest.us.sentry.io/4510514962038784",
      // GOOGLE_MAPS_KEY: 'AIzaSyBk4tvTtPaSEAVSvaao2yISz4m8Q-BeE1M',
      GOOGLE_MAPS_KEY:configuration?.googleApiKey,
      ENVIRONMENT: "production",
    };
  }

  return {
      GRAPHQL_URL: "https://aaladipattiyan-api-production.up.railway.app/graphql",
      WS_GRAPHQL_URL: "wss://aaladipattiyan-api-production.up.railway.app/graphql",
    SENTRY_DSN:
      configuration?.riderAppSentryUrl ??
      "https://4724a5602f63054da8d14f83e62a0eee@o4510514913083392.ingest.us.sentry.io/4510514962038784",
    // GOOGLE_MAPS_KEY: 'AIzaSyBk4tvTtPaSEAVSvaao2yISz4m8Q-BeE1M',
    GOOGLE_MAPS_KEY:configuration?.googleApiKey,
    ENVIRONMENT: "development",
  };
};

export default getEnvVars;
