[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

# Awesome MapLibre

A collection of awesome things that use or support [MapLibre](https://maplibre.org)!

MapLibre [Core projects](https://github.com/maplibre/maplibre/blob/main/PROJECT_TIERS.md)
are designated with a ✅, and hosted projects with a 💙.


## Map Rendering

- ✅ [MapLibre GL JS](https://github.com/maplibre/maplibre-gl-js) - A map SDK for rendering maps on the Web.
- ✅ [MapLibre Native](https://github.com/maplibre/maplibre-gl-native) - A maps SDK for rendering maps on devices, in apps, and on the server.
- 💙 [MapLibre RS](https://github.com/maplibre/maplibre-rs) - Experimental map rendering library written in Rust.
- ✅ [MapLibre Plugins for Android](https://github.com/maplibre/maplibre-plugins-android) - A collection of plugins for MapLibre on Android; the annotation plugin is a core project.

## Map Styling

- ✅ [MapLibre style specification](https://github.com/maplibre/maplibre-style-spec) - The MapLibre Style Specification, a JSON-based format for styling maps.

### Style Editors

- 💙 [Maputnik](https://github.com/maplibre/maputnik) - A visual style editor for MapLibre GL JS. Hosted at [maplibre.org/maputnik](https://maplibre.org/maputnik)
- [Theme](https://github.com/lhapaipai/maplibre-theme) - Custom themes for your MapLibre GL Js Web app. [demo](https://maplibre-theme.pentatrion.com/)
- [MapLibre VSCode Extension](https://github.com/Kanahiro/maplibre-vscode-extension) - VSCode Extension for viewing/editing MapLibre Style.

### Font Glyph Generation

- 💙 [Font Maker](https://github.com/maplibre/font-maker) - web app to convert font files into SDF fontstacks for use in MapLibre.
- [SDF Font Tools](https://github.com/stadiamaps/sdf_font_tools) - A CLI tool for generating SDF fontstacks from fonts (similar to FontMaker), as well as crates which let you build fontstacks on the fly (used in MapLibre Martin).

### Sprite Generation

- [Spreet](https://github.com/flother/spreet) - Spreet is a command-line tool that creates a spritesheet (aka texture atlas) from a directory of SVG images.
- [Figmasset](https://github.com/stamen/figmasset) - Figmasset is a tool to facilitate bulk-loading assets from Figma into a JavaScript application.
- [Sprite One](https://www.npmjs.com/package/@unvt/sprite-one) - Generate sprite image and json without Mapnik.

## Navigation & Directions

- 💙 [MapLibre Navigation SDK for iOS](https://github.com/maplibre/maplibre-navigation-ios) - Turn-by-turn navigation built on MapLibre; a FOSS fork of Mapbox Navigation
- 💙 [MapLibre Navigation SDK for Android](https://github.com/maplibre/maplibre-navigation-android) - Turn-by-turn navigation built on MapLibre; a FOSS fork of Mapbox Navigation
- 💙 [MapLibre GL Directions](https://github.com/maplibre/maplibre-gl-directions) - A plugin to show routing directions on a MapLibre GL JS map
- [Ferrostar](https://github.com/stadiamaps/ferrostar) - A turn-by-turn navigation SDK built from the ground up using MapLibre on iOS, Android, and the web.

## Bindings

### Flutter

- 💙 [flutter-maplibre-gl](https://github.com/maplibre/flutter-maplibre-gl) - Bindings for Flutter on Android, iOS and Web, on pub.dev at [pub.dev/packages/maplibre_gl](https://pub.dev/packages/maplibre_gl)
- [flutter-maplibre](https://github.com/josxha/flutter-maplibre) - A fresh, modern take on Flutter bindings for MapLibre Native.

### React Native

- 💙 [MapLibre React Native](https://github.com/maplibre/maplibre-react-native) - A MapLibre module for React Native (including Expo support).

### SwiftUI

- 💙 [MapLibre SwiftUI DSL](https://github.com/maplibre/swiftui-dsl) - A Swift package bridging the gap between MapLibre Native and SwiftUI with MapKit-like ease of use.

### Jetpack Compose

- [Ramani Maps](https://github.com/ramani-maps/ramani-maps) - A Jetpack Compose library to manipulate maps on Android.
- [MapLibre Compose Playground](https://github.com/Rallista/maplibre-compose-playground) - A Jetpack Compose library that takes inspiration from Ramani, but leans towards API similarity with the SwiftUI DSL and de-emphasizes drawing/editing.

### Compose Multiplatform

- [MapLibre Compose](https://github.com/sargunv/maplibre-compose) - a Compose Multiplatform library to add interactive vector tile maps to your Android and iOS app.
- [SKAMIR Maps](https://github.com/skamirmaps/skamirmaps) - Kotlin Multiplatform wrapper for MapLibre Native

### Python

- [py-maplibregl](https://github.com/eoda-dev/py-maplibregl) - Python bindings for MapLibre GL JS with docs [eoda-dev.github.io/py-maplibregl](https://eoda-dev.github.io/py-maplibregl/) and examples [eoda-dev.github.io/py-maplibregl/examples/road_safety](https://eoda-dev.github.io/py-maplibregl/examples/road_safety/).
- [leafmap](https://github.com/opengeos/leafmap/) - A python package that supports the MapLibre mapping backend with docs [leafmap.org](https://leafmap.org) and examples [leafmap.org/maplibre/overview](https://leafmap.org/maplibre/overview)
- [plotly.py](https://plotly.com/python/maps/) - Create analytical geospatial figures with MapLibre GL JS in python.

### Qt (C++)

- 💙 [maplibre-native-qt](https://github.com/maplibre/maplibre-native-qt) - MapLibre Native Qt bindings and Qt Location MapLibre Plugin

### R

- [mapgl](https://github.com/walkerke/mapgl) - R bindings for MapLibre GL JS with docs at [walker-data.com/mapgl](https://walker-data.com/mapgl)

### JavaScript

<!-- [JAVASCRIPT-BINDINGS]:BEGIN -->

#### [Angular](https://angular.dev/)

- 💙 [ngx-maplibre-gl](https://github.com/maplibre/ngx-maplibre-gl) - Angular binding with hosted demos at [maplibre.org/ngx-maplibre-gl/demo](https://maplibre.org/ngx-maplibre-gl/demo/)

#### [Astro](https://astro.build)

- [maps-withastro](https://github.com/roblabs/maps-withastro) - Bring Leaflet & MapLibre maps directly into Astro.

#### [Echarts](https://echarts.apache.org/en/index.html)

- [echartslayer](https://github.com/lzxue/echartLayer) - Provides an echarts integration.

#### [Elm](https://elm-lang.org)

- [elm-mapbox](https://package.elm-lang.org/packages/gampleman/elm-mapbox/latest/) - Provides an Elm integration.

#### [Ember](https://emberjs.com)

- [ember-mapbox-gl](https://github.com/kturney/ember-mapbox-gl) - Provides an Ember integration.

#### [Jekyll](https://jekyllrb.com/)

- [jekyll-maplibre](https://github.com/rriemann/jekyll-maplibre) - Provides a Jekyll integration (plug-in).

#### [React](https://react.dev/)

- [react-maplibre](https://visgl.github.io/react-maplibre/) - Design specifically for MapLibre, this package is planned to supersede react-map-gl.
- [react-map-gl](https://visgl.github.io/react-map-gl/docs/get-started#using-with-a-compatible-fork)
- [react-map-components-maplibre](https://github.com/mapcomponents/react-map-components-maplibre) - A React component framework for declarative GIS application development with demos in their [showcase](https://catalogue.mapcomponents.org/) and [docs](https://mapcomponents.github.io/react-map-components-maplibre)
- [maplibre-react-components](https://maplibre-react-components.pentatrion.com/) - Lightweight MapLibre only binding for React.
- [react-mapbox-gl](https://github.com/alex3165/react-mapbox-gl) - Provides a React integration.

#### [Svelte](https://svelte.dev)

- [sveltekit-maplibre-boilerplate](https://github.com/watergis/sveltekit-maplibre-boilerplate) - A preconfigured template repository develop a MapLibre application in svelte/sveltekit.
- [svelte-maplibre](https://github.com/dimfeld/svelte-maplibre) - Provides a Svelte integration.
- [svelte-maplibre-components](https://github.com/watergis/svelte-maplibre-components) - A set of maplibre plugins to integrate with svelte/sveltekit. The repository consists of various useful plugins such as export plugin, legend plugin, measure plugin, attribute table plugin, tour plugin, etc.
- [svelte-maplibre-gl](https://github.com/MIERUNE/svelte-maplibre-gl) - Svelte (v5) component wrapping MapLibre GL JS to provide declarative handling of GL JS through familiar API.

#### [VueJS](https://vuejs.org/)

- [@indoorequal/vue-maplibre-gl](https://github.com/indoorequal/vue-maplibre-gl) - Vue 3 plugin for maplibre-gl-js
- [LibreGL](https://github.com/themustafaomar/libregl) - A powerful Vue library for Maplibre with an intuitive API, and a collection of highly customizable components.

#### [Webtoolkit](https://www.webtoolkit.eu/wt)

- [wtMapbox](https://github.com/yvanvds/wtMapbox) - Provides a Webtoolkit integration.

#### Vanilla JS

- [plotly.js](https://plotly.com/javascript/maps/) - Create analytical geospatial figures with MapLibre GL JS in javascript.

<!-- [JAVASCRIPT-BINDINGS]:END -->


<!-- [JAVASCRIPT-PLUGINS]:BEGIN -->
## User Interface Plugins

- 💙 [maplibre-gl-compare](https://github.com/maplibre/maplibre-gl-compare) - Enables users to compare two maps by swiping left and right.
- [any-routing](https://github.com/marucjmar/any-routing) - A modular plugin for calculating routes.
- [Gauge Legend](https://github.com/AbelVM/gauge_legend) - Dynamic gauge legend for MapLibre GL JS
- [mapbox-gl-controls](https://github.com/bravecow/mapbox-gl-controls) - Adds controls for a ruler, style inspector, localization, and style switcher.
- [mapbox-gl-draw](https://github.com/mapbox/mapbox-gl-draw) - Adds support for drawing and editing features on maps.
- [mapbox-gl-elevation](https://github.com/watergis/mapbox-gl-elevation) - Adds a control to retrieve altitude from terrain RGB tilesets.
- [mapbox-gl-infobox](https://github.com/el/infobox-control) - Adds a control to display an infobox or a gradient.
- [mapbox-gl-legend](https://github.com/watergis/mapbox-gl-legend) - Adds a control that shows a legend generated from the map style.
- [mapbox-gl-valhalla](https://github.com/watergis/mapbox-gl-valhalla) - Adds a control to provide isochrone features from valhalla server.
- [mapboxgl-minimap](https://github.com/aesqe/mapboxgl-minimap) - Adds a control to show a miniature overview of the current map.
- [maplibre-compass-pro](https://github.com/jedluk/maplibre-compass-pro) - old fashioned compass (with compass rose) for Maplibre GL. [demo](https://codesandbox.io/p/sandbox/peaceful-mirzakhani-tv38ck)
- [maplibre-geoman](https://github.com/geoman-io/maplibre-geoman) - Plugin for drawing and editing geometry layers. [demo](https://geoman.io/demo/maplibre) 
- [maplibre-preload](https://github.com/AbelVM/maplibre-preload) - A tiny zero-configuration plugin for preloading tiles and smoothen the experience when using targeted movements in MapLibre GL JS.
- [maplibre-gl-basemaps](https://github.com/ka7eh/maplibre-gl-basemaps) - A plugin for switching between raster basemaps.
- [maplibre-gl-export](https://github.com/watergis/maplibre-gl-export) - Adds a control that exports the map as a PDF or images such as PNG, JPEG and SVG.
- [maplibre-gl-measures](https://github.com/jdsantos/maplibre-gl-measures) - A plugin for taking measures on the map.
- [maplibre-gl-opacity](https://github.com/mug-jp/maplibre-gl-opacity) - A plugin to switch layer like Leaflet.control.layers, and update opacities. [demo](https://mug-jp.github.io/maplibre-gl-opacity/)
- [maplibre-gl-temporal-control](https://github.com/mug-jp/maplibre-gl-temporal-control) - A plugin to easily animate temporal data. [demo](https://mug-jp.github.io/maplibre-gl-temporal-control/raster.html)
- [route-snapper](https://github.com/dabreegster/route_snapper) - Draw routes and areas snapped to roads.
- [Terra Draw](https://www.github.com/JamesLMilner/terra-draw) - The library has a MapLibre GL JS adapter to provide drawing and geometry editing functionality to the map
- [maplibregl-minimap](https://github.com/JabSYsEmb/maplibregl-minimap) - Customizable minimap Control for maplibregl.
- [maplibre-gl-style-flipper](https://github.com/geoglify/maplibre-gl-style-flipper) - A custom control to switch between different map styles in MapLibre GL JS.

## Geocoding & Search Plugins
- [mapbox.photon](https://github.com/watergis/mapbox.photon) - Adds a control to provide a geocoding feature from Photon API.
- 💙 [maplibre-gl-geocoder](https://github.com/maplibre/maplibre-gl-geocoder) - Adds a geocoder control.
- [maplibre-search-box](https://github.com/stadiamaps/maplibre-search-box) - Adds a control for searching for places using Stadia Maps.
- [maptiler-geocoding-control](https://github.com/maptiler/maptiler-geocoding-control) - Adds a geocoding control for searching for places using MapTiler API. [docs](https://docs.maptiler.com/sdk-js/modules/geocoding/)


## Map Rendering Plugins

- 💙 [MapLibre GL Leaflet](https://github.com/maplibre/maplibre-gl-leaflet) - A plugin for rendering MapLibre styles in [Leaflet](https://leafletjs.com).
- [deck.gl](https://github.com/visgl/deck.gl) - Adds advanced WebGL visualization layers.
- [flowmap.blue](https://github.com/ilyabo/flowmap.blue) - Render a geographic flow map visualization from a spreadsheet published on Google Sheets.
- [H3J / H3T](https://github.com/INSPIDE/h3j-h3t) - Light [H3](https://h3geo.org/) data formats for client side geometry generation and rendering using MapLibre GL JS
- [L7-maplibre-gl](https://github.com/antvis/l7) - Adds large-scale WebGL-powered geospatial data visualization framework to maplibre-gl.[demo](https://l7.antv.antgroup.com/examples/map/map/#maplibre)
- [mapbox-gl-language](https://github.com/mapbox/mapbox-gl-language/) - Automatically localizes the map into the user’s language.
- [mapbox-gl-rtl-text](https://github.com/mapbox/mapbox-gl-rtl-text) - Adds right-to-left text support.
- [mapbox-gl-traffic](https://github.com/mapbox/mapbox-gl-traffic) - Hide and show traffic layers on your map with an optional toggle button.
- [maplibre-contour](https://github.com/onthegomap/maplibre-contour) - Renders contour lines from raster DEM tiles in MapLibre GL JS.
- [maplibre-gl-dates](https://github.com/OpenHistoricalMap/maplibre-gl-dates/) – Filters a time-enabled map by date. Optimized for OpenHistoricalMap vector tiles.
- [maplibre-gl-vector-text-protocol](https://github.com/jimmyrocks/maplibre-gl-vector-text-protocol) - Supports `CSV`, `TSV`, `Topojson`, `KML`, `GPX`, and `TCX` formats using the addProtocol feature.
- [geogrid-maplibre-gl](https://github.com/falseinput/geogrid-maplibre-gl) - Renders customizable graticule (geographic grid).
- [maplibre-gleo](https://gitlab.com/IvanSanchez/maplibre-gleo) - Adds symbols using the "gleo" WebGL map rendering library.


## Layer Types Plugins

- [Allmaps Maplibre](https://github.com/allmaps/allmaps/tree/main/packages/maplibre) - A package for displaying georeferenced [IIIF](https://iiif.io/) images by loading [Georeference Annotations](https://preview.iiif.io/api/georef/extension/georef/) and using WebGL to transform and overlay the images on their correct geographical position.
- [mapbox-gl-arcgis-featureserver](https://github.com/rowanwins/mapbox-gl-arcgis-featureserver) - A library for retrieving features from an ArcGIS FeatureServer or MapServer. This library makes tiled requests rather than simply requesting every feature.
- [mapbox-gl-esri-sources](https://github.com/frontiersi/mapbox-gl-esri-sources) - A library for making it easier to use Esri services in MapLibre GL JS. Supports Esri Map Services (dynamic & tiled), Esri Vector Tile Services & Esri Vector Basemap Styles.
- [mapbox-gl-flatgeobuf](https://github.com/rowanwins/mapbox-gl-flatgeobuf) - A library for retrieving features from FlatGeobuf file using a tiled approach. Compatible with MapLibre GL JS and Mapbox GL JS.
- [mapbox-gl-ogc-feature-collection](https://github.com/mkeller3/mapbox-gl-ogc-feature-collection) - A small package for requesting geojson from an OGC Feature API endpoint to serve tiles in MapBox/MapLibre.
- [maplibre-google-maps](https://github.com/traccar/maplibre-google-maps) - A library for integrating Google Maps as raster layers into MapLibre GL JS. It uses the new Google Map Tiles API.
- [ol-maplibre-layer](https://github.com/geoblocks/ol-maplibre-layer) - Render a MapLibre GL JS map as an [OpenLayers](https://openlayers.org/) layer.
- [PMTiles for MapLibre](https://github.com/protomaps/PMTiles/tree/main/js) - A library that uses addProtocol to read PMTIles. a single-file format for hosting tilesets without a server or API, just S3 or other storage providers.

## Utility Libraries

- [expression-jamsession](https://github.com/mapbox/expression-jamsession/) - Converts [Mapbox Studio formulas](https://www.mapbox.com/help/studio-manual-styles/#use-a-formula) into [expressions](https://maplibre.org/maplibre-style-spec/expressions/).
- [mapbox-choropleth](https://github.com/stevage/mapbox-choropleth) - Create a choropleth layer from a CSV source and a geometry source.
- [mapbox-gl-layer-groups](https://github.com/mapbox/mapbox-gl-layer-groups) - Manages layer groups.
- [mapbox-gl-sync-move](https://github.com/mapbox/mapbox-gl-sync-move) - Syncs movement between multiple maps.
- [mapbox-gl-utils](https://github.com/stevage/map-gl-utils) - Manage layers, sources, and properties with syntactic sugar and convenience functions.
- [maplibregl-mapbox-request-transformer](https://github.com/rowanwins/maplibregl-mapbox-request-transformer) - This library provides a request transforming function enabling the consumption of MapboxGL Styles in MapLibreGL.
- [maplibregl-theme](https://github.com/lhapaipai/maplibre-theme) - Custom themes for your MapLibre GL Web app. [Theme customizer](https://maplibre-theme.pentatrion.com/)
- [simplespec-to-gl-style](https://github.com/mapbox/simplespec-to-gl-style) - Converts GeoJSON styles with [simplestyle-spec](https://github.com/mapbox/simplestyle-spec/) to a MapLibre GL Style.
- [turf](https://turfjs.org/) - provides advanced geospatial analysis tools.
- [Maperture](https://github.com/stamen/maperture) - A web application for comparing webmap styles.

## Development Tools Plugins

- [mapbox-gl-framerate](https://github.com/mapbox/mapbox-gl-framerate) - A frame rate control to evaluate map rendering performance.
- [mapbox-gl-fps](https://github.com/MazeMap/mapbox-gl-fps) - A frames-per-seconds GUI control and measurer with statistic report output.
- [mapgrab](https://mapgrab.github.io/) - A tool for creating end-to-end (e2e) map tests using popular testing frameworks like Playwright, Cypress, and Selenium.
- [maplibre-gl-inspect](https://github.com/acalcutt/maplibre-gl-inspect) - Adds an inspect control to view vector source features and properties.

<!-- [JAVASCRIPT-PLUGINS]:END -->


## Map/Tile Providers

- 💙 [MapLibre Demotiles](https://github.com/maplibre/demotiles) - A simple, XYZ MVT tileset for demonstration projects.
- [**Amazon Location Services**](https://aws.amazon.com/location/)
- [**Azure Maps**](https://azure.microsoft.com/en-us/products/azure-maps)
- [Esri](https://developers.arcgis.com/maplibre-gl-js/)
- [Geofabrik](https://www.geofabrik.de/maps/vectortiles.html)
- [Geoapify](https://www.geoapify.com/map-tiles/)
- [HERE](https://www.here.com/docs/bundle/vector-tile-api-developer-guide/page/README.html)
- [**JawgMaps**](https://www.jawg.io/)
- [Mapbox](https://www.mapbox.com/)
- [MapTiler](https://www.maptiler.com/)
- [**Mierune**](https://www.mierune.co.jp/?lang=en)
- [OpenFreeMap](https://openfreemap.org/)
- [OSM Americana Community Vector Tile Server](https://tile.ourmap.us/)
- [Protomaps](https://protomaps.com/)
- [Stadia Maps](https://stadiamaps.com/)
- [TomTom](https://www.tomtom.com/products/maps/)
- [Tracestrack Maps](https://tracestrack.com/)
- [Versatiles](https://versatiles.org/) - Free vector tile provider based on the [shortbread](https://shortbread-tiles.org/) specification 

**In bold**: Members of the [MapLibre Sponsorship Program](https://maplibre.org/sponsors/)

## Tile Servers

- 💙 [Martin](https://github.com/maplibre/martin) - A PostGIS, MBtiles and PMtiles tile server, supports tile generation and mbtiles tooling.
- [Headless Node Renderer](https://github.com/ConservationMetrics/mapgl-tile-renderer) - Headless Node.js MapGL renderer for generating MBTiles with styled raster tiles.
- [chiitiler](https://github.com/Kanahiro/chiitiler) - chiitiler - "Tiny MapLibre Server" is alternative to Tileserver GL, designed to runs on serverless infrastructures. [demo](https://spatialty-io.github.io/chiitiler-demo/)
- [TileServer GL](https://github.com/maptiler/tileserver-gl) - Vector tile server from MBTiles archives + server-side rasterizing with MapLibre GL native.
- [Versatiles](https://versatiles.org/) - [Node](https://github.com/versatiles-org/node-versatiles-server) and [Rust](https://github.com/versatiles-org/versatiles-rs) implementation of the versatiles tile server

## Utilities

- [MapBlockly](https://mapblockly.github.io/) - MapBlockly is a simple and fun way to learn and build Map with Blockly using MapLibre.
- [MapInventor](https://mapinventor.github.io/) - MapInventor is the visual language built on top of MapBlockly.
- [Ultra](https://overpass-ultra.us/) - A web-based IDE for making maps with MapLibre, supporting a variety of query & file types such as Overpass, ohsome, GeoJSON, KML, and more. [docs](https://overpass-ultra.us/docs)
- [Libre-studio](https://github.com/BleenIT/libre-studio) - A web-based management layer for Maplibre Martin, allowing the management of map sources, sprites and font glyphs, for ready-to-use custom maps.
  
## Users

- [Kibana](https://github.com/elastic/kibana#kibana), a browser-based analytics and search dashboard for Elasticsearch has migrated to [MapLibre](https://github.com/elastic/kibana/issues/108742)
- [Israel Hiking Map](https://israelhiking.osm.org.il) has maps, route planning, and travel information for Israel. Migrated to [MapLibre](https://github.com/IsraelHikingMap/Site/issues/1532).
- [MapLibre Storytelling](https://github.com/digidem/maplibre-storymap) - a storytelling template using MapLibre GL JS which can be hosted as static HTML or using Node.
- [OpenStreetMap Americana Style](https://github.com/osm-americana/openstreetmap-americana#openstreetmap-americana-style) - A quintessentially American map style, powered by [MapLibre](https://github.com/osm-americana/openstreetmap-americana#technology-stack)
- [On The Go Map](https://onthegomap.com) - A website for planning running and biking routes. Migrated to MapLibre
- NZ’s authoritative and open digital [basemap service](https://github.com/linz/basemaps) for LINZ and the public is using [MapLibre](https://github.com/linz/basemaps/pull/1689)
- [Vremenar Weather](https://vremenar.tano.si), a cross-platform app to display weather conditions and forecast on a map. Using MapLibre Native.
- [TatraMap.eu](https://tatramap.eu/#/teren-3d), a 3D map of Tatra Mountains powered by MapLibre.
- [TravelerMap.net](http://travelermap.net), a website which allows to explore National Parks
- [The Wikipedia app for Android](https://github.com/wikimedia/apps-android-wikipedia) uses to display articles with coordinates.
- [Queering the Map](https://www.queeringthemap.com) ([Code](https://github.com/radical-data/queering-the-map)) - A crowd-sourced platform for anonymously pinning queer experiences on a global map.
- [OpenHistoricalMap](https://www.openhistoricalmap.org/) – collaborative project to map the history of the world in detail, powered by MapLibre with maplibre-gl-leaflet
- [Famxplor](https://famxplor.com/), interactive world map of activities for family vacations, powered by MapLibre with [Svelte MapLibre](https://github.com/dimfeld/svelte-maplibre)
- [StreetComplete](https://streetcomplete.app) — Easy to use mobile OpenStreetMap editor used for mapping in the field
- [Cartes](https://cartes.app) — French alternative to Google Maps based on a fully open source stack
- [Mountaya](https://mountaya.com) - Interactive 3D maps to understand, explore, and stay safe in the mountain.
- [Herb Atlas](https://herbatlas.fyi) ([Code](https://github.com/tinykite/herb-atlas)) - Collaborative project mapping medicinal herb farms with a focus on sustainable + regenerative practices.
- [Flitsmeister](https://www.flitsmeister.com/) - Navigation app for Android and iOS, with real-time traffic information. Uses MapLibre Native, MapLibre Navigation.
- [Mapforge](https://mapforge.org) - Open Source map vector layer editor with live collaboration and sharing. Uses MapLibre GL JS.

## Demos / Examples

- [Expo MapLibre native + web demo](https://github.com/Jaza/expo-maplibre-native-plus-web-demo) - Demo Expo app using [maplibre-react-native](https://github.com/maplibre/maplibre-react-native) for native, and falling back to [react-map-gl](https://github.com/visgl/react-map-gl) with [maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js) for web.
