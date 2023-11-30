type RootStackParamList = {
  ListView: { places: Spot[] };
  PlaceView: { place: Spot };
};

type RootTopTabParamList = {
  Tab1: undefined;
  Tab2: undefined;
}

type Cords = {
  latitude: float64,
  longitude: float64
}

type Spot = {
  id: number,
  title: string,
  coordinates: Cords,
  description: string,
  images: any[]
}