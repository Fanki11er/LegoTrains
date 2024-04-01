import { Material, Mesh } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

export type GLTFResult = GLTF & {
  nodes: Nodes;
  materials: Materials;
};

export type Nodes = {
  [name: string]: Mesh;
};

export type Materials = {
  [name: string]: Material;
};
