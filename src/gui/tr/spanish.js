var TR = {
  // background
  backgroundTitle: 'Fondo',
  backgroundReset: 'Reiniciar',//double check: Reset
  backgroundImport: 'Importar (jpg, png...)',
  backgroundFill: 'Llenar',

  // camera
  cameraTitle: 'Cámara',
  cameraReset: 'Vista',
  cameraCenter: 'Reiniciar (bar)',
  cameraFront: 'Frente (F)',
  cameraLeft: 'Izquierda (L)',
  cameraTop: 'Superficie (T)',
  cameraMode: 'Modalidad',//double check : Mode 
  cameraOrbit: 'Órbita (Plato giratorio)',//double check : Turntable
  cameraSpherical: 'Esférico (Bola de desplazamiento)',//double check : Trackball
  cameraPlane: 'Plano (Bola de desplazamiento)',//double check : Trackball
  cameraProjection: 'Proyección',
  cameraPerspective: 'Perspectiva',
  cameraOrthographic: 'Ortográfico',
  cameraFov: 'Fov',
  cameraPivot: 'Punto de Recogida',//double check : Picking Point

  // file
  fileTitle: 'Archivo (importar/exportar)',
  fileImportTitle: 'Importar',
  fileAdd: 'Agregar (obj, sgl, ply, stl)',
  fileAutoMatrix: 'Escala y Centrar',
  fileVertexSRGB: 'sRGB Vértice Color',
  fileExportSceneTitle: 'Exporta Escena',
  fileExportAll: 'Exportar Todo',
  fileExportSGL: 'Guardar .sgl (SculptGL)',
  fileExportOBJ: 'Guardar .obj',
  fileExportPLY: 'Guardar .ply',
  fileExportSTL: 'Guardar .stl',

  // scene
  sceneTitle: 'Escena',
  sceneReset: 'Clear escena',
  sceneAddSphere: 'Agregar Esfera',
  sceneAddCube: 'Agregar Cubo',
  sceneAddCylinder: 'Agregar Cilindro',
  sceneAddTorus: 'Agregar Toro',
  sceneSelection: 'Selección',
  sceneMerge: 'Fundirse selección',
  sceneDuplicate: 'Copiar selección',

  // mesh
  meshTitle: 'Malla',
  meshNbVertices: 'Vértice : ',
  meshNbFaces: 'Faz : ',

  // topology
  topologyTitle: 'Topología ',

  //multires
  multiresTitle: 'Multiresolution',
  multiresSubdivide: 'Subdivide',
  multiresReverse: 'Revés',//double check : Reverse
  multiresResolution: 'Resolución',
  multiresNoLower: 'There is no lower resolución level.',
  multiresNoHigher: 'There is no higher resolución level.',
  multiresDelHigher: 'Eliminar superior',
  multiresDelLower: 'Eliminar inferior',
  multiresSelectLowest: 'Select the lowest resolution before reversing.',
  multiresSelectHighest: 'Select the highest resolution before subdividing.',
  multiresWarnBigMesh: function (nbFacesNext) {
    return 'The next subdivision level will reach ' + nbFacesNext + ' faces.\n' +
      'If you know what you are doing, click again on "subdivide".';
  },
  multiresNotReversible: 'Sorry it is not possile to reverse this mesh.\n' +
    'The mesh is not a product of a (loop-catmull) subdivision surface on a manifold mesh.',

  // remesh
  remeshTitle: 'Voxel Remeshing',
  remeshRemesh: 'Remesh',
  remeshResolution: 'Resolution',
  remeshBlock: 'Trozo',

  // dynamic
  dynamicTitle: 'Dynamic Topology',
  dynamicActivated: 'Activated (no quads)',
  dynamicSubdivision: 'Subdivision',
  dynamicDecimation: 'Decimation',
  dynamicLinear: 'Linear subdivision',

  // sculpt
  sculptTitle: 'Sculpting & Painting',
  sculptBrush: 'Brush',
  sculptInflate: 'Inflate',
  sculptTwist: 'Twist',
  sculptSmooth: 'Smooth (-Shift)',
  sculptFlatten: 'Flatten',
  sculptPinch: 'Pinch',
  sculptCrease: 'Crease',
  sculptDrag: 'Drag',
  sculptPaint: 'Paintar',
  sculptMasking: 'Masking (-Ctrl)',
  sculptMove: 'Mover',
  sculptLocalScale: 'Escala Local',
  sculptTransform: 'Transform (E)',

  sculptCommon: 'Común',
  sculptTool: 'Instrumento',
  sculptSymmetry: 'Simetría',
  sculptContinuous: 'Continuo',
  sculptRadius: 'Radio (-X)',
  sculptIntensity: 'Intensidad (-C)',
  sculptHardness: 'Dureza',
  sculptCulling: 'Superficie delgada (Solo Vértice Frontal)',
  sculptAlphaTitle: 'Alfa',
  sculptLockPositon: 'Lock position',
  sculptAlphaTex: 'Textura',
  sculptImportAlpha: 'Importar alpha tex (jpg, png...)',
  sculptNegative: 'Negativo (N or -Alt)',
  sculptColor: 'Albedo',
  sculptRoughness: 'Rugosidad',
  sculptMetallic: 'Metálico',
  sculptClay: 'Arcilla',
  sculptAccumulate: 'Accumular (Sin límite por golpe)',
  sculptColorGlobal: 'Global',
  sculptPickColor: 'Material / Selector de Color (-S)',
  sculptTangentialSmoothing: 'Relax only',
  sculptTopologicalCheck: 'Control Topológico',
  sculptMoveAlongNormal: 'Move along normal (N or -Alt)',
  sculptMaskingClear: 'Clear (-Ctrl + Drag)',
  sculptMaskingInvert: 'Invert (-Ctrl + Click)',
  sculptMaskingBlur: 'Difuminar',
  sculptMaskingSharpen: 'Sharpen',
  sculptPBRTitle: 'PBR materiales',
  sculptPaintAll: 'Pintar todo',
  sculptExtractTitle: 'Extraer',
  sculptExtractThickness: 'Grosor',
  sculptExtractAction: 'Extraer !',

  // states
  stateTitle: 'Historia',
  stateUndo: 'Deshacer',
  stateRedo: 'Rehacer',
  stateMaxStack: 'Max Stack',

  // pressure
  pressureTitle: 'Tablet pressure',
  pressureRadius: 'Pressure radius',
  pressureIntensity: 'Pressure intensity',

  // rendering
  renderingTitle: 'Rendering',
  renderingGrid: 'Show cuadro',
  renderingSymmetryLine: 'Show mirror línea',
  renderingMatcap: 'Matcap',
  renderingCurvature: 'Curvatura',
  renderingPBR: 'PBR',
  renderingTransparency: 'Transparencia',
  renderingNormal: 'Normal shader',
  renderingUV: 'UV shader',
  renderingShader: 'Shader',
  renderingMaterial: 'Material',
  renderingImportUV: 'Importar (jpg, png...)',
  renderingImportMatcap: 'Importar (jpg, png...)',
  renderingExtra: 'Extra',
  renderingFlat: 'Flat shading',
  renderingWireframe: 'Wireframe (W)',
  renderingExposure: 'Exposure',
  renderingEnvironment: 'Environment',
  renderingIsolate: 'Isolate/Show (I)',
  renderingFilmic: 'Filmic tonemapping',

  // contour
  contour: 'Contorno',
  contourShow: 'Mostrar contorno',
  contourColor: 'Color',
  darkenUnselected: 'Darken unselected',

  // pixel ratio
  resolution: 'Resolución',

  // matcaps
  matcapPearl: 'Perla',
  matcapClay: 'Arcilla',
  matcapSkin: 'Piel',
  matcapGreen: 'Verde',
  matcapWhite: 'Blanco',

  // sketchfab
  sketchfabTitle: 'Go to Sketchfab !',
  sketchfabUpload: 'Upload',
  sketchfabUploadMessage: 'Please enter your sketchfab API Key.\n' +
    'You can also leave "guest" to upload anonymously.\n' +
    '(a new window will pop up when the uploading and processing is finished)',
  sketchfabUploadError: function (error) {
    return 'Sketchfab upload error :\n' + error;
  },
  sketchfabUploadSuccess: 'Upload success !\nHere is your link :',
  sketchfabAbort: 'Aborta última carga ?',
  sketchfabUploadProcessing: 'Processing...\nYour model will be available at :',

  about: 'About & Ayuda',

  alphaNone: 'Niguno',
  alphaSquare: 'Cuadro',
  alphaSkin: 'Piel',

  envFootPrint: 'Foot Print',
  envGlazedPatio: 'Glazed Patio',
  envNicolausChurch: 'St Nicolaus church',
  envTerrace: 'Terrace',
  envBryantPark: 'BryantPark'
};

export default TR;
