# guangneng_RN_Lesson24


echo "# guangneng-RN-Lesson24" >> README.md
##1，git init
git add README.md
##2,git commit -m "first commit"
git remote add origin git@github.com:sgn5200/guangneng-RN-Lesson24.git
git push -u origin master
…or push an existing repository from the command line

git remote add origin git@github.com:sgn5200/guangneng-RN-Lesson24.git
##3,git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

Import code

---------------------------
####5037为adb默认端口，若5037端口被占用，
查看占用端口的进程PID
######C:\Users\wwx229495>netstat -aon|findstr 5037
  TCP    127.0.0.1:5037         0.0.0.0:0              LISTENING       3676
------------------------------------

###通过PID查看所有进程
#####C:\Users\wwx229495>tasklist /fi "PID eq 3676"
-----------------------------------

映像名称                       PID 会话名              会话#       内存使用
svchost.exe                   3676 Services                   0     13,800 K

----------------------------
###杀死占用端口的进程
#####C:\Users\wwx229495>taskkill /pid 3676 /f
成功: 已终止 PID 为 3676 的进程。
