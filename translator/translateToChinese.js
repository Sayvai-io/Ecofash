const translationCache = {};
export const fetchTranslation = async (query) => {
  const baseUrl = "https://api.mymemory.translated.net/get";
  const params = new URLSearchParams({
    q: query,
    langpair: "en|zh",
  });

  const url = `${baseUrl}?${params.toString()}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.responseData.translatedText;
};

export const getTranslation = async (query) => {
  if (translationCache[query]) {
    return translationCache[query];
  } else {
    const translatedText = await fetchTranslation(query);

    translationCache[query] = translatedText;
    return translatedText;
  }
};
