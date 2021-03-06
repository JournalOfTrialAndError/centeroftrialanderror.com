import { IJOTEArticleCategory } from "./jote-article-category";
import { IJOTEAuthor } from "./jote-author";

/**
 * Model definition for JOTE Article
 */
export interface IJOTEArticle {
  id: string;
  title?: string;
  abstract?: string;
  published?: Date;
  submitted?: Date;
  accepted?: Date;
  jote_authors?: IJOTEAuthor[];
  image?: Blob;
  jote_article_category?: IJOTEArticleCategory;
  doi: string;
  references?: { [key: string]: any };
  webflowId?: string;
  updateId?: string;
}
