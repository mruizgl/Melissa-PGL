import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as rssParser from 'react-native-rss-parser';

const FEED_URL = 'https://www.xataka.com/feedburner.xml';

export type Article = rssParser.FeedItem;

interface NewsContextProps {
  articles: Article[];
  readArticles: Set<string>;
  markAsRead: (link: string) => void;
}

export const NewsContext = createContext<NewsContextProps>({
  articles: [],
  readArticles: new Set(),
  markAsRead: () => {},
});

export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [readArticles, setReadArticles] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(FEED_URL);
        const parsed = await rssParser.parse(response.data);
        setArticles(parsed.items);
        await AsyncStorage.setItem('articles', JSON.stringify(parsed.items));
      } catch (error) {
        const cachedArticles = await AsyncStorage.getItem('articles');
        if (cachedArticles) {
          setArticles(JSON.parse(cachedArticles));
        }
      }
    };

    const loadReadArticles = async () => {
      const storedReadArticles = await AsyncStorage.getItem('readArticles');
      if (storedReadArticles) {
        setReadArticles(new Set(JSON.parse(storedReadArticles)));
      }
    };

    fetchArticles();
    loadReadArticles();
  }, []);

  const markAsRead = (link: string) => {
    setReadArticles((prev) => {
      const updated = new Set(prev);
      updated.add(link);
      AsyncStorage.setItem('readArticles', JSON.stringify([...updated]));
      return updated;
    });
  };

  return (
    <NewsContext.Provider value={{ articles, readArticles, markAsRead }}>
      {children}
    </NewsContext.Provider>
  );
};
