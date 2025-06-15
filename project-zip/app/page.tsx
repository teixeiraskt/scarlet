"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Heart,
  MessageCircle,
  Camera,
  ImageIcon,
  Users,
  Video,
  MapPin,
  Clock,
  Check,
  ChevronDown,
  ChevronRight,
  X,
  Lock,
  Zap,
  Flame,
  BadgeCheck,
  AlertTriangle,
  Smile,
  FileText,
  CreditCard,
  Shield,
} from "lucide-react"

// Header Component
const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm py-3 px-4">
    <div className="flex items-center justify-between max-w-md mx-auto">
      <div className="flex items-center">
        <img src="/Camada-1-2.png" alt="Logo" className="h-8 object-contain" />
      </div>
    </div>
  </header>
)

// Profile Section Component
const ProfileSection = () => {
  const [showFullBio, setShowFullBio] = useState(false)

  const fullBio =
    "PUTA CHEFE NÉ BEBÊ? Sou a Nanda... se você caiu aqui não foi pro acaso, eu sei oque você quer! oque acha depois de adquirir me chamar no wpp para ver onde nossa imaginação ira nos levar? 🥵 Os vídeos contém sexo explícito mostrando tudo, vídeo mamando, se masturbando e tudo mais que você pode imaginar! Aqui tem de tudo!!! NOVINHA DO BUCETÃO 😛😋 BUCETINHA TÃO GOSTOSA E NOVINHA QUE NEM PARECE QUE JÁ FOI USADA!!😋🔥 AQUI TAMBÉM TEM MUITO CHAT PRIVADO COM FOTOS E VÍDEOS EXCLUSIVOS QUE MANDO PRA VOCÊ, COMO VOCÊ PEDIR 👅🔞🍆 E REALIZO FETICHES A LONGA DISTÂNCIA 😍"
  const shortBio = fullBio.substring(0, fullBio.length / 2) + "..."

  return (
    <div className="mb-8">
      {/* Cover Image */}
      <div className="relative rounded-xl overflow-hidden mb-8">
        <img src="/nova_capa.png" alt="Cover" className="w-full h-full object-contain" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Stats overlay */}
        <div className="absolute top-4 left-4 text-white flex flex-col">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Michele Fernanda</h2>
          </div>
          <div className="flex gap-6 mt-2 text-center text-white text-xs">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Camera className="w-3 h-3 mb-1 opacity-70" />
                <span className="mx-1">•</span>
              </div>
              <span className="font-bold text-xs">729</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <ImageIcon className="w-3 h-3 mb-1 opacity-70" />
                <span className="mx-1">•</span>
              </div>
              <span className="font-bold text-xs">1,2k</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Users className="w-3 h-3 mb-1 opacity-70" />
                <span className="mx-1">•</span>
              </div>
              <span className="font-bold text-xs">3,2k</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Heart className="w-3 h-3 mb-1 opacity-70" />
                <span className="mx-1">•</span>
              </div>
              <span className="font-bold text-xs">28k</span>
            </div>
          </div>
        </div>

        {/* Live indicator */}
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-0.5 rounded-full font-medium shadow-lg animate-pulse">
            AO VIVO
          </span>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
        </div>
      </div>

      {/* Profile Picture */}
      <div className="flex items-center gap-4 mb-2 -mt-12">
        <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-pink-500 ring-offset-2">
          <img src="/Screenshot_20250614_002901_Instagram.jpg" alt="Profile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-start gap-0.5 mb-1 pl-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-gray-600">Michele Fernanda | Nanda</h3>
          <BadgeCheck className="text-orange-500" size={20} />
        </div>
        <p className="text-sm text-gray-600 -mt-0.5">@minanda02</p>
      </div>

      {/* Bio */}
      <div className="text-sm text-gray-600 mb-2 pl-4">
        <p>
          {showFullBio ? fullBio : shortBio}
          {!showFullBio && (
            <button onClick={() => setShowFullBio(true)} className="text-orange-500 font-medium ml-1">
              ler mais...
            </button>
          )}
          {showFullBio && (
            <button onClick={() => setShowFullBio(false)} className="text-orange-500 font-medium ml-1">
              ler menos...
            </button>
          )}
        </p>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1 text-sm text-gray-500 mb-4 pl-4">
        {" "}
        <MapPin className="w-4 h-4 opacity-70" />
        <span>Foz do Iguaçu/RJ</span>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-2 mb-6 pl-4">
        <a
          href="https://www.instagram.com/minanda02?igsh=aG9lODdzbjNwcDJi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f09433" />
                <stop offset="25%" stopColor="#e6683c" />
                <stop offset="50%" stopColor="#dc2743" />
                <stop offset="75%" stopColor="#cc2366" />
                <stop offset="100%" stopColor="#bc1888" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#instagram-gradient)" strokeWidth="2" />
            <path
              d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
              stroke="url(#instagram-gradient)"
              strokeWidth="2"
            />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#instagram-gradient)" strokeWidth="2" />
          </svg>
          <span>Instagram</span>
        </a>
        <a
          href="https://t.me/michenanda01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <img src="/telegram-icon.svg" alt="Telegram" className="w-5 h-5" />
          <span>Telegram</span>
        </a>
      </div>
    </div>
  )
}

