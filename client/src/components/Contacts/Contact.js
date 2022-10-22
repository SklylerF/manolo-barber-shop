import Card from 'react-bootstrap/Card';
import "./Contact.css";

function Contacts() {
    return (
        <section>
            <div>
                <h1 className='Contact-us'>Contact Us</h1>
            </div>
            <div>
                <h2> Business Hours</h2>
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
                <h2>Address</h2>
                <h3>2308 University Avenue #102
                    Riverside, CA 92507
                    USA</h3>
            </div>
            <div>
<h2>Call Us</h2>
<h3>(951) 405-8881</h3>
            </div>
        </section>
    );
}

export default Contacts;