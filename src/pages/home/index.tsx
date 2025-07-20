import React from "react"
import NavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Cards from "../../components/Cards"

import HomeBg from "../../assets/img/background/home.svg"
import ConstrucaoCivil from "../../assets/img/img/construcao-civil.svg"
import CriacaoDeArquitetura from "../../assets/img/img/criacao-de-arquitetura.svg"
import ReparacaoEExpansao from "../../assets/img/img/reparacao-e-expansao.svg"
import ConstrucaoResidencial from "../../assets/img/img/construcao-residencial.svg"

const Home: React.FC = () => {
  return (
    <>
      <NavBar />

      <main className="font-primary">
        <section
          style={{ backgroundImage: `url(${HomeBg})` }}
          className="bg-cover bg-cente h-screen pt-10"
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
            <Button
              stylename="cursor-pointer bg-gradient-to-r bg-orange-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:from-orange-500 hover:to-orange-400 transition duration-500"
              childen="Discover More"
            />
            <div className="mt-12 flex gap-6">
              <div>
                <span className="font-bold text-4xl">65k</span>
                <p className="text-zinc-600">Satisfied Customers</p>
              </div>
              <div>
                <span className="font-bold text-4xl ">15k</span>
                <p className="text-zinc-600">Completed Projects</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-20 bg-white font-primary gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
              1,230+ Companies <br />{" "}
              <span className="block">Trust by us.</span>
            </h2>
          </div>
          <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start gap-6">
            <p className="text-gray-600 text-lg md:text-base leading-relaxed">
              Turning homes become dreams as your go-to real estate agent. You
              can rely on us to help you safely home. 745,000 houses and flats
              for sale, rent, or mortgage.
            </p>

            <Button
              stylename="cursor-pointer bg-gradient-to-r bg-black text-white px-6 py-5 hover:from-orange-500 hover:to-orange-400 rounded-full font-semibold flex items-center gap-2 transition duration-500 pointer"
              childen="Request Visit"
            />
          </div>
        </section>
        <div className="ml-8 mr-8 h-0.5 bg-neutral-400"></div>
        <section className="px-6 md:px-16 py-20">
          <div className="flex justify-between items-center ">
            <div>
              <p>
                <span className=" text-lg border-t-1 border-b-1 border-neutral-950">
                  Our
                </span>
                Services
              </p>
              <h2 className="text-4xl font-bold">
                Service We’re Offering to you
              </h2>
            </div>
            <Button
              stylename="cursor-pointer bg-gradient-to-r bg-orange-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:from-orange-500 hover:to-orange-400 transition duration-500"
              childen="View All Services"
            />
          </div>
          <p className="text-[16px] w-3/5">
            Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla
            turpis integer dui sed posuere sem. Id molestie mi arcu gravida
            lorem potenti.
          </p>
          <div className="flex overflow-x-auto gap-4  py-6 scrollbar-hide">
            <Cards
              imageUrl={ConstrucaoCivil}
              imageAlt="foto de uma pessoa trabalhando, colocando tijolos."
              title="Building Renovation"
              description="A building company specializes in the construction, renovation, and development of residential, commercial."
            />
            <Cards
              imageUrl={ConstrucaoResidencial}
              imageAlt="foto de uma construção de uma residencia."
              title="Residential Construction"
              description="A building company specializes in the construction, renovation, and development of residential, commercial."
            />
            <Cards
              imageUrl={ReparacaoEExpansao}
              imageAlt="foto de uma construção, onde está criando o piso ou teto de um edificio."
              title="Repair & Expand"
              description="A building company specializes in the construction, renovation, and development of residential, commercial."
            />
            <Cards
              imageUrl={CriacaoDeArquitetura}
              imageAlt="foto de uma planta de um arquitetura."
              title="Architecture Design"
              description="A building company specializes in the construction, renovation, and development of residential, commercial."
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