// Blurred Media Component (todas as fotos com blur)
const BlurredMedia = ({ imageUrl }: { imageUrl: string }) => (
  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
    <img 
      src={imageUrl} 
      alt="Media" 
      className="w-full h-full object-cover filter blur-md" 
    />
    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
      <Lock size={32} className="text-white opacity-70" />
    </div>
  </div>
)

// Timer utility
const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}

// Plan Details Modal
const PlanModal = ({ isOpen, onClose, planDetails }: any) => {
  const [timeLeft, setTimeLeft] = useState(900) // 15 minutes

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(15 * 60)
      return
    }

    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen, timeLeft])

  if (!isOpen || !planDetails) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gray-50 rounded-2xl p-6 md:p-8 max-w-md w-full relative shadow-xl border border-gray-200">
        <div className="flex justify-center mb-4 -mt-2">
          <img src="/assets/privacy_logo.png" alt="Privacy Logo" className="h-8 w-auto" />{" "}
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold text-gray-800 text-center mb-2">{planDetails.title}</h2>

        <p className="text-gray-600 mb-5 text-center text-base">{planDetails.description}</p>

        <div className="mb-6 text-center">
          <span className="text-gray-500 line-through mr-2">DE R${planDetails.originalPrice}</span>
          <span className="text-orange-500 text-3xl font-bold">por apenas R${planDetails.discountPrice}</span>
          <Flame className="inline-block text-orange-500 ml-1 mb-1" size={20} />
        </div>

        <p className="text-gray-700 mb-3 font-medium">Inclui:</p>
        <ul className="space-y-2 mb-6 text-sm">
          {planDetails.includesList.map((item: string, index: number) => (
            <li key={index} className="flex items-center text-gray-600">
              <Check className="text-green-500 mr-2 flex-shrink-0" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="text-xs mb-6 space-y-1.5 text-center">
          {" "}
          <div className="flex items-center justify-center font-bold text-lg mb-1 text-orange-500">
            {" "}
            <Clock size={18} className="mr-2" />
            <span>Oferta termina em: {formatTime(timeLeft)}</span>
          </div>
          <div className="text-gray-500">
            {" "}
            <span>{planDetails.offerValidity.clickOnly}</span>
          </div>
          <div className="flex items-center justify-center text-gray-500">
            {" "}
            <AlertTriangle size={14} className="mr-1.5 flex-shrink-0 text-orange-500" />{" "}
            <span>{planDetails.offerValidity.reopening}</span>
          </div>
        </div>

        <a
          href={planDetails.mainButtonLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (planDetails.mainButtonLink) {
              window.open(planDetails.mainButtonLink, "_blank")
            }
          }}
          className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center text-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.03] mb-4 shadow-lg hover:shadow-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
        >
          <Lock size={20} className="mr-2" />
          {planDetails.mainButtonText}
          <Zap size={20} className="ml-2" />
        </a>

        {planDetails.secondaryCTAText && planDetails.secondaryCTALinkText && (
          <div className="text-center text-sm">
            <p className="text-gray-500 mb-1">{planDetails.secondaryCTAText}</p>
            <a href={planDetails.secondaryCTALinkHref || "#"} className="text-orange-500 font-medium hover:underline">
              <Smile size={16} className="inline-block mr-1" />
              {planDetails.secondaryCTALinkText}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

// Plan details data
const monthlyPlan = {
  title: "ACESSO VIP IMEDIATO - 1 MÊS",
  description: "Você está um passo da felicidade! 😍🥵",
  originalPrice: "60,00",
  discountPrice: "39,90",
  includesList: [
    "acesso 1 mês +1884 vídeos/fotos",
    "realizo 4 fetiches seu semanal",
    "chamada de voz comigo +30 min",
    "meu pv liberado",
  ],
  offerValidity: {
    clickOnly: "Oferta válida apenas durante este clique.",
    reopening: "Depois disso, só na próxima reabertura.",
  },
  mainButtonText: "ASSINAR AGORA!",
  mainButtonLink: "https://go.tribopay.com.br/3fh9thmn0p",
  secondaryCTAText: "Ainda não quer o plano mensal?",
  secondaryCTALinkText: "Teste 24h por apenas R$10,90",
  secondaryCTALinkHref: "#",
}

const quarterlyPlan = {
  title: "ACESSO VIP IMEDIATO - 3 MESES",
  description: "Você está um passo da felicidade! 😍🥵",
  originalPrice: "150,00",
  discountPrice: "98,70",
  includesList: [
    "Acesso 3 meses +1884 vídeos/fotos",
    "Realizo todos fetiches seu",
    "chamada de vidêos comigo +40 min",
    "meu pv liberado",
    "WhatsApp Pessoal",
    "+ super Bônus",
  ],
  offerValidity: {
    clickOnly: "Oferta válida apenas durante este clique.",
    reopening: "Depois disso, só na próxima reabertura.",
  },
  mainButtonText: "ASSINAR AGORA!",
  mainButtonLink: "https://go.tribopay.com.br/toarzed1ec",
  secondaryCTAText: "Ainda não quer o plano trimestral?",
  secondaryCTALinkText: "Teste 24h por apenas R$10,90",
  secondaryCTALinkHref: "#",
}

const lifetimePlan = {
  title: "ACESSO VIP IMEDIATO - VITALÍCIO",
  description: "Você está um passo da felicidade! 😍🥵",
  originalPrice: "297,00",
  discountPrice: "179,90",
  includesList: [
    "acesso VITALÍCIO +1884 vídeos/fotos",
    "realizo TODOS seus fetiches seu",
    "chamada de vidêos/ voz comigo +40 min",
    "meu pv liberado",
    "PRESENCIAL COMIGO",
    "WhatsApp Pessoal",
    "Super bônus",
  ],
  offerValidity: {
    clickOnly: "Oferta válida apenas durante este clique.",
    reopening: "Depois disso, só na próxima reabertura.",
  },
  mainButtonText: "ASSINAR AGORA!",
  mainButtonLink: "https://go.tribopay.com.br/tptekilkcl",
  secondaryCTAText: "Ainda não quer o plano vitalício?",
  secondaryCTALinkText: "Teste 24h por apenas R$10,90",
  secondaryCTALinkHref: "#",
}

// Subscription Button Component
const SubscriptionButton = ({ duration, price, onClick, isDiscounted = false }: any) => {
  const durationParts = duration.split("(")
  const mainDuration = durationParts[0].trim()
  const discountText = durationParts[1] ? `(${durationParts[1]}` : ""

  return (
    <div className="relative rounded-full overflow-hidden mb-3 bg-gradient-to-r from-orange-300 to-orange-400 shadow-md hover:shadow-lg transition-shadow duration-300">
      <button
        className="w-full py-3 px-4 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        onClick={onClick}
      >
        <div className="flex justify-between items-center">
          <div className="text-white font-medium">
            {mainDuration}
            {isDiscounted && discountText && <span className="italic ml-1">{discountText}</span>}
          </div>
          <div className="text-white font-bold">{price}</div>
        </div>
      </button>
    </div>
  )
}

// Main Content Component
const MainContent = () => {
  const [activeTab, setActiveTab] = useState("feed")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isLiked1, setIsLiked1] = useState(false)
  const [isLiked2, setIsLiked2] = useState(false)

  const openModal = (plan: any) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPlan(null)
  }

  const toggleLike1 = () => {
    setIsLiked1(!isLiked1)
  }

  const toggleLike2 = () => {
    setIsLiked2(!isLiked2)
  }

  // Array com todas as imagens - todas aparecerão com blur e cadeado
  const mediaImages = [
    "/Screenshot_20250614_005650_Samsung Internet copy copy.jpg",
    "/Screenshot_20250614_005559_Samsung Internet copy.jpg",
    "/Screenshot_20250614_005543_Samsung Internet copy copy.jpg",
    "/Screenshot_20250614_005807_Samsung Internet copy copy.jpg",
    "/Screenshot_20250614_005709_Samsung Internet copy copy.jpg",
    "/Screenshot_20250614_005733_Samsung Internet copy copy.jpg",
    "/Screenshot_20250614_005534_Samsung Internet copy.jpg",
    "/Screenshot_20250614_005650_Samsung Internet copy copy copy.jpg",
    "/Screenshot_20250614_005559_Samsung Internet copy copy.jpg",
  ]

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-3">Assinaturas</h2>

      <SubscriptionButton duration="1 mês" price="R$ 39,90" onClick={() => openModal(monthlyPlan)} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 mb-6 px-2 space-y-1 sm:space-y-0">
        {" "}
        <span className="font-bold text-black">Promoções</span>
        <span className="text-xs text-gray-500">clique em cada pacote para saber as informações</span>
      </div>

      <SubscriptionButton
        duration="3 meses ( 15% off )"
        price="R$ 98,70"
        onClick={() => openModal(quarterlyPlan)}
        isDiscounted={true}
      />

      <SubscriptionButton
        duration="Vitalício ( 15% off )"
        price="R$ 179,90"
        onClick={() => openModal(lifetimePlan)}
        isDiscounted={true}
      />

      {/* Tabs */}
      <div className="mt-6 border-t border-gray-200">
        <div className="flex">
          <button
            className={`w-1/2 text-center py-3 ${activeTab === "feed" ? "border-b-2 border-orange-400" : "border-b border-gray-200"}`}
            onClick={() => setActiveTab("feed")}
          >
            <span className={`${activeTab === "feed" ? "text-orange-500 font-medium" : "text-gray-500"}`}>
              2012 postagens
            </span>
          </button>
          <button
            className={`w-1/2 text-center py-3 ${activeTab === "media" ? "border-b-2 border-orange-400" : "border-b border-gray-200"}`}
            onClick={() => setActiveTab("media")}
          >
            <span className={`${activeTab === "media" ? "text-orange-500 font-medium" : "text-gray-500"}`}>
              1929 mídias
            </span>
          </button>
        </div>
      </div>

      {/* Feed Content */}
      {activeTab === "feed" && (
        <div className="mt-4 space-y-4">
          {/* Post 1 */}
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <div className="flex items-start space-x-3 mb-3">
              <img
                src="/Screenshot_20250614_002901_Instagram.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-gray-800">Michele Fernanda</span>
                  <BadgeCheck className="text-orange-500" size={16} />
                </div>
                <p className="text-sm text-gray-500">@minanda02</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4">
              Sozinha... mas nem por isso quietinha 😏 Me explorei todinha pensando em você 💦👅
            </p>

            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
              <video
                src="/new_post_video.mp4"
                className="absolute inset-0 w-full h-full object-cover filter blur-lg opacity-50"
                loop
                autoPlay
                muted
                playsInline
              />
              <video
                src="/new_post_video.mp4"
                className="absolute inset-0 w-full h-full object-contain z-10"
                loop
                autoPlay
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-20">
                {" "}
                <Lock size={48} className="text-white opacity-70" />
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-3 text-gray-500">
              <button
                className={`flex items-center space-x-1 ${isLiked1 ? "text-orange-500" : "text-gray-500"} hover:text-orange-600 transition-colors`}
                onClick={toggleLike1}
              >
                <Heart size={18} fill={isLiked1 ? "currentColor" : "none"} />
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-500">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>

          {/* Post 2 */}
          <div className="p-4 border rounded-lg shadow-sm bg-white">
            <div className="flex items-start space-x-3 mb-3">
              <img
                src="/Screenshot_20250614_002901_Instagram.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-gray-800">Michele Fernanda</span>
                  <BadgeCheck className="text-orange-500" size={16} />
                </div>
                <p className="text-sm text-gray-500">@minanda02</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4">
              Entre pensamentos e gemidos baixos… eu me encontrei. E, claro, só dava você na minha cabeça 😈
            </p>

            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
              {" "}
              <video
                src="/new_post_video_2.mp4"
                className="absolute inset-0 w-full h-full object-cover filter blur-lg opacity-50"
                loop
                autoPlay
                muted
                playsInline
              />
              <video
                src="/new_post_video_2.mp4"
                className="absolute inset-0 w-full h-full object-contain z-10"
                loop
                autoPlay
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-20">
                {" "}
                <Lock size={48} className="text-white opacity-70" />
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-3 text-gray-500">
              <button
                className={`flex items-center space-x-1 ${isLiked2 ? "text-orange-500" : "text-gray-500"} hover:text-orange-600 transition-colors`}
                onClick={toggleLike2}
              >
                <Heart size={18} fill={isLiked2 ? "currentColor" : "none"} />
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-500">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Media Content */}
      {activeTab === "media" && (
        <div className="mt-4">
          <div className="flex justify-center items-center space-x-4 mb-4 text-gray-600">
            <button className="flex items-center text-sm p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <ImageIcon size={16} className="mr-1.5" />
              <span>1,2k</span>
            </button>
            <button className="flex items-center text-sm p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <Video size={16} className="mr-1.5" />
              <span>729</span>
            </button>
            <button className="flex items-center text-sm p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              <Heart size={16} className="mr-1.5" />
              <span>28k</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-1">
            {mediaImages.map((imageUrl, index) => (
              <BlurredMedia key={index} imageUrl={imageUrl} />
            ))}
          </div>
        </div>
      )}

      <PlanModal isOpen={isModalOpen} onClose={closeModal} planDetails={selectedPlan} />
    </div>
  )
}

// Timer Component
const TimerSection = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 19, seconds: 52 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        } else {
          return { minutes: 19, seconds: 52 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-6 shadow-inner">
      <div className="flex items-center justify-center text-center">
        <Clock className="text-orange-500 mr-2" size={20} />
        <p className="text-gray-700 font-medium">
          Oferta válida por tempo limitado:
          <span className="ml-2 font-bold text-orange-500">
            {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </p>
      </div>
    </div>
  )
}

// Security Feature Component
const SecurityFeature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-1 text-orange-500">{icon}</div>
    <div className="text-xs font-medium">{text}</div>
  </div>
)

// Security Section Component
const SecuritySection = () => (
  <div className="mb-8">
    <div className="flex justify-between px-4">
      <SecurityFeature icon={<Shield size={20} />} text="100% seguro" />
      <SecurityFeature icon={<Lock size={20} />} text="Privacidade garantida" />
      <SecurityFeature icon={<CreditCard size={20} />} text="Pagamento criptografado" />
    </div>
  </div>
)

// FAQ Item Component
const FAQItem = ({ question, answer, isOpenInitially = false }: any) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially)

  return (
    <div className="border-b border-gray-200 py-3">
      <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-sm font-medium text-gray-800 flex items-center">
          {isOpen ? (
            <ChevronDown size={16} className="mr-2 text-gray-500" />
          ) : (
            <ChevronRight size={16} className="mr-2 text-gray-500" />
          )}
          {question}
        </span>
      </button>
      {isOpen && <div className="mt-2 pl-6 text-sm text-gray-700">{answer}</div>}
    </div>
  )
}

