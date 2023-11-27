import React from 'react'
import BackgroundJumbotron from './../assets/musician-1284394_1920.jpg'
import nosotros from '../assets/pexels-karolina-grabowska-4472061.jpg'
import '../../src/About.css'

export const About = () => {
  return (
    <>
      <div>
        <div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
            <div className="max-w-9x1 mx-auto sm:px-6 lg:px-0">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img className="h-full w-full object-cover" src={BackgroundJumbotron} alt="Guitarras para todo el público" />
                  <div className="absolute inset-0 bg-gray-500 mix-blend-multiply"></div>
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Nuestra Historia como la tuya</span>
                    <span className="block text-white">nos define, quienes somos.</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                    Contamos con el catálogo de guitarras más amplio de toda Latinoamérica. Entregamos en todos los lugares del continente.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none flex justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid  sm:gap-5">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section id="sobremi">
        <div class="contenedor-foto">
          <img className='bannernosotros' width={500} height={800} src={nosotros}></img>
        </div>
        <div class="sobremi">
          <p class="titulo-seccion">Sobre Mi</p>
          <h2>Hola, soy <span>Luis Villegas</span></h2>
          <h3>Desarrollador Web</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Soluta blanditiis ad iusto ea perspiciatis asperiores fugit nobis illo.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laudantium</p>
        </div>
      </section>
    </>
  )
}
