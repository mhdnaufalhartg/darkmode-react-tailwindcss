import React, { useEffect } from 'react'
import 'tailwindcss/tailwind.css'

function Home() {
  const selectedTheme = (value) => {
    localStorage.setItem('theme', value)

    const html = document.querySelector('html')
    html.classList.add(localStorage.getItem('theme'))

    if (value === 'dark') {
      html.classList.remove('light')
    } else {
      html.classList.remove('dark')
    }
  }

  useEffect(() => {
    document.querySelector('html').classList.add(localStorage.getItem('theme'))
  })

  return (
    <body className="dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between bg-gray-400 dark:bg-gray-700">
        <div className=" text-white py-5 ml-20  ">React Js</div>
        <div className=" text-white py-5 mr-20 ">
          <div className="flex items-center justify-between">
            <div className="mr-2">Mode :</div>
            <button
              onClick={() => selectedTheme('light')}
              className="w-6 h-6 focus:outline-none rounded-full bg-gray-200 mr-2"
            ></button>
            <button
              onClick={() => selectedTheme('dark')}
              className="w-6 h-6 focus:outline-none rounded-full bg-black  mr-2"
            ></button>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-5 m-5 ">
        <div className="w-6/12">
          <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 shadow rounded-lg p-5 font-bold ">
            Dark Mode Cuy!
          </div>
          <div className="bg-white dark:bg-gray-800 dark:text-gray-200  shadow rounded-lg p-5 m-5">
            <div className="font-semibold text-2xl ">
              Lorem ipsum dolor s it amet consectetur, adipisicing elit.
              Delectus quam eveniet nisi aut consequatur.
            </div>
            <div className="font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              fuga iusto maiores accusamus, porro culpa voluptatum nemo alias
              illum quod. Cum labore est reprehenderit laboriosam magnam
              laborum, tempora enim repellat! Sit id quae maxime nesciunt. Porro
              et alias ipsam sint ex iste accusantium eligendi, distinctio
              itaque nam voluptatem molestias laudantium nesciunt tempore quae
              ipsum officia laborum, quos neque blanditiis temporibus? Voluptate
              eius, ab molestias rerum esse necessitatibus, beatae veritatis
              sequi magnam quibusdam suscipit quia blanditiis numquam itaque vel
              amet dolore! Quaerat consectetur veritatis, dolorem voluptatibus
              hic fugit dicta ipsum mollitia!
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Home
