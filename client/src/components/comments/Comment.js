
import { Card } from 'semantic-ui-react';

const Comment = ( { id, title, body, service_id, updateComment, deleteComment }) => {
    return (
        <>
<Card>
    <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{body}</Card.Description>
        </Card.Content>
        </Card>
        <button onClick={ () => updateComment(id) }>Update Comment</button>
        <button onClick={ () => deleteComment(id) }>Delete Comment</button>
        </>
    )
}

export default Comment;


// t.date "date"
// t.string "title"
// t.text "body"