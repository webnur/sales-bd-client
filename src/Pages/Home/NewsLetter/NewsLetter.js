import React from 'react';
import toast from 'react-hot-toast';
const Newsletter = () => {

    const handleNewsLetter = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const newsletter = {
            email: email
        }

        fetch('https://assignment-12-server-chi-coral.vercel.app/subscriber', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newsletter)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('you are SuccessFully subscribe our website')
            })
            .catch(error => console.error(error))

        form.reset()
    }

    return (
        <section className="signup-bg mb-10">
            <div className="max-w-3xl px-6 py-16 mx-auto text-center">
                <h1 className="text-3xl font-semibold text-rose-400 dark:text-gray-100">Sign up for our newsletter</h1>
                <p className="max-w-md mx-auto mt-5 dark:text-gray-400 text-white">Subscribe to our newsletter to notify when we publish new car collection</p>

                <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                    <form onSubmit={handleNewsLetter}>
                        <input type="email" name='email' className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Email Address" />

                        <input type="submit" value="Subscribe" className=" uppercase px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 cursor-pointer" />


                    </form>

                </div>
            </div>
        </section>
    );
};

export default Newsletter;