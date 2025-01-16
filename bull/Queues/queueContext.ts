import {createContext,useState} from "../utils/hooks.cjs"


const [queueData,setQueueData] = useState({})

export const QueuesContext = createContext({queueData,setQueueData})

// useEffect(() => {
//   console.log({queueData})
// }, [queueData])
