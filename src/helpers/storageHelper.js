import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * A function that will save given object under given key
 * @param {object} object - An object that needs to be saved in storage
 * @param {string} key - A string key the object should be saved under
 * @param {string} errorText - A string that will be displayed if something goes wrong
 */
export const storeObject = async (
  object,
  key,
  errorText = "There was an error while trying to save"
) => {
  try {
    const jsonObj = JSON.stringify(object);
    await AsyncStorage.setItem(key, jsonObj);
  } catch (e) {
    alert(errorText);
  }
};

/**
 * A function that will return an object saved under given key or null if none was found
 * @param {string} key - A string key that desired object should be saved under
 * @param {string} errorText - A string that will be displayed if something goes wrong
 * @returns Object under given key or null if none was found
 */
export const getObject = async (key, errorText) => {
  try {
    const jsonVal = await AsyncStorage.getItem(key);
    return jsonVal != null ? JSON.parse(jsonVal) : null;
  } catch (e) {
    alert(errorText);
  }
};
