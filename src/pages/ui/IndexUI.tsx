import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Coffee, Zap, Heart, Star } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section con animaciones */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-orange-900/20"></div>
        
        {/* Elementos flotantes decorativos */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-glow">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Café Premium para la Gen Z</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="text-gradient animate-fade-in">
                Café que
              </span>
              <br />
              <span className="text-gradient animate-fade-in" style={{ animationDelay: '0.2s' }}>
                te activa
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Bebidas artesanales con vibras únicas. Cada sorbo es una experiencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="gradient-purple-orange text-black font-bold text-lg px-8 py-6 hover:scale-105 transition-transform glow-purple">
                <Coffee className="mr-2 h-5 w-5" />
                Explorar Menú
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-foreground font-bold text-lg px-8 py-6 hover:bg-primary/10 hover:scale-105 transition-transform">
                Ver Ofertas
              </Button>
            </div>
          </div>

          {/* Stats animados */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-4xl font-black text-gradient mb-2">50k+</div>
              <div className="text-sm text-muted-foreground">Cafés servidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-gradient mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Rating promedio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-gradient mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Café premium</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-4">
                <Heart className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Nuestras Colecciones</span>
              </div>
              <h2 className="text-5xl font-black text-gradient mb-4">
                Encuentra tu vibe
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada colección tiene su propia personalidad. ¿Cuál es la tuya?
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <div 
                  key={collection.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-4">
                <Star className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Lo Más Popular</span>
              </div>
              <h2 className="text-5xl font-black text-gradient">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Colección'}` 
                  : 'Nuestros Hits'
                }
              </h2>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-primary/50 hover:bg-primary/10 font-bold"
              >
                Ver Todo
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-card rounded-2xl h-96 animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 animate-fade-in">
              <Coffee className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-xl text-muted-foreground">
                No hay productos disponibles en este momento.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur border border-primary/20 hover-lift card-glow animate-slide-up">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-purple-orange flex items-center justify-center">
                <Zap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Energía Instantánea</h3>
              <p className="text-muted-foreground">Café premium que te activa desde el primer sorbo</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur border border-accent/20 hover-lift card-glow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-pink-purple flex items-center justify-center">
                <Heart className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Hecho con Amor</h3>
              <p className="text-muted-foreground">Cada bebida es preparada con pasión y dedicación</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur border border-secondary/20 hover-lift card-glow animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <Star className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Calidad Premium</h3>
              <p className="text-muted-foreground">Solo usamos los mejores granos del mundo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};