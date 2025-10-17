import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-card border-border/50 overflow-hidden hover-lift card-glow group transition-all duration-300">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden relative">
          {collection.image ? (
            <>
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}

          {/* Featured badge */}
          {collection.featured && (
            <div className="absolute top-4 right-4">
              <span className="gradient-purple-orange text-black text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1 animate-bounce-slow">
                <Sparkles className="h-3 w-3" />
                Destacado
              </span>
            </div>
          )}

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white font-black text-2xl mb-2 group-hover:text-primary transition-colors">
              {collection.name}
            </h3>
            {collection.description && (
              <p className="text-white/80 text-sm line-clamp-2 mb-4">
                {collection.description}
              </p>
            )}
            <Button 
              className="gradient-purple-orange text-black font-bold hover:scale-105 transition-transform w-full group"
              onClick={() => onViewProducts(collection.id)}
            >
              Explorar
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}