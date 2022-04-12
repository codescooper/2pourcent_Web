import {React , useRef , useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
   // Methode 2 : avec useSate et onChange
const [mail, setMail] = useState('');
const [password , setPassword] = useState('');

    // Creation d'un ref vierge 

   /*const mail = useRef();
    const username = useRef();
    const password = useRef();*/

    const resetInput = () => {
        setMail('');
    }

    // recuperation du formulaire
    const handleSubmit = (e) => {
     e.preventDefault();
     createUser(mail, password);
    //  createUser(mail.current.value, password.current.value);
    }
    
    async function createUser(email, password) {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
    }

    

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" /*ref={usermane}*/ />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={mail} onChange={(e) => setMail(e.target.value)}  /*ref={mail}*/ />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /*ref={password}*/ />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Reapeat Password</Form.Label>
                <Form.Control type="password" placeholder="Reapeat Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                SignUp
            </Button>
        </Form>
    );

}
 