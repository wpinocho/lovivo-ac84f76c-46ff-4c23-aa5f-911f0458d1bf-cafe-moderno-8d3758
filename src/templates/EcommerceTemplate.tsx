import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Coffee } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 border-b border-border/50 backdrop-blur-lg bg-background/95 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full gradient-purple-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                <Coffee className="h-6 w-6 text-black" />
              </div>
              <span className="text-2xl font-black text-gradient">CaféGen</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium relative group"
              >
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium relative group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-primary/10 transition-all hover:scale-110"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-5 w-5 text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 gradient-purple-orange text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce-slow">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-4xl font-black text-gradient">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-card/50 border-t border-border/50 py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-purple-orange flex items-center justify-center">
                <Coffee className="h-6 w-6 text-black" />
              </div>
              <span className="text-2xl font-black text-gradient">CaféGen</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Café premium para la nueva generación. Cada taza es una experiencia única.
            </p>
            <SocialLinks />
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4 text-foreground text-lg">Enlaces</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/blog" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-foreground text-lg">Síguenos</h3>
            <p className="text-muted-foreground mb-4">
              Únete a nuestra comunidad y mantente al día con las últimas novedades.
            </p>
            <Button className="gradient-purple-orange text-black font-bold hover:scale-105 transition-transform">
              Suscríbete
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            &copy; 2024 CaféGen. Todos los derechos reservados. Hecho con <span className="text-accent">♥</span> para la Gen Z
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}