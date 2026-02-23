import { Link } from 'react-router-dom';
import CheckoutModal from '../components/CheckoutModal';

const BOUQUETS = [
  { id: 1, name: '51 Pink Parrots', price: 89, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnxf9EwEeSfiRuSoF0RrAsOMw3tz0yx968qWZeJu2xRUkb4eUxqGVwk3pLh4VlYsk7aQXTyu8qCBgCtBn-WkfivND-8EiA_ZAv0u84tgvPXYyu0q0lC70oGV8kEWV_cSY0O2OOBvOUsKBkPc0VOjlD6iIv2khn0HHblPqYJfQ_gxeyQktrAn-cKopXE2xrXoXS62T6vKI4FNPAKhOpZ-mAcKcDF181US4MMHOJELr1PfYPT_pF7gwtxDHmvHTYkGIxyQFKCmRvJU4' },
  { id: 2, name: '35 Red Emperors', price: 65, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn7D6hvxC7LL6BHwiQs4KwSmyfVfuVZsKCqoJnUq4n9jUOLfj9B0KnkczVOu3tNir7RfirYLmYj6vlje-IkDVm50dttyT19oqvj27d6K2JUVCBYOa8CCNf5sa2P5B_BL6O5s0HWM9oz8jud1BQQzSzKAjaVCUvwIElnadPwTChvrQbYJRUbq_RTHv-DZr7ufIJYkQOAOYpWIhbMGCXB-hcpPYamQNZAywriEkaumCRtj2RBJ68WEjUkxXfUJgVg_oCVls5onHwNTg' },
  { id: 3, name: '41 Yellow Suns', price: 75, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv2Hxth85v8SnzT4Id3br6wma1uU3JPaYjOXAUHYxGONaWDzqVX-LxYxJlXYyGBEasHtVZ9gJ4QfgEGAE54yNUX3c8ENNVXbNP-OACkbav6lBZJ30Txk_swjxulWYU2MYEev_yi9x8GE1vkYTaeUZ1TXSqraRj6bUuOqiysRQRN23qAc70f6SVsgufpqqPTezRMAkJSbt5j6V6KGQMiL1tHUcCCW5MyFhkyE3Pf8noNSGq15qHkipqWmRA4h2RP9c-refgYbqVqfk' },
  { id: 4, name: '25 White Lilies', price: 49, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzJ6Ke-BgrxX50HJtQtBc_kr-DptlNXAGSaZCuJE_7OtBG4c22AHx6TezGqGXJD6bRfFEBXOJC_KN9a_4m9eil2TNk-8yGGnSwHEp8a8xEEV2EX3-l1Rt_kx8Lwroi4hTA1zoRyLov60Ca-xiE-jIo9R0Tlc_SITwgoXNy5K0Uqd9yXKYb-Zky9W6XSMjS2St916RhjvF4wqu4oybQCvtQAdVhBttcFdgrjT5CnfwS32cScTcrO2Ts-OlIg6cJwQEAQmI3DsJ7UzI' },
  { id: 5, name: '55 Purple Dreams', price: 95, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtPu93wHcp6pYOO2W-9A53eWhHQ28I7_dQ_Wd-P6xyUHSThYFcnuH9VH15YFq7hD5tVSZmE3GS1gOXAhTbkXgGMLMeX0rrNlikfFu5F8xuHuUqMxubSb6e-DRzAEncaRB-E7Yu_jhuTjTV7fuxubQPz5_5Ej_y4VmzlmpZej1pRfsxzn8hzqVryBrM3LXHUwmupMAYtpewx2EX3Zmfw3-O7WSrVx2BOpTvUWoY7YUE1EfxdCVAbjDcFkfO2fkqDUyVF0lTHujWMxc' },
  { id: 6, name: '101 Mixed Joy', price: 150, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATCALdBLQFYdhNjnenCriTU68qXmRE9PSFp1OLdmPgyhD5jpvIHU1DmG60zsNuhDTi-m7lyoIdwuPNjxd-sT569SPYWYdchKm13aFwUclC_nL_fNzxM1ozmToLAExIcqRoeajHL2E0q2r742xQhHDPTzDWsjsvtlOcyfFzadpz_BpYJpx-IurD1gUshNF7jgRGYXnRXTXOzfGyILjv2wWq-5n8yYlUPgi9XQGCDU6NjcOU0Oxaso8bJaEsuwZtF7VSDPc-DJjw1E0' },
];

export default function Home({ showCheckout = false }: { showCheckout?: boolean }) {
  return (
    <div className="relative flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative flex h-[60vh] w-full flex-col overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8HAoCnJoRMro-BCOSN-1imQ-4wE-zChaHAm-g0z4scdMxlIqTLJUfk6YrXppUvKk5LDgkP9NvjGFEky-sMsruCwDgQT0UocpUy2cn01Z8l2P6zPDOWtyZ0KQGhCAEtWJKZe4CCc3G-P6jXX_lwnJyV7Q5bIIowG_zZ-PNg8Hde3PTdT6BRHtBUshEJa0PESWZfawf5VQk8GnWPi-xucWRZGVD1s8sQOmJXU3Un2yZ4D_fattQiUlEhEJb1VgpjX_PeibcSg0En60')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
        </div>
        
        <header className="relative z-20 flex items-center justify-between px-6 pt-12 pb-4">
          <h2 className="text-white text-xl font-extrabold tracking-tight">Tulip Shop</h2>
          <div className="flex items-center gap-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-all hover:bg-white/30">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-all hover:bg-white/30">
              <span className="material-symbols-outlined">chat</span>
            </button>
          </div>
        </header>

        <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
          <div className="max-w-[480px] space-y-4">
            <h1 className="text-white text-5xl font-black leading-[1.1] tracking-[-0.033em]">
              Fresh Tulips for Your Loved Ones
            </h1>
            <p className="text-white/90 text-lg font-normal leading-relaxed">
              Hand-picked, farm-fresh bouquets delivered to your doorstep today. Bring the beauty of spring home.
            </p>
          </div>
          <div className="mt-10 w-full max-w-xs space-y-4">
            <button className="flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl h-14 bg-primary text-white text-lg font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20">
              <span>Shop Now</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <div className="flex items-center justify-center gap-2 text-white/70">
              <span className="material-symbols-outlined text-sm">local_shipping</span>
              <span className="text-xs font-medium uppercase tracking-widest">Same day delivery available</span>
            </div>
          </div>
        </main>
      </div>

      {/* Catalog Section */}
      <div className="bg-background-light pt-6 rounded-t-3xl -mt-6 relative z-30">
        <div className="flex gap-3 px-4 pb-2 overflow-x-auto no-scrollbar">
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary px-5 shadow-sm">
            <p className="text-white text-sm font-semibold">All Flowers</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white border border-[#f4f0f2] px-5">
            <p className="text-[#181113] text-sm font-medium">Red</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white border border-[#f4f0f2] px-5">
            <p className="text-[#181113] text-sm font-medium">Yellow</p>
          </div>
          <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white border border-[#f4f0f2] px-5">
            <p className="text-[#181113] text-sm font-medium">Pink</p>
          </div>
        </div>

        <div className="px-4 py-4">
          <h1 className="text-2xl font-extrabold tracking-tight">Today's Selection</h1>
          <p className="text-[#89616f] text-sm">Freshly picked from the valley</p>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4">
          {BOUQUETS.map((bouquet) => (
            <div key={bouquet.id} className="flex flex-col gap-3 pb-4 bg-white rounded-2xl overflow-hidden shadow-sm border border-[#f4f0f2]">
              <div className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover" style={{ backgroundImage: `url(${bouquet.image})` }}></div>
              <div className="px-3 pb-3 flex flex-col gap-1">
                <p className="text-[#181113] text-[15px] font-bold leading-tight">{bouquet.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-primary text-base font-bold">${bouquet.price}</p>
                  <Link to="/checkout" className="bg-primary text-white rounded-lg px-3 py-1.5 text-xs font-bold active:scale-95 transition-transform">Buy</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showCheckout && <CheckoutModal />}
    </div>
  );
}
