import { Search, MessageCircle, ArrowRight, Check, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden shadow-xl">
      <div className="absolute inset-0 z-0 h-full w-full">
        <div 
          className="h-full w-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8HAoCnJoRMro-BCOSN-1imQ-4wE-zChaHAm-g0z4scdMxlIqTLJUfk6YrXppUvKk5LDgkP9NvjGFEky-sMsruCwDgQT0UocpUy2cn01Z8l2P6zPDOWtyZ0KQGhCAEtWJKZe4CCc3G-P6jXX_lwnJyV7Q5bIIowG_zZ-PNg8Hde3PTdT6BRHtBUshEJa0PESWZfawf5VQk8GnWPi-xucWRZGVD1s8sQOmJXU3Un2yZ4D_fattQiUlEhEJb1VgpjX_PeibcSg0En60')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      </div>
      
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 pt-10 pb-2">
        <h2 className="text-white text-xl font-extrabold tracking-tight">Tulip Shop</h2>
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-all hover:bg-white/30">
            <Search className="w-5 h-5" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-all hover:bg-white/30">
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </header>
      
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center pb-8">
        <div className="max-w-[480px] space-y-2">
          <h1 className="text-white text-3xl font-black leading-[1.1] tracking-[-0.033em] @[480px]:text-4xl">
            Fresh Tulips for Your Loved Ones
          </h1>
          <p className="text-white/90 text-sm font-normal leading-relaxed line-clamp-2">
            Hand-picked, farm-fresh bouquets delivered to your doorstep today.
          </p>
        </div>
        
        <div className="mt-4 w-full max-w-xs space-y-2">
          <Link 
            to="/shop"
            className="flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl h-10 bg-primary text-white text-base font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center justify-center gap-2 text-white/70">
            <Check className="w-4 h-4" />
            <span className="text-[10px] font-medium uppercase tracking-widest">Same day delivery available</span>
          </div>
        </div>
      </main>
      
      <div className="absolute bottom-0 left-0 right-0 bg-background-light rounded-t-3xl z-20 overflow-hidden">
        <section className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-zinc-900 text-xl font-bold">Trending Now</h3>
            <Link to="/shop" className="text-primary text-sm font-bold">See all</Link>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            <div className="min-w-[150px] w-[150px] flex-none">
              <div className="aspect-[4/3] rounded-xl bg-gray-200 overflow-hidden mb-2 shadow-sm">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzo0PLiwWnxibjCEwVJuH-uOoci29iJMqdp9JcRPLX4x0hC1A9v9xegaDxQ6XZF9Nys7v0AfYwns0R5FKqqlh3EEuxkyeKXGE_wxpjIvwsSsnX2YFhTyjxUS-RYrmpjll7pQ6CvdqUZarjWcz7odaK5W0LppbH-YPf-70gAONEl8pumLiDJ_p21sqcjdeHcHR4ZiMDLO5qCd0J-ih9l2xgi0spYNhqow42U6YdBxu3Vd2Kxy00W4p2Kg9sGHSRtOjfsrjjEocDSvc" 
                  className="h-full w-full object-cover" 
                  alt="Blushing Love"
                />
              </div>
              <p className="font-bold text-sm truncate">Blushing Love</p>
              <p className="text-primary font-bold text-sm">$34.00</p>
            </div>
            
            <div className="min-w-[150px] w-[150px] flex-none">
              <div className="aspect-[4/3] rounded-xl bg-gray-200 overflow-hidden mb-2 shadow-sm">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgHYorLMYuPaK3k4eUicqWVTzldqUBFRwmJHVUqZjUN7Isq_Vp_4UH9hPgBG53lc5vVpZGDNPeQurcBP9qejtLADIJRsulF3AHNh_cXsbRBLEdl-D7RGXt0VnlRnXESiluJa8bBYe4QhFiNvQi3UPQjYEJXhwUVvtbHWSUjfPF3qyyYgHvsyjENowzI1xPN1d0PmvXR1WWvLLYKKcPTI_AKbfXVFmYIymR8nV1gS2e1V6Ygp5sXMCtTwPzfZLJNKZiGYhlZBz55lY" 
                  className="h-full w-full object-cover" 
                  alt="Golden Sunshine"
                />
              </div>
              <p className="font-bold text-sm truncate">Golden Sunshine</p>
              <p className="text-primary font-bold text-sm">$29.00</p>
            </div>
            
            <div className="min-w-[150px] w-[150px] flex-none">
              <div className="aspect-[4/3] rounded-xl bg-gray-200 overflow-hidden mb-2 shadow-sm">
                <div className="h-full w-full bg-gray-300 flex items-center justify-center text-gray-500">
                  <Flower2 className="w-8 h-8 opacity-50" />
                </div>
              </div>
              <p className="font-bold text-sm truncate">Spring Mix</p>
              <p className="text-primary font-bold text-sm">$45.00</p>
            </div>
          </div>
        </section>
        
        <section className="px-6 pb-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <p className="text-sm text-gray-600">Direct from Dutch farms to your table.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </div>
                <p className="text-sm text-gray-600">7-day freshness guarantee on all bouquets.</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
