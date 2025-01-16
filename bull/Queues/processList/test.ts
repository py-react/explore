import process from "node:process";
import { DoneCallback, Job } from "npm:bull";

// // Wrapper function that binds `testData` automatically to the functions
// function createFunctionWithTestData(fn) {
//     return function() {
//         // Inject `testData` directly into the function
//         return fn.call({});
//     };
// }

// // Deserialize and rebuild the job context, binding functions to the context and testData
// function deserializeJobWithContext(serializedJobContext:string, context:Record<string,unknown>) {
//     try {

//         const stringifyContext = Object.keys(context).map(key=>{
//             if(typeof context[key] === "string"){
//                 return `const ${key} = "${context[key]}";\n`
//             }
//             return `const ${key} = ${context[key]};\n`
//         }).join("")
//         const deserializedFn = new Function(`
//             ${stringifyContext}
//             const jobData = ${serializedJobContext}
//             return ()=> jobData
//         `)();

//         return createFunctionWithTestData(deserializedFn)();
//     } catch (error) {
//         console.error("Failed to deserialize job context:", error);
//         return null;
//     }
// }

export default function (job:Job, done:DoneCallback) {
  try {
    // const jobData = deserializeJobWithContext(job.data.obj, {});
    const jobData = job.data.obj

    setTimeout(() => {
        if (process.pid) {
          console.log("Process PID:", process.pid,"data:",jobData.data);
        }
        done(null, jobData.data);
    }, 10000);
  } catch (error:any) {
    done(Error(error.message),null)
  }
};
