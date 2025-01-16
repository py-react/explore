import Queue from "npm:bull";

export interface IJobData {
    meta: {
      id: string;
      name?: string;
      createdBy?: string;
      createdAt?: Date;
    };
    data:any;
  }



export interface IJobhandler {
    concurrency?:number;
    processFileName:string;
    onActive?:(jobMeta: IJobData["meta"],jobPromise:Queue.JobPromise,queueJobId:string) => void;
    onComplete?:(jobMeta: IJobData["meta"],result:any,queueJobId:string) => void;
    onStalled?:(jobMeta: IJobData["meta"],queueJobId:string) => void;
    onError?:(error:Error) => void;
    onWaiting?:(queueJobId:string) => void;
    onProgress?:(progress:any,jobMeta: IJobData["meta"],queueJobId:string) => void;
    onFailed?:(jobMeta: IJobData["meta"],error:any,queueJobId:string) => void;
    onWait?:(queueJobId:string)=>void;
    global_progress?:(queueJobId:string,progress:number)=>void;
    global_complete?:(queueJobId:string,result:any)=>void;
}