// FAQ Section Component
const FAQSection = () => {
  const faqs = [
    {
      question: "O conteúdo é realmente explícito?",
      answer: "Sim! Todo o conteúdo é 100% explícito e sem censura. Você terá acesso ao que mais deseja ver.",
    },
    {
      question: "O pagamento é seguro e discreto?",
      answer:
        "Sim. O pagamento é totalmente seguro, com criptografia avançada, e aparece de forma discreta na fatura, sem revelar o conteúdo da compra.",
    },
    {
      question: "Como vou receber o conteúdo?",
      answer:
        "Após a confirmação do pagamento, você receberá automaticamente um e-mail com o link de acesso ao pacote meu Whatsapp pessoal e todos seus bonús. Simples, rápido e direto.",
    },
    {
      question: "E se eu tiver problemas com o acesso?",
      answer:
        "Se tiver qualquer problema com o acesso, é só entrar em contato pelo suporte que resolvemos rapidinho. Você não fica na mão. Aplicativosuporte2@gmail.com",
    },
  ]

  return (
    <div className="mt-8 mb-6">
      <h2 className="text-lg font-semibold text-orange-500 mb-4 text-center">Perguntas Frequentes</h2>
      <div>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} isOpenInitially={faq.isOpenInitially} />
        ))}
      </div>
    </div>
  )
}

