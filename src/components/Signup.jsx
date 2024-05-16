import React,{useState} from 'react';
import axios from 'axios'
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
    },
    title: {
        marginTop: 0,
        color: '#333',
    },
    inputGroup: {
        marginBottom: '20px',
        textAlign: 'left',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        color: '#666',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '3px',
    },
    submitButton: {
        backgroundColor: '#4caf50',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '3px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

const SignupPage = () => {
	const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/signup', {
        name,
        email,
        password,
      });
      alert('Registration successful. Now you can log in');
    } catch (e) {
        console.log("failed");
    }
  }
		
    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Sign Up</h2>
                <form action="#" onChange={ registerUser}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="fullname">Full Name</label>
                        <input style={styles.input} type="text" id="fullname" name="fullname" placeholder="Enter your full name" required onChange={ev => setName(ev.target.value)} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="email">Email</label>
                        <input style={styles.input} type="email" id="email" name="email" placeholder="Enter your email" required onChange={ev => setEmail(ev.target.value)} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label} htmlFor="password">Password</label>
                        <input style={styles.input} type="password" id="password" name="password" placeholder="Enter your password" required onChange={ev => setPassword(ev.target.value)} />
                    </div>
                    <button style={styles.submitButton} type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
