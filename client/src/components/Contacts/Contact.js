import Card from 'react-bootstrap/Card';
import "./Contact.css";

function Contacts() {
    return (
        <section>
            <div>
                <h1 className='Contact-us'>Contact Us</h1>
            </div>
            <section className='hourNtell'>
                <div>
                    <h2 className='hours'> Business Hours</h2>
                    <ol className='time'>
                        <li>Mon:	9:00 AM – 7:00 PM</li>
                        <li>Tue:	Closed</li>
                        <li>Wed:	9:00 AM – 7:00 PM</li>
                        <li>Thu:	9:00 AM – 7:00 PM</li>
                        <li>Fri:	9:00 AM – 7:00 PM</li>
                        <li>Sat:	9:00 AM – 7:00 PM</li>
                        <li>Sun:	9:00 AM – 4:00 PM</li>
                    </ol>
                </div>
                <div className='Tel'>
                    <h2 className='Call'>Call Us</h2>
                    <h3>(951) 405-8881</h3>
                </div>
            </section>
            <div>
                <h2 className='address'>Address</h2>
                <h3 className='direction'>2308 University Avenue #102
                    Riverside, CA 92507
                    USA</h3>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.668080602123!2d-117.3626058378356!3d33.9753698142632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcaff899c235d3%3A0x89082fa29abbfde6!2sManolo%20Barbershop!5e0!3m2!1sen!2sus!4v1666400442915!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
}

export default Contacts;