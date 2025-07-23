import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Cards from "../Cards"

// Imports das imagens
import ConstrucaoCivil from "../../assets/img/img/construcao-civil.svg"
import CriacaoDeArquitetura from "../../assets/img/img/criacao-de-arquitetura.svg"
import ReparacaoEExpansao from "../../assets/img/img/reparacao-e-expansao.svg"
import ConstrucaoResidencial from "../../assets/img/img/construcao-residencial.svg"

// Interface para tipo de dados dos cards
interface CardData {
  imageUrl: string
  imageAlt: string
  title: string
  description: string
}

// Constantes configuráveis
const CAROUSEL_CONFIG = {
  AUTO_ADVANCE_DELAY: 2500, // 2.5 segundos
  PAUSE_AFTER_MANUAL: 6000, // 6 segundos
  TRANSITION_DURATION: 700, // 0.7 segundos
} as const

// Dados dos cards com tipagem explícita
const cardsData: CardData[] = [
  {
    imageUrl: ConstrucaoCivil,
    imageAlt: "Pessoa trabalhando na construção civil, colocando tijolos",
    title: "Renovação Predial",
    description:
      "Empresa especializada na construção, renovação e desenvolvimento de projetos residenciais e comerciais.",
  },
  {
    imageUrl: ConstrucaoResidencial,
    imageAlt: "Construção de uma residência em andamento",
    title: "Construção Residencial",
    description:
      "Serviços completos de construção residencial com foco em qualidade e sustentabilidade.",
  },
  {
    imageUrl: ReparacaoEExpansao,
    imageAlt: "Construção de piso ou teto de edifício",
    title: "Reparo e Expansão",
    description:
      "Soluções em reparos estruturais e expansões para maximizar o potencial do seu imóvel.",
  },
  {
    imageUrl: CriacaoDeArquitetura,
    imageAlt: "Planta arquitetônica de um projeto",
    title: "Design Arquitetônico",
    description:
      "Criação de projetos arquitetônicos inovadores e funcionais para diversos tipos de construção.",
  },
]

interface CarouselProps {
  autoPlay?: boolean
  showArrows?: boolean
  className?: string
}

const Carousel: React.FC<CarouselProps> = ({
  autoPlay = true,
  showArrows = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  // Função para limpar timeout de forma segura
  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  // Navegação para o próximo item
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cardsData.length)
  }, [])

  // Navegação para o item anterior
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length)
  }, [])

  // Navegação direta para um índice específico
  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < cardsData.length) {
      setCurrentIndex(index)
    }
  }, [])

  // Handler para navegação manual com pausa temporária
  const handleManualNav = useCallback(
    (callback: () => void) => {
      resetTimeout()
      setIsPaused(true)
      callback()

      // Resume autoplay após o delay configurado
      setTimeout(() => {
        setIsPaused(false)
      }, CAROUSEL_CONFIG.PAUSE_AFTER_MANUAL)
    },
    [resetTimeout]
  )

  // Controle de autoplay
  useEffect(() => {
    if (!autoPlay || isPaused || isHovered) {
      resetTimeout()
      return
    }

    timeoutRef.current = window.setTimeout(
      goToNext,
      CAROUSEL_CONFIG.AUTO_ADVANCE_DELAY
    )

    return resetTimeout
  }, [currentIndex, isPaused, isHovered, autoPlay, goToNext, resetTimeout])

  // Cleanup ao desmontar componente
  useEffect(() => {
    return resetTimeout
  }, [resetTimeout])

  // Handlers para controle de hover
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  // Handler para navegação por teclado
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault()
          handleManualNav(goToPrev)
          break
        case "ArrowRight":
          event.preventDefault()
          handleManualNav(goToNext)
          break
        case "Home":
          event.preventDefault()
          handleManualNav(() => goToIndex(0))
          break
        case "End":
          event.preventDefault()
          handleManualNav(() => goToIndex(cardsData.length - 1))
          break
      }
    },
    [handleManualNav, goToPrev, goToNext, goToIndex]
  )

  return (
    <div
      className={`relative w-full max-w-6xl mx-auto px-4 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Carrossel de serviços"
      aria-live="polite"
    >
      {/* Container principal do carrossel */}
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${cardsData.length * 100}%`,
            transitionDuration: `${CAROUSEL_CONFIG.TRANSITION_DURATION}ms`,
            transitionProperty: "transform",
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={`card-${index}`}
              className="min-w-full sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] px-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              role="group"
              aria-label={`Slide ${index + 1} de ${cardsData.length}: ${
                card.title
              }`}
            >
              <Cards {...card} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      {showArrows && (
        <>
          <button
            onClick={() => handleManualNav(goToPrev)}
            className="absolute top-1/2 -left-10 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Slide anterior"
            type="button"
          >
            <ArrowLeft size={20} aria-hidden="true" />
          </button>

          <button
            onClick={() => handleManualNav(goToNext)}
            className="absolute top-1/2 -right-10 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Próximo slide"
            type="button"
          >
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </>
      )}

      {/* Indicadores de posição */}
      <div className="flex justify-center mt-6 space-x-2">
        {cardsData.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => handleManualNav(() => goToIndex(index))}
            className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
              index === currentIndex
                ? "bg-blue-600 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>

      {/* Informações de status para leitores de tela */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} de {cardsData.length}:{" "}
        {cardsData[currentIndex].title}
      </div>
    </div>
  )
}

export default Carousel
