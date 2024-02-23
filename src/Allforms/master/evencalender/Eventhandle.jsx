
import Event from './Event';


const eventData = [
    {
      "Id": 1,
      "Subject": "Meeting 1",
      "StartTime": "2024-02-23T10:00:00",
      "EndTime": "2024-02-23T12:00:00"
    },
    {
      "Id": 2,
      "Subject": "Meeting 2",
      "StartTime": "2024-02-23T14:00:00",
      "EndTime": "2024-02-23T16:00:00"
    }
  ]



const Eventhandle = () => {


  return (
    <div>
      <Event eventData={eventData} />
        
    </div>
  );
};

export default Eventhandle;