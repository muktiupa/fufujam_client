import Image from 'next/image'
import { Button } from "@/components/ui/button"

const vehicles = [
  { id: 1, name: 'Maruti Alto K10', type: 'car', price: 35, image: '/altok10.jpg' },
  { id: 2, name: 'Luxury Sedan', type: 'car', price: 75, image: '/placeholder.svg?height=200&width=300' },
  { id: 3, name: 'City Bike', type: 'bike', price: 15, image: '/placeholder.svg?height=200&width=300' },
  { id: 4, name: 'Mountain Bike', type: 'bike', price: 25, image: '/placeholder.svg?height=200&width=300' },
]

export function FeaturedVehicles() {
  return (
    (<div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Vehicles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              width={300}
              height={200}
              className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
              <p className="text-gray-600 mb-4">From ${vehicle.price}/day</p>
              <Button className="w-full">Rent Now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>)
  );
}

