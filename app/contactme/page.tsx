import React from 'react'
import Image from 'next/image'

export default function ContactMe() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        {/* Left: Image */}
        <div className="md:w-1/2 relative h-56 md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1400&auto=format&fit=crop"
            alt="Contact background"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Get in touch</h1>
          <p className="text-gray-600 mb-6">I'd love to hear from you. Fill out the form or send an email to <a href="mailto:hello@example.com" className="text-blue-600 hover:underline">hello@example.com</a>.</p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input id="name" name="name" type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
            </div>

            <div>
              <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">Send message</button>
            </div>
          </form>

        </div>
      </div>
    </main>
  )
}