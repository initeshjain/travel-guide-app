type RootStackParamList = {
  GuideList: undefined;
  AddPlace: undefined;
  PlaceView: { place: Place };
};

interface Place {
  id?: number;
  name: string;
  description: string;
  imagePaths: string[];
}
