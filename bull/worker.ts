import { parseArgs } from "jsr:@std/cli/parse-args";
import process from "node:process";
import { RedisContext } from "./utils/createClient.ts";
import Queue from "./Queues/index.ts";

import {useEffect,useContext} from "./utils/hooks.cjs"

const {connectionReady} = useContext(RedisContext);

useEffect(() => {
    if(!connectionReady.value) {
        return
    }
    const args = parseArgs(Deno.args)

    const returnObj = Queue.createQueue(
        args["queueName"],
      {
        concurrency:args["concurrency"] || 4,
        processFileName: args["processFileName"],
        onActive: function (jobMeta, jobPromise, jobId) {
          // console.log({ jobMeta, jobId });
          // throw new Error(this.meta.id);
        },
        onComplete: function (jobMeta, result, jobId) {
          // console.log({ jobMeta, jobId, result });
        },
        onStalled: function (jobMeta, jobId) {
          // console.log({ jobMeta, jobId });
        },
        onWaiting: function (jobId) {
          // console.log({ jobId });
        },
        onProgress: function (progess, jobMeta, jobId) {
          // console.log({ progess, jobMeta, jobId });
        },
        onFailed: function (jobMeta, err, jobId) {
          // console.log({ err, jobMeta, jobId });
        },
        onWait: function (jobId) {
          // console.log({ err, jobMeta, jobId });
        },
        onError: function (error) {
          try {
            console.error("Job Error", error);
          } catch (err) {
            throw err as Error;
          }
        },
      },
      args["prefix"]||"bull",
    );
    console.log("Connection established");
    console.log("Bull Queue started PID:",process.pid,"Queue name:",`${args["prefix"]||"bull"}:${args["queueName"]},`,"Job process file:",args["processFileName"]);
    console.log("Press ctrl+c to exit");
}, [connectionReady]);

// useEffect(()=>{
//     if(!connectionReady.value) {
//         return
//     }
//     console.log({
//       queueData: Object.keys(queueData.value).reduce((acc:Record<string,unknown>, key) => {
//         acc[key] = {...queueData.value[key],job:"is hidden"}
//         return acc;
//       }, {}),
//     });
// },[queueData,connectionReady])


