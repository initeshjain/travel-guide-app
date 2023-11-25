type RootStackParamList = {
  ListView: undefined;
  PlaceView: { place: Place };
};

type Place = {
  id: number,
  title: string,
  description: string,
  images: string[]
}