import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import { ShoppingCart, Sparkles } from "lucide-react"
import type { Product } from "@/lib/supabase"

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-card border-border/50 overflow-hidden hover-lift card-glow group transition-all duration-300">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-muted rounded-t-xl overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    No image
                  </div>
                )}

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && (
                    <span className="bg-accent text-black text-xs px-3 py-1 rounded-full font-bold animate-bounce-slow">
                      -{logic.discountPercentage}%
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="gradient-purple-orange text-black text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Popular
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full font-bold">
                      Agotado
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-foreground font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </div>
            </Link>

            {logic.hasVariants && logic.options && (
              <div className="px-4 pb-3 space-y-2">
                {logic.options.map((opt) => (
                  <div key={opt.id}>
                    <div className="text-xs font-bold text-muted-foreground mb-2">{opt.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                        const isSelected = logic.selected[opt.name] === val
                        const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                        if (swatch) {
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              title={`${opt.name}: ${val}`}
                              className={`h-7 w-7 rounded-full border-2 transition-all ${
                                isSelected 
                                  ? 'border-primary scale-110' 
                                  : 'border-border hover:border-primary/50'
                              }`}
                              style={{ backgroundColor: swatch }}
                              aria-label={`${opt.name}: ${val}`}
                            />
                          )
                        }

                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => logic.handleOptionChange(opt.name, val)}
                            className={`border rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                              isSelected 
                                ? 'gradient-purple-orange text-black border-transparent' 
                                : 'border-border bg-card text-foreground hover:border-primary/50'
                            }`}
                            aria-pressed={isSelected}
                            aria-label={`${opt.name}: ${val}`}
                            title={`${opt.name}: ${val}`}
                          >
                            {val}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between p-4 pt-0">
              <div className="flex flex-col">
                <span className="text-foreground font-black text-xl">
                  {logic.formatMoney(logic.currentPrice)}
                </span>
                {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                  <span className="text-muted-foreground text-sm line-through">
                    {logic.formatMoney(logic.currentCompareAt)}
                  </span>
                )}
              </div>
              <Button
                size="sm"
                onClick={() => {
                  logic.onAddToCartSuccess()
                  logic.handleAddToCart()
                }}
                disabled={!logic.canAddToCart}
                className="gradient-purple-orange text-black font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                {logic.inStock ? 'Agregar' : 'Agotado'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}