import React from "react"
import NavBar from "../../components/NavBar"

const Home: React.FC = () => {
  return (
    <>
      <NavBar />

      <main className="p-8 max-w-7xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Obliq</h1>
        <p className="text-lg text-gray-300">
          Esta é a página inicial do seu site. Aqui você pode colocar banners,
          seções de serviços, CTA etc.
        </p>
      </main>
    </>
  )
}

export default Home
