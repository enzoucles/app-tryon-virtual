"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  Upload, 
  BarChart3, 
  Settings, 
  Users, 
  Package, 
  TrendingUp,
  Eye,
  ShoppingCart,
  Download,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export function BusinessDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'Try-ons Hoje', value: '1,247', change: '+12%', icon: Eye, color: 'text-blue-600' },
    { label: 'Conversões', value: '89', change: '+25%', icon: ShoppingCart, color: 'text-green-600' },
    { label: 'Produtos AR', value: '156', change: '+8', icon: Package, color: 'text-purple-600' },
    { label: 'Receita AR', value: 'R$ 12.4k', change: '+18%', icon: TrendingUp, color: 'text-orange-600' }
  ]

  const products = [
    { id: 1, name: 'Camiseta Básica Preta', category: 'Roupas', status: 'Ativo', tryons: 234, conversions: 18 },
    { id: 2, name: 'Óculos Ray-Ban Aviator', category: 'Óculos', status: 'Ativo', tryons: 189, conversions: 12 },
    { id: 3, name: 'Sofá Moderno Cinza', category: 'Móveis', status: 'Processando', tryons: 67, conversions: 5 },
    { id: 4, name: 'Jaqueta Jeans Azul', category: 'Roupas', status: 'Ativo', tryons: 156, conversions: 9 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Painel Roomify Business</h1>
              <p className="text-gray-600">Gerencie seus produtos AR e acompanhe métricas</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-green-100 text-green-700">
                <CheckCircle className="w-3 h-3 mr-1" />
                Conta Ativa
              </Badge>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Novo Produto AR
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="products">Produtos AR</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="studio">Studio 3D</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className="text-sm text-green-600">{stat.change}</p>
                      </div>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Try-ons por Categoria</CardTitle>
                  <CardDescription>Últimos 30 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Roupas</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="w-24 h-2 bg-purple-600 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Óculos</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">50%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Móveis</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="w-12 h-2 bg-teal-600 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium">38%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conversão AR vs Tradicional</CardTitle>
                  <CardDescription>Comparativo de performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Com AR</span>
                        <span className="text-sm font-bold text-green-600">7.2%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full">
                        <div className="w-3/4 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Sem AR</span>
                        <span className="text-sm font-bold text-gray-600">2.8%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full">
                        <div className="w-1/4 h-3 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <span className="font-bold">+157%</span> de aumento na conversão com AR
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Produtos AR</h2>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Upload className="w-4 h-4 mr-2" />
                Upload Produto
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-900">Produto</th>
                        <th className="text-left p-4 font-medium text-gray-900">Categoria</th>
                        <th className="text-left p-4 font-medium text-gray-900">Status</th>
                        <th className="text-left p-4 font-medium text-gray-900">Try-ons</th>
                        <th className="text-left p-4 font-medium text-gray-900">Conversões</th>
                        <th className="text-left p-4 font-medium text-gray-900">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <div className="font-medium text-gray-900">{product.name}</div>
                          </td>
                          <td className="p-4">
                            <Badge variant="secondary">{product.category}</Badge>
                          </td>
                          <td className="p-4">
                            <Badge className={
                              product.status === 'Ativo' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-yellow-100 text-yellow-700'
                            }>
                              {product.status}
                            </Badge>
                          </td>
                          <td className="p-4 font-medium">{product.tryons}</td>
                          <td className="p-4 font-medium text-green-600">{product.conversions}</td>
                          <td className="p-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Eye className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mapa de Calor - Produtos</CardTitle>
                  <CardDescription>Onde os usuários focam mais</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Área do Produto</span>
                        <span className="text-red-600 font-bold">85%</span>
                      </div>
                      <p className="text-sm text-red-700 mt-1">Foco principal dos usuários</p>
                    </div>
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Botão Comprar</span>
                        <span className="text-orange-600 font-bold">62%</span>
                      </div>
                      <p className="text-sm text-orange-700 mt-1">Alta interação</p>
                    </div>
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Seletor de Cores</span>
                        <span className="text-yellow-600 font-bold">48%</span>
                      </div>
                      <p className="text-sm text-yellow-700 mt-1">Interação moderada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Funil de Conversão</CardTitle>
                  <CardDescription>Jornada do usuário</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Visualizações</span>
                      <span className="font-bold">1,247</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Try-ons AR</span>
                      <span className="font-bold">892 (71%)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Adicionou ao Carrinho</span>
                      <span className="font-bold">234 (26%)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                      <span className="font-medium">Compras</span>
                      <span className="font-bold">89 (38%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Studio 3D Tab */}
          <TabsContent value="studio" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Studio 3D - Criação de Assets</CardTitle>
                <CardDescription>Converta fotos em modelos 3D automaticamente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Upload de Fotos</h3>
                  <p className="text-gray-600 mb-4">
                    Faça upload de 6-12 fotos do produto para gerar modelo 3D automaticamente
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Selecionar Fotos
                  </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Fotogrametria</h4>
                      <p className="text-sm text-gray-600">Reconstrução 3D automática</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Retopologia</h4>
                      <p className="text-sm text-gray-600">Otimização de malha</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <h4 className="font-medium mb-1">Texturas PBR</h4>
                      <p className="text-sm text-gray-600">Materiais realistas</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações da Loja</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="store-name">Nome da Loja</Label>
                    <Input id="store-name" defaultValue="Minha Loja Fashion" />
                  </div>
                  <div>
                    <Label htmlFor="store-url">URL da Loja</Label>
                    <Input id="store-url" defaultValue="https://minhaloja.com" />
                  </div>
                  <div>
                    <Label htmlFor="webhook">Webhook URL</Label>
                    <Input id="webhook" placeholder="https://api.minhaloja.com/webhook" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Integrações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Shopify</div>
                      <div className="text-sm text-gray-600">Sincronização de catálogo</div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Conectado</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">WooCommerce</div>
                      <div className="text-sm text-gray-600">Plugin WordPress</div>
                    </div>
                    <Button size="sm" variant="outline">Conectar</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Magento</div>
                      <div className="text-sm text-gray-600">Extensão e-commerce</div>
                    </div>
                    <Button size="sm" variant="outline">Conectar</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}