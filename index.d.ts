import ngraph from 'ngraph.graph';
import * as PIXI from 'pixi.js';

declare module 'ngraph.pixi' {
  export default function (graph: ngraph, options?: {
    width?: number;
    height?: number;
    view?: HTMLCanvasElement;
    transparent?: boolean;
    autoDensity?: boolean;
    antialias?: boolean;
    preserveDrawingBuffer?: boolean;
    backgroundColor?: number;
    clearBeforeRender?: boolean;
    resolution?: number;
    forceCanvas?: boolean;
    powerPreference?: string;
  }, renderer: PIXI.Renderer = undefined, stage: PIXI.Container);
}