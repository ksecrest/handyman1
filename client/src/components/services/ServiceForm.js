import { Form } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

const ServiceForm = ({ addService }) => {
    const [service, setService] = useState({ description: "", cost: "", availability: "" })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addService(service)
        setService({ description: "", cost: "", availability: "" })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Input
            name="description"
            value={service.description}
            onChange={(e) => setService({...service, description: e.target.value })}
            placeholder="description"
            required
            />
            <Form.Input
            name="cost"
            value={service.cost}
            onChange={(e) => setService({...service, cost: e.target.value })}
            placeholder="cost"
            required
            />
            <Form.Input
            name="availability"
            value={service.availability}
            onChange={(e) => setService({...service, availability: e.target.value })}
            placeholder="availability"
            required
            />
            <Form.Button content='Submit' />
            </Form.Group>
        </Form>
    )
}

export default ServiceForm;


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

