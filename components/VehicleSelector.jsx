import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function VehicleSelector() {
  const [vehicleType, setVehicleType] = useState('car')

  return (
    (<div
      className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto -mt-10 relative z-10">
      <div className="flex space-x-4 mb-4">
        <Button
          variant={vehicleType === 'car' ? 'default' : 'outline'}
          onClick={() => setVehicleType('car')}>
          Car
        </Button>
        <Button
          variant={vehicleType === 'bike' ? 'default' : 'outline'}
          onClick={() => setVehicleType('bike')}>
          Bike
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pick-up Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="guwahati">GUWAHATI</SelectItem>
            <SelectItem value="tezpur">TEZPUR</SelectItem>
            <SelectItem value="dirang">DIRANG</SelectItem>
            <SelectItem value="tawang">TAWANG</SelectItem>
            <SelectItem value="bomdila">BOMDILA</SelectItem>
            <SelectItem value="kaziranga">KAZIRANGA</SelectItem>
            <SelectItem value="shillong">SHILLONG</SelectItem>
            <SelectItem value="kaliabor">KALIABOR</SelectItem>
          </SelectContent>
        </Select>
        <Input type="date" placeholder="Pick-up Date" />
        <Input type="date" placeholder="Drop-off Date" />
      </div>
      <Button className="w-full mt-4">Search {vehicleType === 'car' ? 'Cars' : 'Bikes'}</Button>
    </div>)
  );
}

