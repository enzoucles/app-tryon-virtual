"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ARDemo } from '@/components/ar-demo'
import { BusinessDashboard } from '@/components/business-dashboard'
import { CreatorStudio } from '@/components/creator-studio'
import { 
  Camera, 
  Smartphone, 
  Glasses, 
  Sofa, 
  Shirt, 
  TrendingUp, 
  Users, 
  ShoppingBag,
  Zap,
  Eye,
  Home,
  Palette,
  BarChart3,
  Shield,
  Globe,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Menu,
  X
} from 'lucide-react'

export default function RoomifyHome() {
  const [activeDemo, setActiveDemo] = useState<'clothes' | 'glasses' | 'furniture'>('clothes')
  const [currentView, setCurrentView] = useState<'home' | 'ar-demo' | 'business' | 'creator'>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const renderCurrentView = () => {
    switch (currentView) {
      case 'ar-demo':
        return <ARDemo category={activeDemo} />
      case 'business':
        return <BusinessDashboard />
      case 'creator':
        return <CreatorStudio />
      default:
        return renderHomePage()
    }
  }

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
            🚀 Revolucione suas vendas com AR
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Experimente Antes<br />de Comprar
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Plataforma de realidade aumentada que permite experimentar roupas, óculos e móveis virtualmente. 
            Reduza devoluções em 15%, aumente conversões em 25% e o ticket médio em 10%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6"
              onClick={() => setCurrentView('ar-demo')}
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Demo Interativa
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Smartphone className="w-5 h-5 mr-2" />
              Baixar App
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">+25%</div>
              <div className="text-gray-600">Conversão</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">-15%</div>
              <div className="text-gray-600">Devoluções</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">+10%</div>
              <div className="text-gray-600">Ticket Médio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">&lt;3s</div>
              <div className="text-gray-600">Time to Try</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Experimente Agora</h2>
            <p className="text-xl text-gray-600">Veja como funciona em tempo real</p>
          </div>

          <Tabs value={activeDemo} onValueChange={(value) => setActiveDemo(value as any)} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="clothes" className="flex items-center gap-2">
                <Shirt className="w-4 h-4" />
                Roupas
              </TabsTrigger>
              <TabsTrigger value="glasses" className="flex items-center gap-2">
                <Glasses className="w-4 h-4" />
                Óculos
              </TabsTrigger>
              <TabsTrigger value="furniture" className="flex items-center gap-2">
                <Sofa className="w-4 h-4" />
                Móveis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="clothes" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">Try-on de Roupas</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Estimativa de medidas com 2 fotos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Simulação de caimento realista</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Recomendação de tamanho por marca</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Mix & match completo</span>
                    </div>
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-blue-600"
                    onClick={() => setCurrentView('ar-demo')}
                  >
                    Experimentar Roupas
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Shirt className="w-24 h-24 text-purple-600 mx-auto mb-4" />
                    <p className="text-gray-600">Demo Interativo de Roupas</p>
                    <p className="text-sm text-gray-500 mt-2">Câmera AR simulada</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="glasses" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">Try-on de Óculos</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Face tracking 60 fps</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Cálculo automático de PD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Oclusão nasal perfeita</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Reflexos de luz ambiente</span>
                    </div>
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-blue-600"
                    onClick={() => {
                      setActiveDemo('glasses')
                      setCurrentView('ar-demo')
                    }}
                  >
                    Experimentar Óculos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Glasses className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">Demo Interativo de Óculos</p>
                    <p className="text-sm text-gray-500 mt-2">Face tracking simulado</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="furniture" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">Try-on de Móveis</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Escaneamento de ambiente</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Escala 1:1 precisa</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Sombras em tempo real</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Room sets completos</span>
                    </div>
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-blue-600"
                    onClick={() => {
                      setActiveDemo('furniture')
                      setCurrentView('ar-demo')
                    }}
                  >
                    Experimentar Móveis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Sofa className="w-24 h-24 text-teal-600 mx-auto mb-4" />
                    <p className="text-gray-600">Demo Interativo de Móveis</p>
                    <p className="text-sm text-gray-500 mt-2">AR ambiente simulado</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recursos Avançados</h2>
            <p className="text-xl text-gray-600">Tecnologia de ponta para experiências realistas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Eye className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>IA Stylist</CardTitle>
                <CardDescription>
                  Conjuntos completos por ocasião, clima e seu closet pessoal
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>Performance Extrema</CardTitle>
                <CardDescription>
                  Latência &lt;150ms, inicialização &lt;3s, tracking 60fps
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Palette className="w-12 h-12 text-teal-600 mb-4" />
                <CardTitle>Cores Calibradas</CardTitle>
                <CardDescription>
                  Luz ambiente real, materiais PBR, cores fiéis à realidade
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-indigo-600 mb-4" />
                <CardTitle>Analytics Avançado</CardTitle>
                <CardDescription>
                  Mapas de calor, funil de conversão, A/B tests em 3 cliques
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Privacidade Total</CardTitle>
                <CardDescription>
                  Processamento local, GDPR/LGPD, consentimento granular
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>WebAR Embeds</CardTitle>
                <CardDescription>
                  Integre try-on em qualquer site sem instalar app
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Para Todos os Públicos</h2>
            <p className="text-xl text-gray-600">Soluções personalizadas para cada necessidade</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardHeader className="text-center">
                <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Consumidores</CardTitle>
                <CardDescription className="text-lg">
                  Experimente antes de comprar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Caimento realista</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Medidas confiáveis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Comparação rápida</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Cores fiéis</span>
                </div>
                <Button 
                  className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
                  onClick={() => setCurrentView('ar-demo')}
                >
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader className="text-center">
                <ShoppingBag className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Marcas & Lojas</CardTitle>
                <CardDescription className="text-lg">
                  Aumente suas vendas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Integração simples</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Studio 3D automático</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Métricas detalhadas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>A/B tests fáceis</span>
                </div>
                <Button 
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700"
                  onClick={() => setCurrentView('business')}
                >
                  Solicitar Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 hover:border-teal-400 transition-colors">
              <CardHeader className="text-center">
                <TrendingUp className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Criadores</CardTitle>
                <CardDescription className="text-lg">
                  Monetize seu estilo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Monte looks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Links shoppáveis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Comissão automática</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Analytics pessoais</span>
                </div>
                <Button 
                  className="w-full mt-6 bg-teal-600 hover:bg-teal-700"
                  onClick={() => setCurrentView('creator')}
                >
                  Virar Criador
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Preços Transparentes</h2>
            <p className="text-xl text-gray-600">Escolha o plano ideal para você</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Freemium</CardTitle>
                <div className="text-4xl font-bold text-purple-600 mt-4">Grátis</div>
                <CardDescription className="mt-2">Para consumidores</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Try-on básico</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>5 looks por mês</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Compartilhamento</span>
                </div>
                <Button className="w-full mt-6" variant="outline">
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600 text-white">Mais Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="text-4xl font-bold text-purple-600 mt-4">R$ 29</div>
                <CardDescription className="mt-2">por mês</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Closet IA ilimitado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Looks ilimitados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Recomendações premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Suporte prioritário</span>
                </div>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                  Assinar Pro
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Business</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mt-4">Custom</div>
                <CardDescription className="mt-2">Para empresas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>SaaS por MAU</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Studio 3D</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Analytics avançado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Suporte dedicado</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Falar com Vendas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Revolucionar suas Vendas?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de marcas que já aumentaram suas conversões com Roomify
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => setCurrentView('ar-demo')}
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Demo Completa
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Roomify</span>
              </div>
              <p className="text-gray-400">
                Plataforma de AR que revoluciona o e-commerce com try-on virtual.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <div className="space-y-2 text-gray-400">
                <div>Recursos</div>
                <div>Preços</div>
                <div>API</div>
                <div>Documentação</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <div className="space-y-2 text-gray-400">
                <div>Sobre</div>
                <div>Blog</div>
                <div>Carreiras</div>
                <div>Contato</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <div className="space-y-2 text-gray-400">
                <div>Central de Ajuda</div>
                <div>Status</div>
                <div>Privacidade</div>
                <div>Termos</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Roomify. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <button 
              onClick={() => setCurrentView('home')}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Roomify
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setCurrentView('home')}
              className={`transition-colors ${currentView === 'home' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
            >
              Início
            </button>
            <button 
              onClick={() => setCurrentView('ar-demo')}
              className={`transition-colors ${currentView === 'ar-demo' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
            >
              Demo AR
            </button>
            <button 
              onClick={() => setCurrentView('business')}
              className={`transition-colors ${currentView === 'business' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
            >
              Business
            </button>
            <button 
              onClick={() => setCurrentView('creator')}
              className={`transition-colors ${currentView === 'creator' ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'}`}
            >
              Creator
            </button>
            <Button variant="outline" className="mr-2">Entrar</Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Começar Grátis
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => {
                  setCurrentView('home')
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left transition-colors ${currentView === 'home' ? 'text-purple-600' : 'text-gray-600'}`}
              >
                Início
              </button>
              <button 
                onClick={() => {
                  setCurrentView('ar-demo')
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left transition-colors ${currentView === 'ar-demo' ? 'text-purple-600' : 'text-gray-600'}`}
              >
                Demo AR
              </button>
              <button 
                onClick={() => {
                  setCurrentView('business')
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left transition-colors ${currentView === 'business' ? 'text-purple-600' : 'text-gray-600'}`}
              >
                Business
              </button>
              <button 
                onClick={() => {
                  setCurrentView('creator')
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left transition-colors ${currentView === 'creator' ? 'text-purple-600' : 'text-gray-600'}`}
              >
                Creator
              </button>
              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1">Entrar</Button>
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600">
                  Começar
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      {currentView !== 'home' && (
        <div className="p-4">
          <Button 
            variant="outline" 
            onClick={() => setCurrentView('home')}
            className="mb-4"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Voltar ao Início
          </Button>
        </div>
      )}

      {renderCurrentView()}
    </div>
  )
}