import { useState, useEffect } from 'react';
import { ClientJS } from 'clientjs';

function useDeviceFingerprint(clientId) {
  const [deviceFingerprint, setDeviceFingerprint] = useState(null);
  clientId = clientId.to
  useEffect(() => {
  
     
      const client = new ClientJS();

      let browser = client.getUserAgent();
     // let browser = client.getBrowserData().ua;
	    let canvasPrint = client.getCanvasPrint();

	    let fingerprint = client.getCustomFingerprint(browser, canvasPrint,clientId);
      setDeviceFingerprint(fingerprint);
   
  }, []); 
  return deviceFingerprint;
};
export default useDeviceFingerprint;