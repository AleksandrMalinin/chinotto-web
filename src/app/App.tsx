import { ChinottoLogo } from "./components/ChinottoLogo";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0e' }}>
      {/* Header */}
      <header className="py-6 px-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ChinottoLogo size={32} className="text-[#8a94c8]" />
            <span className="text-lg font-light" style={{ color: '#e4e4e9' }}>Chinotto</span>
          </div>
          <button 
            className="px-6 py-2 rounded-full font-light transition-colors"
            style={{ 
              backgroundColor: '#8a94c8',
              color: '#0a0a0e'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9ba4d8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8a94c8'}
          >
            Download
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <ChinottoLogo size={120} className="text-[#8a94c8]" />
          </div>
          <h1 className="text-6xl font-light tracking-tight mb-6" style={{ color: '#e4e4e9' }}>
            Capture thoughts.<br />Recover context.
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#9b9fa9' }}>
            A minimal desktop thinking tool for instantly capturing thoughts and recovering context later. 
            No organization required.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              className="px-8 py-3 rounded-full text-lg font-light transition-colors"
              style={{ 
                backgroundColor: '#8a94c8',
                color: '#0a0a0e'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9ba4d8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8a94c8'}
            >
              Get Started
            </button>
            <button 
              className="px-8 py-3 rounded-full text-lg font-light transition-colors"
              style={{ 
                backgroundColor: 'transparent',
                color: '#9b9fa9',
                border: '1px solid #5d6068'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#9b9fa9'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#5d6068'}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Floating blobs decoration */}
      <div className="relative max-w-6xl mx-auto h-64 mb-20">
        <div 
          className="absolute top-0 left-1/4 w-32 h-32 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: '#7C3AED' }}
        />
        <div 
          className="absolute top-20 right-1/4 w-40 h-40 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: '#06B6D4' }}
        />
        <div 
          className="absolute top-10 left-1/2 w-36 h-36 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: '#F97316' }}
        />
      </div>

      {/* Features Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16" style={{ color: '#e4e4e9' }}>
            Built for thinkers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div 
              className="p-8 rounded-3xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(100,120,180,0.1), rgba(80,100,150,0.1))',
                border: '1px solid rgba(139, 148, 200, 0.1)'
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(138, 148, 200, 0.15)' }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="10" stroke="#8a94c8" strokeWidth="2" />
                  <circle cx="16" cy="16" r="3" fill="#8a94c8" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-3" style={{ color: '#e4e4e9' }}>
                Instant Capture
              </h3>
              <p style={{ color: '#9b9fa9' }}>
                Drop thoughts as they come. No folders, tags, or structure needed upfront.
              </p>
            </div>

            {/* Feature 2 */}
            <div 
              className="p-8 rounded-3xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(100,120,180,0.1), rgba(80,100,150,0.1))',
                border: '1px solid rgba(139, 148, 200, 0.1)'
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(138, 148, 200, 0.15)' }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="12" cy="12" r="4" fill="#8a94c8" />
                  <circle cx="20" cy="20" r="4" fill="#8a94c8" />
                  <line x1="15" y1="15" x2="17" y2="17" stroke="#8a94c8" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-3" style={{ color: '#e4e4e9' }}>
                Recover Context
              </h3>
              <p style={{ color: '#9b9fa9' }}>
                Find related thoughts and rebuild your thinking flow when you need it.
              </p>
            </div>

            {/* Feature 3 */}
            <div 
              className="p-8 rounded-3xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(100,120,180,0.1), rgba(80,100,150,0.1))',
                border: '1px solid rgba(139, 148, 200, 0.1)'
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(138, 148, 200, 0.15)' }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="8" y="8" width="16" height="16" rx="8" stroke="#8a94c8" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-light mb-3" style={{ color: '#e4e4e9' }}>
                Stay Minimal
              </h3>
              <p style={{ color: '#9b9fa9' }}>
                Clean interface that stays out of your way. Focus on thinking, not organizing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div 
            className="p-12 rounded-3xl text-center"
            style={{ 
              background: 'linear-gradient(135deg, rgba(100,120,180,0.15), rgba(80,100,150,0.15))',
              border: '1px solid rgba(139, 148, 200, 0.15)'
            }}
          >
            <h2 className="text-3xl font-light mb-6" style={{ color: '#e4e4e9' }}>
              For people who think a lot
            </h2>
            <p className="text-lg mb-8" style={{ color: '#9b9fa9' }}>
              If you handle flows of information, make complex decisions, juggle multiple ideas, 
              or just need a place to dump thoughts without the pressure of organizing them — 
              Chinotto is for you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Researchers', 'Designers', 'Writers', 'Developers', 'Product Managers', 'Strategists'].map((role) => (
                <span 
                  key={role}
                  className="px-6 py-2 rounded-full text-sm"
                  style={{ 
                    backgroundColor: 'rgba(138, 148, 200, 0.1)',
                    color: '#9b9fa9',
                    border: '1px solid rgba(138, 148, 200, 0.2)'
                  }}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6" style={{ color: '#e4e4e9' }}>
            Start capturing your thoughts
          </h2>
          <p className="text-lg mb-8" style={{ color: '#9b9fa9' }}>
            Available for macOS, Windows, and Linux
          </p>
          <button 
            className="px-10 py-4 rounded-full text-lg font-light transition-colors"
            style={{ 
              backgroundColor: '#8a94c8',
              color: '#0a0a0e'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9ba4d8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8a94c8'}
          >
            Download for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t" style={{ borderColor: '#0f0f14' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ChinottoLogo size={24} className="text-[#5d6068]" />
            <span className="text-sm" style={{ color: '#5d6068' }}>© 2026 Chinotto</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" style={{ color: '#9b9fa9' }} className="hover:underline">Documentation</a>
            <a href="#" style={{ color: '#9b9fa9' }} className="hover:underline">Privacy</a>
            <a href="#" style={{ color: '#9b9fa9' }} className="hover:underline">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}