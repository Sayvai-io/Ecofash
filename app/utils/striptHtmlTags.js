export const stripHTMLTags = (str) => {
  const updated = str.replace(/<\/?[^>]+(>|$)/g, "");

  return updated;
};
