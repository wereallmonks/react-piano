export const  KeyboardShortcuts = (keyboardMap, note) => {
    const shortcuts = Object.keys(keyboardMap);
    return shortcuts.filter(short => keyboardMap[short] === note);
  }