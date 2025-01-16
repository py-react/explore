import Queue, { DoneCallback, Job } from "npm:bull";
import serialize from "npm:serialize-javascript";
import createClient from "../utils/createClient.ts";
import { IJobData, IJobhandler } from "./type.ts";
// import { requireCJS } from "../utils/require.ts";
import { QueuesContext } from "./queueContext.ts";
import path from "node:path";
import {useContext} from "../utils/hooks.cjs"


const __filename = new URL("", import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL(".", import.meta.url).pathname;

const { setQueueData } = useContext(QueuesContext);

function deserialize(serializedJavascript: string) {
  return eval("(" + serializedJavascript + ")");
}

// export default TestQueueInstance;
export default {
  createQueue: (
    queueName: string,
    jobHandler: IJobhandler,
    queuePrefix?: string
  ) => {
    queuePrefix = typeof queuePrefix !== "undefined" ? queuePrefix : "bull";
    const queue = new Queue(queueName, {
      prefix: queuePrefix,
      createClient,
    });

    if (!jobHandler.processFileName) {
      console.warn(
        "No process file was given. Use 'queue.process' to add a process a manually"
      );
    } else {
      queue.process(
        "add_repeat_job",
        jobHandler.concurrency || 1,
        async (job, done) => {
          const repeatOpts = job.data.repeat[0]
          console.log("repeatOpts",repeatOpts,typeof repeatOpts,job.data.obj,"-------<<<<<<<<")
          const new_job = await queue.add("__default__", {"obj":job.data.obj}, {
            "jobId":job.toJSON().id,
            "repeat": repeatOpts,
          });
          done(null, { 
              data:job.data.obj.data,
              meta:job.data.obj.meta,
              repeatOtps:repeatOpts,
              repeat_id: new_job.id
            }
          );
        }
      );

      queue.process(
        "__default__",
        jobHandler.concurrency || 1,
        path.join(__dirname, "processList", jobHandler.processFileName)
      );
    }

    if (jobHandler.onError) {
      queue.on("error", jobHandler.onError);
    }
    
    queue.on("active", (job, jobPromise) => {
      try {
        const jobData =
          typeof job.data.obj === "string"
            ? deserialize(job.data.obj)
            : (job.data.obj as IJobData);
        if (jobHandler.onActive) {
          jobHandler.onActive(
            jobData.meta,
            jobPromise || {
              cancel: () => job.moveToFailed({ message: "user action" }),
            },
            String(job.id)
          );
        }
        setQueueData((prev:any) => {
          return {
            ...prev,
            [`${queuePrefix}:${queueName}:${job.id}`]: {
              ...prev[`${queuePrefix}:${queueName}:${job.id}`],
              status: "isActive",
            },
          };
        });
      } catch (error) {
        if (jobPromise && "cancel" in jobPromise) {
          jobPromise.cancel();
        }
        throw error as Error;
      }
    });

    queue.on("completed", (job, result) => {
      try {
        const jobData =
          typeof job.data.obj === "string"
            ? deserialize(job.data.obj)
            : (job.data.obj as IJobData);
        if (jobHandler.onComplete) {
          jobHandler.onComplete(jobData.meta, result, String(job.id));
        }
        setQueueData((prev:any) => {
          return {
            ...prev,
            [`${queuePrefix}:${queueName}:${job.id}`]: {
              ...prev[`${queuePrefix}:${queueName}:${job.id}`],
              status: "inComplete",
              result,
              job: job.toJSON(),
            },
          };
        });
      } catch (error) {
        throw error as Error;
      }
    });

    queue.on("stalled", (job) => {
      try {
        const jobData =
          typeof job.data.obj === "string"
            ? deserialize(job.data.obj)
            : (job.data.obj as IJobData);
        if (jobHandler.onStalled) {
          jobHandler.onStalled(jobData.meta, String(job.id));
        }
        setQueueData((prev:any) => {
          return {
            ...prev,
            [`${queuePrefix}:${queueName}:${job.id}`]: {
              ...prev[`${queuePrefix}:${queueName}:${job.id}`],
              status: "inStalled",
            },
          };
        });
      } catch (error) {
        throw error as Error;
      }
    });

    queue.on("lock-extension-failed", (job, err) => {
      console.log({ job, err });
    });

    queue.on("failed", (job, err) => {
      try {
        const jobData =
          typeof job.data.obj === "string"
            ? deserialize(job.data.obj)
            : (job.data.obj as IJobData);
        if (jobHandler.onFailed) {
          jobHandler.onFailed(jobData.meta, err, String(job.id));
        }
        setQueueData((prev:any) => {
          return {
            ...prev,
            [`${queuePrefix}:${queueName}:${job.id}`]: {
              ...prev[`${queuePrefix}:${queueName}:${job.id}`],
              status: "inFailed",
              error: JSON.stringify(err),
            },
          };
        });
      } catch (error) {
        throw error as Error;
      }
    });

    queue.on("progress", (job, progress) => {
      try {
        const jobData =
          typeof job.data.obj === "string"
            ? deserialize(job.data.obj)
            : (job.data.obj as IJobData);
        if (jobHandler.onProgress) {
          jobHandler.onProgress(jobData.meta, progress, String(job.id));
        }
        setQueueData((prev:any) => {
          return {
            ...prev,
            [`${queuePrefix}:${queueName}:${job.id}`]: {
              ...prev[`${queuePrefix}:${queueName}:${job.id}`],
              progress,
            },
          };
        });
      } catch (error) {
        throw error as Error;
      }
    });

    queue.on("waiting", (jobId) => {
      try {
        if (jobHandler.onWait) {
          jobHandler.onWait(jobId as string);
        }
        setQueueData((prev: any) => {
          return {
            ...prev,
            [`${queuePrefix}:${queueName}:${jobId}`]: {
              ...prev[`${queuePrefix}:${queueName}:${jobId}`],
              status: "inWaiting",
            },
          };
        });
      } catch (err) {
        throw err as Error;
      }
    });

    // // ...whereas global events only pass the job ID:
    queue.on("global:progress", (jobId, progress) => {
      if (jobHandler.global_progress) {
        jobHandler.global_progress(jobId, progress);
      }
    });

    queue.on("global:completed", (jobId, result) => {
      queue.getJob(jobId).then((job) => {
        if (job) {
          if (jobHandler.global_complete) {
            jobHandler.global_complete(jobId, result);
          }
            setQueueData((prev:any) => {
              return {
                ...prev,
                [`${queuePrefix}:${queueName}:${jobId}`]: {
                  ...prev[`${queuePrefix}:${queueName}:${jobId}`],
                  status: "done",
                },
              };
            });
        }
      });
    });

    const addJob = (jobData: IJobData) => {
      if (!queue) {
        console.log("create a queue before adding ");
        return;
      }
      queue.add({ obj: serialize(jobData) });
    };

    return { queue, addJob };
  },
  util: {
    serialize,
    deserialize,
  },
};
