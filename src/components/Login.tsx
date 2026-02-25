import { Flower2, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light">
      <header className="relative px-6 pt-12 pb-8 bg-white rounded-b-[2rem] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] z-10">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full p-1 border-2 border-primary/20 flex items-center justify-center bg-zinc-50">
              <User className="w-12 h-12 text-zinc-300" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 mb-1">Welcome, Guest</h1>
          <p className="text-zinc-500 text-sm">Join us to manage your floral experience</p>
        </div>
      </header>

      <main className="flex-1 px-6 py-8 flex flex-col justify-center items-center pb-32">
        <section className="w-full max-w-sm">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent-green/20 rounded-tr-full -ml-6 -mb-6"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto bg-primary-light rounded-full flex items-center justify-center mb-4 text-primary">
                <Flower2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-zinc-900">Track orders & more</h2>
              <p className="text-zinc-500 leading-relaxed mt-2">
                Sign in to see your profile, track your tulip deliveries, and access exclusive member offers.
              </p>
            </div>
            
            <div className="pt-2 relative z-10">
              <Link 
                to="/profile"
                className="w-full bg-white hover:bg-zinc-50 text-zinc-700 font-medium py-3.5 px-4 rounded-xl border border-zinc-200 shadow-sm transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Sign in with Google
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
