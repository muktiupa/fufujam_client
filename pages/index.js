import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { VehicleSelector } from '../components/VehicleSelector'
import { FeaturedVehicles } from '../components/FeaturedVehicles'

export default function HomePage() {
  return (
    (<div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <VehicleSelector />
        <FeaturedVehicles />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 RentRide. All rights reserved.</p>
        </div>
      </footer>
    </div>)
  );
}

