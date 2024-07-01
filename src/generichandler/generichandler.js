// GENERIC HANDLER FOR SEND ONLY DATA
export const newgenericDataHandler = (
  sendDataFunction,
  settoggleState,
  toggleState
) => {
  return async (data) => {
    try {
      const result = await sendDataFunction(data);
      settoggleState(!toggleState);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};
