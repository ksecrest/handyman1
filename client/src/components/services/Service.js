import Comments from  "../comments/Comments";
import { Card } from 'semantic-ui-react';

const Service = ( { id, description, cost, availability, worker_id, updateService, deleteService }) => {
    return (
        <>
        <Card>
            <Card.Content>
        <Card.Header>Type of Work: {description}
        </Card.Header>
         <Card.Meta>Approximate cost in USD: ${cost}</Card.Meta>
        <Card.Description>How soon can the work be done:  {availability}</Card.Description>
        </Card.Content>
        </Card>

        <button onClick={ () => updateService(id ) }>Update Service</button>
         <button onClick={ () => deleteService(id) }>Delete Service</button>
         <Comments serviceId={id} />
         </>
    )
}

export default Service;



// create_table "services", force: :cascade do |t|
// t.text "description"
// t.string "cost"
// t.string "availability" 