import { useRef } from 'react';

function ContactSection() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        // Get email and message values from the form
        const email = form.current.user_email.value;
        const message = form.current.message.value;
    
        // Create a mailto link with email and message
        const mailtoLink = `mailto:noahgalvez45@gmail.com?subject=Contact%20Form%20Message&body=${encodeURIComponent(message)}%0A%0AFrom%3A%20${encodeURIComponent(email)}`;
    
        // Open the mailto link in a new window
        window.open(mailtoLink, '_blank');
    
        // Clear all input fields in the form
        form.current.reset();
    };
    

    return (
        <>
            <body className="d-flex align-items-center py-4 container">
                <main className="col-12 col-sm-6 text-center m-auto mb-5 pb-5">
                    <form ref={form} onSubmit={sendEmail}>
                        <h1 id="contact" className="text-center display-6 fw-bold text-body-emphasis lh-1 pb-3">Contact me!</h1>
                        <div className="form-floating my-4 border-outline rounded">
                            <input name="user_email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating my-4 border-outline rounded">
                            <textarea name="message" rows="4" className="h-50 form-control" id="floatingPassword" placeholder="Message" required></textarea>
                            <label htmlFor="floatingPassword">Message</label>
                        </div>

                        <button type="submit" className="btn btn-outline-dark btn-lg px-4 me-md-2">Send</button>
                    </form>
                </main>
            </body>
        </>
    );
}

export default ContactSection;
