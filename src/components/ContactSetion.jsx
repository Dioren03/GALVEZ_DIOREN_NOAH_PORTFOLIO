import emailjs from "@emailjs/browser"
import { useRef } from 'react'


function ContactSection () {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        // replace with your information
        emailjs
          .sendForm(
            //make .env in root folder
            //npm i dot env
            // replace the codes with .env
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAIL_USER_ID
          )
       
          .then(
            (result) => {
                console.log(result.text);
                console.log("message sent");
                //add alert for user
                alert("Message sent successfully!");


                // Clear all input fields in the form
                form.current.reset(); // Reset the form fields
            },
            (error) => {
              console.log(error.text);
            }
          );
      };





    return (
        <>
            <body class=" d-flex align-items-center py-4 container">
    

            <main class=" col-12 col-sm-6 text-center m-auto mb-5 pb-5">
            <form ref={form} onSubmit={sendEmail} >

                <h1 id="contact" class="text-center display-6 fw-bold text-body-emphasis lh-1 pb-3">Contact me!</h1>
                <div class="form-floating my-4 border-outline rounded ">
                <input name="user_email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
                <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating my-4 border-outline rounded ">
                <textarea name="message" rows="4" class="h-50 form-control" id="floatingPassword" placeholder="Message" required></textarea>
                <label for="floatingPassword">Message</label>
                </div>

                <button type="submit" class="btn btn-outline-dark btn-lg px-4 me-md-2">Send</button>
            </form>
            </main>

                

            </body>

        </>
    );
}

export default ContactSection;