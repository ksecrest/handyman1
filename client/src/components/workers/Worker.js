import { Button, Card } from 'semantic-ui-react';
import Services from  "../services/Services";
import WorkerForm from "./WorkerForm";
const Worker = ({ id, fullname, email, phone, location, experience, updateWorker, deleteWorker }) => {

return (
    <>
    <Card>
        <Card.Content>
            <Card.Header>
    { fullname }
    </Card.Header>
    <Card.Meta>
     { email }
    </Card.Meta>
    <Card.Meta>
    { phone }
    </Card.Meta>
    <Card.Description>
    { experience } years of experience
    </Card.Description>
    <Card.Description>
    Will drive within 20 miles of { location } 
    </Card.Description>
    </Card.Content>
    </Card>
    <button onClick={ () => updateWorker(id) }>Update Worker</button>
    <button onClick={ () => deleteWorker(id) }>Delete Worker</button>
    
    
    <Services workerId={id} />
    {/* <WorkerForm updateWorker={id} /> */}
    </>
)
}



export default Worker; 