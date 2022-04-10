const handleFetch = (resolve, reject) => {
  return {
    xthen: (response) => {
      if (!response) {
        return;
      }

      const contentType = response.headers["content-type"];
      const contentDisp = response.headers["content-disposition"];
      const isJson = /(application|text)\/json/.test(contentType);
      const isAttachment = /attachment/.test(contentDisp);
      const isPlainText = /text\/plain/.test(contentType);

      // Handling non successful situations
      if (response.status != "200" && response.status != "202") {
        if (isJson) {
          throw response.json();
        }
        throw Error(message.unknown_response);
      }

      if (isAttachment) {
        response.blob().then((blob) => {
          resolve(blob);
        });
        return;
      }

      if (isJson || isPlainText || response.data instanceof Blob) {
        resolve(response.data);
      }

      resolve(true);
    },
    xsthen: (response) => {
      resolve(response);
    },
    xcatch: (errorResponse) => {
      if (errorResponse && errorResponse.then) {
        errorResponse.then((errJson) => {
          return reject(errJson.errorMsg || JSON.stringify(errJson));
        });
      } else if (errorResponse.response && errorResponse.response.data) {
        return reject(errorResponse.response.data);
      } else {
        return reject("Unknown error response from connector");
      }
      return true;
    },
  };
};

export default handleFetch;
