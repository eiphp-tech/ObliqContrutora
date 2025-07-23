import React from "react"
import NavBar from "../../components/NavBar"
import Button from "../../components/Button"
import Carrosel from "../../components/Carrosel"

import HomeBg from "../../assets/img/background/home.svg"

// Interface para dados das estatísticas
interface StatisticData {
  value: string
  label: string
  id: string
}

// Dados das estatísticas
const STATISTICS: StatisticData[] = [
  {
    id: "customers",
    value: "65k",
    label: "Clientes Satisfeitos",
  },
  {
    id: "projects",
    value: "15k",
    label: "Projetos Concluídos",
  },
]

// Componente para estatísticas reutilizável
const StatisticItem: React.FC<StatisticData> = ({ value, label, id }) => (
  <div
    className="text-center md:text-left"
    role="group"
    aria-labelledby={`stat-${id}`}
  >
    <span
      id={`stat-${id}`}
      className="block font-bold text-3xl md:text-4xl text-gray-900 mb-1"
      aria-label={`${value} ${label}`}
    >
      {value}
    </span>
    <p className="text-zinc-600 text-sm md:text-base">{label}</p>
  </div>
)

const Home: React.FC = () => {
  return (
    <>
      {/* Cabeçalho */}
      <NavBar />

      {/* Conteúdo principal */}
      <main className="font-primary">
        {/* Seção Hero */}
        <section
          style={{
            backgroundImage: `url(${HomeBg})`,
          }}
          className="relative bg-cover bg-right bg-no-repeat min-h-screen pt-10 flex items-center"
          role="banner"
          aria-label="Seção principal da página inicial"
        >
          {/* Overlay para melhor contraste se necessário */}
          <div
            className="absolute inset-0 bg-black/10 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-start w-full max-w-[740px] px-6 md:px-8 py-12 mx-auto md:mx-0 md:ml-8">
            {/* Badge de boas-vindas */}
            <span className="inline-block text-orange-500 text-lg md:text-2xl  font-medium mb-4 bg-white/90 px-4 py-2 rounded-full backdrop-blur-sm">
              Bem-vindos à Nossa Empresa
            </span>

            {/* Título principal */}
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Construindo Sonhos
              <br />
              <span className="text-orange-500">Criando Realidade</span>
            </h1>

            {/* Descrição */}
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Uma empresa de construção especializada na construção, renovação e
              desenvolvimento de estruturas residenciais, comerciais e
              industriais. Com compromisso com qualidade e inovação.
            </p>

            {/* Call-to-action principal */}
            <Button
              stylename="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              childen="Descobrir Mais"
              aria-label="Clique para descobrir mais sobre nossos serviços"
            />

            {/* Estatísticas */}
            <div
              className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-12"
              role="group"
              aria-label="Estatísticas da empresa"
            >
              {STATISTICS.map((stat) => (
                <StatisticItem key={stat.id} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* Seção de confiança */}
        <section
          className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-16 py-16 md:py-20 bg-white font-primary gap-12 lg:gap-8"
          aria-label="Seção sobre confiança das empresas"
        >
          {/* Coluna do título */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 leading-tight">
              <span className="block">Mais de 1.230 Empresas</span>
              <span className="block text-orange-500 mt-2">Confiam em Nós</span>
            </h2>
          </div>

          {/* Coluna do conteúdo */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Transformamos casas em lares dos sonhos como seu agente
              imobiliário de confiança. Você pode contar conosco para ajudá-lo a
              encontrar seu lar com segurança. Mais de 745.000 casas e
              apartamentos para venda, aluguel ou financiamento.
            </p>

            <Button
              stylename="cursor-pointer bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 hover:from-orange-500 hover:to-orange-600 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              childen="Solicitar Visita"
              aria-label="Clique para solicitar uma visita"
            />
          </div>
        </section>

        {/* Divisor visual */}
        <hr
          className="mx-6 md:mx-16 border-t border-neutral-300"
          aria-hidden="true"
        />

        {/* Seção de serviços */}
        <section
          className="px-6 md:px-16 py-16 md:py-20"
          aria-label="Seção de serviços oferecidos"
        >
          {/* Cabeçalho da seção */}
          <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 mb-8">
            <div className="flex-1">
              {/* Badge da seção */}
              <p className="mb-4">
                <span className="text-lg text-orange-500 font-medium border-b-2 border-orange-500 pb-1">
                  Nossos
                </span>{" "}
                <span className="text-lg text-gray-700">Serviços</span>
              </p>

              {/* Título da seção */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Serviços que Oferecemos
                <br />
                <span className="text-orange-500">para Você</span>
              </h2>
            </div>

            {/* Botão de visualizar todos */}
            <Button
              stylename="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              childen="Ver Todos os Serviços"
              aria-label="Clique para ver todos os nossos serviços"
            />
          </header>

          {/* Descrição da seção */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl">
            Oferecemos soluções completas em construção e arquitetura, desde o
            planejamento inicial até a entrega final do projeto. Nossa equipe
            especializada garante qualidade e inovação em cada detalhe.
          </p>

          {/* Carrossel de serviços */}
          <div role="region" aria-label="Carrossel de serviços">
            <Carrosel />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
