// export interface IArticle {
//     id: number
//     title: string
//     body: string
//   }
  

// export type ArticleState = {
//     articles: IArticle[]
//     // playList: any
//   }

export type PlayListState = {
  playList : any
}
  
export type PlayListAction = {
  type:string
  playList : any
}
// export type ArticleAction = {
//     type: string
//     article: IArticle
//   }
  
  export type DispatchType = (args: PlayListAction) => PlayListAction
  // export  type DispatchType = (args: ArticleAction) => ArticleAction