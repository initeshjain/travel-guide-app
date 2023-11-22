type RootStackParamList = {
  GuideList: undefined;
  AddPlace: undefined;
  PlaceView: { place: Place };
  Map: undefined;
  SpotDetail: { spot: PlaceDetail };
};

interface Place {
  id?: number;
  name: string;
  description: string;
  imagePaths: string[];
}

type MapLoc = { latitude: float64, longitude: float64 }

type PlaceDetail = {
  id: number,
  title: string,
  coordinates: MapLoc,
  description: string,
  images: string[]
}