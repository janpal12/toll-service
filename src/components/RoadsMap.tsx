import React from 'react'
import { MapContainer, TileLayer, Popup, CircleMarker } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Road {
  id: string
  country: string
  name: string
  lat: number
  lng: number
  price: number
}

const RoadsMap: React.FC<{ roads: Road[] }> = ({ roads }) => {
  const center: LatLngExpression = [48.8566, 2.3522] // Paris center

  // Функция для генерации цвета по дате (луна)
  const getColorByDate = (price: number): string => {
    const hash = Math.abs(Math.sin(price * 12.9898) * 43758.5453)
    const hue = (hash % 1) * 360
    return `hsl(${hue}, 70%, 50%)`
  }

  return (
    <MapContainer
      center={center}
      zoom={5}
      style={{ height: '600px', width: '100%', borderRadius: '16px' }}
      className="border border-gray-700"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap'
      />
      {roads.map((road) => (
        <CircleMarker
          key={road.id}
          center={[road.lat, road.lng]}
          radius={8}
          fillColor={getColorByDate(road.price)}
          color={getColorByDate(road.price)}
          weight={2}
          opacity={0.8}
          fillOpacity={0.6}
        >
          <Popup>
            <div className="text-sm">
              <p className="font-bold">{road.name}</p>
              <p className="text-gray-600">{road.country}</p>
              <p className="text-green-600 font-semibold">€{road.price.toFixed(2)}/km</p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  )
}

export default RoadsMap
