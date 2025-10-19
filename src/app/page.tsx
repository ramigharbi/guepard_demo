import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Flame, Skull, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Epic Hero Section */}
      <div className="text-center mb-16 relative">
        {/* Epic Potion Hero */}
        <div className="relative inline-block mb-6">
          <div className="relative w-64 h-64 mx-auto animate-pulse-glow">
            <Image 
              src="/images/potion.png" 
              alt="Mystical Potion" 
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(147,51,234,0.8)]"
              priority
            />
          </div>
        </div>

        <h1 className="text-7xl font-mystical font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary mb-6 text-shadow-epic leading-tight">
          Welcome, Weary Traveler
        </h1>
        <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6 rounded-full shadow-lg shadow-primary/50"></div>
        
        <p className="text-2xl text-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto font-cinzel">
          Step inside <span className="text-secondary font-bold text-shadow-glow">The Apothecary</span>, 
          where ancient magic meets alchemical mastery. Purveyor of legendary potions, curer of impossible curses, 
          and occasional cause of <span className="text-pink-400 italic">spectacular side effects</span>.
        </p>
        <p className="text-lg text-muted-foreground italic mb-12 font-cinzel">
          "Within these mystical walls, bubbling cauldrons brew destiny itself. All transactions payable in honest coin, 
          adventurer's honor, and a pinch of good humour."
        </p>
        
        <Link 
          href="/shop"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-purple-600 hover:via-pink-600 hover:to-primary text-primary-foreground font-bold text-xl px-12 py-5 rounded-lg transition-all duration-500 hover:scale-105 border-2 border-primary/50 shadow-2xl shadow-primary/50 hover:shadow-pink-500/50 relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          <Flame className="h-6 w-6 animate-pulse" />
          <span className="font-mystical">Enter The Apothecary</span>
          <Sparkles className="h-6 w-6 animate-pulse" />
        </Link>
      </div>

      {/* Epic Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="group relative bg-gradient-to-br from-card/80 via-purple-900/20 to-card/80 backdrop-blur p-6 rounded-lg border-2 border-primary/30 hover:border-primary text-center hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image 
                src="/images/flask.png" 
                alt="Legendary Potions" 
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(147,51,234,0.6)]"
              />
            </div>
            <h3 className="font-cinzel font-bold text-primary text-xl mb-2 group-hover:text-shadow-purple transition-all">
              Legendary Potions
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Elixirs of power brewed from ancient recipes
            </p>
          </div>
        </div>

        <div className="group relative bg-gradient-to-br from-card/80 via-emerald-900/20 to-card/80 backdrop-blur p-6 rounded-lg border-2 border-accent/30 hover:border-accent text-center hover:scale-105 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image 
                src="/images/herbs.png" 
                alt="Mystical Reagents" 
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]"
              />
            </div>
            <h3 className="font-cinzel font-bold text-accent text-xl mb-2 group-hover:text-shadow-purple transition-all">
              Mystical Reagents
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Rare ingredients from forgotten realms
            </p>
          </div>
        </div>

        <div className="group relative bg-gradient-to-br from-card/80 via-yellow-900/20 to-card/80 backdrop-blur p-6 rounded-lg border-2 border-secondary/30 hover:border-secondary text-center hover:scale-105 hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image 
                src="/images/scrolls.png" 
                alt="Ancient Scrolls" 
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.6)]"
              />
            </div>
            <h3 className="font-cinzel font-bold text-secondary text-xl mb-2 group-hover:text-shadow-glow transition-all">
              Ancient Scrolls
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Forbidden spells and arcane incantations
            </p>
          </div>
        </div>

        <div className="group relative bg-gradient-to-br from-card/80 via-pink-900/20 to-card/80 backdrop-blur p-6 rounded-lg border-2 border-pink-500/30 hover:border-pink-500 text-center hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-pink-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative">
            <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image 
                src="/images/alambic.png" 
                alt="Alchemical Tools" 
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]"
              />
            </div>
            <h3 className="font-cinzel font-bold text-pink-400 text-xl mb-2 group-hover:text-shadow-epic transition-all">
              Alchemical Tools
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enchanted apparatus for master craftsmen
            </p>
          </div>
        </div>
      </div>

      {/* Epic Guepard Info Section */}
      <div className="relative bg-gradient-to-r from-card/40 via-primary/20 to-card/40 rounded-lg border-2 border-primary/40 p-8 shadow-2xl shadow-primary/30 backdrop-blur overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer"></div>
        
        <div className="relative flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-4xl font-mystical font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary mb-4 flex items-center gap-3">
              <Zap className="h-10 w-10 text-primary animate-pulse" />
              Powered by Guepard's Arcane Magic
            </h2>
            <p className="text-foreground/90 leading-relaxed mb-6 text-lg font-cinzel">
              This legendary emporium harnesses the power of <strong className="text-secondary text-shadow-glow">versioned, branchable databases</strong>. 
              Each promotion exists in its own reality, every catastrophe reversible through temporal magic. 
              <span className="text-primary italic"> Database sorcery</span> at its absolute finest!
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground/90 group hover:text-primary transition-colors">
                <span className="text-2xl">🌙</span>
                <span className="font-cinzel"><strong className="text-accent">Branch dimensions</strong> to test promotions without disturbing the prime timeline</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/90 group hover:text-secondary transition-colors">
                <span className="text-2xl">💀</span>
                <span className="font-cinzel"><strong className="text-secondary">Reverse calamities</strong> instantly with snapshot resurrection magic</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/90 group hover:text-pink-400 transition-colors">
                <span className="text-2xl">☀️</span>
                <span className="font-cinzel"><strong className="text-primary">Conjure parallel realities</strong> for seasonal sales experimentation</span>
              </li>
            </ul>
          </div>
          <div className="relative ml-8 animate-pulse-glow">
            <div className="relative w-48 h-48">
              <Image 
                src="/images/magic-ball.png" 
                alt="Magic Crystal Ball" 
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(147,51,234,0.8)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Epic Disclaimer */}
      <div className="mt-12 p-6 bg-gradient-to-r from-red-950/50 via-red-900/30 to-red-950/50 border-2 border-red-600/50 rounded-lg backdrop-blur relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMCwwLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative flex items-center justify-center gap-4">
          <Skull className="h-8 w-8 text-red-400 animate-pulse" />
          <p className="text-center text-foreground/90 text-sm font-cinzel">
            <strong className="text-red-400 text-lg">⚠️ Arcane Disclaimer:</strong> The Apothecary assumes no liability for spontaneous transmutations, 
            dimensional rifts, curse backfires, or unexpected metamorphoses resulting from improper potion usage. 
            <em className="text-secondary"> Extensively tested on goblins, trolls, and the occasional dragon.</em>
            <br />
            <span className="text-xs text-muted-foreground italic mt-2 block">Side effects may include: enhanced vitality, temporary invisibility, uncontrollable levitation, or sudden wisdom.</span>
          </p>
          <Skull className="h-8 w-8 text-red-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </div>
  );
}
