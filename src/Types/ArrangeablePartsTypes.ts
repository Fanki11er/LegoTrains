export type MinifigMarkersData = {
  minifigHeapsMarkerId: string;
  minifigTorsoMarkerId: string;
  minifigHeadMarkerId: string;
  minifigHutMarkerId: string;
};

export type PostPackageMarkersData = {
  postPackageBaseMarkerId: string;
  postPackageEnvelopeMarkerId: string;
};

export type PaletteMarkersData = {
  paletteBaseMarkerId: string;
  paletteLegsMarkersIds: [string, string];
};

export type BarrelMarkersData = {
  barrelBottomPartMarkerId: string;
  barrelRingMarkerId: string;
  barrelTopPartMarkerId: string;
};
