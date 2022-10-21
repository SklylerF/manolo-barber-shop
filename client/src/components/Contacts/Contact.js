import Card from 'react-bootstrap/Card';
import "./Contact.css";

function Contacts() {
    return (
        <section>
            <div>
                <h1 className='Contact-us'>Contact Us</h1>
            </div>
            <div>
                <p> Business Hours</p>
                <ol>
                    <li>Mon:	9:00 AM – 7:00 PM</li>
                    <li>Tue:	Closed</li>
                    <li>Wed:	9:00 AM – 7:00 PM</li>
                    <li>Thu:	9:00 AM – 7:00 PM</li>
                    <li>Fri:	9:00 AM – 7:00 PM</li>
                    <li>Sat:	9:00 AM – 7:00 PM</li>
                    <li>Sun:	9:00 AM – 4:00 PM</li>
                </ol>
            </div>
            <div>
                <button type="button" onclick="alert('Hello world!')">Call Us</button>
            </div>
        </section>
    );
}

export default Contacts;