import React from 'react'
import Image from "next/image";
import { Author } from '../interfaces/author';
import Link from 'next/link';


type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};
export function Card({ title, coverImage, date, excerpt, author, slug }: Props) {
  
  return (
    <>
 <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 border-b border-gray-200 pb-8 mb-8">    
<div className="relative w-full md:w-1/3 h-64 md:h-56 flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src={coverImage}
          alt="Hiking through the woods"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

    {/* // Content */}
     <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition">
           <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
        </h2>
        <p className="italic text-gray-500 text-sm mb-3">{date}</p>
        <p className="text-gray-600 leading-relaxed">
         {excerpt}
        </p>
      </div>
          </div>
    </main>
    </>
  )
}
