"use client"

import { useEffect, useState } from "react";

export const useThemeSwitch = () => {
  const [theme, setTheme] = useState("dark");

  // this is a CSS media feature to detect the user's preference via their OS or user agent settings
  const preferDarkQuery = "(prefers-color-schema:dark)";
  // track this in the user's local storage
  const storageKey = "theme";

  // if there is no dark class, the theme is light
  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  }

  // if the user has a preference set (dark / light), return that theme
  const getUserPreference = () => {
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref;
    }
    // otherwise check the state of the media query applied to the document
    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  };

  useEffect(() => {
    // check the system preference
    const mediaQuery = window.matchMedia(preferDarkQuery);
    
    const handleChange = () => {
      const newTheme = getUserPreference();
      setTheme(newTheme);
      // toggle the new theme class
      toggleTheme(newTheme);
    };

    handleChange();

    // listen for a manual toggle for the theme using the button
    mediaQuery.addEventListener("change", handleChange);

    // remove the event listener right away
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    toggleTheme(theme)
  }, [theme])

  return [theme, setTheme]
}