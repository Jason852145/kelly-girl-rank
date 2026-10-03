# 部署到 GitHub Pages（網頁上傳版）

完成後的網址：`https://jason852145.github.io/17live-vote-rank/`

## Step 1：建立 repo
1. 登入 github.com（帳號 Jason852145）
2. 右上角 **+** → **New repository**
3. Repository name：`17live-vote-rank`
4. 選 **Public**（免費帳號的 GitHub Pages 只能用在 public repo）
5. 其他選項都不要勾（不要加 README，我們自己有）
6. 按綠色 **Create repository**

## Step 2：上傳檔案
1. 解壓 `17live-vote-rank.zip`
2. 在新 repo 頁面點 **uploading an existing file**
3. 把解壓後資料夾**裡面的全部內容**（index.html、bookmarklet.html、README.md、build.py、src 資料夾）拖進去
   - 不要拖外層資料夾本身，不然網址會多一層
4. 下方 Commit changes 按綠色 **Commit changes**

## Step 3：開啟 GitHub Pages
1. repo 上方 **Settings** → 左側 **Pages**
2. Source 選 **Deploy from a branch**
3. Branch 選 **main**、資料夾 **/(root)** → **Save**
4. 等 1–2 分鐘，重新整理 Pages 設定頁，上方會出現網址

## 之後要更新
在 repo 點檔案 → 右上鉛筆圖示編輯，或再用 **Add file → Upload files** 覆蓋同名檔案。Pages 約 1 分鐘後更新。
