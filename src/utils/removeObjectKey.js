export const removeObjectKey = (object, keyToRemove) => {
  let newObject = object;
  delete newObject[keyToRemove];
  return newObject;
};

export const removeObjectKeys = (object, keysToRemove) => {
  let newObject = object;
  for (let i = 0; i < keysToRemove.length; i++) {
    delete newObject[keysToRemove[i]];
  }
  return newObject;
};
