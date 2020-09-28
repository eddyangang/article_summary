import React, { useRef, useContext} from 'react'
import { Form, Container, Segment } from 'semantic-ui-react'
import AppContext from '../../Context/AppContext';
export default function Input() {
    const { url, seturl } = useContext(AppContext)
    const input = useRef();
    const handleSubmit = () => {
        console.log("button clicked");
        console.log("input", input.current.value);
        seturl(input.current.value)
        console.log("url", url);
    }
    return (
    <Container>
        <Segment>
          <Form>
            <Form.Field>
                    <label>News Article URL</label>
                    <input type="text" placeholder="URL" ref={input}/>
            </Form.Field>
            <Form.Button primary onClick={handleSubmit}>Submit</Form.Button>
          </Form>
        </Segment>
    </Container>
    )
}
