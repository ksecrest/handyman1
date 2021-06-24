import { Form } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker }) => {
    const [worker, setWorker] = useState({  fullname: "", email: "", phone:"", location: "", experience: ""})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addWorker(worker)
        setWorker({ fullname: "", email: "", phone:"", location: "", experience: ""})
    }
        return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Input
            name="fullname"
            value={worker.fullname}
            onChange={(e)=> setWorker({...worker, fullname: e.target.value })}
            placeholder="Name"
            required
            />
            <Form.Input
            name="email"
            value={worker.email}
            onChange={(e)=> setWorker({...worker, email: e.target.value })}
            placeholder="Email"
            required
            />
            <Form.Input
            name="phone"
            value={worker.phone}
            onChange={(e)=> setWorker({...worker, phone: e.target.value })}
            placeholder="Phone"
            required
            />
            <Form.Input
            name="location"
            value={worker.location}
            onChange={(e)=> setWorker({...worker, location: e.target.value })}
            placeholder="Location"
            required
            />
            <Form.Input
            name="experience"
            value={worker.experience}
            onChange={(e)=> setWorker({...worker, experience: e.target.value })}
            placeholder="Experience"
            required
            />
            </Form.Group>

            <Form.Button content='Submit' />

        </Form>
    )
}

export default WorkerForm;

// create_table "workers", force: :cascade do |t|
// t.string "fullname"
// t.string "email"
// t.string "phone"
// t.string "location"
// t.integer "experience"
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// end

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

