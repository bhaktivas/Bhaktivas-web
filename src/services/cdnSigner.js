import { signCdnUrl, signObjectMediaUrls, MEDIA_PROPERTIES } from '../lib/cdnSigner';

const cdnSignerService = {
  signCdnUrl,
  signObjectMediaUrls,
  MEDIA_PROPERTIES,
};

export { signCdnUrl, signObjectMediaUrls, MEDIA_PROPERTIES };
export default cdnSignerService;
