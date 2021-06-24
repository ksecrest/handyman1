import { useState } from 'react';
import { Card } from 'semantic-ui-react';
import CommentForm from './CommentForm';


const Comment = ( { id, title, body, service_id, updateComment, deleteComment }) => {
    const [ toggle, setToggle ] = useState(false)
    return (
        <>
<Card>
    <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{body}</Card.Description>
        </Card.Content>
        </Card>

        <button onClick={ () => setToggle(!toggle) }>Update Comment</button>
        <button onClick={ () => deleteComment(id) }>Delete Comment</button>
        { toggle && <CommentForm updateComment={updateComment} id={id} title={title} body={body} service_id={service_id} />}
        </>
    )
}

export default Comment;


// t.date "date"
// t.string "title"
// t.text "body"