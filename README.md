# Hahow-project


## Demo
[Demo Website](https://lennonx0904.github.io/hahow-project/#/)

## 執行方式
1. 將專案 clone 至本機端
```
git clone https://github.com/lennonx0904/hahow-project.git
```
2. 安裝相關套件
```
yarn
```
3. 於 localhost:3000 運行
```
yarn start
```

## 專案架構、Web 架構
![image](https://github.com/lennonx0904/hahow-project/blob/master/image/project-structure.png?raw=true)

## 第三方套件
* styled-components:
著名的 CSS-in-JS library，使用 Hash 方式產生 classname，不用擔心重複命名，且在 component 中可立即管理樣式。提供變數帶入樣式功能，可利用 props 更改樣式。
* axios:
處理非同步網路請求的套件，使用上與 JavaScript 的 fetch 差異並不會太大，但可以讓 code 寫起來更簡潔。
* Redux:
Redux 中的 store 負責集中管理 state。好處是 MVC 的分離：model 集中由 store 管理，actions 和 reducers 負責 controll，React 本身僅負責 view。
* react-redux:
負責連結 React 及 Redux。
* redux-thunk:
處理非同步的 middleware。
* moxios:
撰寫非同步 actions 測試使用的套件，用來模擬發送網路請求。

## 註解原則
* 在較複雜的 function 中，解釋其功能、使用情境及參數意義。
* 需要 refactor 的時候。
* 說明變數資料結構，以便團隊共同維護。

## 遇到的困難、問題、解決方法
* HeroList 不能 rerender 的問題依舊沒有解決，嘗試過以下方法：
    1. 一開始直接在每張 HeroCard 上使用 `react-router-dom` 提供的 `<Link>`，連結至`heroes/:heroID`。
    2. 使用 `Context` 管理使用者點選的 `currentHeroId`，然而在同一個 Context 的 Provider 下，只要有 state 更新，child components 都會 rerender。
    3. 嘗試改用 `Redux`，在不更改 URL 的情況下，確實不會 rerender。不過一但使用 `history.push`，還是無法避免。 
* 第一次使用 `styled-components`，一開始還不熟悉如何控制動態的樣式變化，透過閱讀文件及查詢網路相關資訊才慢慢上手。
* 第一次撰寫非同步請求的測試，使用`moxios`模擬網路請求，透過網路影片及閱讀文件學習。
