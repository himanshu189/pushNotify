
import { useEffect, useState } from "react";
import { onMessageListener } from "./helpers/firebase";
import Notifications, {notify} from 'react-notify-toast';
const Test = () => {
const [change,setChange]=useState("true")
  
useEffect(()=>{

  console.log("useEffect called")
onMessageListener()
    .then((message) => {
      console.log("from TheHeaderDrpodownNotif.js", message);
      setChange(!change)
      let myColor = { background: '#0E1717', text: "#FFFFFF" };
      notify.show(message.notification.body, "custom", 5000, myColor);
    })
    .catch((error) => console.log(error));
},[change])

  
  return ( 
    <div>
      hello
    </div>
   );
}
 
export default Test;