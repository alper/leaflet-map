import { LitElement, PropertyValues } from 'lit-element';
import { LeafletEvent, Map } from 'leaflet';
import { render } from 'lit-html';
export { render };
export interface MarkerInformation {
    latitude: number;
    longitude: number;
    title?: string;
    url?: string;
}
/**
 * A simple webcomponent wrapper with some functionality around the Leaflet.js map library.
 *
 * @link https://github.com/leaflet-extras/leaflet-map/
 * @link https://github.com/Gubancs/leaflet4vaadin
 * @link https://github.com/ggcity/leaflet-map
 *
 * @fires 'tiles-loading' - Event transporting a promise, fires when the tiles layer starts loading tiles. The promise resolves once all tiles have loaded.
 * @fires 'center-updated' - Event transporting the latitude and longitude each time the map center has updated.
 * @fires 'map-ready' - Event transporting an leaflet map instance. Fires using the `whenReady` event of leaflet map.
 *
 * @cssprop {Length} --leaflet-map-min-height - Min. height of the map element
 * @cssprop {Length} --leaflet-popup-item-spacing - Spacing of title + url items inside marker popup
 */
export declare class LeafletMap extends LitElement {
    latitude: number;
    longitude: number;
    radius: number;
    /** @private */
    markers: Array<MarkerInformation>;
    /** @private */
    selectedMarker: MarkerInformation | null;
    updateCenterOnClick: boolean;
    detectRetina: boolean;
    defaultZoom: number;
    maxZoom: number;
    private _map;
    private mapCenterMarker;
    private mapMarkers;
    private mapClickDelayedTimeout;
    private radiusLayer;
    private markerRed;
    private debouncedResize;
    static get styles(): import("lit-element").CSSResult;
    constructor();
    /**
     * Called after the element's DOM has been updated the first time, immediately before updated is called.
     *
     * Implement firstUpdated to perform one-time work after the element's template has been created.
     *
     * @param _changedProperties
     */
    firstUpdated(_changedProperties: PropertyValues): Promise<void>;
    /**
     * Called when the element's DOM has been updated and rendered. Implement to perform some task after an update.
     *
     * @param _changedProperties
     *
     * @see https://lit-element.polymer-project.org/guide/lifecycle#updated
     */
    updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    _hasValidMapData(): 0 | Map;
    _centerMap(): void;
    _updateMapCenterMarker(): void;
    _updateMarkers(): void;
    _fitBounds(): void;
    _markSelectedMarker(): void;
    _onMapClick(e: LeafletEvent): void;
    /**
     * Invalidates the map size and updates the map.
     * This is particularly useful when the map container size changed.
     *
     * @private
     */
    _updateMapSize(): void;
    _onMapClickDelayed(e: LeafletEvent): void;
    _onMapReady(): void;
    _clearMapClickDelayedTimeout(): void;
    _updateRadiusLayer(): void;
    _handleResize(): void;
    get map(): Map;
}
//# sourceMappingURL=LeafletMap.d.ts.map