// Footer Component
const Footer = () => (
  <footer className="text-xs text-gray-500">
    <div className="flex justify-center space-x-4 mb-4">
      <a href="#" className="flex items-center hover:text-orange-500">
        <FileText size={14} className="mr-1" />
        Política de Privacidade
      </a>
      <a href="#" className="flex items-center hover:text-orange-500">
        <MessageCircle size={14} className="mr-1" />
        Suporte 24h
      </a>
      <a href="#" className="flex items-center hover:text-orange-500">
        <FileText size={14} className="mr-1" />
        Termos de Uso
      </a>
    </div>
    <p className="text-center">© 2025 Michele Fernanda. Todos os direitos reservados.</p>
  </footer>
)

// Age Verification Modal
const AgeVerificationModal = ({ onVerify }: { onVerify: () => void }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-95 z-50">
    <div className="max-w-md w-full px-6 py-8 flex flex-col items-center">
      <div className="mb-8">
        <img src="/Camada-1-2.png" alt="Privacy Logo" className="h-16" />
      </div>

      <div className="text-center mb-8">
        <p className="text-white text-lg mb-2">
          Este site é uma comunidade adulta que contém material sexualmente explícito.
        </p>
        <p className="text-white text-lg mb-4">Você deve ter 18 anos ou mais para entrar.</p>
      </div>

      <button
        onClick={onVerify}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 uppercase tracking-wide"
      >
        TENHO 18 ANOS OU MAIS - ENTRAR
      </button>
    </div>
  </div>
)

// Main App Component
export default function App() {
  const [isVerified, setIsVerified] = useState(false)

  const handleVerification = () => {
    setIsVerified(true)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {!isVerified && <AgeVerificationModal onVerify={handleVerification} />}

      <div className="max-w-2xl mx-auto px-4 pt-16 pb-6 sm:px-6">
        <Header />
        <ProfileSection />
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <MainContent />
          <TimerSection />
          <SecuritySection />
        </div>
        <FAQSection /> <Footer />
      </div>
    </div>
  )
}