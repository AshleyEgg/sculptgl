var TR = {
  // background
  backgroundTitle: 'Fondo',
  backgroundReset: 'Reiniciar',
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
  cameraOrbit: 'Órbita (Turntable)',
  cameraSpherical: 'Esférico (Trackball)',
  cameraPlane: 'Plano (Trackball)',
  cameraProjection: 'Proyección',
  cameraPerspective: 'Perspectiva',
  cameraOrthographic: 'Ortográfico',
  cameraFov: 'Fov',
  cameraPivot: 'Punto de Pivote',

  // file
  fileTitle: 'Archivo (importar/exportar)',
  fileImportTitle: 'Importar',
  fileAdd: 'Agregar (obj, sgl, ply, stl)',
  fileAutoMatrix: 'Escala y Centrar',
  fileVertexSRGB: 'sRGB Vértice Color',
  fileExportSceneTitle: 'Exporta escena',
  fileExportAll: 'Exportar todo',
  fileExportSGL: 'Guardar .sgl (SculptGL)',
  fileExportOBJ: 'Guardar .obj',
  fileExportPLY: 'Guardar .ply',
  fileExportSTL: 'Guardar .stl',

  // scene
  sceneTitle: 'Escena',
  sceneReset: 'Reiniciar escena',
  sceneAddSphere: 'Agregar Esfera',
  sceneAddCube: 'Agregar Cubo',
  sceneAddCylinder: 'Agregar Cilindro',
  sceneAddTorus: 'Agregar Toro',
  sceneSelection: 'Selección',
  sceneMerge: 'Fundirse selección',

  // mesh
  meshTitle: 'Malla',
  meshNbVertices: 'Vértice : ',
  meshNbFaces: 'Cara : ',

  // topology
  topologyTitle: 'Topología ',

  //multires
  multiresTitle: 'Multiresolución',
  multiresSubdivide: 'Subdividir',
  multiresReverse: 'Revirtir',//double check : Reverse
  multiresResolution: 'Resolución',
  multiresNoLower: 'No hay un nivel de resolución inferior.',
  multiresNoHigher: 'No hay un nivel de resolución superior.',
  multiresDelHigher: 'Eliminar nivel superior',
  multiresDelLower: 'Eliminar nivel inferior',
  multiresSelectLowest: 'Seleccione la resolución más baja antes de subdividir.',
  multiresSelectHighest: 'Seleccione la resolución más alto antes de subdividir.',
  multiresWarnBigMesh: function (nbFacesNext) {
    return 'El próximo nivel de subdivisión alcanzará ' + nbFacesNext + ' caras.\n' +
      'Si sabe lo que está haciendo, vuelva a hacer clic en "subdividir".';
  },
  multiresNotReversible: 'Lo siento, no es posible revertir esta malla.\n' +
    'La malla no es un producto de una superficie de subdivisión (loop-catmull) en una malla múltiple.',//double check : manifold mesh

  // remesh
  remeshTitle: 'Remallar volumétrico',//double check : Remesh
  remeshRemesh: 'Remallar',//double check : Remesh
  remeshResolution: 'Resolución',
  remeshBlock: 'Trozo',

  // dynamic
  dynamicTitle: 'Topología Dinámica',
  dynamicActivated: 'Activado (sin quads)',
  dynamicSubdivision: 'Subdivisión',
  dynamicDecimation: 'Aniquilación',
  dynamicLinear: 'Subdivisión Lineal',

  // sculpt
  sculptTitle: 'Esculpiendo & Pintando',
  sculptBrush: 'Brocha',
  sculptInflate: 'Inflar',
  sculptTwist: 'Girar',//double check : Twist
  sculptSmooth: 'Alisar (-Shift)',
  sculptFlatten: 'Aplanar',
  sculptPinch: 'Pellizcar',
  sculptCrease: 'Doblar',
  sculptDrag: 'Arrastrar',
  sculptPaint: 'Pintar',
  sculptMasking: 'Enmascarar (-Ctrl)',// double check : Masking
  sculptMove: 'Mover',
  sculptLocalScale: 'Escala Local',
  sculptTransform: 'Mover (E)',
  sculptCircumference: 'Circunferencia',
  sculptAnteriorDepth: 'A/P Medida',
  sculptLateralDepth: 'M/L Medida',
  sculptScale: 'Modificar la Escala',
  sculptPlaneCut: 'Corte Plano',
  sculptMirror: 'Reflejar',

  sculptCommon: 'Común',
  sculptTool: 'Instrumento',
  sculptSymmetry: 'Simetría',
  sculptContinuous: 'Continuo',
  sculptRadius: 'Radio (-X)',
  sculptIntensity: 'Intensidad (-C)',
  sculptHardness: 'Dureza',
  sculptCulling: 'Superficie delgada (Solo Vértice Frontal)',
  sculptAlphaTitle: 'Alfa',
  sculptLockPositon: 'Posición de bloqueo',
  sculptAlphaTex: 'Textura',
  sculptImportAlpha: 'Importar textura alfa (jpg, png...)',
  sculptNegative: 'Negativo (N or -Alt)',
  sculptColor: 'Albedo',
  sculptRoughness: 'Rugosidad',
  sculptMetallic: 'Metálico',
  sculptClay: 'Arcilla',
  sculptAccumulate: 'Accumular (Sin límite por golpe)',
  sculptColorGlobal: 'Global',
  sculptPickColor: 'Material / Selector de Color (-S)',
  sculptTangentialSmoothing: 'Reljarse solo',
  sculptTopologicalCheck: 'Control Topológico',
  sculptMoveAlongNormal: 'Mover de acuerdo a lo normal (N or -Alt)',
  sculptMaskingClear: 'Quitar (-Ctrl + Drag)',//double check : clear
  sculptMaskingInvert: 'Invertir (-Ctrl + Click)',
  sculptMaskingBlur: 'Difuminar',
  sculptMaskingSharpen: 'Enfocar',
  sculptPBRTitle: 'PBR materiales',
  sculptPaintAll: 'Pintar todo',
  sculptExtractTitle: 'Extraer',
  sculptExtractThickness: 'Grosor',
  sculptExtractAction: 'Extraer !',

  // states
  stateTitle: 'Historia',
  stateUndo: 'Deshacer',
  stateRedo: 'Rehacer',
  stateMaxStack: 'Número máximo de acciones',

  // pressure
  pressureTitle: 'Presión de la tableta',
  pressureRadius: 'Radio de presión',
  pressureIntensity: 'Intensidad de presión',

  // rendering
  renderingTitle: 'Representación',
  renderingGrid: 'Cuadrícula cuadro',
  renderingSymmetryLine: 'Mostrar línea de simetría',
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
  renderingFlat: 'Sombreado plano',
  renderingWireframe: 'Marco de Alambre (W)',//Wireframe
  renderingExposure: 'Exposición',
  renderingEnvironment: 'Ambiente',
  renderingIsolate: 'Aislar/Vista (I)',
  renderingFilmic: 'Filmic tonemapping',

  // contour
  contour: 'Contorno',
  contourShow: 'Mostrar contorno',
  contourColor: 'Color',
  darkenUnselected: 'Oscurecer no seleccionado',

  // pixel ratio
  resolution: 'Resolución',

  // matcaps
  matcapPearl: 'Perla',
  matcapClay: 'Arcilla',
  matcapSkin: 'Piel',
  matcapGreen: 'Verde',
  matcapWhite: 'Blanco',

  // sketchfab
  sketchfabTitle: 'Ir a Sketchfab !',
  sketchfabUpload: 'Subir',//double check : upload
  sketchfabUploadMessage: 'Por favor ingrese su clave API de sketchfab.\n',
  
  
  sketchfabUploadError: function (error) {
    return 'Sketchfab upload error :\n' + error;
  },
  sketchfabUploadSuccess: 'Carga exitosa !\nAquí está tu enlace :',
  sketchfabAbort: 'Aborta última carga ?',
  sketchfabUploadProcessing: 'Procesamiento...\nSu modelo estará disponible en :',

  about: 'Información & Ayuda',

  alphaNone: 'Niguno',
  alphaSquare: 'Cuadro',
  alphaSkin: 'Piel',

  envFootPrint: 'Huella',
  envGlazedPatio: 'Patio Acristalado',
  envNicolausChurch: 'Iglesia St Nicolaus',
  envTerrace: 'Terraza',
  envBryantPark: 'BryantPark'
};

export default TR;