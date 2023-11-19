import { useState, useEffect } from 'react';
import { ClientJS } from 'clientjs';

function useDeviceFingerprint() {
  const [deviceFingerprint, setDeviceFingerprint] = useState(null);

  useEffect(() => {
    const generateFingerprint = () => {
     
      const client = new ClientJS();

      let browser = client.getBrowserData().ua;
	    let canvasPrint = client.getCanvasPrint();

	    let fingerprint = client.getCustomFingerprint(browser, canvasPrint);
      setDeviceFingerprint(fingerprint);
    };

    generateFingerprint();
  }, []); 
  return deviceFingerprint;
};
export default useDeviceFingerprint;