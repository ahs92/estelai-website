import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="p-8 bg-gray-100">
            <h2 className="text-3xl mb-4">Contact Us</h2>
            <form className="flex flex-col">
                <input type="text" placeholder="Name" className="mb-2 p-2 border" />
                <input type="email" placeholder="Email" className="mb-2 p-2 border" />
                <textarea placeholder="Message" className="mb-2 p-2 border" rows="4"></textarea>
                <button type="submit" className="bg-blue-600 text-white p-2">Send</button>
            </form>
        </section>
    );
};

export default Contact;
