const defaultAvaUri = `https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/33809784_1772044839558958_7018606508812271616_n.jpg?_nc_cat=0&oh=23019528a31c3dac2913a1e5231dbfba&oe=5BCCFB9E`;

const SOCKETIO_SERVER_URL_PROFILE_IMAGE = `http://43.239.221.117:20892`;

export const avaUriHelper = (uri: string) => {
  if (!uri || uri === '') {
    return defaultAvaUri;
  } else {
    return `${SOCKETIO_SERVER_URL_PROFILE_IMAGE}${uri}`;
  }
};
