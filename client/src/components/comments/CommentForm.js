import { Form } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

const CommentForm = ({ addComment }) => {
    const [comment, setComment] = useState({ title: "", body: "" })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(comment)
        setComment({ title: "", body: "" })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Input
            name="title"
            value={comment.title}
            onChange={(e) => setComment({...comment, title: e.target.value })}
            placeholder="Title"
            required
            />
            <Form.Input
            name="body"
            value={comment.body}
            onChange={(e) => setComment({...comment, body: e.target.value })}
            placeholder="Comments"
            required
            />
            <Form.Button content='Submit' />
            </Form.Group>
        </Form>
    )
}

export default CommentForm;


// create_table "services", force: :cascade do |t|
// t.text "description"
// t.string "cost"
// t.string "availability"

// return (
//     <div>
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Group>
//           <Form.Input
//             placeholder='Name'
//             name='name'
//             value={name}
//             onChange={this.handleChange}
//           />
//           <Form.Input
//             placeholder='Email'
//             name='email'
//             value={email}
//             onChange={this.handleChange}
//           />
//           <Form.Button content='Submit' />
//         </Form.Group>
//       </Form>

