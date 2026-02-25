import { ShoppingBag, Flower2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BOUQUETS = [
  {
    id: 1,
    name: '51 Pink Parrots',
    price: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnxf9EwEeSfiRuSoF0RrAsOMw3tz0yx968qWZeJu2xRUkb4eUxqGVwk3pLh4VlYsk7aQXTyu8qCBgCtBn-WkfivND-8EiA_ZAv0u84tgvPXYyu0q0lC70oGV8kEWV_cSY0O2OOBvOUsKBkPc0VOjlD6iIv2khn0HHblPqYJfQ_gxeyQktrAn-cKopXE2xrXoXS62T6vKI4FNPAKhOpZ-mAcKcDF181US4MMHOJELr1PfYPT_pF7gwtxDHmvHTYkGIxyQFKCmRvJU4'
  },
  {
    id: 2,
    name: '35 Red Emperors',
    price: 65,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn7D6hvxC7LL6BHwiQs4KwSmyfVfuVZsKCqoJnUq4n9jUOLfj9B0KnkczVOu3tNir7RfirYLmYj6vlje-IkDVm50dttyT19oqvj27d6K2JUVCBYOa8CCNf5sa2P5B_BL6O5s0HWM9oz8jud1BQQzSzKAjaVCUvwIElnadPwTChvrQbYJRUbq_RTHv-DZr7ufIJYkQOAOYpWIhbMGCXB-hcpPYamQNZAywriEkaumCRtj2RBJ68WEjUkxXfUJgVg_oCVls5onHwNTg'
  },
  {
    id: 3,
    name: '41 Yellow Suns',
    price: 75,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv2Hxth85v8SnzT4Id3br6wma1uU3JPaYjOXAUHYxGONaWDzqVX-LxYxJlXYyGBEasHtVZ9gJ4QfgEGAE54yNUX3c8ENNVXbNP-OACkbav6lBZJ30Txk_swjxulWYU2MYEev_yi9x8GE1vkYTaeUZ1TXSqraRj6bUuOqiysRQRN23qAc70f6SVsgufpqqPTezRMAkJSbt5j6V6KGQMiL1tHUcCCW5MyFhkyE3Pf8noNSGq15qHkipqWmRA4h2RP9c-refgYbqVqfk'
  },
  {
    id: 4,
    name: '25 White Lilies',
    price: 49,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzJ6Ke-BgrxX50HJtQtBc_kr-DptlNXAGSaZCuJE_7OtBG4c22AHx6TezGqGXJD6bRfFEBXOJC_KN9a_4m9eil2TNk-8yGGnSwHEp8a8xEEV2EX3-l1Rt_kx8Lwroi4hTA1zoRyLov60Ca-xiE-jIo9R0Tlc_SITwgoXNy5K0Uqd9yXKYb-Zky9W6XSMjS2St916RhjvF4wqu4oybQCvtQAdVhBttcFdgrjT5CnfwS32cScTcrO2Ts-OlIg6cJwQEAQmI3DsJ7UzI'
  },
  {
    id: 5,
    name: '55 Purple Dreams',
    price: 95,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtPu93wHcp6pYOO2W-9A53eWhHQ28I7_dQ_Wd-P6xyUHSThYFcnuH9VH15YFq7hD5tVSZmE3GS1gOXAhTbkXgGMLMeX0rrNlikfFu5F8xuHuUqMxubSb6e-DRzAEncaRB-E7Yu_jhuTjTV7fuxubQPz5_5Ej_y4VmzlmpZej1pRfsxzn8hzqVryBrM3LXHUwmupMAYtpewx2EX3Zmfw3-O7WSrVx2BOpTvUWoY7YUE1EfxdCVAbjDcFkfO2fkqDUyVF0lTHujWMxc'
  },
  {
    id: 6,
    name: '101 Mixed Joy',
    price: 150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATCALdBLQFYdhNjnenCriTU68qXmRE9PSFp1OLdmPgyhD5jpvIHU1DmG60zsNuhDTi-m7lyoIdwuPNjxd-sT569SPYWYdchKm13aFwUclC_nL_fNzxM1ozmToLAExIcqRoeajHL2E0q2r742xQhHDPTzDWsjsvtlOcyfFzadpz_BpYJpx-IurD1gUshNF7jgRGYXnRXTXOzfGyILjv2wWq-5n8yYlUPgi9XQGCDU6NjcOU0Oxaso8bJaEsuwZtF7VSDPc-DJjw1E0'
  }
];

export function Shop() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 flex items-center bg-white/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-zinc-100">
        <div className="text-primary flex size-10 shrink-0 items-center justify-center">
          <Flower2 className="w-8 h-8" />
        </div>
        <h2 className="text-zinc-900 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Fresh Tulips</h2>
        <div className="flex w-10 items-center justify-end">
          <Link to="/basket" className="relative flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-zinc-900">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white font-bold">2</span>
          </Link>
        </div>
      </header>
      
      <div className="flex gap-3 px-4 pt-4 pb-2 overflow-x-auto no-scrollbar">
        <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary px-5 shadow-sm">
          <p className="text-white text-sm font-semibold">All Flowers</p>
        </div>
        {['Red', 'Yellow', 'Pink', 'Mixed'].map(filter => (
          <div key={filter} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white border border-zinc-100 px-5">
            <p className="text-zinc-900 text-sm font-medium">{filter}</p>
          </div>
        ))}
      </div>
      
      <div className="flex gap-2 px-4 pb-4 pt-1 overflow-x-auto no-scrollbar">
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary bg-primary/10 px-4">
          <p className="text-primary text-xs font-semibold">5 Tulips</p>
        </div>
        {['11', '13', '15', '21', '31', '51', '101'].map(size => (
          <div key={size} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full border border-zinc-200 bg-transparent px-4">
            <p className="text-zinc-600 text-xs font-medium">{size} Tulips</p>
          </div>
        ))}
      </div>
      
      <div className="px-4 py-2">
        <h1 className="text-2xl font-extrabold tracking-tight">Today's Selection</h1>
        <p className="text-zinc-500 text-sm">Freshly picked from the valley</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 p-4">
        {BOUQUETS.map(bouquet => (
          <div key={bouquet.id} className="flex flex-col gap-3 pb-4 bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100">
            <div 
              className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover" 
              style={{ backgroundImage: `url("${bouquet.image}")` }}
            />
            <div className="px-3 pb-3 flex flex-col gap-1">
              <p className="text-zinc-900 text-[15px] font-bold leading-tight">{bouquet.name}</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-primary text-base font-bold">${bouquet.price}</p>
                <button className="bg-primary text-white rounded-lg px-3 py-1.5 text-xs font-bold active:scale-95 transition-transform">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="fixed bottom-24 right-4 z-[60] flex flex-col items-end gap-2">
        <div className="bg-white border border-zinc-100 px-3 py-1 rounded-lg shadow-lg text-xs font-medium text-primary">
          Chat with our florist
        </div>
        <button className="flex items-center justify-center rounded-full w-14 h-14 bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-90 transition-transform">
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
