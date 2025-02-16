import React from 'react';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "808c4fff-6f18-4959-a5cb-aaa0c9a24eea");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section className="bg-white py-8 sm:py-16" id="contact">
            <div className="container mx-auto px-4 sm:px-8 lg:px-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-5xl font-bold  text-gray-900 mb-12">Contact</h1>
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03b296]"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03b296]"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Message: Hey Muhammad Sami! I need your services. Are you available to work?"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03b296] h-32"
                            ></textarea>
                        </div>
                        <span className="block text-gray-600">{result}</span>
                        <button
                            type="submit"
                            className="w-full bg-[#03b296] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
