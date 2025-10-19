export default function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur border-t-2 border-primary/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-cinzel font-bold text-primary mb-4">
              About The Apothecary
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Purveyor of potions, curer of curses, and occasional cause of mild side effects. 
              Browse our shelves of bubbling elixirs and dubious ingredients—all transactions 
              payable in honest coin and good humour.
            </p>
          </div>

          {/* Guepard Demo */}
          <div>
            <h3 className="text-xl font-cinzel font-bold text-secondary mb-4">
              Powered by Guepard
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This mystical shop is powered by Guepard's versioned database system. 
              Every promotion is a new branch, every mistake easily reversed. 
              Database alchemy at its finest!
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-xl font-cinzel font-bold text-accent mb-4">
              ⚠️ Disclaimer
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The Apothecary assumes no liability for spontaneous transmutations, 
              unexpected side effects, or curses that may result from improper potion usage. 
              Consume at your own risk. Tested on goblins.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} The Apothecary. All potions reserved.</p>
          <p className="mt-2">Built with Next.js, Prisma, and a dash of magic ✨</p>
        </div>
      </div>
    </footer>
  );
}
