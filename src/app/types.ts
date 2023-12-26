export interface ElectricChargingStationResponse {
  electric_charging_station: ElectricChargingStation[]
}

export interface ElectricChargingStation {
  extent: string
  identifier: string
  routeRecommendation: any[]
  coordinate: Coordinate
  footer: any[]
  icon: string
  isBlocked: string
  description: string[]
  title: string
  point: string
  display_type: string
  lorryParkingFeatureIcons: any[]
  future: boolean
  subtitle: string
}

export interface Coordinate {
  lat: string
  long: string
}

export interface RoadListResponse {
  roads: string[]
}

export interface RoadworksResponse {
  roadworks: Roadwork[]
}

export interface Roadwork {
  extent: string
  identifier: string
  routeRecommendation: any[]
  coordinate: Coordinate
  footer: string[]
  impact?: Impact
  icon: string
  isBlocked: string
  description: string[]
  title: string
  point: string
  display_type: string
  lorryParkingFeatureIcons: any[]
  future: boolean
  subtitle: string
  startTimestamp: string
}

export interface Impact {
  lower: string
  upper: string
  symbols: string[]
}

export interface ParkingLorryResponse {
  parking_lorry: ParkingLorry[]
}

export interface ParkingLorry {
  extent: string
  identifier: string
  routeRecommendation: any[]
  coordinate: Coordinate
  footer: any[]
  icon: string
  isBlocked: string
  description: string[]
  title: string
  point: string
  display_type: string
  lorryParkingFeatureIcons: LorryParkingFeatureIcon[]
  future: boolean
  subtitle: string
}

export interface LorryParkingFeatureIcon {
  icon: string
  description: string
  style: string
}
export interface WarningResponse {
  warning: Warning[]
}

export interface Warning {
  extent: string
  identifier: string
  routeRecommendation: any[]
  coordinate: Coordinate
  footer: any[]
  icon: string
  isBlocked: string
  description: string[]
  title: string
  point: string
  display_type: string
  lorryParkingFeatureIcons: any[]
  future: boolean
  subtitle: string
  startTimestamp: string
}

export interface ClosureResponse {
  closure: Closure[]
}

export interface Closure {
  extent: string
  identifier: string
  routeRecommendation: any[]
  coordinate: Coordinate
  footer: any[]
  icon: string
  isBlocked: string
  description: string[]
  title: string
  point: string
  display_type: string
  lorryParkingFeatureIcons: any[]
  future: boolean
  subtitle: string
  startTimestamp: string
}
