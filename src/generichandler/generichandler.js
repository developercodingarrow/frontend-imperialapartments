// GENERIC HANDLER FOR SEND ONLY DATA
export const newgenericDataHandler = (
  sendDataFunction,
  settoggleState,
  toggleState
) => {
  return async (data) => {
    try {
      const result = await sendDataFunction(data);
      console.log(result);
      settoggleState(!toggleState);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

// GENERIC HANDLER FOR SEND DATA AND OPTIONAL UrlToken
export const genericSlugDataHandler = (
  getDataByParam,
  settoggleState,
  toggleState
) => {
  return async (slug, data) => {
    try {
      const result = await getDataByParam(slug, data);
      settoggleState(!toggleState);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

// GENERIC HANDLER FOR SEND DATA AND OPTIONAL UrlToken
export const genericDeleteHandler = (
  actionhandel,
  settoggleState,
  toggleState
) => {
  return async (slug, data) => {
    try {
      const result = await actionhandel(requestData);
      settoggleState(!toggleState);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};
