import { Redis, RedisOptions } from "npm:ioredis";
import {useState, createContext} from "./hooks.cjs"

const RedisOpt = {
  host: "localhost", // Your Dragonfly host.
  port: 6379, // Your Dragonfly port number.
  maxRetriesPerRequest: null,
  showFriendlyErrorStack: true,
  enableReadyCheck: false,
};

const [connection] = useState(
  new Redis({
    ...RedisOpt,
    enableReadyCheck: false,
    maxRetriesPerRequest: null,
  })
);

const [connectionState, setConnectionState] = useState("closed");
const [connectionReady, setConnectionReady] = useState(false);
// console.log(connectionReady)

const RedisContext = createContext({
  redisClient: connection.value,
  connectionState,
  connectionReady,
});

connection.value.on("connect", () => {
  setConnectionState("connect");
});

connection.value.on("connecting", () => {
  setConnectionState("connecting");
});

connection.value.on("error", (err) => {
  setConnectionState("error");
  console.log({ err });
});

connection.value.on("ready", () => {
  setConnectionState("ready");
  setConnectionReady(true);
});

connection.value.on("message", () => {});

const createClient = (
  type: "client" | "subscriber" | "bclient" | "myClient",
  redisOpts?: RedisOptions
): Redis => {
  if (["bclient", "subscriber"].includes(type)) {
    return new Redis({
      ...(redisOpts || RedisOpt),
      enableReadyCheck: false,
      maxRetriesPerRequest: null,
    });
  }
  return connection.value;
};

export { RedisContext, createClient };

export default createClient;
