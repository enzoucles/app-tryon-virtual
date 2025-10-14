"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { 
  Camera, 
  RotateCcw, 
  Download, 
  Share2, 
  Heart, 
  ShoppingCart,
  Palette,
  Ruler,
  Zap,
  CheckCircle,
  X
} from 'lucide-react'

interface ARDemoProps {
  category: 'clothes' | 'glasses' | 'furniture'
}

export function ARDemo({ category }: ARDemoProps) {
  const [isActive, setIsActive] = useState(false)
  const [selectedItem, setSelectedItem] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState('M')
  const [showMeasurements, setShowMeasurements] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const items = {
    clothes: [
      { name: 'Camiseta Básica', price: 'R$ 89', brand: 'Fashion Co', colors: ['#000000', '#FFFFFF', '#FF6B6B', '#4ECDC4'] },
      { name: 'Jaqueta Jeans', price: 'R$ 199', brand: 'Denim Style', colors: ['#1E3A8A', '#374151', '#000000'] },
      { name: 'Vestido Floral', price: 'R$ 149', brand: 'Summer Vibes', colors: ['#F59E0B', '#EF4444', '#8B5CF6'] }
    ],
    glasses: [
      { name: 'Ray-Ban Aviator', price: 'R$ 299', brand: 'Ray-Ban', colors: ['#FFD700', '#C0C0C0', '#000000'] },
      { name: 'Oakley Sport', price: 'R$ 399', brand: 'Oakley', colors: ['#000000', '#FF0000', '#0000FF'] },
      { name: 'Vintage Round', price: 'R$ 159', brand: 'Retro Co', colors: ['#8B4513', '#000000', '#FFD700'] }
    ],
    furniture: [
      { name: 'Sofá Moderno', price: 'R$ 2.999', brand: 'Casa Design', colors: ['#8B4513', '#708090', '#000000'] },
      { name: 'Mesa de Centro', price: 'R$ 899', brand: 'Wood Style', colors: ['#D2691E', '#8B4513', '#FFFFFF'] },
      { name: 'Poltrona Confort', price: 'R$ 1.299', brand: 'Comfort Plus', colors: ['#4169E1', '#8B4513', '#808080'] }
    ]
  }

  const sizes = ['PP', 'P', 'M', 'G', 'GG']
  const currentItems = items[category]

  useEffect(() => {
    if (isActive && videoRef.current) {
      // Simular acesso à câmera
      navigator.mediaDevices?.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
        .catch(() => {
          // Fallback para demo sem câmera real
          console.log('Camera access denied - using demo mode')
        })
    }
  }, [isActive])

  const handleStartAR = () => {
    setIsActive(true)
  }

  const handleStopAR = () => {
    setIsActive(false)
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach(track => track.stop())
    }
  }

  const getCategoryIcon = () => {
    switch (category) {
      case 'clothes': return '👕'
      case 'glasses': return '👓'
      case 'furniture': return '🛋️'
    }
  }

  const getCategoryTitle = () => {
    switch (category) {
      case 'clothes': return 'Try-on de Roupas'
      case 'glasses': return 'Try-on de Óculos'
      case 'furniture': return 'Try-on de Móveis'
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{getCategoryIcon()}</span>
              <CardTitle className="text-2xl">{getCategoryTitle()}</CardTitle>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <Zap className="w-3 h-3 mr-1" />
              Demo Ativo
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid lg:grid-cols-3 gap-0">
            {/* AR Viewer */}
            <div className="lg:col-span-2 relative bg-black aspect-video lg:aspect-auto lg:min-h-[500px]">
              {!isActive ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
                  <div className="text-center text-white">
                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-semibold mb-2">Câmera AR</h3>
                    <p className="text-gray-300 mb-6">Clique para iniciar a experiência</p>
                    <Button onClick={handleStartAR} className="bg-purple-600 hover:bg-purple-700">
                      <Camera className="w-4 h-4 mr-2" />
                      Iniciar AR
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                  
                  {/* AR Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Simulated AR tracking points */}
                    <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    
                    {/* AR Item Overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                        <div className="text-white text-center">
                          <div className="text-4xl mb-2">{getCategoryIcon()}</div>
                          <div className="text-sm font-medium">{currentItems[selectedItem].name}</div>
                          <div className="text-xs opacity-75">AR Simulado</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AR Controls */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={handleStopAR} className="bg-red-500/80 hover:bg-red-600/80">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* AR Status */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-green-500/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2 text-white text-sm">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Tracking Ativo
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Controls Panel */}
            <div className="p-6 bg-gray-50 space-y-6">
              {/* Item Selection */}
              <div>
                <h4 className="font-semibold mb-3">Produtos</h4>
                <div className="space-y-2">
                  {currentItems.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedItem(index)}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedItem === index 
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-xs text-gray-500">{item.brand}</div>
                      <div className="text-sm font-semibold text-purple-600">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h4 className="font-semibold mb-3">Cores</h4>
                <div className="flex gap-2">
                  {currentItems[selectedItem].colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === index ? 'border-purple-500' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection (for clothes) */}
              {category === 'clothes' && (
                <div>
                  <h4 className="font-semibold mb-3">Tamanhos</h4>
                  <div className="flex gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-2 rounded-lg border text-sm font-medium ${
                          selectedSize === size
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Tamanho M recomendado para você
                  </div>
                </div>
              )}

              {/* Measurements */}
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowMeasurements(!showMeasurements)}
                  className="w-full"
                >
                  <Ruler className="w-4 h-4 mr-2" />
                  {showMeasurements ? 'Ocultar' : 'Ver'} Medidas
                </Button>
                {showMeasurements && (
                  <div className="mt-3 p-3 bg-white rounded-lg border text-xs space-y-1">
                    <div className="flex justify-between">
                      <span>Largura:</span>
                      <span>52cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Comprimento:</span>
                      <span>68cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Manga:</span>
                      <span>22cm</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Adicionar ao Carrinho
                </Button>
                <Button variant="outline" className="w-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Favoritar
                </Button>
              </div>

              {/* AI Recommendations */}
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">IA Stylist</span>
                </div>
                <p className="text-xs text-blue-700">
                  Este item combina perfeitamente com uma calça jeans escura e tênis branco!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}