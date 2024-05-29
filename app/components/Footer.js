import React from 'react'

function Footer() {
  return (
    <footer className="w-full max-w-[1400px] mx-auto p-4 py-10">
        <ul className="flex flex-row xl:gap-16 gap-10  py-10">
          <li className="w-fit underline underline-offset-8 decoration-1 xl:text-[21px]"><a href="#" className="flex items-center justify-between">Twitter</a></li>
          <li className="w-fit underline underline-offset-8 decoration-1 xl:text-[21px]"><a href="#" className="flex items-center justify-between">Github</a></li>
          <li className="w-fit underline underline-offset-8 decoration-1 xl:text-[21px]"><a href="#" className="flex items-center justify-between">Email</a></li>
          <li className="w-fit underline underline-offset-8 decoration-1 xl:text-[21px]"><a href="#" className="flex items-center justify-between">LinkedIn</a></li>
        </ul>

        <p className="xl:text-[21px] text:lg mt-10">Built this website on NextJS. Check on <a href="#" className="text-red-500 underline underline-offset-8 decoration-1 ">github</a></p>

        <p className="xl:text-[21px] text:lg mt-2">Currently open to new work opportunities, feel free to reach out to me via  <a href="#" className="text-red-500 underline underline-offset-8 decoration-1">Twitter</a> or <a href="#" className="text-red-500 underline underline-offset-8 decoration-1 mt-4">email</a></p>
      </footer>
  )
}

export default Footer