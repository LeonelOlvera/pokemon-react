import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css';

const Create = () => {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [author, setAuthor] = useState();
    const [ isPending, setIsPending ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true);
        fetch(process.env.CONNECTION + "/blogs", { // fetch(env.CONNECTION)
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)

        }).then(() => {
            console.log('new blog add');
            setIsPending(false);
            navigate('/home');
        })

    }

    return (
        <div className="create">
            <h2>Agregar nuevo blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required 
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author</label>
                <select
                    value={ author }
                    inChange={(e) => setAuthor(e.target.value)}>
                    <option value="Ash">Ash</option>
                    <option value="Ash">Misty</option>
                    <option value="Ash">Brouke</option>                    
                </select>

                { !isPending && <button>Add blog</button>}
                { isPending && <button>Adding blog...</button>}
            <p>{ process.env.CONNECTION }</p>

            </form>
        </div>
    )
}

export default Create;