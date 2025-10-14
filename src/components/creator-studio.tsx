"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  Share2, 
  Link, 
  TrendingUp, 
  Users, 
  DollarSign,
  Eye,
  ShoppingBag,
  Plus,
  Edit,
  Copy,
  ExternalLink,
  Palette,
  Shirt,
  Glasses,
  Sofa
} from 'lucide-react'

export function CreatorStudio() {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [lookName, setLookName] = useState('')
  const [lookDescription, setLookDescription] = useState('')

  const products = [
    { id: 1, name: 'Camiseta Básica', category: 'clothes', price: 89, brand: 'Fashion Co', image: '👕' },
    { id: 2, name: 'Calça Jeans', category: 'clothes', price: 199, brand: 'Denim Style', image: '👖' },
    { id: 3, name: 'Tênis Branco', category: 'clothes', price: 299, brand: 'Sport Brand', image: '👟' },
    { id: 4, name: 'Óculos Aviador', category: 'glasses', price: 259, brand: 'Ray-Ban', image: '🕶️' },
    { id: 5, name: 'Relógio Clássico', category: 'clothes', price: 399, brand: 'Time Co', image: '⌚' },
    { id: 6, name: 'Sofá Moderno', category: 'furniture', price: 2999, brand: 'Casa Design', image: '🛋️' }
  ]

  const myLooks = [
    {
      id: 1,
      name: 'Look Casual Urbano',
      items: 3,
      views: 1247,
      clicks: 89,
      commission: 156.80,
      status: 'Ativo'
    },
    {
      id: 2,
      name: 'Escritório Elegante',
      items: 4,
      views: 892,
      clicks: 67,
      commission: 234.50,
      status: 'Ativo'
    },
    {
      id: 3,
      name: 'Weekend Relax',
      items: 2,
      views: 456,
      clicks: 23,
      commission: 78.90,
      status: 'Rascunho'
    }
  ]

  const toggleItemSelection = (itemId: number) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const getTotalPrice = () => {
    return selectedItems.reduce((total, itemId) => {
      const item = products.find(p => p.id === itemId)
      return total + (item?.price || 0)
    }, 0)
  }

  const getCommissionEstimate = () => {
    return getTotalPrice() * 0.08 // 8% commission
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'clothes': return <Shirt className="w-4 h-4" />
      case 'glasses': return <Glasses className="w-4 h-4" />
      case 'furniture': return <Sofa className="w-4 h-4" />
      default: return <ShoppingBag className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Creator Studio</h1>
              <p className="text-gray-600">Monte looks incríveis e ganhe comissão</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-teal-100 text-teal-700">
                <TrendingUp className="w-3 h-3 mr-1" />
                Creator Ativo
              </Badge>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Plus className="w-4 h-4 mr-2" />
                Novo Look
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Look Builder */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">2.6k</div>
                  <div className="text-sm text-gray-600">Visualizações</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">189</div>
                  <div className="text-sm text-gray-600">Seguidores</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <ShoppingBag className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">67</div>
                  <div className="text-sm text-gray-600">Vendas</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <DollarSign className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">R$ 470</div>
                  <div className="text-sm text-gray-600">Comissão</div>
                </CardContent>
              </Card>
            </div>

            {/* Look Builder */}
            <Card>
              <CardHeader>
                <CardTitle>Criar Novo Look</CardTitle>
                <CardDescription>Selecione produtos e monte combinações incríveis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Look Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="look-name">Nome do Look</Label>
                    <Input 
                      id="look-name" 
                      placeholder="Ex: Look Casual de Verão"
                      value={lookName}
                      onChange={(e) => setLookName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="look-category">Categoria</Label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Casual</option>
                      <option>Formal</option>
                      <option>Esportivo</option>
                      <option>Festa</option>
                      <option>Trabalho</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="look-description">Descrição</Label>
                  <Textarea 
                    id="look-description"
                    placeholder="Descreva o look e dê dicas de como usar..."
                    value={lookDescription}
                    onChange={(e) => setLookDescription(e.target.value)}
                  />
                </div>

                {/* Product Selection */}
                <div>
                  <h4 className="font-medium mb-3">Selecionar Produtos</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => toggleItemSelection(product.id)}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedItems.includes(product.id)
                            ? 'border-teal-500 bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">{product.image}</div>
                          <div className="font-medium text-sm">{product.name}</div>
                          <div className="text-xs text-gray-500">{product.brand}</div>
                          <div className="text-sm font-semibold text-teal-600">R$ {product.price}</div>
                          <div className="flex items-center justify-center mt-1">
                            {getCategoryIcon(product.category)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selected Items Summary */}
                {selectedItems.length > 0 && (
                  <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <h4 className="font-medium mb-2">Resumo do Look</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Itens selecionados:</span>
                        <span className="font-medium">{selectedItems.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Valor total:</span>
                        <span className="font-medium">R$ {getTotalPrice()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Comissão estimada (8%):</span>
                        <span className="font-medium text-teal-600">R$ {getCommissionEstimate().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button className="bg-teal-600 hover:bg-teal-700" disabled={selectedItems.length === 0}>
                    Criar Look
                  </Button>
                  <Button variant="outline">
                    Salvar Rascunho
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* My Looks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Meus Looks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {myLooks.map((look) => (
                  <div key={look.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{look.name}</h4>
                      <Badge className={
                        look.status === 'Ativo' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }>
                        {look.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>{look.items} itens</span>
                        <span>{look.views} views</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{look.clicks} cliques</span>
                        <span className="text-teal-600 font-medium">R$ {look.commission}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="w-3 h-3 mr-1" />
                        Editar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Link className="w-4 h-4 mr-2" />
                  Gerar Link Shoppável
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar Look
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver no AR
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Palette className="w-4 h-4 mr-2" />
                  Personalizar Cores
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dicas de Creator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-medium text-blue-800 mb-1">💡 Combine categorias</div>
                  <div className="text-blue-700">Looks com roupas + acessórios têm 40% mais engajamento</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-medium text-green-800 mb-1">📈 Use descrições</div>
                  <div className="text-green-700">Looks com descrições detalhadas convertem 25% mais</div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="font-medium text-purple-800 mb-1">🎯 Seja específico</div>
                  <div className="text-purple-700">Mencione ocasiões e estilos para melhor descoberta</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}