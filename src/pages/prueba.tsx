import { useEffect, useRef, useState } from 'react';

type Dimensions = {
  width: number;
  height: number;
};

const Prueba = (): JSX.Element => {
  const [devicePixelRatio, setDevicePixelRatio] = useState(0);
  const [deviceScreenViewportTotal, setDeviceScreenViewportTotal] = useState<Dimensions | null>(null);
  const [webBrowserViewportTotal, setWebBrowserViewportTotal] = useState<Dimensions | null>(null);
  const [webBrowserViewport, setWebBrowserViewport] = useState<Dimensions | null>(null);
  const [iframeViewport, setIframeViewport] = useState<Dimensions | null>(null);
  const [boxDimensions, setBoxDimensions] = useState<Dimensions | null>(null);
  const iframe = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDevicePixelRatio(window.devicePixelRatio);
    setDeviceScreenViewportTotal({
      width: Math.trunc(window.screen.width * window.devicePixelRatio),
      height: Math.trunc(window.screen.height * window.devicePixelRatio)
    });
    setWebBrowserViewportTotal({
      width: window.screen.width,
      height: window.screen.height
    });
    setWebBrowserViewport({
      width: window.innerWidth,
      height: window.innerHeight
    });
    if (iframe && iframe.current) {
      setIframeViewport({
        width: iframe.current.offsetWidth,
        height: iframe.current.offsetHeight
      });
    }
    if (box && box.current) {
      setBoxDimensions({
        width: box.current.offsetWidth,
        height: box.current.offsetHeight
      });
    }
  }, [webBrowserViewport, iframeViewport, boxDimensions]);

  return (
    <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-red-500">
      <span>
        Device Pixel Ratio (píxeles reales de la pantalla del dispositivo / píxeles CSS del navegador web totales):{' '}
        {devicePixelRatio}
      </span>
      <div className="flex flex-col p-4">
        <span>Viewport total de la pantalla del dispositivo (píxeles reales):</span>
        <span>- Anchura: {deviceScreenViewportTotal ? deviceScreenViewportTotal.width : 'unknown'} px</span>
        <span>- Altura: {deviceScreenViewportTotal ? deviceScreenViewportTotal.height : 'unknown'} px</span>
      </div>
      <div className="flex flex-col p-4">
        <span>Viewport total del navegador web (píxeles CSS):</span>
        <span>- Anchura: {webBrowserViewportTotal ? webBrowserViewportTotal.width : 'unknown'} px</span>
        <span>- Altura: {webBrowserViewportTotal ? webBrowserViewportTotal.height : 'unknown'} px</span>
      </div>
      <div className="flex flex-col p-4">
        <span>Viewport actual del navegador web (píxeles CSS):</span>
        <span>- Anchura: {webBrowserViewport ? webBrowserViewport.width : 'unknown'} px</span>
        <span>- Altura: {webBrowserViewport ? webBrowserViewport.height : 'unknown'} px</span>
      </div>
      <div ref={iframe} className="flex flex-col p-4 w-2/3">
        <span>Viewport de elemento iframe variable según el viewport actual del navegador web (píxeles CSS):</span>
        <span>- Anchura: {iframeViewport ? iframeViewport.width : 'unknown'} px</span>
        <span>- Altura: {iframeViewport ? iframeViewport.height : 'unknown'} px</span>
        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"></iframe>
      </div>
      <div ref={box} className="flex flex-col p-4 w-2/4 bg-yellow-500">
        <span>Dimensiones de elemento div variables según el viewport actual del navegador web (píxeles CSS):</span>
        <span>- Anchura: {boxDimensions ? boxDimensions.width : 'unknown'} px</span>
        <span>- Altura: {boxDimensions ? boxDimensions.height : 'unknown'} px</span>
      </div>
    </div>
  );
};

export default Prueba;
