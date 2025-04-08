var tipuesearch = {"pages": [{'title': 'About', 'text': '41023215 \n 課程名稱: 協同產品設計實習 - Collaborative Product Design Practice \n 學員作業網站:  https://mdecd2025.github.io/hw-41023215/ \n 學員作業倉儲:  https://github.com/mdecd2025/hw-41023215 \n \n 課程代號: cd2025 \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入 \xa0 https://login.microsoftonline.com/ \xa0 Office 365 \n Teams 團隊代碼:\xa0 p5z4eku \n \n 課程評分: \n Homework (30%) - 每週至少提交兩次與課程進度有關的內容, 完成後填回自評表單 \n Exam (40%) - 建立包含操作流程影片、心得以及提供檔案下載的網頁後填回自評表單 \n Final Report (30%) - 利用網頁內容進行簡報並提交 pdf 格式書面報告, 完成後填回自評表單 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Tasks', 'text': 'task1 與 task2 任務目的在建立可於近端維護個人作業與協同作業的準備工作: \n task1 (自行製作可攜程式系統) \n task2 (使用 SSH 協定執行作業倉儲的推送) \n task3 與 task4 則為 HW2 的內容之一 \n task3 (使用 Solvespace 建立平面四連桿系統零組件) \n task4 (使用 Onshape 建立平面四連桿系統零組件) \n task5 與 task6 則為 HW3 的主要內容 \n task5 (Webots Tutorial 1 ~3) \n task6 (Webots Tutorial 4 ~6) \n', 'tags': '', 'url': 'Tasks.html'}, {'title': 'Task1', 'text': '自行製作可攜程式系統 \n 利用\xa0C:\\Portable_2023_fall 啟動舊版的可攜程式環境, 目的是要藉由舊版的 Python 執行\xa0 gen_p3132.py , 取得基本的 Python 後, 修改 start.bat, 以 Python313 啟動可攜. \n 之後利用 Python 3.13.2 在命令列執行 \xa0 get-pip.py , 以便安裝 pip.exe. \n 之後利用新版的 SciTE, Portablegit, PUTTY, ShareX, Wink 以及原有的 tmp 及 home_ipv6, 以新的 \xa0 start.bat \xa0 啟動. \n 以下為操作影片, 各學員可以採用上學期的 Python 3.10 或 C: 中的 Python 3.11 舊系統自製 Python 3.13.2 為主的新可攜程式環境. \n Python 3.13.2 \n Putty 0.83 \n \n', 'tags': '', 'url': 'Task1.html'}, {'title': 'list', 'text': '列出 2b 學員作業網站與倉儲連結 \n 列出 2b 分組網站與倉儲連結 \n 2b IPv6 port 8000 連線列表 \xa0( 列出無法連線學員 ) \n 組員個人網站: \n 41023215： https://mdecd2025.github.io/hw-41023215/ \n 41023216： https://mdecd2025.github.io/hw-41023216/ \n 41023213： https://mdecd2025.github.io/hw-41023213/ \n 41071203： https://mdecd2025.github.io/hw-41071203/ \n 41071204： https://mdecd2025.github.io/hw-41071204/ \n 41071202： https://mdecd2025.github.io/hw-41071202/ \n \n 組員個人 倉儲： \n 41023215 ： https://github.com/mdecd2025/hw-41023215 \n 41023216 ： https://github.com/mdecd2025/hw-41023216 \n 41023213 ： https://github.com/mdecd2025/hw-41023213 \n 41071203 ： https://github.com/mdecd2025/hw-41071203 \n 41071204 ： https://github.com/mdecd2025/hw-41071204 \n 41071202 ： https://github.com/mdecd2025/hw-41071202 \n \n', 'tags': '', 'url': 'list.html'}, {'title': 'Task2', 'text': '使用 SSH 協定執行作業倉儲的推送 \n SSH \xa0 是一種加密的網路傳輸協定, PuTTY 則是可用於 Windows 環境的 SSH 協定工具, 其中支援遠端登入 (putty.exe) 與檔案傳輸工具 (psftp.exe). \n 使用 PuTTY 所建立的公私鑰進行 Github push 認證的步驟: \n 第一步: \n 若希望在 Windows 環境透過 git 指令, 使用 PuTTY 設定的 session (一個代表連線伺服器主機、私鑰位置與是否使用代理主機等資訊的字串), 執行 push, 必須要在啟動可攜環境時, 設定 GIT_SSH 環境變數, 將此變數指向 PuTTY 套件中的 plink.exe 位置 (也就是 set GIT_SSH=%Disk%:\\putty\\plink.exe). \n 第二步: \n 指定利用 PuTTY 的 SSH session 執行 git push 後, 必須在 Windows 操作系統中選擇一個字串, 作為 SSH 連線 session 名稱, 由於此設定必須指向 SSH 協定加密用的私鑰所在目錄位置, 因此設定 session 之前, 必須利用 puttygen.txt 建立一對公私鑰, 其中的公鑰為 OpenSSH 格式, 必須送到使用者 Github 帳號設定區 (Settings) 的 SSH and GPG keys 中. \n 第三步: \n 利用 puttygen.exe 建立公私鑰的方法, 是在執行 puttygen.exe 之後, 以滑鼠按下 Generate 之後, 讓滑鼠在 puttgen.exe 視窗中 key 下方的空白區域隨意移動, puttygen.exe 會根據滑鼠移動的位置隨機建立 OpenSSH 格式的公鑰, 以及配對的 PuTTY 格式的 Private Key (副檔名為 .ppk) \n 第四步: \n 接下來, 將 OpenSSH 格式的 Public Key 內容複製到個人 Github 帳號設定區的 SSH and GPG keys 中, 並以 puttygen.exe 執行視窗右下方的 Save private key 按鈕, 將私鑰 (假設為 myprivatekey.ppk) 存至 Y:\\. \n 第五步: \n 接著啟動 PuTTY 中的 putty.exe, 在 Host Name (or IP Address) 欄位填入 github.com, 並確認 Connection Type 選用 SSH, 表示要透過 SSH 加密協定連線到 github.com. \n 第六步: \n 接著在 putty.exe 視窗下方的 Saved Sessions 填入一組字串, 此字串就是之後要遠端登入 github.com 設定 push 連線 URL 的 session 名稱, 在此假設選擇 "mysession" 作為 session 名稱, 使用者可以自行選擇具有代表性的字串, 例如: 學號或簡短的英文姓名縮寫. \n 第七步: \n 在 putty.exe 視窗中填入 github.com 與 "mysession" 名稱之後, 點擊 Save 之後, 此 session 設定就會被 Windows 操作系統存入該台電腦的 Registry 登錄檔案中的 HKEY_CURRENT_USER - SOFTWARE - SimonTatham 所在組態區. 此時可以在命令列中輸入 regedit 後進入登錄檔查看是否 mysession 已經存在. \n 第八步: \n 上列 "mysession" 設定完成且按下 Save 之後, 若再按下 Open, 採用 IPv4 網路連線的電腦應該已經可以透過 putty.exe 遠端連線至 github.com, 視窗中會出現 github.com 作為視窗標題, 且內容為 login as: 但一般使用者並沒有帳號可以直接透過 putty.exe 遠端登入到 github.com, 而只能在 session 設定完成後, 利用此 session 執行 git push. \n 第九步: \n 由於前面的 "mysession" 雖然已經存入 Windows 操作系統的登錄檔, 但並沒有設定 private key 的位置, 因此接下來要再開啟 putty.exe, load 進此一 session, 然後在此 session 設定左方的 Category: 下方的 Connection - SSH - Auth - Credentials 設定中的 Private key file for authentication: 區, 利用 Browse 選擇位於 Y:\\ 的 myprivatekey.ppk 檔案. 選擇檔案完成後, 必須再回到 Catetory: 下方的 Session 區, 以右方的 Save 將附加私鑰位置設定的 session 存檔. 此時 Windows 登錄檔中的 "mysession" 除了代表要使用 SSH 連線到 github.com 之外, 還附帶指定了 myprivatekey.ppk 在 Y:\\ 的位置. \n 第十步: \n 若上述設定是在電腦輔助設計室中的電腦進行, 必須利用命令列 regedit 指令, 進入 HKEY_CURRENT_USER - SOFTWARE - SimonTatham 位置, 利用滑鼠右鍵將此登錄設定檔案"匯出" 存入可攜程式 start_ipv6.bat 所在目錄, 此處假設命名為 mysession.reg, 使用者可以自行對 .reg 命名. \n 第十一步: \n 由於上列的 myprivatekey.ppk 存於可攜程式中的 Y:\\, 因此當使用者利用 start_ipv6.bat 啟動可攜程式後, 就可以利用滑鼠雙點擊位於同目錄的 mysession.reg, 上述的 "mysession" 設定就會存入 Windows 操作系統的登錄檔中. \n 使用 PuTTY session 設定倉儲 .git/config 中的 URL \n 假設上列 "mysession" 對應中的 OpenSSH 格式公鑰是送到 Github 帳號為 scrum-1 學員的 SSH and GPG key 區域, 則 scrum-1 學員在啟動可攜系統後, 已經雙點擊 mysession.reg, 將前述 putty.exe 設定的 session 組態登錄設定回存至 Windows 操作系統中, 則 scrum-1 學員就可以將其近端作業倉儲中的 mysession 用於倉儲 .git/config 檔案的下方設定: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n [remote  "origin" ] \n \xa0\xa0\xa0\xa0 url = git@mysession:mdecd2025/hw-scrum-1.git \n \xa0\xa0\xa0\xa0 fetch = +refs/heads/:refs/remotes/origin/ \n \n \n \n \n \n \n \n 其中的 [remote "origin"] 表示當使用 git 指令中針對此倉儲 "origin" 是一個與遠端倉儲對應的字串代號, 代表其下兩項設定. url 代表此 "origin" 的倉儲連線網址, 而連線至此倉儲的協定是採遠端登入 (使用 Github 支援的 SSH 遠端登入協定), 且此遠端登入的帳號為 "git", 這是所有要使用 SSH 執行 git push 的用戶共同使用的登入帳號. \n url 設定中 "@" 之後的 "mysession" 就是宣告要使用此電腦登錄檔中所設定的 session 名稱 (代表要連線到 github.com, 且帶的 myprivatekey.ppk, 準備在登入流程中與 github.com 中 mdewcm2025 帳號下的 hw-scrum-1 倉儲擁有者 (或帶有 repo 管理權限的帳號) 所登錄的 public keys 進行認證比對, 一旦通過認證, git push 指令就可以成功將改版資料推送到指定的倉儲區域. \n', 'tags': '', 'url': 'Task2.html'}, {'title': 'w3', 'text': '列出 2a 學員作業網站與倉儲連結 \n 列出 2b 學員作業網站與倉儲連結 \n 列出 2a 分組網站與倉儲連結 \n 列出 2b 分組網站與倉儲連結 \n \n 請列出各班目前尚未納入分組的學員名單. \n 透過下列程式: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n \n \n \n import   os \n # pip install pygithub \n from   github  import   Github \n # the following is under IPv6 \n # Replace these variables with your own details \n GITHUB_TOKEN  =   \'your_token\' \n ORG_NAME  =   \'mdecd2025\' \n PROXY  =   \'http://p4.cycu.org:3128\' \n \xa0 \n def   get_all_team_members_starting_with_a(org_name, token, proxy): \n \xa0\xa0\xa0\xa0 # Set proxy environment variables \n \xa0\xa0\xa0\xa0 os.environ[ \'http_proxy\' ]  =   proxy \n \xa0\xa0\xa0\xa0 os.environ[ \'https_proxy\' ]  =   proxy \n \xa0 \n \xa0\xa0\xa0\xa0 # Initialize Github object \n \xa0\xa0\xa0\xa0 g  =   Github(token) \n \xa0\xa0\xa0\xa0 all_members  =   [] \n \xa0 \n \xa0\xa0\xa0\xa0 try : \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # Get organization \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 org  =   g.get_organization(org_name) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # Get all teams \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 teams  =   org.get_teams() \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   team  in   teams: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   team.name.lower().startswith( \'g\' ): \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print (f "Processing team: {team.name}" ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # List members \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 members  =   team.get_members() \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 for   member  in   members: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 all_members.append(member.login) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print (f "Login: {member.login}, ID: {member.id}, URL: {member.html_url}" ) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print ( "\\nAll members:" , all_members) \n \xa0\xa0\xa0\xa0 except   Exception as e: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print (f "An error occurred: {e}" ) \n \xa0 \n if   __name__  = =   "__main__" : \n \xa0\xa0\xa0\xa0 get_all_team_members_starting_with_a(ORG_NAME, GITHUB_TOKEN, PROXY) \n \n \n \n \n \n \n \n 已知各班已經參與分組的學員 Github 帳號分別如下: \n \n \n \n \n \n \n 1 \n 2 \n \n \n \n a_all_members  =   [ \'41223154\' ,  \'41271125\' ,  \'41271158\' ,  \'41271146\' ,  \'41271131\' ,  \'CYG41223103\' ,  \'41223102\' ,  \'41023128\' ,  \'41023137\' ,  \'41223137\' ,  \'41223157\' ,  \'41223156\' ,  \'otakuyoyo\' ,  \'41223141\' ,  \'41223113\' ,  \'kim41223114\' ,  \'joeisme1208\' ,  \'41223116\' ,  \'41223144\' ,  \'41223140\' ,  \'41223143\' ,  \'41223138\' ,  \'41223134\' ,  \'41223136\' ,  \'zhe41223118\' ,  \'Spirit0224\' ,  \'yuhao-08\' ,  \'41223158\' ,  \'Ren911308\' ,  \'41223150\' ,  \'Manto8\' ,  \'CYA41223106\' ,  \'yan21ed\' ,  \'Lin41223107\' ,  \'41223133\' ,  \'hong41223129\' ,  \'41223110\' ,  \'41223147\' ,  \'Linjiahong41223125\' ,  \'CHN41223132\' ,  \'Yu-Fang-Hong\' ,  \'41023111\' ,  \'yckaooooo\' ,  \'kolas911205\' ,  \'41023105\' ,  \'40932134\' ,  \'41223104\' ,  \'yan41223101\' ,  \'41223105\' ,  \'41223153\' ,  \'41223120\' ,  \'41223152\' ,  \'G8People\' ,  \'WSE41223112\' ,  \'41223146\' ,  \'41223119\' ] \n b_all_members  =   [ \'41223251\' ,  \'41223211\' ,  \'41223245\' ,  \'41223243\' ,  \'jjjay41223212\' ,  \'leeshaowei0716\' ,  \'41223234\' ,  \'41223209\' ,  \'41223205\' ,  \'41223201\' ,  \'41223202\' ,  \'41223208-hw\' ,  \'41223216\' ,  \'41223217\' ,  \'41223248\' ,  \'emma0312\' ,  \'41223242\' ,  \'41223203\' ,  \'41223144\' ,  \'41223235\' ,  \'RAY41223215\' ,  \'hyy41223228\' ,  \'41223227\' ,  \'41223206\' ,  \'41223226-0\' ,  \'Cloud41223237\' ,  \'Yujenchuang\' ,  \'41223225\' ,  \'ljg41223220\' ,  \'supowen\' ,  \'jacky93111\' ,  \'41223246\' ,  \'Liu41223244\' ,  \'41223236\' ,  \'41223219\' ,  \'41271237\' ,  \'41223249\' ,  \'41223229\' ,  \'41223224\' ,  \'41223222\' ,  \'41223231\' ,  \'linryan23\' ,  \'41023114\' ,  \'41223230\' ,  \'timluo123\' ,  \'CYC41223247\' ,  \'41223218\' ,  \'ych0227\' ,  \'41023215\' ,  \'41023216\' ,  \'41023213\' ,  \'41071203\' ,  \'41071204\' ,  \'41071202\' ,  \'c-ching\' ,  \'YUN4\' ,  \'tseYU000\' ,  \'snowfall-killer\' ,  \'junpig10\' ] \n \n \n \n \n \n \n \n 請接著列出目前各班尚未納組的學員學號. \n 首先看能否從 list\\2a.txt \xa0 讀出學員的學號與 github 帳號 : \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n \n \n \n # 建立 url 變數與網站中 2a 學員的學號與帳號資料 URL 網誌字串對應 \n url  =   "https://mde.tw/list/2a.txt" \n # 利用 open() 物件中的 readlines() 方法, 取出網站中的資料並逐行放入數列中, 因此 data 的資料型別為數列 \n data  =   open (url).readlines() \n # 進行資料查驗時, 印出 data 數列內容 \n #print(data) \n # 因為學員資料中的第一列為標題, 因此有效資料從索引值 1 開始 \n all_stud  =   data[ 1 :] \n # 確定已經取得 2a.txt 中的學號與 github 帳號資料 \n #print(all_stud) \n # 利用 for 迴圈逐一列出各學員的單行資料 \n # 已知各行資料是以 \\n 跳行, 可以設法先刪除每一筆資料最後的跳行符號 \n for   i  in   all_stud: \n \xa0\xa0\xa0\xa0 #print(i) \n \xa0\xa0\xa0\xa0 drop_n  =   i.rstrip( "\\n" ) \n \xa0\xa0\xa0\xa0 # 確定每一行最後的跳行符號已經移除 \n \xa0\xa0\xa0\xa0 #print(drop_n, end="") \n \xa0\xa0\xa0\xa0 # 設法利用學號與帳號間的 "\\t" 將資料隔開 \n \xa0\xa0\xa0\xa0 stud  =   drop_n.split( "\\t" ) \n \xa0\xa0\xa0\xa0 #print(stud) \n \xa0\xa0\xa0\xa0 stud_num  =   stud[ 0 ] \n \xa0\xa0\xa0\xa0 stud_github  =   stud[ 1 ] \n \xa0\xa0\xa0\xa0 print ( "學號為 " , stud_num,  " 的學員, 其 Github 帳號為 " , stud[ 1 ]) \n \n \n \n \n \n \n \n 只要在迴圈中加入下列判斷式: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n #print("學號為 ", stud_num, " 的學員, 其 Github 帳號為 ", stud[1]) \n if   stud_github  not   in   a_all_members: \n \xa0\xa0\xa0\xa0 print (stud_num) \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'Task3', 'text': '使用 Solvespace 建立平面四連桿系統零組件 (HW2) \n', 'tags': '', 'url': 'Task3.html'}, {'title': 'Task4', 'text': '原先想法: \n 因為隨後可以透過比對取得尚未納組的學員 Github 帳號, 且必須設法從其 Github 帳號, 取得其對應學號, 因此若能從上列程式設法建立一個 Dict, 支援輸入 Github\xa0 帳號可以回覆其對應學號, 就可以順利找出目前尚未納組的學員學號. 另外是否也必須查驗是否有學員加入錯誤的班級組別? \n 實際解法: \n 因為上列程式已經給出兩班當時已經參與分組的學員 Github 帳號, 因此只需要從 \xa0 https://mde.tw/list/2b.txt \xa0讀取學員的學號與 Github 帳號, 並且在 for 迴圈中, 逐一用學員的 Github 帳號相對於各班已經參與分組的學員 Github 帳號, 並且列出特定學員的 Github 帳號不在前述已經參與分組的學員帳號數列中, 即可列出截至當時尚未那組的學員學號. \n', 'tags': '', 'url': 'Task4.html'}, {'title': 'w5', 'text': '', 'tags': '', 'url': 'w5.html'}, {'title': 'Task5', 'text': 'Webots Tutorial 1 ~3 (HW3) \n', 'tags': '', 'url': 'Task5.html'}, {'title': 'w7', 'text': '', 'tags': '', 'url': 'w7.html'}, {'title': 'Task6', 'text': 'Webots Tutorial 4 ~6 (HW3) \n', 'tags': '', 'url': 'Task6.html'}, {'title': 'Homework', 'text': '作業 (30%) \n HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n part1: \n 請各學員在 USB 隨身碟或個人電腦上完成 cd2025 課程所需的可攜系統配置: \n 下載  portable_wcm2025.7z  (330MB, 解開壓縮後 1.4GB) \n Webots_2025a.7z  (1.5 GB, 解開後約為 2.9GB, 可單獨運作) \n Webots_2025a_web.7z  (171 MB, 解開壓縮後約為 1GB, 必須連網運作) \n Blender4.2.7z \n part2: \n 請各學員完成可攜程式系統配置後, 利用 Webots R2025a 中寬度與高度都為 0.1m 的 box 物件建立一個簡單的平面四連桿機構模擬場景. \n base (基座) 長度 1m, link1 長度 0.4m, link2 長度 0.6m, link3 長度 0.9m, 各轉軸均為 HingeJoint, joint1 旋轉速度設定為 1radian/sec. \n part3: \n 模擬場景啟動後, 按下 s 鍵機構開始作動, 按下 p 鍵後機構暫停. \n 參考資料: \n cd2025_hw1_demo.7z \n HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 各學員請利用 CAD 系統依據 HW1 的連桿尺寸與運動方式, 配置適當大小的旋轉軸以及基座後, 利用 Webots R2025a 完成一個簡單的平面四連桿機構模擬場景. \n 參考資料: \n fourbar_slvs.7z \n HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 請各分組利用CAD 系統建立一個能在電腦桌 (1600W X 700D X 740H mm) 上運作的投籃機構 ( 參考影片 )後, 導入 Webots R2025a 套件, 建立一個能由使用者透過鍵盤按鍵操作, 且具備計分板的籃球遊戲機模擬系統. \n 參考資料: \n 參考資料: \n fourbar_ball_throwing_linkage.slvs \n sixbar_ball_throwing_linkage.slvs \n \n', 'tags': '', 'url': 'Homework.html'}, {'title': 'HW1', 'text': 'HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW1 - 學員學號 \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': 'HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW2 - 學員學號 \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW3 - 學員學號 \n \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Midterm', 'text': '本課程所繳交的期中成績為學員自評之學習期望成績. \n 期中考週的自評期望成績繳交流程: \n \n 整理先前所完成的各週的進度、作業網頁內容以及心得 \n 拍攝期中自評影片, 上傳至 Youtube 後, 以" 國立虎尾科技大學 - 機械設計工程系 - cd2025 期中自評- 學員學號 "為影片標題後嵌入本頁面中 \n 回填期中自評表單 \n 上傳學員期中成績 \n \n 各週進度: \n 各週網頁內容: \n 期中心得: \n 期中自評影片: \n \n \n', 'tags': '', 'url': 'Midterm.html'}, {'title': 'Exam', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 各學員利用 Webots R2025a 套件中的 Shape 物件, 隨堂建立指定的機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam2 (10%): 利用 CAD 零組件建立模擬場景\xa0 \n 各學員利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam3 (20%): Webots 機電模擬場景的協同設計 \n 各分組利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. 過程中各學員必須採同步協同模式, 維護從 Github Classroom 取得的分組協同倉儲以及網站. \n 協同分組方式: \n \n 分配學員負責利用 Solvespace 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 NX2312 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 Webots 建立機電系統模擬場景, 並利用 Python 程式進行控制, 過程中必須將建構過程拍成帶有說明字幕的影片上傳至分組網頁. \n \n', 'tags': '', 'url': 'Exam.html'}, {'title': 'Exam1', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam1 - 學員學號 \n', 'tags': '', 'url': 'Exam1.html'}, {'title': 'Exam2', 'text': 'Exam2 (10%): 利用 CAD 零組件建立模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam2 - 學員學號 \n', 'tags': '', 'url': 'Exam2.html'}, {'title': 'Exam3', 'text': 'Exam3 (20%): Webots 機電模擬場景的協同設計 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam3 - 學員學號 \n', 'tags': '', 'url': 'Exam3.html'}, {'title': 'Final', 'text': '期末協同專案執行過程影片、簡報與 PDf 報告檔案 (六人一組) (30%) \n 題目:  Webots 動態投籃模擬系統的協同設計 \n 說明:  \n 籃框架被配置在一定範圍內, 可隨機慢速前進、後退及左右擺動, 投籃機構系統帶有一定數量的籃球, 被配置在可自由移動的輪車上. \n 操作者可利用鍵盤特定按鍵控制投籃輪車的移動並發射投籃, 每投出一球後系統透過記分板進行計分, 並由送球機構進行補球或移動輪車取球, 遊戲可進行至全部數量籃球投完為止. \n 請將期末協同專案執行過程、內容與心得, 製作成影片，配合字幕上傳至 Youtube 後嵌入各階段的期末報告頁面中. \n 影片標題:  國立虎尾科技大學 - 機械設計工程系 - cd2025 期末報告 - 學員學號 - 各階段影片主題 \n', 'tags': '', 'url': 'Final.html'}, {'title': 'Brython', 'text': '1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};