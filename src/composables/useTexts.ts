import { ref, computed } from "vue";
import { useRoute } from "vue-router";

interface HeaderTexts {
  home: string;
  services: string;
  contact: string;
}

interface FormTexts {
  form: string;
  name: string;
  lastName: string;
  email: string;
  message: string;
  placeholderName: string;
  placeholderLastName: string;
  placeholderEmail: string;
  placeholderMessage: string;
  btnSend: string;
}

interface LanguageTexts {
  español: string;
  english: string;
}

interface TitleTexts {
  home: string;
  services: string;
  contact: string;
}

interface Texts {
  [key: string]: any;
  headerEspañol?: HeaderTexts;
  headerEnglish?: HeaderTexts;
  formEspañol?: FormTexts;
  formEnglish?: FormTexts;
  headerLanguage?: LanguageTexts;
  titles?: {
    spanish: TitleTexts;
    english: TitleTexts;
  };
  messageContact?: {
    spanish: string;
    english: string;
  };
  footerEspañol?: string;
  footerEnglish?: string;
}

const texts = ref<Texts>({});
const isLoaded = ref(false);

export const useTexts = () => {
  const route = useRoute();

  const currentLang = computed(() => route.meta.lang || "es");

  const loadTexts = async () => {
    if (isLoaded.value) return;

    try {
      const response = await fetch("/texts.json");
      texts.value = await response.json();
      isLoaded.value = true;
    } catch (error) {}
  };

  const getText = (key: string, subkey?: string) => {
    if (!isLoaded.value) return "";

    const langSuffix = currentLang.value === "es" ? "Español" : "English";
    const textKey = key + langSuffix;

    if (subkey) {
      return texts.value[textKey]?.[subkey] || "";
    }

    return texts.value[textKey] || "";
  };
  const getHeaderTexts = (): HeaderTexts => {
    const langKey =
      currentLang.value === "es" ? "headerEspañol" : "headerEnglish";
    return texts.value[langKey] || { home: "", services: "", contact: "" };
  };

  const getFormTexts = (): FormTexts => {
    const langKey = currentLang.value === "es" ? "formEspañol" : "formEnglish";
    return (
      texts.value[langKey] || {
        form: "",
        name: "",
        lastName: "",
        email: "",
        message: "",
        placeholderName: "",
        placeholderLastName: "",
        placeholderEmail: "",
        placeholderMessage: "",
        btnSend: "",
      }
    );
  };

  const getFooterText = (): string => {
    const langKey =
      currentLang.value === "es" ? "footerEspañol" : "footerEnglish";
    return texts.value[langKey] || "";
  };

  const getLanguageTexts = (): LanguageTexts => {
    return texts.value.headerLanguage || { español: "", english: "" };
  };

  const getMessageContact = (): string => {
    const langKey = currentLang.value === "es" ? "spanish" : "english";
    return texts.value.messageContact?.[langKey] || "";
  };

  const getTitles = (): TitleTexts => {
    const langKey = currentLang.value === "es" ? "spanish" : "english";
    return (
      texts.value.titles?.[langKey] || { home: "", services: "", contact: "" }
    );
  };

  return {
    currentLang,
    isLoaded,
    loadTexts,
    getText,
    getHeaderTexts,
    getFormTexts,
    getFooterText,
    getLanguageTexts,
    getMessageContact,
    getTitles,
  };
};
