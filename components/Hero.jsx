import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    (<div
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Rent a Car or Bike with Ease</h1>
        <p className="text-xl mb-8">Explore the city on your terms. Choose from our wide range of vehicles.</p>
        <Button variant="secondary" size="lg">Start Renting</Button>
      </div>
    </div>)
  );
}

