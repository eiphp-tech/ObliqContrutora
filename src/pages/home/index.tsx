import React from "react"
import NavBar from "../../components/NavBar"
import HomeBg from "../../assets/img/background/home.svg"

const Home: React.FC = () => {
  return (
    <>
      <NavBar />

      <main className="font-primary">
        <section
          style={{ backgroundImage: `url(${HomeBg})` }}
          className="bg-cover bg-cente h-screen pt-12 "
        >
          <div className="flex flex-col items-start w-full max-w-[740px] px-8 py-12">
            <span className="text-orange-500 text-2xl font-medium ">
              Welcome to Our Company
            </span>

            <h1 className="text-7xl font-bold leading-tight text-gray-900 mb-6">
              Building Dreams
              <br />
              Creating Reality
            </h1>

            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              A building company specializes in the construction, renovation,
              and development of residential, commercial, and industrial
              structures. With a commitment to quality, innovation,
            </p>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-orange-600 transition">
              Discover More
              <span className="text-xl font-bold">→</span>
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
